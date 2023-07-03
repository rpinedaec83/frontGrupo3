<template>
  <aside class="aside-background" :style="addAsideSize">
    <div class="d-flex justify-content-between">
      <div class="d-flex flex-column justify-content-center">
        <h1 class="aside-principal-text mb-5" :style="addMarginInHeaderTitle">¡Explota todo tu potencial tecnológico!
        </h1>
        <h5 class="aside-secondary-text">Con nuestros programas de especialización</h5>
      </div>
      <div v-if="!isMediumScreen" class="celular-background p-5" :style="[addMarginInCelular, addWidthSizeInCelular]">
        <form-celular class="p-5"/>
      </div>
    </div>
  </aside>
  <section>
    <div class="d-flex pt-5 justify-content-between">
      <img :src="imgRespaldoBlack" alt="">
      <flecha-abajo-icon v-if="!isMediumScreen" />
      <whats-app-icon />
    </div>
  </section>
  <section>
    <programas-especializacion :isMediumScreen=isMediumScreen />
  </section>
  <section class="ps-0 pe-0">
    <div class="d-flex comunidad-background p-4" :class="[isMediumScreen ? 'flex-column' : '']">
      <img :src="imgChicaLaptop2" alt="">
      <div class="d-flex flex-column justify-content-center">
        <h3 class="comunidad-titulo">Sé parte de la comunidad</h3>
        <br>
        <p class="comunidad-parrafo">Programas semi-presenciales para el desarrollo de habilidades de programación a lo
          largo
          de todo el Stack tecnológico.
        </p>
        <br>
        <p class="comunidad-parrafo">Al finalizar sabrás cómo crear una página web y desarrollar la lógica detrás del
          funcionamiento de una aplicación, así como formar parte de una gran comunidad de
          desarrolladores</p>
      </div>
    </div>
  </section>
  <section class="mb-1">
    <h3 class="beneficios-titulo mb-5">Beneficios</h3>
    <div class="beneficios">
      <div class="d-flex">
        <div>
          <persona-icon />
        </div>
        <div>
          <h3 :class="[isMediumScreen ? 'mt-4' : '']">Aprende de Expertos</h3>
          <p v-if="!isMediumScreen">Aprende directamente de expertos del mercado a través del análisis y solución de problemas de programación.
            Utilizando los frameworks y herramientas de mayor relevancia dentro del mundo del coding.</p>
        </div>
      </div>
      <div class="d-flex">
        <div>
          <computadora-icon />
        </div>
        <div>
          <h3 :class="[isMediumScreen ? 'mt-4' : '']">Clases Virtuales</h3>
          <p v-if="!isMediumScreen">Aprovecha tu tiempo al máximo en nuestras clases virtuales y participa presencialmente de nuestras
            hackathones semanales para conocer y participar de la comunidad profesional que liderará la transformación
            tecnológica del Perú.</p>
        </div>
      </div>
      <div class="d-flex">
        <div>
          <maleta-icon />
        </div>
        <div>
          <h3 :class="[isMediumScreen ? 'mt-4' : '']">Empleabilidad</h3>
          <p v-if="!isMediumScreen">Al finalizar el programa y certificarte a nombre de IDAT, podrás acceder a ofertas
            laborales especialmente identificadas para la comunidad PachaQTec, a través de
            nuestra plataforma de empleabilidad IDAT JOB.</p>
        </div>
      </div>
    </div>
  </section>
  <section v-if="isMediumScreen">
    <form-celular/>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useMediaQuery } from '@vueuse/core'

import { FlechaAbajoIcon, WhatsAppIcon, ComputadoraIcon, MaletaIcon, PersonaIcon } from '@/components/icons';
import { FormCelular, ProgramasEspecializacion } from '@/components';

import imgRespaldoBlack from '@/assets/img/respaldo-black.png';
import imgChicaLaptop2 from '@/assets/img/chica-laptop-2.png';

const isMediumScreen = ref(useMediaQuery('(max-width: 768px)'));
const isLargeScreen = ref(useMediaQuery('(max-width: 1097px)'));

const addAsideSize = computed(() => {
  return addStyleWithCondition(!isMediumScreen.value, { height: '35rem' })
});

const addMarginInHeaderTitle = computed(() => {
  return addStyleWithCondition(isMediumScreen.value, { marginTop: '10rem' })
});

const addMarginInCelular = computed(() => {
  return addStyleWithCondition(!isMediumScreen.value, { marginTop: '2.1rem' })
});

const addWidthSizeInCelular = computed(() => {
  return addStyleWithCondition(isLargeScreen.value, { height: '50rem' })
});

const addStyleWithCondition = (condition, styleObject) => {
  if (condition) {
    return styleObject;
  }
  return {};
}


</script>
<style lang="scss" scoped>
.form-control {
  @include defineFont($fuente_roboto, medium, 12px);
  height: 3.5em !important;
}

.aside {
  &-background {
    background-position: center center;
    background-size: 100% 100%;
    background-image: url($img-chica-laptop);
    position: relative !important;
  }

  &-principal-text {
    color: $color-blanco;
    @include defineFont($fuente_poppins, bold, 54px)
  }

  &-secondary-text {
    color: $color-blanco;
    @include defineFont($fuente_poppins, medium, 20px)
  }
}

.celular {
  &-background {
    background-position: center center;
    background-image: url($img-celular);
    background-size: 100% 100%;
    height: 45rem;
    width: 33.5rem;
    position: relative !important;
  }

  &-title {
    @include defineFont($fuente_poppins, medium, 16px)
  }

  &-check-politicas {
    @include defineFont($fuente_roboto, medium, 12px)
  }
}

.comunidad {
  &-background {
    background-color: $color-morado;
  }

  &-titulo {
    color: $color-blanco;
    @include defineFont($fuente_poppins, bold, 20px);
  }

  &-parrafo {
    color: $color-blanco;
    @include defineFont($fuente_roboto, regular, 14px);
  }
}

.beneficios {
  &-titulo {
    @include defineFont($fuente_poppins, bold, 20px);
  }

  div {
    background-color: $color-plomo-claro;
    border-radius: 5px;
    margin-bottom: 2rem;
    padding: 1rem;
  }

  h3 {
    @include defineFont($fuente_poppins, medium, 16px);
    margin-bottom: 2rem;
  }

  p {
    @include defineFont($fuente_roboto, regular, 14px);
  }
}
</style>