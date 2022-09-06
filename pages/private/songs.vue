<template>
  <div class="page-private">
    <Title title="Requested Songs" image="header-playlists"/>
    <div class="container pt-5 pb-5" v-if="access===true">

      <form id="private">
        <div class="progress-container mb-5">

          <div class="progress-step" v-for="(item, index) in 5" :class="{'active': step >= item}">
          </div>
          <div v-show="step === 1">
            <div class="form-container event-info">
              <h2 class="text-center form-title mb-5">Event Info</h2>
              <div class="row">
                <div class="form-group col-md-6 mb-5" :class="{ 'form-group--error': $v.bride.$error} ">
                  <label class="form__label">Name of the Bride</label>
                  <input class="form__input" v-model.trim="$v.bride.$model" id="firstname"/>

                  <div v-if="$v.bride.$dirty">
                    <div class="error" v-if="!$v.bride.required">Name of the Bride is required</div>
                    <div class="error" v-if="!$v.bride.minLength">Name of the Bride must have at least
                      {{ $v.bride.$params.minLength.min }}
                      letters.
                    </div>

                  </div>

                </div>


                <div class="form-group col-md-6 mb-5" :class="{ 'form-group--error': $v.groom.$error} ">
                  <label class="form__label">Name of the Groom</label>
                  <input class="form__input" v-model.trim="$v.groom.$model" id="grom"/>
                  <div v-if="$v.groom.$dirty">
                    <div class="error" v-if="!$v.groom.required">Name of the Groom is required</div>
                    <div class="error" v-if="!$v.groom.minLength">Name of the Groom must have at least
                      {{ $v.groom.$params.minLength.min }}
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

                <div class="form-group col-md-4 mb-5" :class="{ 'form-group--error': $v.date.$error} ">
                  <label class="form__label">Event Date</label>
                  <date-picker v-model.trim="$v.date.$model" type="date" id="date"
                               :disabled-date="notBeforeToday"></date-picker>

                  <div v-if="$v.date.$dirty">
                    <div class="error" v-if="!$v.date.required">Date is required</div>
                  </div>


                </div>

                <div class="form-group col-md-4 mb-5" :class="{ 'form-group--error': $v.location.$error }">
                  <label class="form__label">Location</label>
                  <input class="form__input" v-model.trim="$v.location.$model" id="location"/>
                  <div v-if="$v.location.$dirty">
                    <div class="error" v-if="!$v.location.required">Location is required</div>
                    <div class="error" v-if="!$v.location.minLength">Location must have at least
                      {{ $v.location.$params.minLength.min }}
                      letters.
                    </div>
                  </div>
                </div>

                <div class="form-group col-md-4 mb-5" :class="{ 'form-group--error': $v.guests.$error }">
                  <label class="form__label">N° of Guests</label>
                  <input class="form__input" v-model.trim="$v.guests.$model" id="guests"/>
                  <div v-if="$v.guests.$dirty">
                    <div class="error" v-if="!$v.guests.required">N° of Guests is required</div>
                  </div>
                </div>

              </div>
              <div class="text-center button-container">
                <button class="btn btn-primary" @click.prevent="next()">Next</button>
              </div>
            </div>


          </div>

          <div v-show="step ===2">
            <div class="form-container songs">
              <h2 class="text-center form-title mb-5">Specific Songs</h2>
              <p class="text-center">Please fill in only the necessary fields</p>

              <div class="row align-items-center" v-for="(item, index) in songs">
                <div class="col-md-1">{{ index + 1 }}</div>
                <div class="col-md-4">
                  <select v-model="item.moment">
                    <option v-for="opt in options" :value="opt">{{ opt }}</option>
                  </select>
                </div>
                <div class="col-md-5">
                  <input type="text" v-model="item.song" placeholder="Artist - Title">
                </div>
                <div class="col-md-1">
                  <div @click="deleteValue(index)" v-if="songs.length>1" class="remove">
                    <font-awesome-icon :icon="['fas', 'times-circle']"/>
                  </div>
                </div>
                <div class="col-md-1">
                  <div @click="addValue()" v-if="index+1===songs.length" class="add">
                    <font-awesome-icon :icon="['fas', 'plus-circle']"/>
                  </div>
                </div>

              </div>

              <div class="text-center button-container pt-3">
                <button class="btn btn-primary" @click.prevent="prev()">Prev</button>
                <button class="btn btn-primary" @click.prevent="next()">Next</button>
              </div>
            </div>
          </div>

          <div v-show="step ===3">
            <div class="form-container play">
              <h2 class="text-center form-title mb-5">Send a Playlists</h2>
              <p class="text-center">Please fill in only the necessary fields</p>
              <div class="row align-items-center" v-for="(item, index) in playlists">
                <div class="col-md-1">{{ index + 1 }}</div>
                <div class="col-md-4">
                  <input type="text" v-model="item.description" placeholder="Description">
                </div>
                <div class="col-md-5">
                  <input type="text" v-model="item.url" placeholder="Url Playlist (Spotify, ecc)">
                </div>
                <div class="col-md-1">
                  <div @click="deletePlaylistValue(index)" v-if="playlists.length>1" class="remove">
                    <font-awesome-icon :icon="['fas', 'times-circle']"/>
                  </div>
                </div>
                <div class="col-md-1">
                  <div @click="addPlaylistValue()" v-if="index+1===playlists.length" class="add">
                    <font-awesome-icon :icon="['fas', 'plus-circle']"/>
                  </div>
                </div>

              </div>
              <div class="text-center button-container pt-3">
                <button class="btn btn-primary" @click.prevent="prev()">Prev</button>
                <button class="btn btn-primary" @click.prevent="next()">Next</button>
              </div>
            </div>
          </div>

          <div v-show="step ===4">
            <div class="form-container">

              <h2 class="text-center form-title mb-5">Specific Requests</h2>

              <div class="row">
                <div class="form-group col-md-12 mb-5">
                  <label class="form__label text-center">Write a Message</label>

                  <textarea rows="10" v-model="message"> </textarea>

                </div>
              </div>

              <div class="text-center button-container">
                <button class="btn btn-primary" @click.prevent="prev()">Prev</button>
                <button class="btn btn-primary" @click.prevent="next()">Next</button>
              </div>
            </div>
          </div>
          <div v-show="step ===5">
            <div class="form-container resume">
              <h2 class="text-center form-title mb-5">Resume</h2>
              <div class="row">

                <div class="col-md-6">
                  <p>Name of the Bride: <span>{{ bride }}</span></p>
                </div>

                <div class="col-md-6">
                  <p>Name of the Groom: <span>{{ groom }}</span></p>
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
                  <p>Date of the Event: <span>{{ $dateFns.format(date, 'yyyy/MM/dd') }}</span></p>
                </div>

                <div class="col-md-6">
                  <p>Location: <span>{{ location }}</span></p>
                </div>

              </div>

              <div class="row pt-3 pb-3 bg-white" v-if="songs.length>0">
                <hr>
              </div>


              <div class="row bg-white" v-if="songs.length>0">
                <div class="col-12"><h3>Specific Songs </h3></div>
              </div>

              <div class="row align-items-center" v-for="(item, index) in songs">


                <div class="col-md-1">
                  <p>{{ index + 1 }}</p>
                </div>
                <div class="col-md-5">
                  <p>{{ item.moment }}</p>
                </div>
                <div class="col-md-6">
                  <p>{{ item.song }}</p>
                </div>

              </div>

              <div class="row pt-3 pb-3 bg-white" v-if="playlists.length>0">
                <hr>
              </div>

              <div class="row bg-white" v-if="playlists.length>0">
                <div class="col-12"><h3>Playlists </h3></div>
              </div>

              <div class="row align-items-center" v-for="(item, index) in playlists">


                <div class="col-md-1">
                  <p>{{ index + 1 }}</p>
                </div>
                <div class="col-md-5">
                  <p>{{ item.description }}</p>
                </div>
                <div class="col-md-6">
                  <p>{{ item.url }}</p>
                </div>

              </div>

              <div class="row pt-3 pb-3 bg-white" v-if="message!==''">
                <hr>
              </div>


              <div class="row bg-white" v-if="message!==''">
                <div class="col-12"><h3>Message </h3></div>
              </div>

              <div class="row align-items-center" v-if="message!==''">
                <div class="col-12">
                  {{ message }}
                </div>
              </div>

              <div class="text-center button-container mt-5">
                <button class="btn btn-primary" @click.prevent="prev()">Prev</button>
                <button class="btn btn-primary" @click.prevent="submit()">Submit</button>
              </div>

              <div class="row pt-3 bg-white">
                <div class="col-12">
                  <div class="alert-info text-center p-2" v-if="loadingMessage"><p>Loading...</p></div>
                  <div class="alert-success text-center p-2" v-if="sentMessage"><p>Message has been sent</p></div>
                  <div class="alert-danger text-center p-2" v-if="sentMessage===false"><p>Message has not been sent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="error" class="general-error"><p>Fill All Required Fields</p></div>
      </form>
    </div>
    <div v-if="access===false">
      <div class="base io">
        <h1 class="io">403</h1>
        <h2>Access forbidden</h2>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import {email, minLength, required} from "vuelidate/lib/validators";
