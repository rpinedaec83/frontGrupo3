<template>
  <div class="d-flex flex-column h-100">
    <div class="pb-4 text-center">
      <p>Puedes registrarte con:</p>
      <div class="d-flex justify-content-center gap-4 mt-2 mb-4">
        <div class="icono-redsocial"><facebook-logo class="logo" /></div>
        <div class="icono-redsocial"><linked-in-logo class="logo" /></div>
      </div>
      <div class="mb-4">También puedes registrarte con tu correo</div>
      <div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="nombresYApellidos"
            placeholder="name@example.com"
          />
          <label for="nombresYApellidos">Nombres y apellidos</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="correoElectronico"
            placeholder="name@example.com"
          />
          <label for="correoElectronico">Correo electrónico</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="contrasenia" placeholder="Password" />
          <label for="contrasenia">Contraseña</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="password"
            class="form-control"
            id="contraseniaRepetido"
            placeholder="Password"
          />
          <label for="contraseniaRepetido">Repite contraseña</label>
        </div>
      </div>
    </div>
    <div class="mt-auto mb-4">
      <button class="btn btn-primary w-100 mb-3">Registrarse</button>
      <div class="form-check">
        <input class="form-check-input mt-1" type="checkbox" value="" id="flexCheckDefault" />
        <label class="form-check-label" for="flexCheckDefault">
          Acepto términos y condiciones
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FacebookLogo, LinkedInLogo } from '@/components/icons'
</script>

<style lang="scss">
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
