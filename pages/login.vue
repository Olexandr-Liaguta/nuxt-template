<template>
  <v-row justify="center" align="center">
    <v-form>
      <v-container>

        <v-alert v-if="$route.query.message" type="error">
          {{ $route.query.message }}
        </v-alert>

        <v-row class="mt-6">
          <h1 class="w-100">Login page</h1>
          <h4 class="w-100">{{ $t($l.hello) }}</h4>
          <v-select
            label="Locale"
            :items="$i18n.localeCodes"
            :value="$i18n.getLocaleCookie()"
            @change="onChangeLocale"
          >
          </v-select>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model.trim="email"
              label="Email"
              :error-messages="$v.email.$error && $v.email.$dirty ? ['Type valid email'] : []"
              @blur="$v.email.$touch()"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model.trim="password"
              label="Password"
              :error-messages="$v.password.$error && $v.password.$dirty ? [`Password must be more than ${$v.password.$params.minLength.min} characters`] : []"
              @blur="$v.password.$touch()"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-btn color="primary" @click="login">
            Login
          </v-btn>
        </v-row>

        <v-row class="mt-12">
          <nuxt-link to="/">
            Back
          </nuxt-link>
        </v-row>

      </v-container>
    </v-form>
  </v-row>
</template>


<script lang="ts">

import Vue from "vue";
import {email, minLength, required} from 'vuelidate/lib/validators'
import {AppActionTypes, useAppDispatch} from "~/store/app/actions";

export default Vue.extend({

  name: 'LoginPage',

  layout: 'empty',
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(4),
    }
  },

  data() {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    login() {
      // this.$v.$touch()
      // console.log(this.$v)
      // if (this.$v.$error) return

      useAppDispatch(this.$store.dispatch, AppActionTypes.login, undefined)
      // this.$store.dispatch(appFields.actions.login)
      this.$router.push('/')
    },

    onChangeLocale(val: string) {
      console.log('change: ', val)
      this.$router.push(this.switchLocalePath(val))
    }
  },

  mounted() {
    console.log(this.$l);
  }

})
</script>
