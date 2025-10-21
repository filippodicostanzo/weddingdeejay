<template>

  <Title title="Quote" image="header-quote" />

  <div class="bg-third">
    <div class="container mx-auto py-24">


      <div class="container mx-auto px-4 py-8">
        <form id="quote" @submit.prevent="handleSubmit">
          <!-- Progress Steps -->
          <div class="flex justify-between mb-8">
            <div v-for="step in totalSteps" :key="step" class="flex-1 h-2">
              <div class="h-full transition-all duration-300" :class="[
                currentStep >= step ? 'bg-primary' : 'bg-gray-200',
                step === 1 ? 'rounded-l-full' : '',
                step === totalSteps ? 'rounded-r-full' : '',
                step > 1 && step < totalSteps ? 'mx-2' : 'mx-2'
              ]" />
            </div>
          </div>

          <!-- Step 1: Informazioni Personali -->
          <div v-show="currentStep === 1" class="transition-all duration-300">
            <div class="bg-white rounded-lg shadow-md p-6 font-montserrat">
              <h2 class="text-2xl font-bold text-center mb-6">Your Information</h2>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- First Name -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input v-model="form.firstName" type="text"
                    class="w-full px-3 py-2 border-b focus:outline-none focus:border-primary"
                    :class="{ 'border-red-500': v$.firstName.$error }" />
                  <div v-if="v$.firstName.$error" class="text-red-500 text-sm mt-1">
                    {{ v$.firstName.$errors[0].$message }}
                  </div>
                </div>

                <!-- Last Name -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input v-model="form.lastName" type="text"
                    class="w-full px-3 py-2 border-b focus:outline-none focus:border-primary"
                    :class="{ 'border-red-500': v$.lastName.$error }" />
                  <div v-if="v$.lastName.$error" class="text-red-500 text-sm mt-1">
                    {{ v$.lastName.$errors[0].$message }}
                  </div>
                </div>

                <!-- Email -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input v-model="form.email" type="email"
                    class="w-full px-3 py-2 border-b focus:outline-none focus:border-primary"
                    :class="{ 'border-red-500': v$.email.$error }" />
                  <div v-if="v$.email.$error" class="text-red-500 text-sm mt-1">
                    {{ v$.email.$errors[0].$message }}
                  </div>
                </div>

                <!-- Country -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <select v-model="form.country"
                    class="w-full px-3 py-2 border-b focus:outline-none focus:border-primary"
                    :class="{ 'border-red-500': v$.country.$error }">
                    <option value="">Select a country</option>
                    <option v-for="country in countries" :key="country.code" :value="country.code">
                      {{ country.name }}
                    </option>
                  </select>
                  <div v-if="v$.country.$error" class="text-red-500 text-sm mt-1">
                    Country is required
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 2: Event Information -->
          <div v-show="currentStep === 2" class="transition-all duration-300">
            <div class="bg-white rounded-lg shadow-md p-6 font-montserrat">
              <h2 class="text-2xl font-bold text-center mb-6">Event Information</h2>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Start Date -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    Start Date and Time
                  </label>
                  <Datepicker v-model="form.start" :min-date="new Date()" :enable-time-picker="true" :is24="true"
                    :format="dateTimeFormat" text-input :auto-apply="false" class="w-full"
                    :class="{ 'datepicker-error': v$.start.$error }" model-type="timestamp" :now-button-label="'Today'"
                    :two-way="true" locale="en" position="left" :teleport="true" placeholder="Select Date and Time"
                    @update:model-value="handleStartDateChange" />
                  <div v-if="v$.start.$error" class="text-red-500 text-sm mt-1">
                    Start date is required
                  </div>
                </div>

                <!-- End Date -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    End Date and Time
                  </label>
                  <Datepicker v-model="form.end" :min-date="new Date()" :enable-time-picker="true" :is24="true"
                    :format="dateTimeFormat" text-input :auto-apply="false" class="w-full"
                    :class="{ 'datepicker-error': v$.end.$error }" model-type="timestamp" :now-button-label="'Today'"
                    :two-way="true" locale="en" position="left" :teleport="true" placeholder="Select Date and Time"
                    @update:model-value="handleEndDateChange" />
                  <div v-if="v$.end.$error" class="text-red-500 text-sm mt-1">
                    End date is required
                  </div>
                </div>

                <!-- Location -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    Venue
                  </label>
                  <input v-model="form.location" type="text"
                    class="w-full px-3 py-2 border-b focus:outline-none focus:border-primary"
                    :class="{ 'border-red-500': v$.location.$error }" />
                  <div v-if="v$.location.$error" class="text-red-500 text-sm mt-1">
                    {{ v$.location.$errors[0].$message }}
                  </div>
                </div>

                <!-- City -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input v-model="form.city" type="text"
                    class="w-full px-3 py-2 border-b focus:outline-none focus:border-primary"
                    :class="{ 'border-red-500': v$.city.$error }" />
                  <div v-if="v$.city.$error" class="text-red-500 text-sm mt-1">
                    {{ v$.city.$errors[0].$message }}
                  </div>
                </div>

                <!-- Number of Guests -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    Number of Guests (approximately)
                  </label>
                  <input v-model.number="form.numberOfGuests" type="number" min="1"
                    class="w-full px-3 py-2 border-b focus:outline-none focus:border-primary"
                    :class="{ 'border-red-500': v$.numberOfGuests.$error }" />
                  <div v-if="v$.numberOfGuests.$error" class="text-red-500 text-sm mt-1">
                    {{ v$.numberOfGuests.$errors[0].$message }}
                  </div>
                </div>

                <!-- Budget -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    Budget (approximately) - Optional
                  </label>
                  <div class="w-full">
                    <div class="relative mb-6 mt-8 px-3">
                      <!-- Background track (sempre visibile) -->
                      <div class="absolute top-1 left-3 right-3 h-2 bg-gray-200 rounded-lg"></div>

                      <!-- Progress line (si colora dinamicamente) -->
                      <div
                        class="absolute top-1 left-3 h-2 bg-primary rounded-lg pointer-events-none transition-all duration-200"
                        :style="{ width: `calc(${(form.budgetSlider / 5) * 100}% - ${(form.budgetSlider / 5) * 24}px)` }">
                      </div>

                      <!-- Slider input -->
                      <input v-model.number="form.budgetSlider"
                        @input="form.budget = getBudgetString(form.budgetSlider)" type="range" min="0" max="5" step="1"
                        class="budget-slider relative z-20 w-full appearance-none bg-transparent cursor-pointer" />
                    </div>

                    <!-- Labels positioned exactly under slider marks with perfect alignment -->
                    <div class="relative w-[95%] mx-auto -mt-4">
                      <div class="absolute inset-x-0 flex">
                        <span class="absolute left-0 text-xs text-gray-500 -translate-x-1/2">€0</span>
                        <span class="absolute left-[20%] text-xs text-gray-500 -translate-x-1/2">€1K</span>
                        <span class="absolute left-[40%] text-xs text-gray-500 -translate-x-1/2">€2.5K</span>
                        <span class="absolute left-[60%] text-xs text-gray-500 -translate-x-1/2">€5K</span>
                        <span class="absolute left-[80%] text-xs text-gray-500 -translate-x-1/2">€10K</span>
                        <span class="absolute left-[100%] text-xs text-gray-500 -translate-x-1/2">€10K+</span>
                      </div>
                    </div>

                    <div class="text-center mt-16 font-medium text-primary">
                      {{ budgetLabels[form.budgetSlider] }}
                    </div>
                  </div>
                </div>


              </div>



            </div>
          </div>

          <!-- Step 3: Choose Package -->
          <div v-show="currentStep === 3" class="transition-all duration-300">
            <div class="bg-white rounded-lg shadow-md p-6 font-montserrat">
              <h2 class="text-2xl font-bold text-center mb-6">Choose Package</h2>

              <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6">
                <div v-for="pack in packages" :key="pack.identifier" class="relative group/item">
                  <input type="radio" :id="pack.identifier" v-model="form.selectedPackage" :value="pack"
                    class="hidden [&:checked~label_img]:grayscale-0 [&:checked~label]:text-primary" />
                  <label :for="pack.identifier"
                    class="block cursor-pointer rounded-lg overflow-hidden group-hover/item:text-primary transition-colors duration-700">
                    <img :src="pack.cover.url" :alt="pack.name"
                      class="w-full h-48 object-cover transition-all duration-700 ease-in-out grayscale group-hover/item:grayscale-0" />
                    <div class="p-4 relative">
                      <div class="pr-8">
                        <h3 class="text-lg font-bold text-center mb-2">
                          {{ pack.name }}
                        </h3>
                        <p class="text-xs text-gray-600 text-center leading-relaxed">
                          {{ getPackageDescription(pack.details) }}
                        </p>
                      </div>
                      <button @click.prevent="showInfo('package', pack)"
                        class="absolute top-4 right-4 p-1 text-gray-500 hover:text-blue-500 focus:outline-none"
                        title="Show details">
                        <font-awesome-icon :icon="['fas', 'info-circle']" class="mr-2" />
                      </button>
                    </div>
                  </label>
                </div>
              </div>

              <div v-if="v$.selectedPackage.$error" class="text-red-500 text-sm mt-4 text-center font-black">
                Please select a package
              </div>
            </div>
          </div>

          <!-- Step 4: Choose DJ (Required) -->
          <div v-show="currentStep === 4" class="transition-all duration-300">
            <div class="bg-white rounded-lg shadow-md p-6 font-montserrat">
              <h2 class="text-2xl font-bold text-center mb-6">Choose Your DJ</h2>

              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="dj in deejays" :key="dj.identifier" class="relative group/item">
                  <input type="radio" :id="dj.identifier" v-model="form.selectedArtists.deejay" :value="dj"
                    class="hidden [&:checked~label_img]:grayscale-0 [&:checked~label]:text-primary" required />
                  <label :for="dj.identifier"
                    class="block cursor-pointer rounded-lg overflow-hidden group-hover/item:text-primary transition-colors duration-700">
                    <img :src="dj.cover.url" :alt="dj.name"
                      class="w-full h-48 object-cover transition-all duration-700 ease-in-out grayscale group-hover/item:grayscale-0" />
                    <div class="p-4 relative flex items-center justify-center">
                      <h3 class="text-lg font-bold text-center">
                        {{ dj.name }}
                      </h3>
                      <button @click.prevent="showInfo('artist', dj)"
                        class="absolute right-4 p-1 text-gray-500 hover:text-blue-500 focus:outline-none"
                        title="Show details">
                        <font-awesome-icon :icon="['fas', 'info-circle']" class="mr-2" />
                      </button>
                    </div>
                  </label>
                </div>
              </div>

              <div v-if="v$.selectedArtists.deejay.$error" class="text-red-500 text-sm mt-4 text-center font-black">
                Please select a DJ
              </div>
            </div>
          </div>

          <!-- Additional Steps for Other Categories -->
          <template v-for="(category, index) in availableCategories" :key="category.identifier">
            <div v-show="currentStep === (5 + index)" class="transition-all duration-300">
              <div class="bg-white rounded-lg shadow-md p-6 font-montserrat">
                <h2 class="text-2xl font-bold text-center mb-6">
                  Choose {{ category.name }}
                  <span class="text-sm font-normal text-gray-500">(Optional)</span>
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <!-- None Option -->
                  <div class="relative group/item">
                    <input type="radio" :id="'none-' + category.identifier"
                      v-model="form.selectedArtists[category.identifier]" :value="null"
                      class="hidden [&:checked~label_div]:bg-primary [&:checked~label_div]:text-white" />
                    <label :for="'none-' + category.identifier" class="block cursor-pointer rounded-lg overflow-hidden">
                      <div
                        class="h-48 bg-gray-100 flex items-center justify-center transition-all duration-700 ease-in-out hover:bg-primary hover:text-white">
                        <div class="text-xl font-bold text-center text-gray-500 group-hover/item:text-white">
                          No {{ category.name }}
                        </div>
                      </div>
                    </label>
                  </div>

                  <!-- Category Artists -->
                  <div v-for="artist in getArtistsByCategory(category.identifier)" :key="artist.identifier"
                    class="relative group/item">
                    <input type="radio" :id="artist.identifier" v-model="form.selectedArtists[category.identifier]"
                      :value="artist" class="hidden [&:checked~label_img]:grayscale-0 [&:checked~label]:text-primary" />
                    <label :for="artist.identifier"
                      class="block cursor-pointer rounded-lg overflow-hidden group-hover/item:text-primary transition-colors duration-700">
                      <img :src="artist.cover.url" :alt="artist.name"
                        class="w-full h-48 object-cover transition-all duration-700 ease-in-out grayscale group-hover/item:grayscale-0" />
                      <div class="p-4 relative flex items-center justify-center">
                        <h3 class="text-lg font-bold text-center">{{ artist.name }}</h3>
                        <button @click.prevent="showInfo('artist', artist)"
                          class="absolute right-4 p-1 text-gray-500 hover:text-blue-500 focus:outline-none"
                          title="Show details">
                          <font-awesome-icon :icon="['fas', 'info-circle']" class="mr-2" />
                        </button>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </template>

          <!-- Step per il messaggio -->
          <div v-show="currentStep === totalSteps - 1" class="transition-all duration-300">
            <div class="bg-white rounded-lg shadow-md p-6 font-montserrat">
              <h2 class="text-2xl font-bold text-center mb-6">Additional Notes</h2>

              <div class="mb-6">
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Your Message (Optional)
                </label>
                <textarea v-model="form.message" rows="4"
                  class="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Any special requests or additional information..."></textarea>
              </div>
            </div>
          </div>

          <!-- Final Step: Message -->
          <!-- Step finale con il riepilogo -->
          <div v-show="currentStep === totalSteps" class="transition-all duration-300">
            <div class="bg-white rounded-lg shadow-md p-6 font-montserrat">
              <h2 class="text-2xl font-bold text-center mb-6">Summary</h2>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p class="text-sm text-gray-600">Name</p>
                  <p class="font-medium">{{ form.firstName }} {{ form.lastName }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-600">Email</p>
                  <p class="font-medium">{{ form.email }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-600">Event Start</p>
                  <p class="font-medium">{{ dateTimeFormat(form.start) }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-600">Event End</p>
                  <p class="font-medium">{{ dateTimeFormat(form.end) }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-600">Location</p>
                  <p class="font-medium">{{ form.location }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-600">City</p>
                  <p class="font-medium">{{ form.city }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-600">Number of Guests</p>
                  <p class="font-medium">{{ form.numberOfGuests || '-' }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-600">Budget</p>
                  <p class="font-medium">{{ formatBudget(form.budget) }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-600">Selected Package</p>
                  <p class="font-medium">{{ form.selectedPackage?.name || '-' }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-600">Selected DJ</p>
                  <p class="font-medium">{{ form.selectedArtists.deejay?.name || '-' }}</p>
                </div>
                <!-- Additional Artists -->
                <template v-for="category in availableCategories" :key="category.identifier">
                  <div v-if="form.selectedArtists[category.identifier]">
                    <p class="text-sm text-gray-600">{{ category.name }}</p>
                    <p class="font-medium">{{ form.selectedArtists[category.identifier]?.name || 'None' }}</p>
                  </div>
                </template>
              </div>

              <!-- Message Preview -->
              <div class="mt-8 border-t pt-6">
                <div>
                  <p class="text-sm text-gray-600">Message</p>
                  <p class="font-medium whitespace-pre-wrap">{{ form.message || 'No message provided' }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation Buttons -->
          <div class="flex justify-center gap-4 mt-6 font-montserrat">
            <button v-if="currentStep > 1" type="button"
              class="px-6 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition-colors"
              @click="previousStep">
              Previous
            </button>
            <button v-if="currentStep < totalSteps" type="button"
              class="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
              @click="nextStep">
              Next
            </button>
            <button v-else type="submit"
              class="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
              :disabled="isLoading">
              {{ isLoading ? 'Sending...' : 'Submit' }}
            </button>
          </div>

          <!-- Error Message -->
          <div v-if="formError" class="mt-4 p-4 bg-red-100 text-red-700 rounded-md text-center font-montserrat">
            {{ formError }}
          </div>

          <!-- Success Message -->
          <div v-if="formSuccess" class="mt-4 p-4 bg-green-100 text-green-700 rounded-md text-center font-montserrat">
            {{ formSuccess }}
          </div>
        </form>
      </div>
    </div>
  </div>
  <ModalInfo :is-open="showModal" :type="modalType" :data="modalData" @close="closeModal" />
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { useFetchData } from '~/composables/useFetchData'
import type { Artist, Package } from '~/api/types'
import countries from '~/static/data/countries.json'
import Title from "~/components/Title.vue";
import { useRuntimeConfig } from "nuxt/app";
import axios from "axios";
import { useReCaptcha } from "vue-recaptcha-v3";


// Recupera i metodi dal composable
const {
  fetchArtists,
  fetchPackages,
  deejays,
  packages,
  availableCategories,
  getArtistsByCategory
} = useFetchData()

const showModal = ref(false)
const modalType = ref<'package' | 'artist'>('package')
const modalData = ref<Package | Artist | null>(null)
const config = useRuntimeConfig()



// Corretta inizializzazione del reCAPTCHA
const recaptcha = useReCaptcha()
const recaptchaLoaded = recaptcha?.recaptchaLoaded
const executeRecaptcha = recaptcha?.executeRecaptcha
// Nuova implementazione per ottenere il token reCAPTCHA
const getRecaptchaToken = async () => {
  try {
    if (!recaptchaLoaded || !executeRecaptcha) {
      throw new Error('reCAPTCHA not initialized')
    }
    await recaptchaLoaded()
    return await executeRecaptcha('submit_form')
  } catch (error) {
    console.error('reCAPTCHA error:', error)
    throw error
  }
}



// Form state
interface FormState {
  firstName: string
  lastName: string
  email: string
  country: string
  start: Date
  end: Date
  location: string
  city: string
  numberOfGuests: number | null
  budget: string
  budgetSlider: number
  selectedArtists: {
    deejay: Artist | null
    [key: string]: Artist | null
  }
  selectedPackage: Package | null
  message: string
}

const form = reactive<FormState>({
  firstName: '',
  lastName: '',
  email: '',
  country: '',
  start: new Date(),
  end: new Date(),
  location: '',
  city: '',
  numberOfGuests: null,
  budget: '',
  budgetSlider: 0,
  selectedArtists: {
    deejay: null
  },
  selectedPackage: null,
  message: ''
})

// Error and success messages
const formError = ref('')
const formSuccess = ref('')

// Current step
const currentStep = ref(1)

// Loading and submission states
const isLoading = ref(false)
const formSubmitted = ref(false)

// Validation rules
const rules = {
  // Step 1
  firstName: {
    required,
    minLength: minLength(2)
  },
  lastName: {
    required,
    minLength: minLength(2)
  },
  email: {
    required,
    email
  },
  country: {
    required
  },

  // Step 2
  start: {
    required
  },
  end: {
    required,
    minValue: (value: any) => value > form.start || 'End date must be after start date'
  },
  location: {
    required,
    minLength: minLength(3)
  },
  city: {
    required,
    minLength: minLength(2)
  },

  numberOfGuests: {
    required,
    minValue: (value: number) => value > 0 || 'Number of guests must be greater than 0'
  },

  // Step 3
  selectedPackage: {
    required
  },

  // Step 4
  selectedArtists: {
    deejay: {
      required
    }
  }
}

// Initialize vuelidate
const v$ = useVuelidate(rules, form)

// Calcola il numero totale di step
const totalSteps = computed(() => {
  // base steps (4) + categorie aggiuntive + step messaggio + step riepilogo
  return 4 + availableCategories.value.length + 2
})

// Date format function
const dateTimeFormat = (date: Date) => {
  if (!date) return ''
  return new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false // Per mantenere il formato 24 ore
  })
}

// Budget format function
const formatBudget = (budget: string | number) => {
  if (!budget && budget !== 0) return 'Not specified'

  // Se è un numero (dallo slider), convertiamo al formato stringa
  if (typeof budget === 'number') {
    const budgetMap: Record<number, string> = {
      0: '',
      1: 'under-1000',
      2: '1000-2500',
      3: '2500-5000',
      4: '5000-10000',
      5: 'over-10000'
    }
    budget = budgetMap[budget] || ''
  }

  if (!budget) return 'Not specified'

  const budgetLabels: Record<string, string> = {
    'under-1000': 'Under €1,000',
    '1000-2500': '€1,000 - €2,500',
    '2500-5000': '€2,500 - €5,000',
    '5000-10000': '€5,000 - €10,000',
    'over-10000': 'Over €10,000'
  }

  return budgetLabels[budget as string] || budget
}

// Budget slider labels
const budgetLabels = [
  'Not specified',
  'Under €1,000',
  '€1,000 - €2,500',
  '€2,500 - €5,000',
  '€5,000 - €10,000',
  'Over €10,000'
]

// Convert slider value to budget string for form submission
const getBudgetString = (sliderValue: number) => {
  const budgetMap: Record<number, string> = {
    0: '',
    1: 'under-1000',
    2: '1000-2500',
    3: '2500-5000',
    4: '5000-10000',
    5: 'over-10000'
  }
  return budgetMap[sliderValue] || ''
}

// Extract first paragraph text from package details
const getPackageDescription = (details: string) => {
  if (!details) return ''

  // Parse HTML e estrai il testo del primo <p>
  const parser = new DOMParser()
  const doc = parser.parseFromString(details, 'text/html')
  const firstP = doc.querySelector('p')

  return firstP ? firstP.textContent || '' : ''
}

const scrollToFormWithOffset = () => {
  const formElement = document.getElementById('quote')
  if (formElement) {
    const offset = 50 // offset di 100px verso l'alto
    const elementPosition = formElement.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

// Navigation methods

const previousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
    formError.value = ''
    scrollToFormWithOffset()
  }
}

const nextStep = async () => {
  if (await validateCurrentStep()) {
    currentStep.value++
    formError.value = ''
    scrollToFormWithOffset()
  }
}

// Validation helper
const validateCurrentStep = async () => {
  let fieldsToValidate: string[] = [];

  switch (currentStep.value) {
    case 1:
      fieldsToValidate = ['firstName', 'lastName', 'email', 'country'];
      break;
    case 2:
      fieldsToValidate = ['start', 'end', 'location', 'city', 'numberOfGuests'];

      break;
    case 3:
      fieldsToValidate = ['selectedPackage'];
      break;
    case 4:
      fieldsToValidate = ['selectedArtists.deejay'];
      break;
    // Non ci sono validazioni per gli step opzionali delle altre categorie
    // Non ci sono validazioni per lo step del messaggio poiché è opzionale
  }

  // Validate each field individually
  for (const field of fieldsToValidate) {
    const fieldParts = field.split('.')
    let validation = v$.value
    fieldParts.forEach(part => {
      validation = validation[part]
    })
    await validation.$touch()
  }

  const currentStepErrors = fieldsToValidate.some(field => {
    const fieldParts = field.split('.')
    let validation = v$.value
    fieldParts.forEach(part => {
      validation = validation[part]
    })
    return validation.$error
  })

  if (currentStepErrors) {
    formError.value = 'Please fill all required fields for this step'
    return false
  }

  return true
}

// Form submission - Qui validiamo tutto
const handleSubmit = async () => {
  formError.value = ''
  formSuccess.value = ''

  // Alla submission validiamo tutti i campi
  const isValid = await v$.value.$validate()
  if (!isValid) {
    formError.value = 'Please fill all required fields correctly'
    return
  }

  try {

    isLoading.value = true
    // Ottieni il token reCAPTCHA
    const token = await getRecaptchaToken()

    const data = {
      sender: config.public.contactMailSender,
      receiver: config.public.contactMailReceiver,
      namesender: 'Contact Form Wedding Deejay',
      name: form.firstName + ' ' + form.lastName,
      email: form.email,
      subject: 'Quote Request',
      message: `
        Name: ${form.firstName} ${form.lastName} <br>
        Country: ${form.country} <br>
        Start Date: ${dateTimeFormat(form.start)} <br>
        End Date: ${dateTimeFormat(form.end)} <br>
        Venue: ${form.location} <br>
        City: ${form.city} <br>
        Number of Guests: ${form.numberOfGuests || 'Not specified'} <br>
        Budget: ${form.budget || 'Not specified'} <br>
        Selected Package: ${form.selectedPackage?.name || '-'} <br>
        Selected DJ: ${form.selectedArtists.deejay?.name || '-'} <br>
        Selected Artists: ${Object.keys(form.selectedArtists).map(key => {
        if (key !== 'deejay' && form.selectedArtists[key]) {
          return `${availableCategories.value.find(c => c.identifier === key)?.name}: ${form.selectedArtists[key]?.name || 'None'}`
        }
        return ''
      }).join('<br>')} <br>
        Additional Message: ${form.message || 'No message provided'}
      `
    }

    const formData = new URLSearchParams()
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value)
    })

    await axios.post('https://php.localidautore.it/phpmailer/', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })


    formSuccess.value = 'Your request has been submitted successfully!'
    formSubmitted.value = true
    // Reset form
    Object.keys(form).forEach(key => {
      const formKey = key as keyof FormState
      if (formKey === 'budgetSlider') {
        form[formKey] = 0
      } else if (formKey === 'start' || formKey === 'end') {
        const today = new Date()
        form[formKey] = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, formKey === 'start' ? 20 : 23, 0)
      } else if (formKey === 'numberOfGuests') {
        form[formKey] = null
      } else if (formKey === 'selectedPackage') {
        form[formKey] = null
      } else if (formKey === 'selectedArtists') {
        form[formKey] = { deejay: null }
      } else {
        form[formKey] = ''
      }
    })
    v$.value.$reset() // Reset validation state
  } catch (error) {
    console.error('Send error:', error)

    formError.value = 'An error occurred while submitting your request. Please try again.'
  } finally {
    isLoading.value = false
  }
}

// Computed per il messaggio di errore della data di fine
const endDateErrorMessage = computed(() => {
  if (form.end < form.start) {
    return 'End date must be after start date'
  }
  return 'End date is required'
})

// Funzione per gestire il cambio della data di inizio
const handleStartDateChange = (newStartDate: Date) => {
  // Aggiorna la data di fine a 4 ore dopo la data di inizio
  const endDate = new Date(newStartDate)
  endDate.setHours(endDate.getHours() + 4)
  form.end = endDate
}

// Funzione per gestire il cambio della data di fine
const handleEndDateChange = (newEndDate: Date) => {
  // Se la data di fine è prima della data di inizio, reimposta la data di fine
  if (newEndDate < form.start) {
    const endDate = new Date(form.start)
    endDate.setHours(endDate.getHours() + 4)
    form.end = endDate
  }
}

// Funzioni per gestire il modal
const showInfo = (type: 'package' | 'artist', data: Package | Artist) => {
  modalType.value = type
  modalData.value = data
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  modalData.value = null
}

// Carica i dati all'avvio del componente
onMounted(async () => {
  try {
    await Promise.all([
      fetchArtists(),
      fetchPackages(),
      recaptchaLoaded?.() // Aggiunto qui l'inizializzazione del reCAPTCHA
    ])

    // Inizializza il form con le categorie disponibili
    availableCategories.value.forEach(category => {
      form.selectedArtists[category.identifier] = null
    })

    // Imposta le date di default
    const today = new Date()
    form.start = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 20, 0)
    form.end = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 23, 0)

    // Se c'è un pacchetto preselezionato nella route
    const route = useRoute()
    if (route.query.package) {
      console.log('Package query:', route.query.package)
      const selectedPackage = packages.value.find(
        p => p.identifier === route.query.package
      )
      if (selectedPackage) {
        form.selectedPackage = selectedPackage
      }
    }

  } catch (error: any) {
    // Miglioriamo la gestione degli errori distinguendo tra i vari tipi
    if (error.message?.includes('reCAPTCHA')) {
      console.error('reCAPTCHA initialization error:', error)
      formError.value = 'Error initializing security check. Please refresh the page.'
    } else {
      console.error('Error loading initial data:', error)
      formError.value = 'Error loading data. Please refresh the page.'
    }
  }
})

onMounted(() => {
  useQuoteSeo();
})
</script>

<style scoped>
.datepicker-error :deep(.dp__input) {
  border-color: rgb(239, 68, 68);
}

:deep(.dp__input) {
  border: none;
  border-bottom: 1px solid #e2e8f0;
  border-radius: 0;
  font-family: 'Montserrat', sans-serif;
}

/* Budget Slider Styles */
.budget-slider {
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  height: 24px;
  /* Aumenta l'area cliccabile */
  position: relative;
  outline: none;
}

/* Remove default track styling */
.budget-slider::-webkit-slider-track {
  background: transparent;
  height: 24px;
  border: none;
}

.budget-slider::-moz-range-track {
  background: transparent;
  height: 24px;
  border: none;
}

/* Slider Thumb - Perfettamente centrato */
.budget-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #b8860b;
  cursor: pointer;
  border: 3px solid white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;
  position: relative;
  margin-top: -8px;
  /* Allineamento perfetto con le label */
  /* Centra perfettamente il thumb */
}

