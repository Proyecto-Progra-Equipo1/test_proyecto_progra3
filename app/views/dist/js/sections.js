// Sistema de Secciones Dinámicas - Hotel Brisa del Pacífico
document.addEventListener('DOMContentLoaded', function() {
  const sectionLinks = document.querySelectorAll('[data-section-link]');
  
  // Títulos de cada sección
  const sectionTitles = {
    'section-calendar': 'Calendario de Reservas',
    'section-graphics': 'Gráficos y Análisis',
    'section-kpi': 'Indicadores KPI'
  };

  // Mostrar sección al hacer click
  sectionLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const sectionId = this.getAttribute('data-section-link');
      showSection(sectionId);
      updatePageTitle(sectionId);
      
      // Actualizar estilo del enlace activo
      sectionLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Función para mostrar/ocultar secciones
  function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    
    sections.forEach(section => {
      if (section.id === sectionId) {
        section.classList.remove('d-none');
        section.classList.add('d-block');
      } else {
        section.classList.add('d-none');
        section.classList.remove('d-block');
      }
    });
  }

  // Actualizar el título de la página
  function updatePageTitle(sectionId) {
    const title = sectionTitles[sectionId] || 'Dashboard';
    const titleElement = document.getElementById('section-title');
    const breadcrumbElement = document.getElementById('breadcrumb-title');
    
    if (titleElement) {
      titleElement.textContent = title;
    }
    if (breadcrumbElement) {
      breadcrumbElement.textContent = title;
    }
  }

  // Mostrar la sección por defecto (calendario)
  showSection('section-calendar');
  updatePageTitle('section-calendar');
  
  // Marcar el primer enlace como activo
  const firstLink = document.querySelector('[data-section-link="section-calendar"]');
  if (firstLink) {
    firstLink.classList.add('active');
  }
});
