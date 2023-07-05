<template>
    <form action="">
        <div class="celular text-center">
            <h3 class="celular-title mb-3">Postula y obtén un 10% de descuento en el programa</h3>
            <input class="form-control mb-3 celular-input" type="text" placeholder="NOMBRE">
            <input class="form-control mb-3 celular-input" type="text" placeholder="CELULAR">
            <input class="form-control mb-3 celular-input" type="text" placeholder="CORREO ELECTRÓNICO">
            <select class="form-select mb-3 celular-input" aria-label="Selección de programa">
                <option selected :value="null">--SELECCIONE--</option>
                <option v-for="(programaEspecializacion, i) in programasEspecializacion" :key="i"
                    :value="programaEspecializacion.id">
                    {{ programaEspecializacion.nombreEspecializacion }}
                </option>
            </select>
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

<script setup>
import { storeToRefs } from 'pinia';
import { useHomeStore } from '@/stores'

const homeStore = useHomeStore();

let { programasEspecializacion } = storeToRefs(homeStore);
homeStore.getListadoProgramasEspecializacion();

</script>

<style lang="scss" scoped>
.btn {
    background-color: $color-morado;
}

.celular {
    &-title {
        @include defineFont($fuente_poppins, medium, 16px)
    }

    &-input {
        height: 50px !important;
        @include defineFont($fuente_roboto, medium, 12px)
    }

    &-check-politicas {
        @include defineFont($fuente_roboto, medium, 12px)
    }

    button {
        height: 50px !important;
        @include defineFont($fuente_poppins, bold, 14px)
    }
}
</style>