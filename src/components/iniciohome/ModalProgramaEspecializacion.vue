<template>
    <div class="modal fade" tabindex="-1" aria-labelledby="modalEliminarLabel" aria-hidden="true"
        ref="modalProgramaEspecializacion">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Detalle programa especialización</h5>
                    <button type="button" class="btn-close" @click="cerrarModal()" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="d-flex justify-content-center flex-column gap-5">
                            <h1 class="text-center">{{ programaEspecializacionSelected.nombreEspecializacion }}</h1>
                            <img :src="`${programaEspecializacionSelected.imagenUrl}`" alt="">
                            <p>{{ programaEspecializacionSelected.descripcion }}</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-primary" @click="agregarACarrito()"> <i
                            class="bi bi-cart-check-fill"></i>Agregar</button>
                    <button type="button" class="btn btn-secondary" @click="cerrarModal()">
                        <i class="bi bi-x-lg"></i>Cerrar</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { Modal } from 'bootstrap'
import { ref } from 'vue';
import Swal from 'sweetalert2'

import { useCarritoStore } from '@/stores'

const props = defineProps({
    programaEspecializacionSelected: {
        type: Object,
        required: true
    }
});

const carritoStore = useCarritoStore();

const modalProgramaEspecializacion = ref(null);

const saveChanges = () => {
    this.$emit('changes-saved');
}
const show = () => {
    const modal = new Modal(modalProgramaEspecializacion.value);
    modal.show();
}

const close = () => {
    const modal = new Modal(modalProgramaEspecializacion.value);
    modal.hide();
}

defineExpose({
    saveChanges,
    show,
    close
});

const agregarACarrito = () => {

    Swal.fire({
        title: '¿Está seguro de agregar el programa al carrito?',
        showDenyButton: true,
        confirmButtonText: 'Sí',
        denyButtonText: `No`,
    }).then((result) => {
        if (result.isConfirmed) {
            carritoStore.agregarProgramaACarrito(props.programaEspecializacionSelected);
            cerrarModal();
            Swal.fire('Programa agregado al carrito', '', 'success')
        }
    })
}

const cerrarModal = () => {
    Modal.getInstance(modalProgramaEspecializacion.value)?.hide();
}

</script>
<style lang="scss"></style>