<template>
  <page class="quote">
    <Title title="Quote" image="slider-01"/>
    <div class="container">
      <form id="quote">
        <div class="progress-container mb-5">
          <div class="progress-step" :class="{'active': step >= 1}"></div>
          <div class="progress-step" :class="{'active': step >= 2}"></div>
          <div class="progress-step" :class="{'active': step >= 3}"></div>

          <div class="progress-step" :class="{'active': step >= 4}"></div>
          <div class="progress-step" :class="{'active': step >= 5}"></div>

          <div class="progress-step" :class="{'active': step >= 6}"></div>

        </div>


        <div v-show="step === 1">

          <div class="form-container">
            <h2 class="text-center form-title">Your Informations</h2>
            <div class="row">
              <div class="form-group col-md-6" :class="{ 'form-group--error': $v.firstname.$error} ">
                <label class="form__label">First Name</label>
                <input class="form__input" v-model.trim="$v.firstname.$model" id="firstname"/>
              </div>
              <div v-if="$v.firstname.$dirty">
                <div class="error" v-if="!$v.firstname.required">Name is required</div>
                <div class="error" v-if="!$v.firstname.minLength">Name must have at least
                  {{ $v.firstname.$params.minLength.min }}
                  letters.
                </div>
              </div>


              <div class="form-group col-md-6" :class="{ 'form-group--error': $v.lastname.$error} ">
                <label class="form__label">Last Name</label>
                <input class="form__input" v-model.trim="$v.lastname.$model" id="lastname"/>
              </div>
              <div v-if="$v.lastname.$dirty">
                <div class="error" v-if="!$v.lastname.required">Name is required</div>
                <div class="error" v-if="!$v.lastname.minLength">Name must have at least
                  {{ $v.lastname.$params.minLength.min }}
                  letters.
                </div>
              </div>

              <div class="form-group col-md-6" :class="{ 'form-group--error': $v.email.$error }">
                <label class="form__label">Email</label>
                <input class="form__input" v-model.trim="$v.email.$model" id="email"/>
              </div>
              <div v-if="$v.email.$dirty">
                <div class="error" v-if="!$v.email.required">Email is required</div>
                <div class="error" v-if="!$v.email.email">Name must have at least.</div>
              </div>


              <div class="form-group col-md-6" :class="{ 'form-group--error': $v.email.$error }">
                <label class="form__label">Country</label>
                <select id="country" name="country">
                  <option value=""> Select</option>
                  <option v-for="country in countries">{{ country.name }}</option>
                </select>
              </div>


            </div>
            <div class="text-center button-container">
              <button class="btn btn-primary" @click.prevent="next()">Next</button>
            </div>
          </div>

        </div>

        <div v-show="step === 2">
          <div class="form-container">
            <h2 class="text-center form-title">Event Informations</h2>
            <div class="row">
              <div class="form-group col-md-6" :class="{ 'form-group--error': $v.start.$error} ">
                <label class="form__label">Start</label>
                <date-picker v-model.trim="$v.start.$model" type="datetime" id="start"></date-picker>
              </div>
              <div v-if="$v.start.$dirty">
                <div class="error" v-if="!$v.start.required">Date is required</div>
              </div>

              <div class="form-group col-md-6" :class="{ 'form-group--error': $v.end.$error} ">
                <label class="form__label">End</label>
                <date-picker v-model.trim="$v.end.$model" type="datetime" id="end"></date-picker>
              </div>
              <div v-if="$v.end.$dirty">
                <div class="error" v-if="!$v.end.required">Date is required</div>
              </div>

              <div class="form-group col-md-6" :class="{ 'form-group--error': $v.location.$error }">
                <label class="form__label">Location</label>
                <input class="form__input" v-model.trim="$v.location.$model" id="location"/>
              </div>
              <div v-if="$v.location.$dirty">
                <div class="error" v-if="!$v.location.required">Email is required</div>
                <div class="error" v-if="!$v.location.minLength">Name must have at least
                  {{ $v.lastname.$params.minLength.min }}
                  letters.
                </div>
              </div>

              <div class="form-group col-md-6" :class="{ 'form-group--error': $v.city.$error }">
                <label class="form__label">City</label>
                <input class="form__input" v-model.trim="$v.city.$model" id="city"/>
              </div>
              <div v-if="$v.city.$dirty">
                <div class="error" v-if="!$v.city.required">Email is required</div>
                <div class="error" v-if="!$v.city.minLength">Name must have at least
                  {{ $v.lastname.$params.minLength.min }}
                  letters.
                </div>
              </div>


            </div>
            <div class="text-center button-container">
              <button class="btn btn-primary" @click.prevent="prev()">Prev</button>
              <button class="btn btn-primary" @click.prevent="next()">Next</button>
            </div>
          </div>
        </div>

        <div v-show="step === 3">
          <div class="form-container">
            <h2 class="text-center form-title">Choose Package</h2>
            <div class="cc-selector">
              <div class="row">
                <div v-for="pack in packages" class="col-md-6">
                  <input :id="pack.identifier" type="radio" name="packed"
                         :value="pack.identifier" v-model="packed" v-model.trim="$v.packed.$model"/>
                  <label class="drinkcard-cc" :for="pack.identifier"
                         :style="{'background-image': 'url(' + pack.cover.url + ')'}"></label>
                  <div class="col-12">{{ pack.identifier }}</div>
                </div>
              </div>
            </div>


            <div class="text-center button-container">
              <button class="btn btn-primary" @click.prevent="prev()">Prev</button>
              <button class="btn btn-primary" @click.prevent="next()">Next</button>
            </div>

          </div>
        </div>

        <div v-show="step === 4">

          <div class="form-container">
            <h2 class="text-center form-title">Choose Package</h2>
            <div class="cc-selector">
              <div class="row">
                <div v-for="deejay in deejays" class="col-md-6">
                  <input :id="deejay.identifier" type="radio" name="deejay"
                         :value="deejay.identifier"/>
                  <label class="drinkcard-cc" :for="deejay.identifier"
                         :style="{'background-image': 'url(' + deejay.cover.url + ')'}"></label>
                  <div class="col-12">{{ deejay.identifier }}</div>
                </div>
              </div>
            </div>
            <div class="text-center button-container">
              <button class="btn btn-primary" @click.prevent="prev()">Prev</button>
              <button class="btn btn-primary" @click.prevent="next()">Next</button>
            </div>
          </div>

        </div>

        <div v-show="step===5">
          <div class="form-container">
            <h2 class="text-center form-title">Do You need one or more musician?</h2>

            <div class="cc-selector">
              <div class="row">
                <div v-for="musician in musicians" class="col-md-6">
                  <input :id="musician.identifier" type="checkbox" name="artists[]"
                         :value="musician.identifier" v-model="artists"/>
                  <label class="drinkcard-cc" :for="musician.identifier"
                         :style="{'background-image': 'url(' + musician.cover.url + ')'}"></label>
                  <div class="col-12">{{ musician.identifier }}</div>
                </div>
              </div>
            </div>
            <div class="text-center button-container">
              <button class="btn btn-primary" @click.prevent="prev()">Prev</button>
              <button class="btn btn-primary" @click.prevent="next()">Next</button>
            </div>
          </div>

        </div>


        <div v-show="step===6">
          <div class="form-container">
            <h2 class="text-center form-title">Do You need one or more musician?</h2>

            <div class="text-center button-container">
              <button class="btn btn-primary" @click.prevent="prev()">Prev</button>
              <button class="btn btn-primary" @click.prevent="submit()">Submit</button>
            </div>
          </div>
        </div>
        <div v-if="error">Fill All Required Fields</div>
      </form>
    </div>
  </page>
