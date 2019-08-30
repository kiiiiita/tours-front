<template>
  <div class="my-profile">
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title">Profile</div>
      </md-card-header>
      <md-card-content>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field>{{ user.email }}</md-field>
          </div>
          <div class="md-layout-item md-small-size-100">
            <md-field>{{ user.name }}</md-field>
          </div>
          <div class="md-layout-item md-small-size-100">
            <md-field>{{ user.introduction }}</md-field>
          </div>
        </div>
      </md-card-content>
      <md-card-actions>
        <md-button @click="handleClickEdit" class="md-raised md-primary">Edit</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>

export default {
  name: "MyProfile",
  props: {
    user: Object
  },
  methods: {
    handleClickEdit() {
      this.$emit('edit')
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
