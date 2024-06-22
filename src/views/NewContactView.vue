<template>
  <div class="max-w-xl mx-auto">
    <div class="mt-4">
      <h2>Add Contact</h2>

      <form @submit.prevent="handleSubmit" class="space-y-2 mt-2">
        <Input type="text" placeholder="Name" v-model="formInput.name" />
        <Input type="text" placeholder="Phone" v-model="formInput.phone" />
        <Button type="submit">Add</Button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const formInput = ref({
  name: '',
  phone: ''
})

function handleSubmit() {
  const contacts = JSON.parse(localStorage.getItem('contacts') || '[]')
  // Add a new contact
  const newId = crypto.randomUUID()
  localStorage.setItem('contacts', JSON.stringify([...contacts, { id: newId, ...formInput.value }]))

  // Reset form
  formInput.value.name = ''
  formInput.value.phone = ''

  // redirect to home
  router.push('/')
}
</script>

<style scoped></style>
