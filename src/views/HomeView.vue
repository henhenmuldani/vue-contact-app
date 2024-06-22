<script setup lang="ts">
import { ref } from 'vue'
import ItemContact from '@/components/ItemContact.vue'
import { type Contacts } from '@/data/contacts-data'

const dataContacts = ref([] as Contacts[])
dataContacts.value = JSON.parse(localStorage.getItem('contacts') || '[]')
console.log(dataContacts.value)

function deleteContact(id: string) {
  const contacts = dataContacts.value.filter((contact) => contact.id !== id)
  dataContacts.value = contacts
  localStorage.setItem('contacts', JSON.stringify(contacts))
}

// function editContact(id: number) {
//   const contact = dataContacts.value.find((contact) => contact.id === id)
//   if (contact) {
//     formInput.value.name = contact.name
//     formInput.value.phone = contact.phone
//     currentEditId.value = id
//     isUpdate.value = true
//   }
// }
</script>

<template>
  <div class="max-w-xl mx-auto">
    <h1 class="mt-4 text-lg font-bold">Contacts</h1>
    <ul>
      <li v-for="contact in dataContacts">
        <ItemContact :contact="contact" :deleteContact="deleteContact" />
      </li>
    </ul>
  </div>
</template>
