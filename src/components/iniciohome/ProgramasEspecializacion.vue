<template>
    <div>
        <div class="d-flex mb-5">
            <h5 class="especializacion-titulo-principal me-3">Conoce nuestros Programas de Especialización</h5>
            <button v-if="isMediumScreen" type="button"
                class="btn btn-primary rounded-pill especializacion-boton-inscribete"><pencil-icon />Inscríbete</button>
        </div>
        <div class="container ps-0">
            <div class="row">
                <div v-for="programaEspecializacion in programasEspecializacion" :key="programaEspecializacion.id"
                    class="col-12 col-md-6 mb-5 p-0">
                    <div class="especializacion-background p-4 d-flex flex-column justify-content-end"
                        :style="{ backgroundImage: `url(${programaEspecializacion.imagenUrl})` }">
                        <h3 class="especializacion-titulo mb-3">{{ programaEspecializacion.nombreEspecializacion }}</h3>
                        <div v-if="programaEspecializacion.activo" class="d-flex especializacion-boton justify-content-end">
                            <boton-mas-icon class="me-2" />
                            <p>Ver más</p>
                        </div>
                        <p v-else class="d-flex especializacion-boton justify-content-end">Proximamente</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { BotonMasIcon, PencilIcon } from '@/components/icons';
import imgExample from '@/assets/img/image-example.png';

defineProps({
    isMediumScreen: {
        type: Boolean,
        required: true
    }
});

let programasEspecializacion = [
    {
        id: 1,
        nombreEspecializacion: 'Desarrollo Front-End',
        imagenUrl: imgExample,
        activo: true
    },
    {
        id: 2,
        nombreEspecializacion: 'Desarrollo Back-End',
        imagenUrl: imgExample,
        activo: true
    },
    {
        id: 3,
        nombreEspecializacion: 'Desarrollo de Aplicativos Móviles',
        imagenUrl: imgExample,
        activo: false
    },
    {
        id: 4,
        nombreEspecializacion: 'Diseño de Experiencia de Usuario',
        imagenUrl: imgExample,
        activo: true
    }
];


</script>
<style lang="scss" scoped>
.especializacion {
    &-titulo-principal {
        @include defineFont($fuente_poppins, bold, 20px);
    }

    &-background {
        background-position: center center;
        background-image: url($img-example);
        background-size: 100% 100%;
        height: 20rem;
        width: 20rem;
        position: relative !important;
    }

    &-titulo {
        color: $color-blanco;
        @include defineFont($fuente_poppins, medium, 20px);
    }

    &-boton {
        color: $color-blanco;
        @include defineFont($fuente_poppins, bold, 14px);

        &-inscribete {
            height: 3.5rem;
            width: 15rem;
            background-color: $color-rojo;
            @include defineFont($fuente_poppins, bold, 14px);

            &:active {
                border-color: $color-blanco;
                background-color: $color-morado;
            }

        }

    }

    &-proximamente {
        color: $color-plomo;
        @include defineFont($fuente_poppins, bold, 14px);
    }
}
</style>