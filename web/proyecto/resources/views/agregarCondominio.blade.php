@extends("layouts.master")

@section('contenido')
<div class="row">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
        <div class="card">
            <div class="card-header bg-info text-black">
                <span>Agregar Condominio</span>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="nomcondominio-txt" class="form-label">Nombre del condominio</label>
                    <input type="text" id="nomcondominio-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="direccioncondominio-txt" class="form-label">Direccion del condominio</label>
                    <input type="text" id="direccioncondominio-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="comuna-txt" class="form-label">Nombre de la comuna donde está ubicada</label>
                    <input type="text" id="comuna-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="cantidad-num" class="form-label">Cantidad de edificios</label>
                    <input type="number" id="cantidad-num" class="form-control">
                </div>  
            </div>
            <div class="card-footer d-grid gap-1">
                <button id="regcond-btn" class="btn btn-info">Registrar condominio</button>
            </div>
        </div>
    </div>
</div>      
@endsection

@section('javascript')
    <script src="{{asset('js/agregarCondominio.js')}}"></script>
    <script src="{{asset('js/servicios/condominiosService.js')}}"></script>    
@endsection