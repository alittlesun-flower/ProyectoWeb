@extends("layouts.master") 
@section('contenido')
<div class="row mt-5">
    <div class="col-12 col-md-12 col-lg-6 mx-auto">
        <table class="table table-hover table-bordered table-striped table-responsive">
            <thead class="bg-info">
                <tr>
                    <td>Nombre</td>
                    <td>Dirección</td>
                    <td>Nombre de la comuna</td>
                    <td>Cantidad de edificios</td>
                    <td>Accion 1</td>
                    <td>Accion 2</td>
                </tr>
            </thead>
            <tbody id="tbody-condominio">

            </tbody>
        </table>
    </div>
</div>
<div class="d-none">
    <div class="row mt-5 molde-actualizarCon">
            <div class="mb-3">
                <label for="nomcondominio-txt" class="form-label">Nombre del condominio</label>
                <input type="text" class="form-control nomcondominio-txt">
            </div>
            <div class="mb-3">
                <label for="direccioncondominio-txt" class="form-label">Direccion del condominio</label>
                <input type="text" class="form-control direccioncondominio-txt">
            </div>
            <div class="mb-3">
                <label for="comuna-txt" class="form-label">Nombre de la comuna donde está ubicada</label>
                <input type="text" class="form-control comuna-txt">
            </div>
            <div class="mb-3">
                <label for="cantidad-num" class="form-label">Cantidad de edificios</label>
                <input type="number" class="form-control cantidad-num">
            </div>  
            <div class="d-grid gap-1">
                <button  class="btn btn-info actualizarCon-btn">Actualizar</button>
            </div>
        </div>
    </div>
</div>     
@endsection

@section('javascript')
    <script src="{{asset('js/servicios/condominiosService.js')}}"></script>
    <script src="{{asset('js/verCondominio.js')}}"></script>     
@endsection