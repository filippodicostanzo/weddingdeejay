

<template>
  <div>
    <Title title="Contacts" image="header-contacts"/>

    <div class="bg-third">
      <div class="container mx-auto py-24">
        <div class="grid lg:grid-cols-2 grid-cols-1 space-y-12 lg:space-y-0">
          <div>
            <h3 class="text-center font-montserrat text-2xl font-semibold text-secondary mb-6">Direct Contacts</h3>
            <DirectContacts/>
          </div>
          <div>
            <h3 class="text-center font-montserrat text-2xl font-semibold text-secondary mb-6">Contact Form</h3>
            <ContactForm/>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">

import Title from "~/components/Title.vue";
</script>
<style scoped>

</style>