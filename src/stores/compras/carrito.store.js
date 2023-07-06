import { defineStore } from 'pinia';
import { ref } from 'vue';
import { computed } from 'vue'

export const useCarritoStore = defineStore('carrito', () => {

    const programasEspecializacionEnCarrito = ref([]);

    async function agregarProgramaACarrito(programaEspecializacion) {
        programasEspecializacionEnCarrito.value.push(programaEspecializacion);
    }

    const cantidadProgramasEnCarrito = computed(() => programasEspecializacionEnCarrito.value.length);

    return {
        programasEspecializacionEnCarrito,
        cantidadProgramasEnCarrito,
        agregarProgramaACarrito
    };
});