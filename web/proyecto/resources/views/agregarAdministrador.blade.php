@extends("layouts.master") 
@section('contenido')
    <div class="row">
        <div class="col-12 col-md-6 col-lg-5 mx-auto">
            <div class="card">
                <div class="card-header bg-info text-black">
                    <span>Agregar administrador</span>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="rut-txt" class="form-label">Rut</label>
                        <input type="text" id="rut-txt" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label for="nombre-txt" class="form-label">Nombre</label>
                        <input type="text" id="nombre-txt" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label for="adm-email" class="form-label">Email</label>
                        <input type="email" id="adm-email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label for="adm-num" class="form-label">Telefono de contacto</label>
                        <input type="number" id="adm-num" class="form-control">
                    </div>  
                </div>
                <div class="card-footer d-grid gap-1">
                    <button id="regadm-btn" class="btn btn-info">Registrar administrador</button>
                </div>
            </div>
        </div>
    </div>    
@endsection

@section('javascript')
    
@endsection