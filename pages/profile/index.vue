<template>
  <div>
    <MyProfile
      v-if="!isEdit"
      @edit="editUser"
      :user="user"
    />
    <ProfileEdit
      v-if="isEdit"
      @save="saveUser"
      @cancel="cancelEdit"
      :user="user"
    />
  </div>
</template>

<script>
import MyProfile from '~/components/organisms/MyProfile'
import ProfileEdit from '~/components/organisms/ProfileEdit'

export default {
  components: {
    MyProfile,
    ProfileEdit
  },
  data() {
    return {
      isEdit: false
    }
  },
  computed: {
    user() {
      return this.$store.state.user || {}
    }
  },
  methods: {
    editUser() {
      this.isEdit = true
    },
    saveUser() {
      const user = this.user
      this.$store.dispatch('saveUser', { user })
      this.isEdit = false
    },
    cancelEdit() {
      this.isEdit = false
    },
  },
}
</script>>

<style lang="scss" scoped>

</style>
