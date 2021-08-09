@extends("layouts.master") 
@section('contenido')
<div class="row mt-5">
    <div class="col-12 col-md-12 col-lg-6 mx-auto">
        <table class="table table-hover table-bordered table-striped table-responsive">
            <thead class="bg-info">
                <tr>
                    <td>Dirección</td>
                    <td>Cantidad de pisos</td>
                    <td>Cantidad de departamentos</td>
                    <td>Letra del edificio</td>
                    <td>Accion 1</td>
                    <td>Accion 2</td>
                </tr>
            </thead>
            <tbody id="tbody-edificio">

            </tbody>
        </table>
    </div>
</div>
<div class="d-none">
    <div class="row mt-5 molde-actualizarEd">
            <div class="mb-3">
                <label for="direccion-txt" class="form-label">Dirección del edificio</label>
                <input type="text" class="form-control direccion-txt">
            </div>
            <div class="mb-3">
                <label for="cantidadPisos-txt" class="form-label">Cantidad de pisos</label>
                <input type="number" class="form-control cantidadPisos-txt">
            </div>
            <div class="mb-3">
                <label for="cantidadDepartamentos-txt" class="form-label">Cantidad de departamentos</label>
                <input type="number" class="form-control cantidadDepartamentos-txt">
            </div>
            <div class="mb-3">
                <label for="letra-txt" class="form-label">Letra del edificio</label>
                <input type="text" class="form-control letra-txt">
            </div>
            <div class="d-grid gap-1">
                <button  class="btn btn-info actualizarEd-btn">Actualizar</button>
            </div>
        </div>
    </div>
</div>     
@endsection

@section('javascript')
    <script src="{{asset('js/servicios/edificiosService.js')}}"></script>
    <script src="{{asset('js/verEdificio.js')}}"></script>
@endsection