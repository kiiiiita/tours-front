<template>
  <div>
    <div v-show="isLoading" class="loader">Now loading...</div>
    <div v-show="!isLoading">
      <AppHeader :isLogin="isLogin" />
      <nuxt />
    </div>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
import AppHeader from "~/components/organisms/AppHeader"
import {mapState} from 'vuex'

export default {
  components: {
    AppHeader
  },
  data() {
    return {
      isLogin: false
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('getUser', { email: user.email })
        this.isLogin = true
      }
    })
  },
  computed: mapState(['isLoading'])
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
