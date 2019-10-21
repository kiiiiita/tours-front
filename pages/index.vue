<template>
  <div>
    <section class="login">
      <h2>旅する人はいい人だ</h2>
      <img src="~/static/image/tours.jpeg" alt="tours" />
    </section>
    <Dashboard />
  </div>
</template>

<<script>
import Dashboard from '~/components/organisms/Dashboard'
export default {
  components: {
    Dashboard
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
}
</script>>

<style lang="scss" scoped>
.login {
  h2 {
    position: absolute;
    color: #fff;
    top: 70px;
    left: 20px;
  }
  img {
    width: 100%;
  }
}
</style>
