@extends("layouts.master") 
@section('contenido')
<div class="row">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
        <div class="card">
            <div class="card-header bg-info text-black">
                <span>Agregar Residente</span>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="rutRe-txt" class="form-label">Rut</label>
                    <input type="text" id="rutRe-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="propietario-select" class="form-label">¿Es propietario?</label>
                    <select class="form-select" type="text" id="propietario-select">
                        <option value="Si">Si</option>
                        <option value="No">No</option>  
                    </select>  
                </div>
                <div class="mb-3">
                    <label for="nombreRe-txt" class="form-label">Nombre</label>
                    <input type="text" id="nombreRe-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="re-email" class="form-label">Email</label>
                    <input type="email" id="re-email" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="re-num" class="form-label">Telefono de contacto</label>
                    <input type="number" id="re-num" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="estacionamiento-select" class="form-label">¿Posee estacionamiento?</label>
                    <select class="form-select" type="text" id="estacionamiento-select">
                        <option value="Si">Si</option>
                        <option value="No">No</option>  
                    </select>  
                </div>  
            </div>
            <div class="card-footer d-grid gap-1">
                <button id="regresid-btn" class="btn btn-info">Registrar administrador</button>
            </div>
        </div>
    </div>
</div>       
@endsection

@section('javascript')
    
@endsection