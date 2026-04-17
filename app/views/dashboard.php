<!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Admin | Hotel</title>

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="dist/css/adminlte.min.css">
  <!-- FullCalendar CSS -->
  <link href="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.10/index.global.min.css" rel="stylesheet">
  <!-- FullCalendar Theme -->
  <link href="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.10/index.global.css" rel="stylesheet">
</head>

<body class="hold-transition sidebar-mini">
  <div class="wrapper">

    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="./home.html" class="nav-link">Inicio</a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="./contact.html" class="nav-link">Contacto</a>
        </li>
      </ul>

      <!-- Right navbar links -->
      <ul class="navbar-nav ml-auto">
        <!-- Navbar Search -->
        <li class="nav-item">
          <a class="nav-link" data-widget="navbar-search" href="#" role="button">
            <i class="fas fa-search"></i>
          </a>
          <div class="navbar-search-block">
            <form class="form-inline">
              <div class="input-group input-group-sm">
                <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
                <div class="input-group-append">
                  <button class="btn btn-navbar" type="submit">
                    <i class="fas fa-search"></i>
                  </button>
                  <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>

        <!-- Messages Dropdown Menu -->
        <li class="nav-item dropdown">
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <a href="#" class="dropdown-item"></a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
          </div>
        </li>
        <!-- Notifications Menu -->
        <li class="nav-item dropdown">
          <a class="nav-link" data-toggle="dropdown" href="#">
            <i class="far fa-bell"></i>
            <span class="badge badge-warning navbar-badge">15</span>
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span class="dropdown-header">15 Notificaciones</span>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <i class="fas fa-envelope mr-2"></i> 4 nuevos mensajes
              <span class="float-right text-muted text-sm">3 mins</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <i class="fas fa-users mr-2"></i> 8 solicitudes de amistad
              <span class="float-right text-muted text-sm">12 hours</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <i class="fas fa-file mr-2"></i> 3 nuevos informes
              <span class="float-right text-muted text-sm">2 days</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item dropdown-footer">Ver todas las notificaciones</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-widget="fullscreen" href="#" role="button">
            <i class="fas fa-expand-arrows-alt"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
            <i class="fas fa-th-large"></i>
          </a>
        </li>
      </ul>
    </nav>
    <!-- /.navbar -->

    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Logo Hotel -->   
      <a href="./home.html" class="brand-link">
        <i class="fas fa-hotel me-2 text-primary"></i>
        <span class="brand-text font-weight-light">Hotel Brisa del Pacífico</span>
      </a>

      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="info">
            <a href="#" class="d-block">Bienvenido, Administración</a>
          </div>
        </div>

        <!-- Buscador -->
        <div class="form-inline">
          <div class="input-group" data-widget="sidebar-search">
            <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
            <div class="input-group-append">
              <button class="btn btn-sidebar">
                <i class="fas fa-search fa-fw"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column">

            <!-- SECCIÓN PRINCIPAL -->
            <li class="nav-header">PRINCIPAL</li>

            <li class="nav-item">
              <a href="#" data-section-link="section-calendar" class="nav-link active">
                <i class="nav-icon fas fa-calendar-alt"></i>
                <p>Calendario</p>
              </a>
            </li>

            <li class="nav-item">
              <a href="#" data-section-link="section-graphics" class="nav-link">
                <i class="nav-icon fas fa-chart-bar"></i>
                <p>Gráficos</p>
              </a>
            </li>

            <li class="nav-item">
              <a href="#" data-section-link="section-kpi" class="nav-link">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>Indicadores KPI</p>
              </a>
            </li>
          </ul>
        </nav>
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0" id="section-title">Calendario de Reservas</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="./home.html">Inicio</a></li>
                <li class="breadcrumb-item active" id="breadcrumb-title">Calendario</li>
              </ol>
            </div><!-- /.col -->
          </div><!-- /.row -->
        </div><!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->

      <!-- Main content -->
      <div class="content">
        <div class="container-fluid">

          <!-- SECCIÓN 1: KPI -->
          <div id="section-kpi" class="content-section d-none">
            <!-- Row 1: KPIs Básicos -->
            <div class="row">
              <div class="col-lg-3 col-6">
                <div class="info-box bg-warning">
                  <span class="info-box-icon">
                    <i class="fas fa-tag"></i>
                  </span>
                  <div class="info-box-content">
                    <span class="info-box-text">Habitaciones Disponibles</span>
                    <span class="info-box-number">28</span>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-6">
                <div class="info-box bg-success">
                  <span class="info-box-icon">
                    <i class="fas fa-heart"></i>
                  </span>
                  <div class="info-box-content">
                    <span class="info-box-text">Reservas Activas</span>
                    <span class="info-box-number">12</span>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-6">
                <div class="info-box bg-danger">
                  <span class="info-box-icon">
                    <i class="fas fa-calendar-check"></i>
                  </span>
                  <div class="info-box-content">
                    <span class="info-box-text">Check-ins Hoy</span>
                    <span class="info-box-number">5</span>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-6">
                <div class="info-box bg-info">
                  <span class="info-box-icon">
                    <i class="fas fa-comments"></i>
                  </span>
                  <div class="info-box-content">
                    <span class="info-box-text">Mensajes Directos</span>
                    <span class="info-box-number">8</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- /.row -->

            <!-- Row 2: KPIs Financieros -->
            <div class="row mt-4">
              <div class="col-lg-3 col-6">
                <div class="info-box bg-primary">
                  <span class="info-box-icon">
                    <i class="fas fa-dollar-sign"></i>
                  </span>
                  <div class="info-box-content">
                    <span class="info-box-text">Ingresos Totales Mes</span>
                    <span class="info-box-number">$45.8K</span>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-6">
                <div class="info-box bg-secondary">
                  <span class="info-box-icon">
                    <i class="fas fa-sign-out-alt"></i>
                  </span>
                  <div class="info-box-content">
                    <span class="info-box-text">Check-outs Programados</span>
                    <span class="info-box-number">8</span>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-6">
                <div class="info-box" style="background-color: #dc3545;">
                  <span class="info-box-icon">
                    <i class="fas fa-times-circle"></i>
                  </span>
                  <div class="info-box-content">
                    <span class="info-box-text">Cancelaciones Mes</span>
                    <span class="info-box-number">2</span>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-6">
                <div class="info-box" style="background-color: #17a2b8;">
                  <span class="info-box-icon">
                    <i class="fas fa-chart-line"></i>
                  </span>
                  <div class="info-box-content">
                    <span class="info-box-text">ADR (Tarifa Promedio)</span>
                    <span class="info-box-number">$185.50</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- /.row -->

            <!-- Row 3: Métricas -->
            <div class="row mt-4">
              <!-- Satisfacción de Clientes -->
              <div class="col-lg-6 col-md-12">
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">Satisfacción de Clientes</h3>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6">
                        <div style="text-align: center;">
                          <h5><i class="fas fa-star" style="color: #ffc107;"></i> <strong>4.8/5.0</strong></h5>
                          <small class="text-muted">Basado en 125 reseñas</small>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div style="text-align: center;">
                          <h5 style="color: #28a745;"><strong>92%</strong></h5>
                          <small class="text-muted">Clientes Satisfechos</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Tiempo Promedio & Huéspedes Recurrentes -->
              <div class="col-lg-6 col-md-12">
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">Estadísticas de Huéspedes</h3>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6">
                        <div style="text-align: center;">
                          <h5><i class="fas fa-clock" style="color: #0066cc;"></i> <strong>12 min</strong></h5>
                          <small class="text-muted">Tiempo Promedio Check-in</small>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div style="text-align: center;">
                          <h5 style="color: #6f42c1;"><strong>34%</strong></h5>
                          <small class="text-muted">Huéspedes Recurrentes</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /.row -->

            <!-- Row 4: Barras de Progreso -->
            <div class="row mt-4">
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">Estado Operacional</h3>
                  </div>
                  <div class="card-body">
                    <!-- Cumplimiento de Limpieza -->
                    <div class="mb-4">
                      <div class="d-flex justify-content-between mb-2">
                        <label><i class="fas fa-broom" style="color: #6f42c1;"></i> Cumplimiento de Limpieza</label>
                        <span class="badge badge-success">98%</span>
                      </div>
                      <div class="progress">
                        <div class="progress-bar bg-success" role="progressbar" style="width: 98%" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>

                    <!-- Disponibilidad de Servicios -->
                    <div class="mb-4">
                      <div class="d-flex justify-content-between mb-2">
                        <label><i class="fas fa-concierge-bell" style="color: #17a2b8;"></i> Disponibilidad de Servicios</label>
                        <span class="badge badge-info">95%</span>
                      </div>
                      <div class="progress">
                        <div class="progress-bar bg-info" role="progressbar" style="width: 95%" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>

                    <!-- Quejas/Retroalimentación -->
                    <div class="mb-0">
                      <div class="d-flex justify-content-between mb-2">
                        <label><i class="fas fa-exclamation-circle" style="color: #dc3545;"></i> Resolución de Quejas</label>
                        <span class="badge badge-warning">81%</span>
                      </div>
                      <div class="progress">
                        <div class="progress-bar bg-warning" role="progressbar" style="width: 88%" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /.row -->
          </div>
          <!-- /.section-kpi -->

          <!-- SECCIÓN 2: GRÁFICOS -->
          <div id="section-graphics" class="content-section d-none">
            <!-- Row 1: Gráficos principales -->
            <div class="row">
              <!-- Gráfico 1: Ventas por Mes -->
              <div class="col-lg-6">
                <div class="card">
                  <div class="card-header border-0">
                    <h3 class="card-title">Gráfico de Ventas</h3>
                  </div>
                  <div class="card-body">
                    <canvas id="salesChart" height="250"></canvas>
                  </div>
                </div>
              </div>
              <!-- /.col-lg-6 -->

              <!-- Gráfico 2: Distribución -->
              <div class="col-lg-6">
                <div class="card">
                  <div class="card-header border-0">
                    <h3 class="card-title">Distribución de Ingresos</h3>
                  </div>
                  <div class="card-body">
                    <canvas id="distributionChart" height="250"></canvas>
                  </div>
                </div>
              </div>
              <!-- /.col-lg-6 -->
            </div>
            <!-- /.row -->

            <!-- Row 2: Gráfico de línea completo -->
            <div class="row mt-4">
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-header border-0">
                    <h3 class="card-title">Tendencia Trimestral</h3>
                  </div>
                  <div class="card-body">
                    <canvas id="trendChart" height="200"></canvas>
                  </div>
                </div>
              </div>
              <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->

            <!-- Row 3: Gráficos de Canales -->
            <div class="row mt-4">
              <div class="col-lg-6">
                <div class="card">
                  <div class="card-header border-0">
                    <h3 class="card-title">Canal de Reservas</h3>
                  </div>
                  <div class="card-body">
                    <canvas id="channelChart" height="250"></canvas>
                  </div>
                </div>
              </div>
              <!-- /.col-lg-6 -->

              <!-- Gráfico 4: Ocupación de Habitaciones -->
              <div class="col-lg-6">
                <div class="card">
                  <div class="card-header border-0">
                    <h3 class="card-title">Ocupación por Tipo de Habitación</h3>
                  </div>
                  <div class="card-body">
                    <canvas id="roomChart" style="height: 250px;"></canvas>
                  </div>
                </div>
              </div>
              <!-- /.col-lg-6 -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.section-graphics -->

          <!-- SECCIÓN 3: CALENDARIO -->
          <div id="section-calendar" class="content-section d-block">
            <div class="row">
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-header border-0">
                    <h3 class="card-title">
                      <i class="fas fa-calendar-alt mr-2"></i>Calendario de Reservas
                    </h3>
                  </div>
                  <div class="card-body" style="padding: 0;">
                    <div id="calendar" style="height: 600px; width: 100%;"></div>
                  </div>
                </div>
              </div>
              <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.section-calendar -->

        </div><!-- /.container-fluid -->
      </div>
      <!-- /.content -->
      <!-- /.content-wrapper -->

      <!-- Control Sidebar -->
      <aside class="control-sidebar control-sidebar-dark">
        <!-- Control sidebar content goes here -->
        <div class="p-3">
          <h5>Title</h5>
          <p>Sidebar content</p>
        </div>
      </aside>
      <!-- /.control-sidebar -->

      <!-- Main Footer -->
      <footer class="main-footer">
        <!-- To the right -->
        <div class="float-right d-none d-sm-inline">
          Anything you want
        </div>
        <!-- Default to the left -->
        <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
      </footer>
    </div>
    <!-- ./wrapper -->

    <!-- SCRIPTS -->

    <!-- jQuery -->
    <script src="plugins/jquery/jquery.min.js"></script>
    <!-- Bootstrap 4 -->
    <script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- AdminLTE App -->
    <script src="dist/js/adminlte.min.js"></script>
    <!-- FullCalendar JS -->
    <script src="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.10/index.global.min.js"></script>
    <!-- FullCalendar Locale ES -->
    <script src="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.10/locales/es.global.min.js"></script>
    <!-- ChartJS (de cdnjs) -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"></script>
    <!-- Custom Charts Script -->
    <script src="dist/js/charts.js?v=<?php echo time(); ?>"></script>
    <!-- Custom Calendar Script -->
    <script src="dist/js/calendar.js?v=<?php echo time(); ?>"></script>
    <!-- Sections Management Script -->
    <script src="dist/js/sections.js?v=<?php echo time(); ?>"></script>

</body>

</html>