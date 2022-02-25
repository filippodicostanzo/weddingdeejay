<template>
  <div class="container">
    <div class="row">
      <div class="form-group col-md-6" :class="{ 'form-group--error': $v.fullname.$error} ">
        <input type="text" class="form__input" v-model.trim="$v.fullname.$model" id="fullname" placeholder="Full Name"/>
        <div v-if="$v.fullname.$dirty">
          <div class="error" v-if="!$v.fullname.required">Fullname is required</div>
          <div class="error" v-if="!$v.fullname.minLength">Fullname must have at least
            {{ $v.fullname.$params.minLength.min }}
            letters.
          </div>
        </div>
      </div>


      <div class="form-group col-md-6" :class="{ 'form-group--error': $v.email.$error }">
        <input type="text" class="form__input" v-model.trim="$v.email.$model" id="email" placeholder="Email"/>
        <div v-if="$v.email.$dirty">
          <div class="error" v-if="!$v.email.required">Email is required</div>
          <div class="error" v-if="!$v.email.email">Email is invalid.</div>
        </div>
      </div>

      <div class="form-group col-md-12" :class="{ 'form-group--error': $v.subject.$error} ">

        <input type="text" class="form__input" v-model.trim="$v.subject.$model" id="subject" placeholder="Subject"/>
        <div v-if="$v.subject.$dirty">
          <div class="error" v-if="!$v.subject.required">Subject is required</div>
          <div class="error" v-if="!$v.subject.minLength">Subject must have at least
            {{ $v.subject.$params.minLength.min }}
            letters.
          </div>
        </div>
      </div>

      <div class="form-group col-md-12" :class="{ 'form-group--error': $v.message.$error} ">
        <textarea class="form__input" v-model.trim="$v.message.$model" id="message" placeholder="Message" rows="3"/>
        <div v-if="$v.message.$dirty">
          <div class="error" v-if="!$v.message.required">Message is required</div>
          <div class="error" v-if="!$v.message.minLength">Message must have at least
            {{ $v.message.$params.minLength.min }}
            letters.
          </div>
        </div>
      </div>

      <div class="form-group col-md-12" :class="{ 'form-group--error': $v.acceptance.$error} ">
        <input type="checkbox" v-model="acceptance"/>
        <span class="acceptance"> I agree according to the European Regulation GDPR 679/2016</span>
        <div v-if="$v.acceptance.$dirty">
          <div class="error" v-if="!$v.acceptance.required">You must accept the conditions</div>
        </div>
      </div>

    </div>

    <div class="row pt-3">
      <div class="form-group m-auto">
        <div class="actions text-center">
          <button type="submit" class="btn btn-outline-secondary" @click.prevent="send"> Send
          </button>
        </div>
      </div>
    </div>

    <div class="row pt-3">
      <div class="col-12">
        <div class="alert-info text-center p-2" v-if="loadingMessage"><p>Loading...</p></div>
        <div class="alert-success text-center p-2" v-if="sentMessage"><p>Message has been sent</p></div>
        <div class="alert-danger text-center p-2" v-if="sentMessage===false"><p>Message has not been sent</p></div>
      </div>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import {email, minLength, required} from "vuelidate/lib/validators";

Vue.use(Vuelidate)


export default {
  name: "ContactForm.vue",
  data() {
    return {
      fullname: '',
      email: '',
      subject: '',
      message: '',
      acceptance: [],
      submitStatus: null,
      loadingMessage: false,
      sentMessage: '',
    }
  },

  async mounted() {
    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.error(e);
    }

  },

  beforeDestroy() {
    this.$recaptcha.destroy()
  },

  validations: {
    fullname: {
      required,
      minLength: minLength(4)
    },
    email: {
      required,
      email
    },
    subject: {
      required,
      minLength: minLength(4)
    },
    message: {
      required,
      minLength: minLength(4)
    },
    acceptance: {
      required
    }
  },
  methods: {
    async send() {


      //  console.log('ReCaptcha token:', token);

      this.$v.$touch();

      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {


        try {

          const token = await this.$recaptcha.execute('login')
          this.loadingMessage = true;
          const qs = require('querystring');
          let data = {
            sender: process.env.CONTACT_FORM_MAIL_SENDER,
            receiver: process.env.CONTACT_FORM_MAIL_RECEIVER,
            namesender: 'Contact Form Wedding Deejay',
            name: this.fullname,
            email: this.email,
            subject: this.subject,
            message: this.message
          };

          this.$axios.$post('https://php.localidautore.it/phpmailer/', qs.stringify(data),
            {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            }).then((message) => {
            this.loadingMessage = false;
            this.sentMessage = true;
          }).catch((error) => {
            this.loadingMessage = false;
            this.sentMessage = false;
          });
        }
        catch (e) {
          alert(e);
        }

        // do your submit logic here

      }


    }
  }
}
</script>

<style lang="scss" scoped>

@import 'assets/scss/variables';

.form-group {

  input[type="text"], textarea {
    background: transparent;
    border: 0;
    border-bottom: solid 1px;
    text-align: center;
    width: 100%;
    margin: 5px 0;
    padding: 5px 0;

    &:focus-visible {
      outline: none;
      border-bottom: solid 2px $primary;
    }
  }

  .acceptance {
    font-size: 12px;
  }

  .error {
    font-size: 10px;
    padding-top: 5px;
    color: red;
  }
}


</style>
