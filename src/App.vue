<script setup>
import { RouterView } from 'vue-router'
import { HeaderNav } from '@/components'
</script>

<template>
  <div>
    <!-- p-3 pt-3 pb-3 -->
    <header-nav class="padding-global" />
    <router-view />
  </div>
</template>

<style lang="scss"></style>