.budget-slider::-moz-range-thumb {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #b8860b;
  cursor: pointer;
  border: 3px solid white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;
  position: relative;
}

/* Hover States - Thumb più grande e colorato */
.budget-slider:hover::-webkit-slider-thumb {
  background: #996f0a;
  transform: scale(1.15);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
}

.budget-slider:hover::-moz-range-thumb {
  background: #996f0a;
  transform: scale(1.15);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
}

/* Focus States */
.budget-slider:focus::-webkit-slider-thumb {
  background: #996f0a;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3), 0 0 0 3px rgba(184, 134, 11, 0.3);
}

.budget-slider:focus::-moz-range-thumb {
  background: #996f0a;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3), 0 0 0 3px rgba(184, 134, 11, 0.3);
}

/* Active/Dragging State */
.budget-slider:active::-webkit-slider-thumb {
  background: #7d5a08;
  transform: scale(1.25);
}

.budget-slider:active::-moz-range-thumb {
  background: #7d5a08;
  transform: scale(1.25);
}

/* Mobile Touch Improvements for budget slider */
@media (max-width: 768px) {
  .budget-slider {
    height: 32px;
  }

  .budget-slider::-webkit-slider-thumb {
    height: 24px;
    width: 24px;
    margin-top: -12px;
  }

  .budget-slider::-moz-range-thumb {
    height: 24px;
    width: 24px;
  }
}

