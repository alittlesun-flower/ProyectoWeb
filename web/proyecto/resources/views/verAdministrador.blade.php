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
                    <td>Acciones</td>
                </tr>
            </thead>
            <tbody id="tbody-administrador">

            </tbody>
        </table>
    </div>
</div>    
@endsection

@section('javascript')
    
@endsection