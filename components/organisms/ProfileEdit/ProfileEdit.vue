<template>
  <div class="profile-edit">
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title">Profile</div>
      </md-card-header>
      <md-card-content>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label for="name">Email</label>
              <md-input name="email" v-model="user.email" />
            </md-field>
            <md-field>
              <label for="name">Name</label>
              <md-input name="name" v-model="user.name" />
            </md-field>
            <md-field>
              <label>Introduction</label>
              <md-textarea v-model="user.introduction"></md-textarea>
            </md-field>
          </div>
        </div>
      </md-card-content>
      <md-card-actions>
        <md-button @click="handleClickSave" class="md-raised md-primary">Save</md-button>
        <md-button @click="handleClickCancel" class="md-raised">Cancel</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>

export default {
  name: "ProfileEdit",
  props: {
    user: Object
  },
  methods: {
    handleClickSave() {
      this.$emit('save')
    },
    handleClickCancel() {
      this.$emit('cancel')
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
