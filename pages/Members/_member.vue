<template>
  <div>
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title">Member</div>
      </md-card-header>
      <md-card-content>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field>{{ member.email }}</md-field>
          </div>
          <div class="md-layout-item md-small-size-100">
            <md-field>{{ member.name }}</md-field>
          </div>
          <div class="md-layout-item md-small-size-100">
            <md-field>{{ member.introduction }}</md-field>
          </div>
        </div>
      </md-card-content>
      <md-card-actions>
        <md-button @click="$router.push('/members')">Back</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  computed: {
    member() {
      return this.$store.state.member || {}
    },
  },
  async asyncData({ store, params }) {
    const member = params.member
    await store.dispatch('getMember', { member })
  }
}
</script>>

<style lang="scss" scoped>
</style>
