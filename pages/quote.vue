<template>

  <Title title="Quote" image="header-quote"/>

  <div class="bg-third">
    <div class="container mx-auto py-24">


      <div class="container mx-auto px-4 py-8">
        <form id="quote" @submit.prevent="handleSubmit">
          <!-- Progress Steps -->
          <div class="flex justify-between mb-8">
            <div
                v-for="step in totalSteps"
                :key="step"
                class="flex-1 h-2"
            >
              <div
                  class="h-full transition-all duration-300"
                  :class="[
        currentStep >= step ? 'bg-primary' : 'bg-gray-200',
        step === 1 ? 'rounded-l-full' : '',
        step === totalSteps ? 'rounded-r-full' : '',
        step > 1 && step < totalSteps ? 'mx-2' : 'mx-2'
      ]"
              />
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
                  <input
                      v-model="form.firstName"
                      type="text"
                      class="w-full px-3 py-2 border-b focus:outline-none focus:border-primary"
                      :class="{ 'border-red-500': v$.firstName.$error }"
                  />
                  <div
                      v-if="v$.firstName.$error"
                      class="text-red-500 text-sm mt-1"
                  >
                    {{ v$.firstName.$errors[0].$message }}
                  </div>
                </div>

                <!-- Last Name -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                      v-model="form.lastName"
                      type="text"
                      class="w-full px-3 py-2 border-b focus:outline-none focus:border-primary"
                      :class="{ 'border-red-500': v$.lastName.$error }"
                  />
                  <div
                      v-if="v$.lastName.$error"
                      class="text-red-500 text-sm mt-1"
                  >
                    {{ v$.lastName.$errors[0].$message }}
                  </div>
                </div>

                <!-- Email -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                      v-model="form.email"
                      type="email"
                      class="w-full px-3 py-2 border-b focus:outline-none focus:border-primary"
                      :class="{ 'border-red-500': v$.email.$error }"
                  />
                  <div
                      v-if="v$.email.$error"
                      class="text-red-500 text-sm mt-1"
                  >
                    {{ v$.email.$errors[0].$message }}
                  </div>
                </div>

                <!-- Country -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <select
                      v-model="form.country"
                      class="w-full px-3 py-2 border-b focus:outline-none focus:border-primary"
                      :class="{ 'border-red-500': v$.country.$error }"
                  >
                    <option value="">Select a country</option>
                    <option v-for="country in countries" :key="country.code" :value="country.code">
                      {{ country.name }}
                    </option>
                  </select>
                  <div
                      v-if="v$.country.$error"
                      class="text-red-500 text-sm mt-1"
                  >
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
                  <Datepicker
                      v-model="form.start"
                      :min-date="new Date()"
                      :enable-time-picker="true"
                      :is24="true"
                      :format="dateTimeFormat"
                      text-input
                      :auto-apply="false"
                      class="w-full"
                      :class="{ 'datepicker-error': v$.start.$error }"
                      model-type="timestamp"
                      :now-button-label="'Today'"
                      :two-way="true"
                      locale="en"
                      position="auto"
                      :teleport="true"
                      placeholder="Select Date and Time"
                      @update:model-value="handleStartDateChange"
                  />
                  <div
                      v-if="v$.start.$error"
                      class="text-red-500 text-sm mt-1"
                  >
                    Start date is required
                  </div>
                </div>

                <!-- End Date -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    End Date and Time
                  </label>
                  <Datepicker
                      v-model="form.end"
                      :min-date="new Date()"
                      :enable-time-picker="true"
                      :is24="true"
                      :format="dateTimeFormat"
                      text-input
                      :auto-apply="false"
                      class="w-full"
                      :class="{ 'datepicker-error': v$.end.$error }"
                      model-type="timestamp"
                      :now-button-label="'Today'"
                      :two-way="true"
                      locale="en"
                      position="auto"
                      :teleport="true"
                      placeholder="Select Date and Time"
                      @update:model-value="handleEndDateChange"

                  />
                  <div
                      v-if="v$.end.$error"
                      class="text-red-500 text-sm mt-1"
                  >
                    End date is required
                  </div>
                </div>

                <!-- Location -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    Venue
                  </label>
                  <input
                      v-model="form.location"
                      type="text"
                      class="w-full px-3 py-2 border-b focus:outline-none focus:border-primary"
                      :class="{ 'border-red-500': v$.location.$error }"
                  />
                  <div
                      v-if="v$.location.$error"
                      class="text-red-500 text-sm mt-1"
                  >
                    {{ v$.location.$errors[0].$message }}
                  </div>
                </div>

                <!-- City -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                      v-model="form.city"
                      type="text"
                      class="w-full px-3 py-2 border-b focus:outline-none focus:border-primary"
                      :class="{ 'border-red-500': v$.city.$error }"
                  />
                  <div
                      v-if="v$.city.$error"
                      class="text-red-500 text-sm mt-1"
                  >
                    {{ v$.city.$errors[0].$message }}
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
                <div
                    v-for="pack in packages"
                    :key="pack.identifier"
                    class="relative group/item"
                >
                  <input
                      type="radio"
                      :id="pack.identifier"
                      v-model="form.selectedPackage"
                      :value="pack"
                      class="hidden [&:checked~label_img]:grayscale-0 [&:checked~label]:text-primary"
                  />
                  <label
                      :for="pack.identifier"
                      class="block cursor-pointer rounded-lg overflow-hidden group-hover/item:text-primary transition-colors duration-700"
                  >
                    <img
                        :src="pack.cover.url"
                        :alt="pack.name"
                        class="w-full h-48 object-cover transition-all duration-700 ease-in-out grayscale group-hover/item:grayscale-0"
                    />
                    <div class="p-4 relative flex items-center justify-center">
                      <h3 class="text-lg font-bold text-center">
                        {{ pack.name }}
                      </h3>
                      <button
                          @click.prevent="showInfo('package', pack)"
                          class="absolute right-4 p-1 text-gray-500 hover:text-blue-500 focus:outline-none"
                          title="Show details"
                      >
                        <font-awesome-icon :icon="['fas', 'info-circle']" class="mr-2"/>
                      </button>
                    </div>
                  </label>
                </div>
              </div>

              <div
                  v-if="v$.selectedPackage.$error"
                  class="text-red-500 text-sm mt-4 text-center font-black"
              >
                Please select a package
              </div>
            </div>
          </div>

          <!-- Step 4: Choose DJ (Required) -->
          <div v-show="currentStep === 4" class="transition-all duration-300">
            <div class="bg-white rounded-lg shadow-md p-6 font-montserrat">
              <h2 class="text-2xl font-bold text-center mb-6">Choose Your DJ</h2>

              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div
                    v-for="dj in deejays"
                    :key="dj.identifier"
                    class="relative group/item"
                >
                  <input
                      type="radio"
                      :id="dj.identifier"
                      v-model="form.selectedArtists.deejay"
                      :value="dj"
                      class="hidden [&:checked~label_img]:grayscale-0 [&:checked~label]:text-primary"
                      required
                  />
                  <label
                      :for="dj.identifier"
                      class="block cursor-pointer rounded-lg overflow-hidden group-hover/item:text-primary transition-colors duration-700"
                  >
                    <img
                        :src="dj.cover.url"
                        :alt="dj.name"
                        class="w-full h-48 object-cover transition-all duration-700 ease-in-out grayscale group-hover/item:grayscale-0"
                    />
                    <div class="p-4 relative flex items-center justify-center">
                      <h3 class="text-lg font-bold text-center">
                        {{ dj.name }}
                      </h3>
                      <button
                          @click.prevent="showInfo('artist', dj)"
                          class="absolute right-4 p-1 text-gray-500 hover:text-blue-500 focus:outline-none"
                          title="Show details"
                      >
                        <font-awesome-icon :icon="['fas', 'info-circle']" class="mr-2"/>
                      </button>
                    </div>
                  </label>
                </div>
              </div>

              <div
                  v-if="v$.selectedArtists.deejay.$error"
                  class="text-red-500 text-sm mt-4 text-center font-black"
              >
                Please select a DJ
              </div>
            </div>
          </div>

          <!-- Additional Steps for Other Categories -->
          <template v-for="(category, index) in availableCategories" :key="category.identifier">
            <div
                v-show="currentStep === (5 + index)"
                class="transition-all duration-300"
            >
              <div class="bg-white rounded-lg shadow-md p-6 font-montserrat">
                <h2 class="text-2xl font-bold text-center mb-6">
                  Choose {{ category.name }}
                  <span class="text-sm font-normal text-gray-500">(Optional)</span>
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <!-- None Option -->
                  <div class="relative group/item">
                    <input
                        type="radio"
                        :id="'none-' + category.identifier"
                        v-model="form.selectedArtists[category.identifier]"
                        :value="null"
                        class="hidden [&:checked~label_div]:bg-primary [&:checked~label_div]:text-white"
                    />
                    <label
                        :for="'none-' + category.identifier"
                        class="block cursor-pointer rounded-lg overflow-hidden"
                    >
                      <div class="h-48 bg-gray-100 flex items-center justify-center transition-all duration-700 ease-in-out hover:bg-primary hover:text-white">
                        <div class="text-xl font-bold text-center text-gray-500 group-hover/item:text-white">
                          No {{ category.name }}
                        </div>
                      </div>
                    </label>
                  </div>

                  <!-- Category Artists -->
                  <div
                      v-for="artist in getArtistsByCategory(category.identifier)"
                      :key="artist.identifier"
                      class="relative group/item"
                  >
                    <input
                        type="radio"
                        :id="artist.identifier"
                        v-model="form.selectedArtists[category.identifier]"
                        :value="artist"
                        class="hidden [&:checked~label_img]:grayscale-0 [&:checked~label]:text-primary"
                    />
                    <label
                        :for="artist.identifier"
                        class="block cursor-pointer rounded-lg overflow-hidden group-hover/item:text-primary transition-colors duration-700"
                    >
                      <img
                          :src="artist.cover.url"
                          :alt="artist.name"
                          class="w-full h-48 object-cover transition-all duration-700 ease-in-out grayscale group-hover/item:grayscale-0"
                      />
                      <div class="p-4 relative flex items-center justify-center">
                        <h3 class="text-lg font-bold text-center">{{ artist.name }}</h3>
                        <button
                            @click.prevent="showInfo('artist', artist)"
                            class="absolute right-4 p-1 text-gray-500 hover:text-blue-500 focus:outline-none"
                            title="Show details"
                        >
                          <font-awesome-icon :icon="['fas', 'info-circle']" class="mr-2"/>
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
                <textarea
                    v-model="form.message"
                    rows="4"
                    class="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Any special requests or additional information..."
                ></textarea>
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
            <button
                v-if="currentStep > 1"
                type="button"
                class="px-6 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition-colors"
                @click="previousStep"
            >
              Previous
            </button>
            <button
                v-if="currentStep < totalSteps"
                type="button"
                class="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
                @click="nextStep"
            >
              Next
            </button>
            <button
                v-else
                type="submit"
                class="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
                :disabled="isLoading"
            >
              {{ isLoading ? 'Sending...' : 'Submit' }}
            </button>
          </div>

          <!-- Error Message -->
          <div
              v-if="formError"
              class="mt-4 p-4 bg-red-100 text-red-700 rounded-md text-center font-montserrat"
          >
            {{ formError }}
          </div>

          <!-- Success Message -->
          <div
              v-if="formSuccess"
              class="mt-4 p-4 bg-green-100 text-green-700 rounded-md text-center font-montserrat"
          >
            {{ formSuccess }}
          </div>
        </form>
      </div>
    </div>
  </div>
  <ModalInfo
      :is-open="showModal"
      :type="modalType"
      :data="modalData"
      @close="closeModal"
  />