</template>

<script>
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import {email, minLength, required} from 'vuelidate/lib/validators'
import getData from '@/mixins/fetchData';
import countries from '../static/data/countries.json';
import Title from "../components/home/Title";

Vue.use(Vuelidate)

export default {
  name: "quote",
  components: {Title},

  data() {
    return {
      deejays: [],
      packages: [],
      musicians: [],
      artists: [],
      countries: [],
      step: 1,
      firstname: '',
      lastname: '',
      email: '',
      start: '',
      end: '',
      location: '',
      city: '',
      pack: '',
      packed: '',
      error: false,
      registration: {
        name: null,
        email: null,
        street: null,
        city: null,
        state: null,
        numtickets: 0,
        shirtsize: 'XL'
      }
    }
  },

  validations: {
    firstname: {
      required,
      minLength: minLength(4)
    },
    lastname: {
      required,
      minLength: minLength(4)
    },
    email: {
      required,
      email
    },
    location: {
      required,
      minLength: minLength(4)
    },
    city: {
      required,
      minLength: minLength(4)
    },
    start: {
      required
    },
    end: {
      required
    },


    packed: {
      required
    }
  },

  mounted() {
    this.countries = countries;
    getData.getArtists().then((result) => {

      result.forEach(item => {
        if (item.category.identifier === 'deejay') {
          this.deejays.push(item);
        } else {
          this.musicians.push(item);
        }
      })

      console.log(this.deejays);

    });

    getData.getPackages().then((result) => {
      this.packages = result;
    })


  },

  methods: {
    prev() {
      this.step--;
    },
    next() {
      if (this.step === 1) {

        if (this.$v.firstname.$invalid || this.$v.lastname.$invalid || this.$v.email.$invalid) {
          this.error = true;
          setTimeout(() => {
            this.error = false
          }, 4000);
          return false;
        } else {
          this.error = false;

        }

      }

      if (this.step === 3) {
        if (this.packed == '') {
          this.error = true;
          return false
        } else {
          this.error = false;
        }
      }
      this.step++;
    },
    submit() {
      const form = document.getElementById('quote');
      const name = form.elements['firstname'];
      const email = form.elements['email'];
      const deejay = form.elements['deejay'];
      console.log(name.value);
      console.log(this.artists);
      console.log(email.value);
      console.log(deejay.value);
    }
  }
}
</script>

<style scoped>

</style>
