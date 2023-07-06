import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useHomeStore = defineStore('home', () => {

    const programasEspecializacion = ref(null);

    const getListadoProgramasEspecializacion = async () => {

        programasEspecializacion.value = [
            {
                id: 1,
                nombreEspecializacion: 'Desarrollo Front-End',
                imagenUrl: "img/image-especializacion-1.png",
                descripcion: "lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et al. Ut enim ad minim veniam et dolore magna aliqu",
                precio: 256.00,
                activo: true
            },
            {
                id: 2,
                nombreEspecializacion: 'Desarrollo Back-End',
                imagenUrl: "img/image-especializacion-2.png",
                descripcion: "lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et al. Ut enim ad minim veniam et dolore magna aliqu",
                precio: 256.00,
                activo: true
            },
            {
                id: 3,
                nombreEspecializacion: 'Desarrollo de Aplicativos Móviles',
                imagenUrl: "img/image-especializacion-1.png",
                descripcion: "lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et al. Ut enim ad minim veniam et dolore magna aliqu",
                precio: 256.00,
                activo: false
            },
            {
                id: 4,
                nombreEspecializacion: 'Diseño de Experiencia de Usuario',
                imagenUrl: "img/image-especializacion-2.png",
                descripcion: "lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et al. Ut enim ad minim veniam et dolore magna aliqu",
                precio: 256.00,
                activo: true
            }
        ];
    }

    return {
        programasEspecializacion,
        getListadoProgramasEspecializacion
    };

}
);