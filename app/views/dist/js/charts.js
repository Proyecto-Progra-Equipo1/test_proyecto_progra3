console.log("Chart.js cargado:", typeof Chart);

setTimeout(() => {
    $(document).ready(function () {
      "use strict";

      // GRÁFICO 1: VENTAS
      try {
        const salesCtx = document.getElementById("salesChart");
        if (salesCtx) {
          new Chart(salesCtx.getContext("2d"), {
            type: "bar",
            data: {
              labels: [
                "Ene",
                "Feb",
                "Mar",
                "Abr",
                "May",
                "Jun",
                "Jul",
                "Ago",
                "Sep",
                "Oct",
                "Nov",
                "Dic",
              ],
              datasets: [
                {
                  label: "Ingresos ($)",
                  data: [
                    32000, 28000, 38000, 41000, 45000, 50000, 62000, 68000,
                    48000, 42000, 38000, 44000,
                  ],
                  backgroundColor: "rgba(60, 141, 188, 0.8)",
                  borderColor: "#3c8dbc",
                  borderWidth: 1,
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { display: false } },
              scales: { y: { beginAtZero: true } },
            },
          });
          console.log("✓ Gráfico 1 (ventas) creado");
        }
      } catch (e) {
        console.error("Error gráfico 1:", e);
      }

      // GRÁFICO 2: DISTRIBUCIÓN DE INGRESOS
      try {
        const distCtx = document.getElementById("distributionChart");
        if (distCtx) {
          new Chart(distCtx.getContext("2d"), {
            type: "doughnut",
            data: {
              labels: [
                "Habitaciones",
                "Restaurante",
                "Eventos",
                "Spa",
                "Otros",
              ],
              datasets: [
                {
                  data: [55, 20, 12, 8, 5],
                  backgroundColor: [
                    "#3c8dbc",
                    "#00a65a",
                    "#f39c12",
                    "#d73925",
                    "#6c757d",
                  ],
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              cutout: "60%",
              plugins: { legend: { position: "bottom" } },
            },
          });
          console.log("✓ Gráfico 2 (distribución) creado");
        }
      } catch (e) {
        console.error("Error gráfico 2:", e);
      }

      // GRÁFICO 3: TENDENCIA
      try {
        const trendCtx = document.getElementById("trendChart");
        if (trendCtx) {
          new Chart(trendCtx.getContext("2d"), {
            type: "line",
            data: {
              labels: [
                "Sem 1",
                "Sem 2",
                "Sem 3",
                "Sem 4",
                "Sem 5",
                "Sem 6",
                "Sem 7",
                "Sem 8",
                "Sem 9",
                "Sem 10",
                "Sem 11",
                "Sem 12",
              ],
              datasets: [
                {
                  label: "Ocupación (%)",
                  data: [65, 70, 68, 75, 80, 78, 85, 90, 88, 82, 76, 79],
                  borderColor: "#00a65a",
                  backgroundColor: "rgba(0, 166, 90, 0.1)",
                  fill: true,
                  tension: 0.4,
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { position: "top" } },
            },
          });
          console.log("✓ Gráfico 3 (tendencia) creado");
        }
      } catch (e) {
        console.error("Error gráfico 3:", e);
      }

      // GRÁFICO 4: CANALES DE RESERVACIÓN
      try {
        const channelCtx = document.getElementById("channelChart");
        if (channelCtx) {
          new Chart(channelCtx.getContext("2d"), {
            type: "pie",
            data: {
              labels: [
                "Directo (Web)",
                "Agencia",
                "Booking.com",
                "Expedia",
                "Otro",
              ],
              datasets: [
                {
                  data: [40, 25, 20, 10, 5],
                  backgroundColor: [
                    "#3c8dbc",
                    "#00a65a",
                    "#f39c12",
                    "#d73925",
                    "#6c757d",
                  ],
                  borderWidth: 2,
                  borderColor: "#fff",
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { position: "right" } },
            },
          });
          console.log("✓ Gráfico 4 (canales) creado");
        }
      } catch (e) {
        console.error("Error gráfico 4:", e);
      }

      //Grafico 5: Ocupacion de habitaciones
      const roomCtx = document.getElementById("roomChart").getContext("2d");

      new Chart(roomCtx, {
        type: "bar",
        data: {
          labels: ["Estándar", "Superior", "Suite", "Suite presidencial"],
          datasets: [
            {
              label: "Ocupación (%)",
              data: [92, 78, 65, 45],
              backgroundColor: ["#3c8dbc", "#00a65a", "#f39c12", "#605ca8"],
              borderWidth: 0,
              borderRadius: 4,
            },
          ],
        },
        options: {
          indexAxis: "y",
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
          },
          scales: {
            x: {
              min: 0,
              max: 100,
              ticks: {
                callback: (value) => value + "%",
              },
            },
          },
        },
      });
    });
  }, 500);

