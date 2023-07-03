<template>
    <form action="">
        <div class="text-center">
            <h3 class="celular-title mb-3">Postula y obtén un 10% de descuento en el programa</h3>
            <input class="form-control mb-3" type="text" placeholder="NOMBRE">
            <input class="form-control mb-3" type="text" placeholder="CELULAR">
            <input class="form-control mb-3" type="text" placeholder="CORREO ELECTRÓNICO">
            <input class="form-control mb-3" type="text" placeholder="PROGRAMA">
            <div class="form-check text-start mb-5">
                <input class="form-check-input mt-1" type="checkbox" id="disabledFieldsetCheck">
                <label class="celular-check-politicas form-check-label" for="disabledFieldsetCheck">
                    Acepto las Políticas de privacidad.
                </label>
            </div>
            <div class="d-flex align-items-end">
                <button class="btn btn-primary w-100">Quiero postular</button>
            </div>
        </div>
    </form>
</template>

<style lang="scss" scoped>
    .btn {
        background-color: $color-morado;
    }
</style>