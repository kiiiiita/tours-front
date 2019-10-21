<template>
  <div class="app-header">
    <md-toolbar class="app-header-wrapper">
      <md-button class="md-icon-button md-raised" @click="$router.push('/', () => {}, () => {})">
        <img src="~/static/image/tours_logo.png" alt="Avatar">
      </md-button>
      <md-menu md-direction="bottom-end" v-if="isLogin">
        <md-button class="md-icon-button md-raised md-primary" md-menu-trigger>
          <md-icon>person</md-icon>
        </md-button>
        <md-menu-content>
          <md-menu-item @click="$router.push('/profile', () => {}, () => {})">Profile</md-menu-item>
          <md-menu-item @click="logout">Logout</md-menu-item>
        </md-menu-content>
      </md-menu>
      <md-button @click="login" v-if="!isLogin">Login</md-button>
    </md-toolbar>
  </div>
</template>

<script>

export default {
  name: "AppHeader",
  props:{
    isLogin: Boolean,
  },
  methods: {
    login() {
      this.$store.dispatch('googleLogin')
    },
    logout() {
      this.$store.dispatch('googleLogout')
    }
  }
}
</script>

<style lang="scss" scoped>
.app-header-wrapper {
  justify-content: space-between;
  padding: 10px 15px;
}

</style>
