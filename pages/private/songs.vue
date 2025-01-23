<!-- pages/private/songs.vue -->
<template>
  <div class="bg-third">
    <Title title="Requested Songs" image="header-songs"/>

    <div class="container mx-auto px-4 py-8" v-if="isAuthenticated">
      <form @submit.prevent="handleSubmit" class="max-w-4xl mx-auto font-montserrat">
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

        <!-- Step 1: Event Info -->
        <div v-show="currentStep === 1" class="space-y-6">
          <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Event Info</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Bride Name -->
            <div class="form-group">
              <label class="block text-sm font-medium text-gray-700 mb-1">Name of the Bride</label>
              <input
                  v-model="state.bride"
                  type="text"
                  class="w-full px-3 py-2 border-b focus:outline-none focus:border-primary"
                  :class="{ 'border-red-500': v$.bride.$error }"
              />
              <div v-if="v$.bride.$error" class="text-red-500 text-sm mt-1">
                {{ v$.bride.$errors[0].$message }}
              </div>
            </div>

            <!-- Groom Name -->
            <div class="form-group">
              <label class="block text-sm font-medium text-gray-700 mb-1">Name of the Groom</label>
              <input
                  v-model="state.groom"
                  type="text"
                  class="w-full px-3 py-2 border-b focus:outline-none focus:border-primary"
                  :class="{ 'border-red-500': v$.groom.$error }"
              />
              <div v-if="v$.groom.$error" class="text-red-500 text-sm mt-1">
                {{ v$.groom.$errors[0].$message }}
              </div>
            </div>

            <!-- Email -->
            <div class="form-group">
              <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                  v-model="state.email"
                  type="text"
                  class="w-full px-3 py-2 border-b focus:outline-none focus:border-primary"
                  :class="{ 'border-red-500': v$.email.$error }"
              />
              <div v-if="v$.email.$error" class="text-red-500 text-sm mt-1">
                {{ v$.email.$errors[0].$message }}
              </div>
            </div>

            <!-- Country -->
            <div class="form-group">
              <label class="block text-sm font-medium text-gray-700 mb-1">Country</label>
              <select
                  v-model="state.country"
                  class="w-full px-3 py-2 border-b focus:outline-none focus:border-primary"
                  :class="{'border-red-500': v$.country.$error}"
              >
                <option value="">Select</option>
                <option v-for="country in countries" :key="country.name" :value="country.name">
                  {{ country.name }}
                </option>
              </select>
              <div v-if="v$.country.$error" class="text-red-500 text-sm mt-1">
                {{ v$.country.$errors[0].$message }}
              </div>
            </div>
          </div>

          <!-- Seconda grid per Event Date, Location e N° of Guests -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <!-- Event Date -->
            <div class="form-group">
              <label class="block text-sm font-medium text-gray-700 mb-1">Event Date</label>
              <Datepicker
                  v-model="state.date"
                  type="date"
                  class="w-full"
                  :class="{ 'border-red-500': v$.date.$error }"
                  :disabled-date="notBeforeToday"
                  :enable-time-picker="false"
                  auto-apply
              />
              <div v-if="v$.date.$error" class="text-red-500 text-sm mt-1">
                {{ v$.date.$errors[0].$message }}
              </div>
            </div>

            <!-- Location -->
            <div class="form-group">
              <label class="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                  v-model="state.location"
                  type="text"
                  class="w-full px-3 py-2 border rounded-md"
                  :class="{'border-red-500': v$.location.$error}"
              />
              <div v-if="v$.location.$error" class="text-red-500 text-sm mt-1">
                {{ v$.location.$errors[0].$message }}
              </div>
            </div>

            <!-- Number of Guests -->
            <div class="form-group">
              <label class="block text-sm font-medium text-gray-700 mb-1">N° of Guests</label>
              <input
                  v-model="state.guests"
                  type="number"
                  class="w-full px-3 py-2 border rounded-md"
                  :class="{'border-red-500': v$.guests.$error}"
              />
              <div v-if="v$.guests.$error" class="text-red-500 text-sm mt-1">
                {{ v$.guests.$errors[0].$message }}
              </div>
            </div>
          </div>
        </div>

        <!-- Step 2: Specific Songs -->
        <div v-show="currentStep === 2" class="space-y-6">
          <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Specific Songs</h2>
          <p class="text-center text-gray-600">Please fill in only the necessary fields</p>

          <div v-for="(song, index) in state.songs" :key="index"
               class="grid grid-cols-12 gap-4 items-center mb-4">
            <div class="col-span-1 text-center">{{ index + 1 }}</div>
            <div class="col-span-4">
              <select v-model="song.moment"
                      class="w-full px-3 py-2 border rounded-md">
                <option v-for="opt in state.options" :key="opt" :value="opt">
                  {{ opt }}
                </option>
              </select>
            </div>
            <div class="col-span-5">
              <input type="text"
                     v-model="song.song"
                     placeholder="Artist - Title"
                     class="w-full px-3 py-2 border rounded-md"/>
            </div>
            <div class="col-span-1">
              <button v-if="state.songs.length > 1"
                      @click="deleteValue(index)"
                      type="button"
                      class="text-red-500 hover:text-red-700">
                <font-awesome-icon :icon="['fas', 'minus-circle']" class="mr-2"/>
              </button>
            </div>
            <div class="col-span-1">
              <button v-if="index + 1 === state.songs.length"
                      @click="addValue"
                      class="text-green-500 hover:text-green-700">
                <font-awesome-icon :icon="['fas', 'plus-circle']" class="mr-2"/>
              </button>
            </div>
          </div>
        </div>

        <!-- Step 3: Playlists -->
        <div v-show="currentStep === 3" class="space-y-6">
          <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Send a Playlist</h2>
          <p class="text-center text-gray-600">Please fill in only the necessary fields</p>

          <div v-for="(playlist, index) in state.playlists" :key="index"
               class="grid grid-cols-12 gap-4 items-center mb-4">
            <div class="col-span-1 text-center">{{ index + 1 }}</div>
            <div class="col-span-4">
              <input type="text"
                     v-model="playlist.description"
                     placeholder="Description (Dinner, Party, etc)"
                     class="w-full px-3 py-2 border rounded-md"/>
            </div>
            <div class="col-span-5">
              <input type="text"
                     v-model="playlist.url"
                     placeholder="Url Playlist (Spotify, Apple Music, etc)"
                     class="w-full px-3 py-2 border rounded-md"/>
            </div>
            <div class="col-span-1">
              <button v-if="state.playlists.length > 1"
                      @click="deletePlaylistValue(index)"
                      type="button"
                      class="text-red-500 hover:text-red-700">
                <font-awesome-icon :icon="['fas', 'minus-circle']" class="mr-2"/>
              </button>
            </div>
            <div class="col-span-1">
              <button v-if="index + 1 === state.playlists.length"
                      @click="addPlaylistValue"
                      class="text-green-500 hover:text-green-700">
                <font-awesome-icon :icon="['fas', 'plus-circle']" class="mr-2"/>
              </button>
            </div>
          </div>
        </div>

        <!-- Step 4: Message -->
        <div v-show="currentStep === 4" class="space-y-6">
          <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Specific Requests</h2>

          <div class="form-group">
            <label class="block text-sm font-medium text-gray-700 mb-1 text-center">Write a Message</label>
            <textarea
                v-model="state.message"
                rows="10"
                class="w-full px-3 py-2 border rounded-md resize-none"
            ></textarea>
          </div>
        </div>

        <!-- Step 5: Resume -->
        <div v-show="currentStep === 5" class="space-y-6">
          <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Resume</h2>

          <div class="bg-white p-6 rounded-lg shadow">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p class="text-gray-600">Name of the Bride: <span class="font-medium text-gray-900">{{
                  state.bride
                }}</span></p>
              <p class="text-gray-600">Name of the Groom: <span class="font-medium text-gray-900">{{
                  state.groom
                }}</span></p>
              <p class="text-gray-600">Email: <span class="font-medium text-gray-900">{{ state.email }}</span></p>
              <p class="text-gray-600">Country: <span class="font-medium text-gray-900">{{ state.country }}</span></p>
              <p class="text-gray-600">Date of the Event: <span
                  class="font-medium text-gray-900">{{ formatDate(state.date) }}</span></p>
              <p class="text-gray-600">Location: <span class="font-medium text-gray-900">{{ state.location }}</span></p>
            </div>

            <!-- Songs Section -->
            <div v-if="state.songs.length > 0" class="mt-6">
              <h3 class="text-lg font-semibold mb-3">Specific Songs</h3>
              <div v-for="(song, index) in state.songs" :key="index" class="grid grid-cols-12 gap-4 mb-2">
                <div class="col-span-1">{{ index + 1 }}</div>
                <div class="col-span-5">{{ song.moment }}</div>
                <div class="col-span-6">{{ song.song }}</div>
              </div>
            </div>

            <!-- Playlists Section -->
            <div v-if="state.playlists.length > 0" class="mt-6">
              <h3 class="text-lg font-semibold mb-3">Playlists</h3>
              <div v-for="(playlist, index) in state.playlists" :key="index" class="grid grid-cols-12 gap-4 mb-2">
                <div class="col-span-1">{{ index + 1 }}</div>
                <div class="col-span-5">{{ playlist.description }}</div>
                <div class="col-span-6">{{ playlist.url }}</div>
              </div>
            </div>

            <!-- Message Section -->
            <div v-if="state.message" class="mt-6">
              <h3 class="text-lg font-semibold mb-3">Message</h3>
              <p class="text-gray-600">{{ state.message }}</p>
            </div>
          </div>

          <!-- Submit Status Messages -->
          <div class="mt-4">
            <div v-if="loadingMessage" class="bg-blue-100 text-blue-700 p-3 rounded-md text-center">
              Loading...
            </div>
            <div v-if="sentMessage === true" class="bg-green-100 text-green-700 p-3 rounded-md text-center">
              Message has been sent
            </div>
            <div v-if="sentMessage === false" class="bg-red-100 text-red-700 p-3 rounded-md text-center">
              Message has not been sent
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="flex justify-center gap-4 mt-6">
          <button
              v-if="currentStep > 1 && !formSubmitted"
              @click.prevent="prev"
              type="button"
              class="px-6 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition-colors"
          >
            Previous
          </button>
          <button
              v-if="currentStep < 5 && !formSubmitted"
              type="submit"
              class="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
          >
            Next
          </button>
          <button
              v-if="currentStep === 5 && !formSubmitted"
              type="submit"
              class="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
          >
            Submit
          </button>
          <button
              v-if="formSubmitted"
              @click="backToStart"
              type="button"
              class="px-6 py-2 bg-primary-dark text-white rounded-full hover:bg-primary transition-colors"
          >
            Back to Start
          </button>
        </div>

        <!-- General Error Message -->
        <div v-if="error" class="mt-4 p-3 bg-red-100 text-red-700 rounded-md text-center">
          Fill All Required Fields
        </div>
      </form>
    </div>

    <!-- Access Denied Message -->
    <div v-else class="flex flex-col items-center justify-center min-h-[500px]">
      <h1 class="text-6xl font-bold text-red-500">403</h1>
      <h2 class="text-2xl text-gray-700 mt-4">Access forbidden</h2>
    </div>
  </div>
