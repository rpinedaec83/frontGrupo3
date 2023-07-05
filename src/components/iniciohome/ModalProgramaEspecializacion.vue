<template>
    <div class="modal fade" tabindex="-1" aria-labelledby="modalEliminarLabel" aria-hidden="true"
        ref="modalProgramaEspecializacion">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Detalle programa especialización</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
            </div>
        </div>
    </div>
</template>
<script setup>
import { Modal } from 'bootstrap'
import { ref } from 'vue';

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
})

defineProps({
    programaEspecializacionSelected: {
        type: Object,
        required: true
    }
});

</script>
<style lang="scss"></style>