<script setup lang="ts">
import { ref } from 'vue'

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
    phone: '1234567890'
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
  <div>
    <h1>Contact App</h1>
    <h2>{{ isUpdate ? 'Update Contact' : 'Add Contact' }}</h2>

    <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="Name" v-model="formInput.name" />
      <input type="text" placeholder="Phone" v-model="formInput.phone" />
      <button type="submit">{{ isUpdate ? 'Update' : 'Add' }}</button>
    </form>

    <ul>
      <li v-for="contact in dataContacts" :key="contact.id">
        <p>{{ contact.name }}</p>
        <p>{{ contact.phone }}</p>
        <button @click="editContact(contact.id)">Edit</button>
        <button @click="deleteContact(contact.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>
