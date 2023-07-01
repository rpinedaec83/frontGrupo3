<template>
    <nav class="header-background" :class="[isActiveColorBackground ? 'header-background-color' : '']">
        <div class="d-flex justify-content-between align-items-center">
            <div>
                <img :src="imgPachaqtec" alt="" srcset="">
            </div>
            <div class="d-flex">
                <div class="me-5">
                    <carrito-icon />
                    <span id="cart_menu_num"><strong>5</strong></span>
                </div>
                <menu-icon />
            </div>
        </div>
    </nav>
</template>
<script setup>
import { CarritoIcon, MenuIcon } from '@/components/icons';
import imgPachaqtec from '@/assets/img/pachaqtec-logo.png';

defineProps({
    isActiveColorBackground: {
        type: Boolean,
        default: true
    }
})

</script>
<style lang="scss" scoped>
.header {
    &-background {
        position: fixed;
        width: 100%;
        z-index: 999999999999999;

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