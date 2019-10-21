<template>
  <div>
    <md-card v-if="members.length == 0">
      not keyword
    </md-card>
    <md-card v-else v-for="member in members" :key="member.id">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{ member.name }}</div>
          <div class="md-subhead">{{ member.tweet }}</div>
        </md-card-header-text>
        <md-card-media md-big>
          <img :src="member.avatar" alt="Member">
        </md-card-media>
      </md-card-header>
      <md-card-actions>
        <md-button @click="$router.push(`/members/${member.id}`, () => {}, () => {})">Detaile</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  computed: {
    members() {
      return this.$store.state.members || []
    },
    user() {
      return this.$store.state.user
    }
  },
  created() {
    const user = this.user
    this.$store.dispatch('getMembers', { user })
  },
}
</script>>

<style lang="scss" scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
