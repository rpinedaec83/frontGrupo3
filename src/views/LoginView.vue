<template>
  <div class="container-fluid p-0 d-flex">
    <img src="../assets/img/banner2.png" alt="" />
    <div class="container w-100 d-flex flex-column">
      <div class="d-flex justify-content-around align-content-between p-3 pb-0 border-bottom mb-5">
        <div
          class="pb-2 cursor-pointer"
          :class="[iniciarSesionSelected ? 'opcion-seleccionada' : '']"
          @click="esSeleccionadoIniciarSesion()"
        >
          <p>Iniciar Sesión</p>
        </div>
        <div
          class="pb-2 cursor-pointer"
          :class="[registrarUsuarioSelected ? 'opcion-seleccionada' : '']"
          @click="esSeleccionadoRegistrarUsuario()"
        >
          <p>Registrarse</p>
        </div>
      </div>
      <inicio-sesion v-if="iniciarSesionSelected" />
      <nuevo-registro v-if="registrarUsuarioSelected" />
    </div>
  </div>
</template>
<script setup>
import { InicioSesion, NuevoRegistro } from '@/components'
import { ref } from 'vue'

const iniciarSesionSelected = ref(true)
const registrarUsuarioSelected = ref(false)

const esSeleccionadoIniciarSesion = () => {
  iniciarSesionSelected.value = true;
  registrarUsuarioSelected.value = false;
}

const esSeleccionadoRegistrarUsuario = () => {
  iniciarSesionSelected.value = false;
  registrarUsuarioSelected.value = true;
}

</script>
<style lang="scss" scoped>
.login {
  &-background {
    background-image: url($img-banner-2);
    height: 35rem;
  }
}

.opcion-seleccionada {
  border-bottom-color: $color-negro;
  border-bottom-width: 5px;
  border-bottom-style: solid;
  width: 9rem;
  text-align: center;
}
</style>