</template>

<script setup lang="ts">
import {ref, reactive, computed} from 'vue'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import {useVuelidate} from '@vuelidate/core'
import {required, email, minLength} from '@vuelidate/validators'
import {useFetchData} from '~/composables/useFetchData'
import type {Artist, Package} from '~/api/types'
import countries from '~/static/data/countries.json'
import Title from "~/components/Title.vue";
import {useRuntimeConfig} from "nuxt/app";
import axios from 'axios'
import qs from 'qs'
import {useReCaptcha} from "vue-recaptcha-v3";


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
const { recaptchaLoaded, executeRecaptcha } = useReCaptcha()

// Nuova implementazione per ottenere il token reCAPTCHA
const getRecaptchaToken = async () => {
  try {
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
  selectedArtists: {
    deejay: { required: any }
  }
  selectedPackage: Package | null
  message: string
}

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  country: '',
  start: new Date(),
  end: new Date(),
  location: '',
  city: '',
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
      fieldsToValidate = ['start', 'end', 'location', 'city'];
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

  const result = await v$.value.$validate(fieldsToValidate)
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
        Selected Package: ${form.selectedPackage?.name || '-'} <br>
        Selected DJ: ${form.selectedArtists.deejay?.name || '-'} <br>
        Selected Artists: ${Object.keys(form.selectedArtists).map(key => {
          if (key !== 'deejay' && form.selectedArtists[key]) {
            return `${availableCategories.value.find(c => c.identifier === key)?.name}: ${form.selectedArtists[key]?.name || 'None'}`
          }
          return ''
        }).join('<br>')} <br>le
        Additional Message: ${form.message || 'No message provided'}
      `
    }

    await axios.post('https://php.localidautore.it/phpmailer/', qs.stringify(data), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })


    formSuccess.value = 'Your request has been submitted successfully!'
    formSubmitted.value = true
    // Reset form
    Object.keys(form).forEach(key => form[key] = key === 'gdprAccepted' ? false : '')
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
const handleStartDateChange = (newStartDate) => {
  // Aggiorna la data di fine a 4 ore dopo la data di inizio
  const endDate = new Date(newStartDate)
  endDate.setHours(endDate.getHours() + 4)
  form.end = endDate
}

// Funzione per gestire il cambio della data di fine
const handleEndDateChange = (newEndDate) => {
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

  const route = useRoute()
  console.log('Query:', route.query)

  try {
    await Promise.all([
      fetchArtists(),
      fetchPackages(),
      recaptchaLoaded() // Aggiunto qui l'inizializzazione del reCAPTCHA

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

  } catch (error) {
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

onMounted(()=>{
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


</style>