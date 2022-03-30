<template>
  <page class="quote">
    <Title title="Quote" image="header-quote"/>
    <div class="container">
      <form id="quote">
        <div class="progress-container mb-5">

          <div class="progress-step" v-for="(item, index) in 6" :class="{'active': step >= item}"
               @click="chooseStep(item)"></div>
          <!--          <div class="progress-step" :class="{'active': step >= 2}"></div>
                    <div class="progress-step" :class="{'active': step >= 3}"></div>

                    <div class="progress-step" :class="{'active': step >= 4}"></div>
                    <div class="progress-step" :class="{'active': step >= 5}"></div>

                    <div class="progress-step" :class="{'active': step >= 6}"></div>-->

        </div>


        <div v-show="step === 1">

          <div class="form-container">
            <h2 class="text-center form-title mb-5">Your Informations</h2>
            <div class="row">
              <div class="form-group col-md-6 mb-5" :class="{ 'form-group--error': $v.firstname.$error} ">
                <label class="form__label">First Name</label>
                <input class="form__input" v-model.trim="$v.firstname.$model" id="firstname"/>

                <div v-if="$v.firstname.$dirty">
                  <div class="error" v-if="!$v.firstname.required">Name is required</div>
                  <div class="error" v-if="!$v.firstname.minLength">Name must have at least
                    {{ $v.firstname.$params.minLength.min }}
                    letters.
                  </div>

                </div>

              </div>


              <div class="form-group col-md-6 mb-5" :class="{ 'form-group--error': $v.lastname.$error} ">
                <label class="form__label">Last Name</label>
                <input class="form__input" v-model.trim="$v.lastname.$model" id="lastname"/>
                <div v-if="$v.lastname.$dirty">
                  <div class="error" v-if="!$v.lastname.required">Name is required</div>
                  <div class="error" v-if="!$v.lastname.minLength">Name must have at least
                    {{ $v.lastname.$params.minLength.min }}
                    letters.
                  </div>
                </div>
              </div>


              <div class="form-group col-md-6 mb-5" :class="{ 'form-group--error': $v.email.$error }">
                <label class="form__label">Email</label>
                <input class="form__input" v-model.trim="$v.email.$model" id="email"/>
                <div v-if="$v.email.$dirty">
                  <div class="error" v-if="!$v.email.required">Email is required</div>
                  <div class="error" v-if="!$v.email.email">Email is invalid.</div>
                </div>
              </div>


              <div class="form-group col-md-6 mb-5" :class="{ 'form-group--error': $v.country.$error }">
                <label class="form__label">Country</label>
                <select id="country" name="country" v-model="country">
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
            <h2 class="text-center form-title mb-5">Event Informations</h2>
            <div class="row">
              <div class="form-group col-md-6 mb-5" :class="{ 'form-group--error': $v.start.$error} ">
                <label class="form__label">Start</label>
                <date-picker v-model.trim="$v.start.$model" type="datetime" id="start" :disabled-date="notBeforeToday"></date-picker>

                <div v-if="$v.start.$dirty">
                  <div class="error" v-if="!$v.start.required">Date is required</div>
                </div>


              </div>

              <div class="form-group col-md-6 mb-5" :class="{ 'form-group--error': $v.end.$error} ">
                <label class="form__label">End</label>
                <date-picker v-model.trim="$v.end.$model" type="datetime" id="end" :disabled-date="notBeforeToday"></date-picker>
                <div v-if="$v.end.$dirty">
                  <div class="error" v-if="!$v.end.required">Date is required</div>
                </div>
              </div>


              <div class="form-group col-md-6 mb-5" :class="{ 'form-group--error': $v.location.$error }">
                <label class="form__label">Location</label>
                <input class="form__input" v-model.trim="$v.location.$model" id="location"/>
                <div v-if="$v.location.$dirty">
                  <div class="error" v-if="!$v.location.required">Location is required</div>
                  <div class="error" v-if="!$v.location.minLength">Location must have at least
                    {{ $v.lastname.$params.minLength.min }}
                    letters.
                  </div>
                </div>
              </div>


              <div class="form-group col-md-6 mb-5" :class="{ 'form-group--error': $v.city.$error }">
                <label class="form__label">City</label>
                <input class="form__input" v-model.trim="$v.city.$model" id="city"/>
                <div v-if="$v.city.$dirty">
                  <div class="error" v-if="!$v.city.required">City is required</div>
                  <div class="error" v-if="!$v.city.minLength">City must have at least
                    {{ $v.lastname.$params.minLength.min }}
                    letters.
                  </div>
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
                         :value="pack" v-model="packed" v-model.trim="$v.packed.$model"/>
                  <label class="drinkcard-cc" :for="pack.identifier"
                         :style="{'background-image': 'url(' + pack.cover.url + ')'}"></label>
                  <div class="col-12">
                    <h4 class="text-center text-capitalize">{{ pack.identifier }} Package</h4>
                    <div class="icon-container" @click="openModal(pack, 'package')">
                      <font-awesome-icon :icon="['fas', 'info-circle']"/>
                    </div>
                  </div>
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
            <h2 class="text-center form-title">Choose Deejay</h2>
            <div class="cc-selector">
              <div class="row">
                <div v-for="deejay in deejays" class="col-md-6">
                  <input :id="deejay.identifier" type="radio" name="deejay"
                         :value="deejay" v-model="djs"/>
                  <label class="drinkcard-cc" :for="deejay.identifier"
                         :style="{'background-image': 'url(' + deejay.cover.url + ')'}"></label>
                  <div class="col-12">
                    <h4 class="text-center text-capitalize">{{ deejay.name }}</h4>
                    <div class="icon-container" @click="openModal(deejay, 'deejay')">
                      <font-awesome-icon :icon="['fas', 'info-circle']"/>
                    </div>
                  </div>
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
            <h2 class="text-center form-title mb-5">Specific Requests</h2>

            <div class="row">
              <div class="form-group col-md-12 mb-5">
                <label class="form__label text-center">Write a Message</label>

                <textarea rows="10" v-model="message"> </textarea>

              </div>
            </div>


            <!--            <div class="cc-selector">
                          <div class="row">
                            <div v-for="musician in musicians" class="col-md-6">
                              <input :id="musician.identifier" type="checkbox" name="artists[]"
                                     :value="musician.identifier" v-model="artists"/>
                              <label class="drinkcard-cc" :for="musician.identifier"
                                     :style="{'background-image': 'url(' + musician.cover.url + ')'}"></label>
                              <div class="col-12">{{ musician.identifier }}</div>
                            </div>
                          </div>
                        </div>-->
            <div class="text-center button-container">
              <button class="btn btn-primary" @click.prevent="prev()">Prev</button>
              <button class="btn btn-primary" @click.prevent="next()">Next</button>
            </div>
          </div>

        </div>


        <div v-show="step===6">
          <div class="form-container resume">
            <h2 class="text-center form-title mb-5">Resume</h2>
            <div class="row">

              <div class="col-md-6">
                <p>First Name: <span>{{ firstname }}</span></p>
              </div>

              <div class="col-md-6">
                <p>Last Name: <span>{{ lastname }}</span></p>
              </div>

            </div>


            <div class="row">
              <div class="col-md-6">
                <p>Email: <span>{{ email }}</span></p>
              </div>

              <div class="col-md-6">
                <p>Country: <span>{{ country }}</span></p>
              </div>

            </div>

            <div class="row">

              <div class="col-md-6">
                <p>Start Event: <span>{{ $dateFns.format(start, 'yyyy/MM/dd - HH:mm') }}</span></p>
              </div>

              <div class="col-md-6">
                <p>End Event: <span>{{ $dateFns.format(end, 'yyyy/MM/dd - HH:mm') }}</span></p>
              </div>


            </div>
            <div class="row">
              <div class="col-md-6">
                <p> Location: <span>{{ location }}</span></p>
              </div>

              <div class="col-md-6">
                <p> City: <span>{{ city }}</span></p>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <p>Package: <span>{{ packed.name }}</span></p>
              </div>

              <div class="col-md-6">
                <p>Deejay: <span>{{ djs.name }}</span></p>
              </div>
            </div>

            <div class="row" v-if="message!==''">

              <div class="col-md-12">
                <p class="text-center">Message:</p>
                <div>{{ message }}</div>
              </div>
            </div>

            <div class="text-center button-container mt-5">
              <button class="btn btn-primary" @click.prevent="prev()">Prev</button>
              <button class="btn btn-primary" @click.prevent="submit()">Submit</button>
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
        <div v-if="error" class="general-error"><p>Fill All Required Fields</p></div>
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
import Title from "../components/Title";
import ModalQuote from "../components/ModalQuote";
import _ from "lodash";
import calendarRules from "@/mixins/calendarRules";


