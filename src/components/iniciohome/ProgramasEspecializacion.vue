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
                        :style="{ backgroundImage: `url('${programaEspecializacion.imagenUrl}')` }">
                        <h3 class="especializacion-titulo mb-3">{{ programaEspecializacion.nombreEspecializacion }}</h3>
                        <div v-if="programaEspecializacion.activo"
                            class="d-flex especializacion-boton justify-content-end cursor-pointer"
                            @click="verDetalleEspecializacion(programaEspecializacion)">
                            <boton-mas-icon class="me-2" />
                            <p>Ver más</p>
                        </div>
                        <p v-else class="d-flex especializacion-boton justify-content-end">Proximamente</p>
                    </div>
                </div>
            </div>
        </div>
        <modal-programa-especializacion ref="modalProgramaEspecializacionRef"
            :programaEspecializacionSelected=programaEspecializacionSelected />
    </div>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { BotonMasIcon, PencilIcon } from '@/components/icons';
import { ModalProgramaEspecializacion } from '@/components';
import { useHomeStore } from '@/stores'
import { ref } from 'vue';

defineProps({
    isMediumScreen: {
        type: Boolean,
        required: true
    }
});

const homeStore = useHomeStore();

let { programasEspecializacion } = storeToRefs(homeStore);
homeStore.getListadoProgramasEspecializacion();

const modalProgramaEspecializacionRef = ref(null);
const programaEspecializacionSelected = ref({});

function verDetalleEspecializacion(programaEspecializacion) {
    programaEspecializacionSelected.value = programaEspecializacion;
    modalProgramaEspecializacionRef.value?.show();
}

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