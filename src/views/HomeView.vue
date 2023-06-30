<template>
  <aside class="aside-background padding-global">
    <div class="d-flex justify-content-between">
      <div class="d-flex flex-column justify-content-center">
        <h1 class="aside-principal-text mb-5">¡Explota todo tu potencial tecnológico!</h1>
        <h5 class="aside-secondary-text">Con nuestros programas de especialización</h5>
      </div>
      <div class="celular-background p-5">
        <form-celular/>
      </div>
    </div>
  </aside>
  <section class="padding-global">
    <div class="d-flex pt-5 justify-content-between ">
      <img :src="imgRespaldoBlack" alt="">
      <flecha-abajo-icon />
      <whats-app-icon />
    </div>
  </section>
  <section class="padding-global mb-5">
    <h5>Conoce nuestros Programas de Especialización</h5>
    
  </section>
</template>
<script setup>
import imgRespaldoBlack from '@/assets/img/respaldo-black.png';
import { FlechaAbajoIcon, WhatsAppIcon } from '@/components/icons';
import { FormCelular } from '@/components';

</script>
<style lang="scss" scoped>
input[type="text"] {
  @include defineFont($fuente_roboto, 'medium', 12px);
  height: 3.5em;
}

.aside {
  &-background {
    background-position: center center;
    background-size: 100% 100%;
    background-image: url($img-chica-laptop);
    position: relative !important;
    height: 35rem;
  }

  &-principal-text {
    color: $color-blanco;
    @include defineFont($fuente_poppins, 'bold', 54px)
  }

  &-secondary-text {
    color: $color-blanco;
    @include defineFont($fuente_poppins, 'medium', 20px)
  }
}

.celular {
  &-background {
    background-position: center center;
    background-image: url($img-celular);
    background-size: 100% 100%;
    height: 40rem;
    width: 33rem;
    position: relative !important;
  }

  &-title {
    @include defineFont($fuente_poppins, 'medium', 16px)
  }

  &-check-politicas {
    @include defineFont($fuente_roboto, 'medium', 12px)
  }
}
</style>