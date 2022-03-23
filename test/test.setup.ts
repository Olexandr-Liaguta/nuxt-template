import {enableAutoDestroy} from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";

enableAutoDestroy(global.afterEach)

Vue.use(Vuetify)