import countries from '../../static/data/countries.json';
import calendarRules from "@/mixins/calendarRules";


Vue.use(Vuelidate)

export default {
  name: "songs.vue",
  mixins: [calendarRules],
  data() {
    return {
      access: null,
      step: 1,
      countries: [],
      error: false,
      loadingMessage: false,
      sentMessage: '',
      bride: '',
      groom: '',
      email: '',
      country: '',
      date: new Date(),
      location: '',
      guests:'',
      options: ['Specific Moment', 'Entrance', 'Cake Cutting', 'First Dance', 'Bride with Parent', 'Groom with Parent', 'Last Dance', 'Other'],
      row: 1,
      songs: [{order: 1, moment: 'Entrance', song: ''}],
      playlists: [{order: 1, description: '', url: ''}],
      message: ''
    }
  },

  validations: {
    bride: {
      required,
      minLength: minLength(4)
    },
    groom: {
      required,
      minLength: minLength(4)
    },

    email: {
      required,
      email
    },
    country: {
      required
    },
    date: {
      required
    },
    location: {
      required,
      minLength: minLength(4)
    },
    guests: {
      required,
    },
  },

  beforeDestroy() {
    this.$recaptcha.destroy()
  },

  async mounted() {

    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.error(e);
    }

    if (this.$route.params.access) {
      this.access = true;
      this.countries = countries;
      let today = new Date();
      this.start = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 20, 0)
    } else {
      this.access = false;
    }
  },
  methods: {
    chooseStep(step) {
      this.step = step;
    },

    prev() {
      this.step--;
      this.$scrollTo('#private', 1000);

      if (this.step === 2) {
        if (this.songs.length === 0) {
          this.songs.push({order: 1, moment: 'Entrance', song: ''});
        }
      }

      if (this.step === 3) {
        if (this.playlists.length === 0) {
          this.playlists.push({order: 1, description: '', url: ''});
        }
      }
    },

    next() {
      this.$scrollTo('#private', 1000);
      console.log(this.step);

      if (this.step === 1) {

        if (this.$v.bride.$invalid || this.$v.groom.$invalid || this.$v.email.$invalid || this.$v.location.$invalid) {
          this.error = true;
          setTimeout(() => {
            this.error = false
          }, 4000);
          return false;
        } else {
          this.error = false;

        }

      }


      if (this.step === 4) {
        console.log(this.songs);
        _.remove(this.songs, {song: ''})
        _.remove(this.playlists, {url: ''})
        console.log(this.songs);
      }

      this.step++;
    },

    addValue() {
      this.songs.push({order: 2, moment: 'Specific Moment', song: ''});
      this.$emit('input', this.songs);
    },

    deleteValue(index) {
      this.songs.splice(index, 1);
    },

    addPlaylistValue() {
      this.playlists.push({order: 2, description: '', url: ''});
      this.$emit('input', this.playlists);
    },

    deletePlaylistValue(index) {
      this.playlists.splice(index, 1);
    },


    async submit() {
      try {
        const token = await this.$recaptcha.execute('login');

        const qs = require('querystring');
        this.loadingMessage = true;

        /** COMPILO LA LISTA DI CANZONI **/

        let stringSongs = '<ul>';
        this.songs.forEach((item, index) => {
          stringSongs += `<li>${index + 1} - ${item.moment} - ${item.song}</li>`
        })
        stringSongs += '</ul>';

        /** COMPILO LA PLAYLIST **/
        let stringPlaylists = '<ul>';
        this.playlists.forEach((item, index) => {
          stringPlaylists += `<li>${index + 1} - ${item.description} - ${item.url}</li>`
        })
        stringPlaylists += '</ul>';


        let data = {
          sender: process.env.CONTACT_FORM_MAIL_SENDER,
          receiver: process.env.CONTACT_FORM_MAIL_RECEIVER,
          namesender: 'Contact Form Wedding Deejay',
          name: `${this.groom} & ${this.bride}`,
          email: this.email,
          subject: 'Events Playlist',
          message: `<p>Bride: ${this.bride}</p><p>Groom: ${this.groom}</p><p>Country: ${this.country}</p><p>Event Date: ${this.$dateFns.format(this.date, 'dd/MM/yyyy')}</p><p>Location: ${this.location}</p><p>N° of Guests: ${this.guests}</p><p>Songs List:</p>${stringSongs}<p>Playlists:</p>${stringPlaylists}<p>Message: ${this.message}</p>`
        };

        console.log(data);

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
