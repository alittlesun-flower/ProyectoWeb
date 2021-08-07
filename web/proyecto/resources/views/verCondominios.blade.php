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
                    <td>Acciones</td>
                </tr>
            </thead>
            <tbody id="tbody-condominio">

            </tbody>
        </table>
    </div>
</div>    
@endsection

@section('javascript')
    <script src="{{asset('js/servicios/condominiosService.js')}}"></script>
    <script src="{{asset('js/verCondominio.js')}}"></script>     
@endsection