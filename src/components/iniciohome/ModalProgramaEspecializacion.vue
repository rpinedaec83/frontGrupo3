<template>
    <div class="modal fade" tabindex="-1" aria-labelledby="modalEliminarLabel" aria-hidden="true"
        ref="modalProgramaEspecializacion">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <form id="formEliminarMascota" action="#">
                        <div class="container">
                            <div class="text-center">
                                <p>Estas seguro de eliminar a esta mascota??</p>
                            </div>
                            <div class="d-flex justify-content-evenly align-items-center">
                                <button id="btnAceptarEliminarMascota" type="submit" class="button_modal">Aceptar</button>
                                <button type="button" class="button_modal" data-bs-dismiss="modal">Cancelar</button>
                            </div>
                        </div>
                    </form>
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

</script>
<style lang="scss"></style>