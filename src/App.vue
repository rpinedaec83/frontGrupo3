<script setup>
import { RouterView } from 'vue-router'
import { HeaderNav } from '@/components'
import { GlobalFooter } from '@/components';

import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const viewActual = computed(() => router.currentRoute.value.name);

</script>

<template>
  <div>
    <header-nav class="padding-global" :viewActual=viewActual />
    <router-view />
    <global-footer />
  </div>
</template>

<style lang="scss"></style>
