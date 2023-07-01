<script setup>
import { RouterView } from 'vue-router'
import { HeaderNav } from '@/components'
import { GlobalFooter } from '@/components';

import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// computed
const showHeaderColorBackground = computed(() => {
  const currentRoute = router.currentRoute.value.name;
  
  switch (currentRoute) {
    case 'home':
      return false;
    case 'login':
      return false;
    case 'compras':
      return true;
  }
  return true;
})

</script>

<template>
  <div>
    <header-nav class="padding-global" :isActiveColorBackground=showHeaderColorBackground />
    <router-view />
    <global-footer />
  </div>
</template>

<style lang="scss"></style>