Vue.use(Vuelidate)

export default {
  name: "quote",
  mixins:[calendarRules],
  components: {Title, ModalQuote},

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
      country: '',
      start: new Date(),
      end: new Date(),
      location: '',
      city: '',
      pack: '',
      packed: '',
      djs: '',
      message: '',
      error: false,
      loadingMessage: false,
      sentMessage: '',
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
    country:{
      required
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
    },

    djs: {
      required
    }
  },

  async mounted() {
    let today = new Date();
    this.countries = countries;

    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.error(e);
    }


    if (this.$route.params.package) {
      this.packed = this.$route.params.package;
    }

    this.start = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 20, 0)
    this.end = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 23, 0)
    getData.getArtists().then((result) => {

      result.forEach(item => {
        if (item.category.identifier === 'deejay') {
          this.deejays.push(item);
        } else {
          this.musicians.push(item);
        }
      })

      this.deejays = _.orderBy(this.deejays, ['order'], ['asc']);
      console.log(this.deejays);

    });

    getData.getPackages().then((result) => {
      this.packages = _.orderBy(result, ['order'], ['asc']);
    })


  },

  beforeDestroy() {
    this.$recaptcha.destroy()
  },

  methods: {
    prev() {
      this.step--;
      this.$scrollTo('#quote', 1000);
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
          this.$scrollTo('#quote', 1000);
          this.error = false;

        }

      }

      if (this.step === 2) {
        if (this.$v.start.$invalid || this.$v.end.$invalid || this.$v.location.$invalid || this.$v.city.$invalid) {
          this.error = true;
          setTimeout(() => {
            this.error = false
          }, 4000);
          return false;
        } else {
          this.$scrollTo('#quote', 1000);
          this.error = false;

        }

      }

      if (this.step === 3) {
        if (this.packed == '') {
          this.error = true;
          return false
        } else {
          this.$scrollTo('#quote', 1000);
          this.error = false;
        }
      }

      if (this.step === 4) {
        if (this.djs == '') {
          this.error = true;
          return false
        } else {
          this.$scrollTo('#quote', 1000);
          this.error = false;
        }
      }
      this.step++;
    },

    chooseStep(step) {
      this.step = step;
    },

    openModal(item, source) {
      if (window.innerWidth > 768) {
        this.$modal.show(ModalQuote, {item: item, source: source}, {scrollable: true, height: "auto", width: "80%"});
      } else {
        this.$modal.show(ModalQuote, {item: item, source: source}, {scrollable: true, height: "auto", width: "90%"});
      }
    },

    async submit() {
      const form = document.getElementById('quote');
      const name = form.elements['firstname'];
      const email = form.elements['email'];
      const deejay = form.elements['deejay'];
      console.log(name.value);
      console.log(this.artists);
      console.log(email.value);
      console.log(deejay.value);

      try {
        const token = await this.$recaptcha.execute('login');

        const qs = require('querystring');
        this.loadingMessage = true;

        let data = {
          sender: process.env.CONTACT_FORM_MAIL_SENDER,
          receiver: process.env.CONTACT_FORM_MAIL_RECEIVER,
          namesender: 'Contact Form Wedding Deejay',
          name: `${this.firstname} ${this.lastname}`,
          email: this.email,
          subject: 'Richiesta Disponibilità',
          message: `<p>Nome: ${this.firstname}</p><p>Cognome: ${this.lastname}</p><p>Country: ${this.country}</p><p>Event Start: ${this.start}</p><p>Event End: ${this.end}</p><p>Location: ${this.location}</p><p>Città: ${this.city}</p><p>Package: ${this.packed.name}</p><p>Deejay: ${this.djs.name}</p><p>Message: ${this.message}</p>`
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

      } catch (e) {
        alert(e);
      }
    }
  }
}
</script>

<style scoped>

</style>
