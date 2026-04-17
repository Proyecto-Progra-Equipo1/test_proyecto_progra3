// Calendar Script - Hotel Brisa del Pacífico
console.log('✓ Calendar.js cargado');

let calendarInstance = null;

// Esperar a que DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  console.log('✓ DOM listo - inicio de carga del calendario');

  // Función para inicializar reservas de demostración
  function ensureDemoData() {
    const storageKey = 'hotel_reservations';
    try {
      const existing = localStorage.getItem(storageKey);
      const parsedExisting = existing ? JSON.parse(existing) : [];
      
      console.log('Reservas actuales en storage:', parsedExisting.length);
      
      // SIEMPRE crear las 2 reservas de demostración si no hay suficientes
      if (!existing || parsedExisting.length < 2) {
        const demoReservations = [
          {
            id: 1,
            guestName: 'Juan García',
            email: 'juan@example.com',
            phone: '+1234567890',
            checkIn: '2026-04-18',
            checkOut: '2026-04-21',
            roomType: 'Deluxe',
            adults: 2,
            children: 0,
            totalPrice: '$660'
          },
          {
            id: 2,
            guestName: 'María López',
            email: 'maria@example.com',
            phone: '+0987654321',
            checkIn: '2026-04-20',
            checkOut: '2026-04-25',
            roomType: 'Suite',
            adults: 1,
            children: 2,
            totalPrice: '$1500'
          }
        ];
        
        // Guardar en localStorage
        localStorage.setItem(storageKey, JSON.stringify(demoReservations));
        console.log('✓ Demo data guardada (2 reservas)');
        console.log('  - Juan García: 2026-04-18 al 2026-04-21');
        console.log('  - María López: 2026-04-20 al 2026-04-25');
        
        // Verificar que se guardaron
        const verify = localStorage.getItem(storageKey);
        const verifyData = JSON.parse(verify);
        console.log('✓ Verificación - Reservas en storage:', verifyData.length);
      }
    } catch (error) {
      console.error('✗ Error con localStorage:', error);
      // Intentar guardar de todas formas
      const demoReservations = [
        {
          id: 1,
          guestName: 'Juan García',
          email: 'juan@example.com',
          phone: '+1234567890',
          checkIn: '2026-04-18',
          checkOut: '2026-04-21',
          roomType: 'Deluxe',
          adults: 2,
          children: 0,
          totalPrice: '$660'
        },
        {
          id: 2,
          guestName: 'María López',
          email: 'maria@example.com',
          phone: '+0987654321',
          checkIn: '2026-04-20',
          checkOut: '2026-04-25',
          roomType: 'Suite',
          adults: 1,
          children: 2,
          totalPrice: '$1500'
        }
      ];
      localStorage.setItem('hotel_reservations', JSON.stringify(demoReservations));
    }
  }

  // Obtener eventos del localStorage
  function getCalendarEvents() {
    try {
      const data = localStorage.getItem('hotel_reservations');
      const reservations = data ? JSON.parse(data) : [];
      console.log('📅 getCalendarEvents() - Reservas en storage:', reservations.length);

      if (reservations.length === 0) {
        console.warn('⚠ No hay reservas en localStorage');
        return [];
      }

      const events = reservations.map((res, idx) => {
        console.log(`  [${idx}] ${res.guestName} - ${res.checkIn} a ${res.checkOut} (${res.roomType})`);
        
        return {
          title: `${res.roomType} - ${res.guestName}`,
          start: res.checkIn,
          end: res.checkOut,
          backgroundColor: getColorByRoom(res.roomType),
          borderColor: getColorByRoom(res.roomType),
          display: 'block',
          extendedProps: {
            guestName: res.guestName,
            roomType: res.roomType,
            email: res.email,
            phone: res.phone,
            adults: res.adults,
            children: res.children
          }
        };
      });

      console.log('✓ Eventos convertidos para FullCalendar:', events.length);
      return events;
    } catch (error) {
      console.error('✗ Error procesando reservas:', error);
      return [];
    }
  }

  // Colores por tipo de habitación
  function getColorByRoom(roomType) {
    const colors = {
      'Estándar': '#3498db',
      'Deluxe': '#9b59b6',
      'Suite': '#e74c3c',
      'Suite Premium': '#e67e22'
    };
    return colors[roomType] || '#3498db';
  }

  // Inicializar el calendario
  function renderCalendar() {
    const calendarEl = document.getElementById('calendar');
    if (!calendarEl) {
      console.warn('✗ Elemento #calendar no encontrado');
      return;
    }

    // Si ya existe, solo actualizar
    if (calendarInstance) {
      console.log('📅 Calendario ya existe, actualizando...');
      const events = getCalendarEvents();
      calendarInstance.removeAllEvents();
      if (events.length > 0) {
        calendarInstance.addEventSource(events);
      }
      return;
    }

    // Esperar a que FullCalendar esté disponible
    if (typeof FullCalendar === 'undefined') {
      console.warn('⚠ FullCalendar no disponible, esperando...');
      setTimeout(renderCalendar, 500);
      return;
    }

    console.log('🚀 Creando nuevo calendario FullCalendar...');
    const events = getCalendarEvents();
    console.log('📋 Total de eventos a mostrar:', events.length);

    try {
      calendarInstance = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'es',
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,listMonth'
        },
        contentHeight: 'auto',
        height: 'auto',
        events: events,
        eventDisplay: 'block',
        eventClick: function(info) {
          const e = info.event;
          const props = e.extendedProps;
          alert(`${e.title}\nHuésped: ${props.guestName}\nEmail: ${props.email}\nTeléfono: ${props.phone}`);
        }
      });

      calendarInstance.render();
      console.log('✅ Calendario renderizado con éxito - Eventos: ' + events.length);
    } catch (error) {
      console.error('✗ Error al crear calendario:', error);
    }
  }

  // Escuchar cuando se agrega una nueva reserva
  document.addEventListener('reservationAdded', function(e) {
    console.log('🔔 Nueva reserva agregada:', e.detail);
    if (calendarInstance) {
      const events = getCalendarEvents();
      calendarInstance.removeAllEvents();
      if (events.length > 0) {
        calendarInstance.addEventSource(events);
      }
      console.log('✓ Calendario actualizado con nueva reserva');
    }
  });

  // 1. Crear datos de demo
  ensureDemoData();

  // 2. Escuchar clicks en la barra lateral para renderizar cuando se vea
  const calendarLink = document.querySelector('[data-section-link="section-calendar"]');
  if (calendarLink) {
    calendarLink.addEventListener('click', function() {
      console.log('👆 Click en Calendario - renderizando...');
      setTimeout(renderCalendar, 300);
    });
  }

  // 3. Intentar renderizar después de 2 segundos
  setTimeout(function() {
    console.log('⏱ Intentando renderizar calendario (2 segundos después)...');
    renderCalendar();
  }, 2000);
});