</template>

<script setup>
import {ref, reactive} from 'vue'
import {useVuelidate} from '@vuelidate/core'
import {required, email, minLength} from '@vuelidate/validators'
import {useRoute} from 'vue-router'
import {format} from 'date-fns'
import countries from '~/static/data/countries.json'
import Datepicker from "@vuepic/vue-datepicker";
import Title from "~/components/Title.vue";
import {useReCaptcha} from "vue-recaptcha-v3";
import _ from 'lodash'
import qs from "qs";
import axios from "axios"; // Aggiungi questa importazione


// Utilizziamo il composable useAuth
const {checkAccess} = useAuth()
const isAuthenticated = ref(false)

// State
const currentStep = ref(1)
const error = ref(false)
const loadingMessage = ref(false)
const sentMessage = ref('')
const formSubmitted = ref(false)
const totalSteps = ref(5)

const config = useRuntimeConfig()

const {recaptchaLoaded, executeRecaptcha} = useReCaptcha()

const getRecaptchaToken = async () => {
  try {
    await recaptchaLoaded()
    return await executeRecaptcha('contact')
  } catch (error) {
    console.error('reCAPTCHA error:', error)
    throw error
  }
}


// Form state
const state = reactive({
  bride: '',
  groom: '',
  email: '',
  country: '',
  date: new Date(),
  location: '',
  guests: '',
  options: ['Specific Moment', 'Entrance', 'Cake Cutting', 'First Dance', 'Bride with Parent', 'Groom with Parent', 'Bouquet Toss', 'Last Dance', 'Other'],
  songs: [{order: 1, moment: 'Specific Moment', song: ''}],
  playlists: [{order: 1, description: '', url: ''}],
  message: ''
})

