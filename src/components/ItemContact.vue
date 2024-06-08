<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

defineProps(['contact', 'deleteContact', 'editContact'])
</script>

<template>
  <div class="my-2">
    <Card>
      <CardHeader>
        <CardTitle>{{ contact.name }}</CardTitle>
        <CardDescription>{{ contact.phone }}</CardDescription>
      </CardHeader>

      <CardFooter>
        <div class="space-x-2">
          <Button @click="editContact(contact.id)">Edit</Button>
          <Button @click="deleteContact(contact.id)">Delete</Button>
        </div>
      </CardFooter>
    </Card>
  </div>
</template>
