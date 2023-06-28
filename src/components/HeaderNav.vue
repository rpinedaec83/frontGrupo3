<template>
    <nav class="header">
        <div class="d-flex justify-content-between align-items-center ps-5 pe-5 pt-3 pb-3">
            <div>
                <img src="../assets/img/pachaqtec.png" alt="" srcset="">
            </div>

            <div>
                <carrito-icon class="me-5"/>
                <menu-icon class="mt-2"/>
            </div>
        </div>
    </nav>
</template>
<script setup>
import { CarritoIcon, MenuIcon } from '@/components/icons';
</script>
<style lang="scss" scoped>
.header {
    background: black;
}
</style>