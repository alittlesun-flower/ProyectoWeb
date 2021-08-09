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
                    <td>Accion 1</td>
                    <td>Accion 2</td>
                </tr>
            </thead>
            <tbody id="tbody-residente">

            </tbody>
        </table>
    </div>
</div>
<div class="d-none">
    <div class="row mt-5 molde-actualizarRe">
            <div class="mb-3">
                <label for="rutRe-txt" class="form-label">Rut</label>
                <input type="text" class="form-control rutRe-txt">
            </div>
            <div class="mb-3">
                <label for="propietario-select" class="form-label">¿Es propietario?</label>
                <select class="form-select propietario-select" type="text">
                    <option value="Si">Si</option>
                    <option value="No">No</option>  
                </select>  
            </div>
            <div class="mb-3">
                <label for="nombreRe-txt" class="form-label">Nombre</label>
                <input type="text" class="form-control nombreRe-txt">
            </div>
            <div class="mb-3">
                <label for="re-email" class="form-label">Email</label>
                <input type="email" class="form-control re-email">
            </div>
            <div class="mb-3">
                <label for="re-num" class="form-label">Telefono de contacto</label>
                <input type="number" class="form-control re-num">
            </div>
            <div class="mb-3">
                <label for="estacionamiento-select" class="form-label">¿Posee estacionamiento?</label>
                <select class="form-select estacionamiento-select" type="text">
                    <option value="Si">Si</option>
                    <option value="No">No</option>  
                </select>  
            </div> 
            <div class="d-grid gap-1">
                <button  class="btn btn-info actualizarRe-btn">Actualizar</button>
            </div>
        </div>
    </div>
</div>     
@endsection

@section('javascript')
    <script src="{{asset('js/servicios/residentesService.js')}}"></script>
    <script src="{{asset('js/verResidente.js')}}"></script>
@endsection