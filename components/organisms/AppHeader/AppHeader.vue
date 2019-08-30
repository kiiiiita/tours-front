<template>
  <div class="app-header">
    <md-toolbar>
      <h3 class="md-title" style="flex: 1">Tours</h3>
      <md-menu md-direction="bottom-end" v-if="isLogin">
        <md-button md-menu-trigger>menu</md-button>
        <md-menu-content>
          <md-menu-item @click="$router.push('/profile')">Profile</md-menu-item>
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

</style>
