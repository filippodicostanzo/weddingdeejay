<!-- components/ContactForm.vue -->
<template>
  <div class="container mx-auto px-4">
    <form @submit.prevent="send" class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 font-montserrat">
        <!-- Full Name -->
        <div>
          <input
              type="text"
              v-model="form.fullname"
              class="w-full bg-transparent border-b border-gray-300 focus:border-primary-500 focus:outline-none text-center py-2"
              placeholder="Full Name"
              @blur="v$.fullname.$touch()"
          />
          <p v-if="v$.fullname.$error" class="text-red-500 text-xs mt-1 text-center">
            {{ v$.fullname.$errors[0].$message }}
          </p>
        </div>

        <!-- Email -->
        <div>
          <input
              type="email"
              v-model="form.email"
              class="w-full bg-transparent border-b border-gray-300 focus:border-primary-500 focus:outline-none text-center py-2"
              placeholder="Email"
              @blur="v$.email.$touch()"
          />
          <p v-if="v$.email.$error" class="text-red-500 text-xs mt-1  text-center">
            {{ v$.email.$errors[0].$message }}
          </p>
        </div>

        <!-- Subject -->
        <div class="md:col-span-2">
          <input
              type="text"
              v-model="form.subject"
              class="w-full bg-transparent border-b border-gray-300 focus:border-primary-500 focus:outline-none text-center py-2"
              placeholder="Subject"
              @blur="v$.subject.$touch()"
          />
          <p v-if="v$.subject.$error" class="text-red-500 text-xs mt-1 text-center">
            {{ v$.subject.$errors[0].$message }}
          </p>
        </div>

        <!-- Message -->
        <div class="md:col-span-2">
          <textarea
              v-model="form.message"
              rows="3"
              class="w-full bg-transparent border-b border-gray-300 focus:border-primary-500 focus:outline-none text-center py-2"
              placeholder="Message"
              @blur="v$.message.$touch()"
          ></textarea>
          <p v-if="v$.message.$error" class="text-red-500 text-xs mt-1  text-center">
            {{ v$.message.$errors[0].$message }}
          </p>
        </div>

        <!-- GDPR Acceptance -->
        <div class="md:col-span-2">
          <label class="flex items-center space-x-2 justify-center">
            <input
                type="checkbox"
                v-model="form.gdprAccepted"
                class="form-checkbox"
                @blur="v$.gdprAccepted.$touch()"
            />
            <span class="text-sm font-montserrat">
              I accept according to the European Regulation GDPR 679/2016
            </span>
          </label>
          <p v-if="v$.gdprAccepted.$error" class="text-red-500 text-xs mt-1 text-center">
            {{ v$.gdprAccepted.$errors[0].$message }}
          </p>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="text-center">
        <button
            type="submit"
            class="px-6 py-2 bg-primary rounded-full text-white font-montserrat  hover:opacity-85 transition-opacity disabled:opacity-50"
            :disabled="isLoading || v$.$invalid"
        >
          {{ isLoading ? 'Sending...' : 'Send' }}
        </button>
      </div>

      <!-- Status Messages -->
      <div v-if="status" class="text-center p-2">
        <p v-if="isLoading" class="text-blue-500">Loading...</p>
        <p v-if="status === 'success'" class="mt-4 p-4 bg-green-100 text-green-700 rounded-md text-center font-montserrat">Message sent successfully!</p>
        <p v-if="status === 'error'" class="mt-4 p-4 bg-red-100 text-red-700 rounded-md text-center font-montserrat">Error sending message.</p>
      </div>
    </form>
  </div>
</template>

<script setup>
import {computed, onMounted, reactive, ref} from 'vue'
import {useRuntimeConfig} from 'nuxt/app'
import {useVuelidate} from '@vuelidate/core'
import {useReCaptcha} from 'vue-recaptcha-v3';
import {email, minLength, required} from '@vuelidate/validators'
import axios from 'axios'
import qs from 'qs'


const config = useRuntimeConfig()
const { recaptchaLoaded, executeRecaptcha } = useReCaptcha()


const getRecaptchaToken = async () => {
  try {
    await recaptchaLoaded()
    return await executeRecaptcha('contact')
  } catch (error) {
    console.error('reCAPTCHA error:', error)
    throw error
  }
}

const form = reactive({
  fullname: '',
  email: '',
  subject: '',
  message: '',
  gdprAccepted: false
})

// Define validation rules
const rules = computed(() => ({
  fullname: {
    required,
    minLength: minLength(4),
    $message: {
      required: 'Full name is required',
      minLength: 'Full name must be at least 4 characters long'
    }
  },
  email: {
    required,
    email,
    $message: {
      required: 'Email is required',
      email: 'Please enter a valid email address'
    }
  },
  subject: {
    required,
    minLength: minLength(4),
    $message: {
      required: 'Subject is required',
      minLength: 'Subject must be at least 4 characters long'
    }
  },
  message: {
    required,
    minLength: minLength(4),
    $message: {
      required: 'Message is required',
      minLength: 'Message must be at least 4 characters long'
    }
  },
  gdprAccepted: {
    required: value => value === true,
    $message: {
      required: 'You must accept the GDPR conditions to proceed'
    }
  }
}))

// Create vuelidate object
const v$ = useVuelidate(rules, form)

const status = ref('')
const isLoading = ref(false)

const send = async () => {
  const isValid = await v$.value.$validate()
  if (!isValid) return

  try {
    isLoading.value = true
    status.value = ''

    const token = await getRecaptchaToken()

    const data = {
      sender: config.public.contactMailSender,
      receiver: config.public.contactMailReceiver,
      namesender: 'Contact Form Wedding Deejay',
      name: form.fullname,
      email: form.email,
      subject: form.subject,
      message: form.message
    }

    await axios.post('https://php.localidautore.it/phpmailer/', qs.stringify(data), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })

    status.value = 'success'
    // Reset form
    Object.keys(form).forEach(key => form[key] = key === 'gdprAccepted' ? false : '')
    v$.value.$reset() // Reset validation state
  } catch (error) {
    console.error('Send error:', error)
    status.value = 'error'
  } finally {
    isLoading.value = false
  }
}

onMounted(async () => {
  try {
    await recaptchaLoaded()
  } catch (e) {
    console.error('reCAPTCHA initialization error:', e)
  }
})
</script>