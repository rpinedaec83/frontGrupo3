<script setup>
import { RouterView } from 'vue-router'
import { HeaderNav } from '@/components'
import { GlobalFooter } from '@/components';
</script>

<template>
  <div>
    <header-nav class="padding-global"/>
    <router-view />
    <global-footer/>
  </div>
</template>

<style lang="scss"></style>
