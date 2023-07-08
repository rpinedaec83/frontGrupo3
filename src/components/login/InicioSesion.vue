<template>
  <div class="d-flex flex-column h-100">
    <div class="pb-4 text-center">
      <p>Puedes iniciar sesión con:</p>
      <div class="d-flex justify-content-center gap-4 mt-2 mb-4">
        <div class="icono-redsocial"><facebook-logo class="logo" /></div>
        <div class="icono-redsocial"><linked-in-logo class="logo" /></div>
      </div>
      <div class="mb-4">También puedes iniciar sesión con tu correo</div>
      <div>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Correo electrónico</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Contraseña</label>
        </div>
      </div>
    </div>
    <div class="mt-auto mb-4">
      <button class="btn btn-primary w-100 mb-3">Ingresar</button>
      <p class="text-center">¿Olvidaste tu contraseña?</p>
    </div>
  </div>
</template>

<script setup>
import { FacebookLogo, LinkedInLogo } from '@/components/icons'
</script>

<style lang="scss" scoped>
.icono-redsocial {
  width: 2.4rem;
  height: 2.4rem;
  border: 1px solid $color-plomo;
  border-radius: 15%;
  cursor: pointer;
}

.logo {
  margin-top: 0.6rem;
}
</style>