// Validation rules
const rules = {
  bride: {required, minLength: minLength(4)},
  groom: {required, minLength: minLength(4)},
  email: {required, email},
  country: {required},
  date: {required},
  location: {required, minLength: minLength(4)},
  guests: {required}
}

// Create vuelidate instance
const v$ = useVuelidate(rules, state)

// Calendar rules
const notBeforeToday = (date) => {
  return date < new Date()
}

// Format date helper
const formatDate = (date) => {
  return format(new Date(date), 'yyyy/MM/dd')
}

// Navigation methods
const next = async () => {
  if (currentStep.value === 1) {
    const isValid = await v$.value.$validate()
    if (!isValid) {
      error.value = true
      setTimeout(() => {
        error.value = false
      }, 4000)
      return
    }
  }
  currentStep.value++
  scrollToTop()
}

const prev = () => {
  currentStep.value--
  scrollToTop()

  if (currentStep.value === 2 && state.songs.length === 0) {
    state.songs.push({order: 1, moment: 'Entrance', song: ''})
  }

  if (currentStep.value === 3 && state.playlists.length === 0) {
    state.playlists.push({order: 1, description: '', url: ''})
  }
}

// Songs and Playlists management
const addValue = () => {
  state.songs.push({order: state.songs.length + 1, moment: 'Specific Moment', song: ''})
}

