@extends("layouts.master") 
@section('contenido')
<div class="row">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
        <div class="card">
            <div class="card-header bg-info text-black">
                <span>Agregar Edificio</span>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="direccion-txt" class="form-label">Dirección del edificio</label>
                    <input type="text" id="direccion-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="cantidadPisos-txt" class="form-label">Cantidad de pisos</label>
                    <input type="number" id="cantidadPisos-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="cantidadDepartamentos-txt" class="form-label">Cantidad de departamentos</label>
                    <input type="number" id="cantidadDepartamentos-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="letra-text" class="form-label">Letra del edificio</label>
                    <input type="text" id="letra-text" class="form-control">
                </div>
            </div>
            <div class="card-footer d-grid gap-1">
                <button id="regedif-btn" class="btn btn-info">Registrar edificio</button>
            </div>
        </div>
    </div>
</div>    
@endsection

@section('javascript')
    
@endsection