@extends("layouts.master") 
@section('contenido')
    <div class="row mt-5">
        <div class="col-12 col-md-12 col-lg-6 mx-auto">
            <table class="table table-hover table-bordered table-striped table-responsive">
                <thead class="bg-info">
                    <tr>
                        <td>Rut</td>
                        <td>Nombre</td>
                        <td>Email</td>
                        <td>Télefono de contacto</td>
                        <td>Accion 1</td>
                        <td>Accion 2</td>
                    </tr>
                </thead>
                <tbody id="tbody-administrador">

                </tbody>
            </table>
        </div>
    </div>   
    <div class="d-none">
        <div class="row mt-5 molde-actualizar">
                <div class="mb-3">
                    <label for="rut-txt" class="form-label">Rut</label>
                    <input type="text" class="form-control rut-txt">
                </div>
                <div class="mb-3">
                    <label for="nombre-txt" class="form-label">Nombre</label>
                    <input type="text" class="form-control nombre-txt">
                </div>
                <div class="mb-3">
                    <label for="adm-email" class="form-label">Email</label>
                    <input type="email" class="form-control adm-email">
                </div>
                <div class="mb-3">
                    <label for="adm-num" class="form-label">Telefono de contacto</label>
                    <input type="number" class="form-control adm-num">
                </div>  
                <div class="d-grid gap-1">
                    <button  class="btn btn-info actualizar-btn">Actualizar</button>
                </div>
            </div>
        </div>
    </div> 
@endsection

@section('javascript')
    <script src="{{asset('js/servicios/administradoresService.js')}}"></script>
    <script src="{{asset('js/verAdministrador.js')}}"></script>    
@endsection