const deleteValue = (index) => {
  state.songs.splice(index, 1)
}

const addPlaylistValue = () => {
  state.playlists.push({order: state.playlists.length + 1, description: '', url: ''})
}

const deletePlaylistValue = (index) => {
  state.playlists.splice(index, 1)
}

// Helper methods
const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'})
}

// Aggiungi questa nuova funzione per gestire il ritorno alla prima pagina
const backToStart = () => {
  // Reset tutti gli stati
  state.bride = ''
  state.groom = ''
  state.email = ''
  state.country = ''
  state.date = new Date()
  state.location = ''
  state.guests = ''
  state.songs = [{order: 1, moment: 'Specific Moment', song: ''}]
  state.playlists = [{order: 1, description: '', url: ''}]
  state.message = ''

  // Reset degli stati di controllo
  currentStep.value = 1
  error.value = false
  loadingMessage.value = false
  sentMessage.value = ''
  formSubmitted.value = false

  // Scroll in alto
  scrollToTop()
}

// Handle form submit
const handleSubmit = async (e) => {
  e.preventDefault()

  if (currentStep.value < 5) {
    // Se non siamo all'ultimo step, facciamo la validazione e andiamo avanti
    if (currentStep.value === 1) {
      const isValid = await v$.value.$validate()
      if (!isValid) {
        error.value = true
        setTimeout(() => {
          error.value = false
        }, 4000)
        return
      }
    }
    next()
  } else {
    // Se siamo all'ultimo step, facciamo il submit
    await submit()
  }
}

// Submit form
const submit = async () => {
  try {
    loadingMessage.value = true

    // Get reCAPTCHA token
    const token = await getRecaptchaToken()


    // Clean up empty songs and playlists
    _.remove(state.songs, {song: ''})
    _.remove(state.playlists, {url: ''})

    // Prepare songs list HTML
    let stringSongs = '<ul>'
    state.songs.forEach((item, index) => {
      stringSongs += `<li>${index + 1} - ${item.moment} - ${item.song}</li>`
    })
    stringSongs += '</ul>'

    // Prepare playlists HTML
    let stringPlaylists = '<ul>'
    state.playlists.forEach((item, index) => {
      stringPlaylists += `<li>${index + 1} - ${item.description} - ${item.url}</li>`
    })
    stringPlaylists += '</ul>'

    // Prepare form data
    const formData = {
      sender: config.public.contactMailSender,
      receiver: config.public.contactMailReceiver,
      namesender: 'Contact Form Wedding Deejay',
      name: `${state.groom} & ${state.bride}`,
      email: state.email,
      subject: `Events Playlist - ${format(new Date(state.date), 'dd/MM/yyyy')}`,
      message: `
        <p>Bride: ${state.bride}</p>
        <p>Groom: ${state.groom}</p>
        <p>Country: ${state.country}</p>
        <p>Event Date: ${format(new Date(state.date), 'dd/MM/yyyy')}</p>
        <p>Location: ${state.location}</p>
        <p>N° of Guests: ${state.guests}</p>
        <p>Songs List:</p>${stringSongs}
        <p>Playlists:</p>${stringPlaylists}
        <p>Message: ${state.message}</p>
      `,
      recaptchaToken: token // Include reCAPTCHA token

    }

    // Send form data
    await axios.post('https://php.localidautore.it/phpmailer/', qs.stringify(formData), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })

    sentMessage.value = true
    formSubmitted.value = true // Aggiungi questa riga
  } catch (error) {
    console.error('Submit error:', error)
    sentMessage.value = false
  } finally {
    loadingMessage.value = false
  }
}

// Lifecycle
onMounted(async () => {
  const route = useRoute()
  isAuthenticated.value = checkAccess()

  if (isAuthenticated.value) {
    try {
      await recaptchaLoaded()
    } catch (e) {
      console.error('reCAPTCHA initialization error:', e)
    }
  }
})

</script>

<style lang="scss" scoped>
:deep(.dp__input) {
  padding: 8px 30px 8px 35px;
  font-family: theme('fontFamily.montserrat');
}
</style>