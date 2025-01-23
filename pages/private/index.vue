<template>

  <Title title="Private" image="header-private"/>

  <div class="bg-third">
    <div class="container mx-auto py-24">
      <div class="grid grid-cols-1">
        <p class="text-center text-gray-600 mb-8 font-montserrat">
          To access this page enter the credentials provided
        </p>


          <input
              type="password"
              v-model="pwd"
              placeholder="Password"
              class="lg:w-1/4 font-montserrat w-full mx-auto bg-transparent px-4 py-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none text-center"
          />

          <div class="mt-6 text-center">
            <button
                @click.prevent="submit()"
                class="font-montserrat px-6 py-2 bg-primary text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>

          <div v-if="error" class="mt-4 p-2 bg-red-100 text-red-700 text-center rounded">
            Wrong password, please try again
          </div>

      </div>
    </div>
  </div>


</template>

<script setup>

import Title from "~/components/Title.vue";

import { ref } from 'vue'
import { useRouter, useRuntimeConfig } from 'nuxt/app'

const router = useRouter()
const config = useRuntimeConfig()
const { setAccess } = useAuth() // Ora importiamo correttamente useAuth
const pwd = ref('')
const error = ref(false)
const currentYear = new Date().getFullYear()

const submit = () => {
  // Usa la password dall'env + anno corrente
  if (pwd.value === config.public.privatePassword + currentYear) {
    setAccess(true)
    router.push('/private/songs')
  } else {
    error.value = true
    setTimeout(() => {
      error.value = false
    }, 3000)
  }
}
</script>


<style scoped>

</style>