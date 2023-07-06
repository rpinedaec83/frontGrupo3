<template>
    <Form @submit="onSubmit" :validation-schema="schema" :initial-values="informacionFormulario"
        v-slot="{ errors, isSubmitting }">
        <div class="celular text-center">
            <h3 class="celular-title mb-3">Postula y obtén un 10% de descuento en el programa</h3>
            <div class="form-group mb-3">
                <Field name="nombre" class="form-control celular-input" type="text" placeholder="NOMBRE"
                    :class="{ 'is-invalid': errors.nombre }" />
                <div class="invalid-feedback text-start">{{ errors.nombre }}</div>
            </div>
            <div class="form-group mb-3">
                <Field name="celular" class="form-control celular-input" type="text" placeholder="CELULAR"
                    :class="{ 'is-invalid': errors.celular }" />
                <div class="invalid-feedback text-start">{{ errors.celular }}</div>
            </div>
            <div class="form-group mb-3">
                <Field name="correoElectronico" class="form-control celular-input" type="text"
                    placeholder="CORREO ELECTRÓNICO" :class="{ 'is-invalid': errors.correoElectronico }" />
                <div class="invalid-feedback text-start">{{ errors.correoElectronico }}</div>
            </div>
            <div class="form-group mb-3">
                <Field name="programaEspecializacion" as="select" class="form-select celular-input"
                    :class="{ 'is-invalid': errors.programaEspecializacion }">
                    <option value="">--SELECCIONE--</option>
                    <option v-for="(programaEspecializacion, i) in programasEspecializacion" :key="i"
                        :value="programaEspecializacion.id">
                        {{ programaEspecializacion.nombreEspecializacion }}
                    </option>
                </Field>
                <div class="invalid-feedback text-start">{{ errors.programaEspecializacion }}</div>
            </div>
            <div class="form-check text-start mb-5">
                <Field name="politicaPrivacidad" class="form-check-input mt-1" type="checkbox" id="politicaPrivacidad"
                    :class="{ 'is-invalid': errors.politicaPrivacidad }" :value="true" />
                <label class="celular-check-politicas form-check-label" for="politicaPrivacidad">
                    Acepto las Políticas de privacidad.
                </label>
                <div class="invalid-feedback text-start">{{ errors.politicaPrivacidad }}</div>
            </div>
            <div class="d-flex align-items-end">
                <button class="btn btn-primary w-100" :disabled="isSubmitting">
                    <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
                    Quiero postular
                </button>
            </div>
        </div>
    </Form>
</template>

<script setup>
import { ref } from 'vue';
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
import { storeToRefs } from 'pinia';
import { useHomeStore } from '@/stores'
import Swal from 'sweetalert2'

let informacionFormulario = ref(null);

const homeStore = useHomeStore();

let { programasEspecializacion } = storeToRefs(homeStore);
homeStore.getListadoProgramasEspecializacion();

const schema = Yup.object().shape({
    nombre: Yup.string()
        .required('El Nombre es requerido'),
    celular: Yup.string()
        .required('El Apellido es requerido'),
    correoElectronico: Yup.string()
        .email('El correo debe tener un formato correcto. Ejm: ejemplo@test.com')
        .required('El correo es requerido'),
    programaEspecializacion: Yup.string()
        .required('El programa de especialización es requerido'),
    politicaPrivacidad: Yup.string()
        .required('Debe aceptar la política de privacidad')
});

async function onSubmit(values) {
    console.log(values);
    try {
        Swal.fire({
            icon: 'success',
            text: `Se envió la postulación correctamente`
        })
    } catch (error) {
        Swal.fire({
            icon: 'error',
            text: `Sucedió un error inesperado: ${error}`
        })
    }
}

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

    .invalid-feedback {
        font-size: 0.8rem !important;
    }
}
</style>