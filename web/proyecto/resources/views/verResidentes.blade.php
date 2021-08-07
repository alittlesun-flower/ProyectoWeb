@extends("layouts.master") 
@section('contenido')
<div class="row mt-5">
    <div class="col-12 col-md-12 col-lg-6 mx-auto">
        <table class="table table-hover table-bordered table-striped table-responsive">
            <thead class="bg-info">
                <tr>
                    <td>Rut</td>
                    <td>¿Es propietario?</td>
                    <td>Nombre</td>
                    <td>Email</td>
                    <td>Teléfono de contacto</td>
                    <td>¿Posee estacionamiento?</td>
                    <td>Acciones</td>
                </tr>
            </thead>
            <tbody id="tbody-residente">

            </tbody>
        </table>
    </div>
</div>     
@endsection

@section('javascript')
    <script src="{{asset('js/servicios/residentesService.js')}}"></script>
    <script src="{{asset('js/verResidente.js')}}"></script>
@endsection