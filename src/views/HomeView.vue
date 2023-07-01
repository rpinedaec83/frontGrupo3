<template>
  <aside class="aside-background">
    <div class="d-flex justify-content-between">
      <div class="d-flex flex-column justify-content-center">
        <h1 class="aside-principal-text mb-5">¡Explota todo tu potencial tecnológico!</h1>
        <h5 class="aside-secondary-text">Con nuestros programas de especialización</h5>
      </div>
      <div class="celular-background p-5">
        <form-celular />
      </div>
    </div>
  </aside>
  <section>
    <div class="d-flex pt-5 justify-content-between">
      <img :src="imgRespaldoBlack" alt="">
      <flecha-abajo-icon />
      <whats-app-icon />
    </div>
  </section>
  <section>
    <h5 class="especializacion-titulo-principal mb-5">Conoce nuestros Programas de Especialización</h5>
    <div class="container ps-0">
      <div class="row">
        <div class="col-6 ps-0">
          <div class="especializacion-background p-4 d-flex flex-column justify-content-end">
            <h3 class="especializacion-titulo mb-3">Desarrollo Front-End</h3>
            <div v-if="true" class="d-flex especializacion-boton justify-content-end">
              <boton-mas-icon class="me-2" />
              <p>Ver más</p>
            </div>
            <p v-else class="d-flex especializacion-boton justify-content-end">Proximamente</p>
          </div>
        </div>
        <div class="col-6">
          <div class="especializacion-background p-4 d-flex flex-column justify-content-end">
            <h3 class="especializacion-titulo mb-3">Diseño de Experiencia de Usuario</h3>
            <div v-if="false" class="d-flex especializacion-boton justify-content-end">
              <boton-mas-icon class="me-2" />
              <p>Ver más</p>
            </div>
            <p v-else class="d-flex especializacion-proximamente justify-content-end">Proximamente</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="ps-0 pe-0">
    <div class="d-flex comunidad-background">
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
  <section>
    <h3 class="beneficios-titulo mb-5">Beneficios</h3>
    <div class="beneficios">
      <div class="d-flex">
        <div>
          <persona-icon />
        </div>
        <div>
          <h3>Aprende de Expertos</h3>
          <p>Aprende directamente de expertos del mercado a través del análisis y solución de problemas de programación.
            Utilizando los frameworks y herramientas de mayor relevancia dentro del mundo del coding.</p>
        </div>
      </div>
      <div class="d-flex">
        <div>
          <computadora-icon />
        </div>
        <div>
          <h3>Clases Virtuales</h3>
          <p>Aprovecha tu tiempo al máximo en nuestras clases virtuales y participa presencialmente de nuestras
            hackathones semanales para conocer y participar de la comunidad profesional que liderará la transformación
            tecnológica del Perú.</p>
        </div>
      </div>
      <div class="d-flex">
        <div>
          <maleta-icon />
        </div>
        <div>
          <h3>Empleabilidad</h3>
          <p>Al finalizar el programa y certificarte a nombre de IDAT, podrás acceder a ofertas
            laborales especialmente identificadas para la comunidad PachaQTec, a través de
            nuestra plataforma de empleabilidad IDAT JOB.</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import imgRespaldoBlack from '@/assets/img/respaldo-black.png';
import imgChicaLaptop2 from '@/assets/img/chica-laptop-2.png';
import { FlechaAbajoIcon, WhatsAppIcon, BotonMasIcon, ComputadoraIcon, MaletaIcon, PersonaIcon } from '@/components/icons';
import { FormCelular } from '@/components';

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
    height: 32rem;
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
    height: 40rem;
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
  }

  &-proximamente {
    color: $color-plomo;
    @include defineFont($fuente_poppins, bold, 14px);
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