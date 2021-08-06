<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
    <title>Proyecto WEB</title>
  </head>
    <body>
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-info">
                <div class="container-fluid">
                    <a class="navbar-brand" href="{{route('home')}}"><img class="logo" src="{{asset('img/edificio.png')}}" alt=""></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" href="{{route('agregarAdministrador')}}">Añadir administrador</a>
                            <a class="nav-link" href="{{route('agregarCondominio')}}">Añadir condominio</a>
                            <a class="nav-link" href="{{route('agregarResidente')}}">Añadir residente</a>
                            <a class="nav-link" href="{{route('agregarEdificio')}}">Añadir edificio</a>
                            <a class="nav-link" href="{{route('verAdministrador')}}">Ver administrador</a>
                            <a class="nav-link" href="{{route('verCondominios')}}">Ver condominio</a>
                            <a class="nav-link" href="{{route('verResidentes')}}">Ver residentes</a>
                            <a class="nav-link" href="{{route('verEdificios')}}">Ver edificios</a>

                        </div>
                    </div>
                </div>
            </nav>

        </header>

        <main class="container-fluid">
            @yield("contenido")
        </main>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
        <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        @yield('javascript')
    </body>
</html>

