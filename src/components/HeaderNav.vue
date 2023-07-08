<template>
  <nav
    class="header-background"
    :class="[mostrarColorBackground ? 'header-background-color' : '']"
    :style="addPositionFixed"
  >
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <img :src="imgPachaqtec" alt="" srcset="" />
      </div>
      <div class="d-flex">
        <div v-if="mostrarCarrito" class="me-5 cursor-pointer">
          <carrito-icon />
          <span id="cart_menu_num"
            ><strong>{{ cantidadProgramasEnCarrito }}</strong></span
          >
        </div>
        <menu-icon v-if="mostrarMenu" class="cursor-pointer" />
      </div>
    </div>
  </nav>
</template>
<script setup>
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'

import { CarritoIcon, MenuIcon } from '@/components/icons'
import imgPachaqtec from '@/assets/img/pachaqtec-logo.png'

import { useCarritoStore } from '@/stores'

const carritoStore = useCarritoStore()

let { cantidadProgramasEnCarrito } = storeToRefs(carritoStore)

const addPositionFixed = computed(() => {
  if (props.viewActual === 'login') {
    return { position: 'fixed' }
  }

  console.log(props.viewActual);
  return { position: 'fixed', width: '100%', zIndex: 999999999999999 }
})

const mostrarCarrito = computed(() => {
  switch (props.viewActual) {
    case 'home':
      return true
    case 'login':
      return false
    case 'compras':
      return true
  }
})
const mostrarMenu = computed(() => {
  switch (props.viewActual) {
    case 'home':
      return true
    case 'login':
      return false
    case 'compras':
      return true
  }
})
const mostrarColorBackground = computed(() => {
  switch (props.viewActual) {
    case 'home':
      return false
    case 'login':
      return false
    case 'compras':
      return true
  }
})

const props = defineProps({
  viewActual: {
    type: String,
    required: true,
    default: 'home'
  }
})
</script>
<style lang="scss" scoped>
.header {
  &-background {
    //position: fixed;
    //width: 100%;
    //z-index: 999999999999999;

    &-color {
      background-color: $color-negro;
    }
  }
}

#cart_menu_num {
  position: absolute;
  top: 10px;
  right: 9em;
  background: $color-morado;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 15px;
}
</style>
