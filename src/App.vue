<script setup lang="ts">
import { ref } from 'vue'
import ItemContact from './components/ItemContact.vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const isUpdate = ref(false)
const currentEditId = ref(null as number | null)

const formInput = ref({
  name: '',
  phone: ''
})

const dataContacts = ref([
  {
    id: 1,
    name: 'Abdul',
    phone: '123456789011111'
  },
  {
    id: 2,
    name: 'Budi',
    phone: '0987654321'
  }
])

function handleSubmit() {
  if (isUpdate.value && currentEditId.value !== null) {
    // Update the contact
    const index = dataContacts.value.findIndex((contact) => contact.id === currentEditId.value)
    if (index !== -1) {
      dataContacts.value[index] = { id: currentEditId.value, ...formInput.value }
    }
    isUpdate.value = false
    currentEditId.value = null
  } else {
    // Add a new contact
    const newId = dataContacts.value.length
      ? Math.max(...dataContacts.value.map((contact) => contact.id)) + 1
      : 1
    dataContacts.value.push({ id: newId, ...formInput.value })
  }

  // Reset form
  formInput.value.name = ''
  formInput.value.phone = ''
}

function deleteContact(id: number) {
  dataContacts.value = dataContacts.value.filter((contact) => contact.id !== id)
}

function editContact(id: number) {
  const contact = dataContacts.value.find((contact) => contact.id === id)
  if (contact) {
    formInput.value.name = contact.name
    formInput.value.phone = contact.phone
    currentEditId.value = id
    isUpdate.value = true
  }
}
</script>

<template>
  <div class="max-w-xl mx-auto">
    <h1 class="font-bold text-2xl">Contact App</h1>
    <div class="mt-4">
      <h2>{{ isUpdate ? 'Update Contact' : 'Add Contact' }}</h2>

      <form @submit.prevent="handleSubmit" class="space-y-2 mt-2">
        <Input type="text" placeholder="Name" v-model="formInput.name" />
        <Input type="text" placeholder="Phone" v-model="formInput.phone" />
        <Button type="submit">{{ isUpdate ? 'Update' : 'Add' }}</Button>
      </form>
    </div>

    <h1 class="mt-4 text-lg font-bold">Contacts</h1>
    <ul>
      <li v-for="contact in dataContacts" :key="contact.id">
        <ItemContact :contact="contact" :editContact="editContact" :deleteContact="deleteContact" />
      </li>
    </ul>
  </div>
</template>
