<template>
  <div class="max-w-xl mx-auto">
    <nav class="flex justify-between">
      <RouterLink to="/"> <h1 class="font-bold text-2xl">Contact App</h1> </RouterLink>
      <RouterLink to="/new-contact">New</RouterLink>
    </nav>
    <!-- <button @click="handleNewContact">New</button> -->
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function handleNewContact() {
  router.push('/new-contact')
}
</script>

<style scoped></style>