/* Legacy styles for other range inputs */
input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
}

/* Slider Track */
input[type="range"]::-webkit-slider-track {
  background: #e2e8f0;
  height: 8px;
  border-radius: 4px;
}

input[type="range"]::-moz-range-track {
  background: #e2e8f0;
  height: 8px;
  border-radius: 4px;
  border: none;
}

/* Slider Thumb */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background: #b8860b;
  /* primary color */
  cursor: pointer;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
}

input[type="range"]::-moz-range-thumb {
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background: #b8860b;
  /* primary color */
  cursor: pointer;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
}

/* Hover and Focus States */
input[type="range"]:hover::-webkit-slider-thumb {
  background: #996f0a;
  /* primary-dark color */
  transform: scale(1.1);
}

input[type="range"]:hover::-moz-range-thumb {
  background: #996f0a;
  /* primary-dark color */
  transform: scale(1.1);
}

input[type="range"]:focus::-webkit-slider-thumb {
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 0 0 2px rgba(184, 134, 11, 0.5);
}

input[type="range"]:focus::-moz-range-thumb {
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 0 0 2px rgba(184, 134, 11, 0.5);
}

/* Mobile Touch Improvements */
@media (max-width: 768px) {
  input[type="range"]::-webkit-slider-thumb {
    height: 28px;
    width: 28px;
  }

  input[type="range"]::-moz-range-thumb {
    height: 28px;
    width: 28px;
  }

  input[type="range"] {
    height: 30px;
    /* Increase touch target */
  }
}
</style>