export default {
  setUser(state, user) {
    state.user = user
  },
  setMembers(state, members) {
    state.members = members
  },
  hideLoading(state) {
    state.isLoading = false;
  },
  showLoading(state) {
    state.isLoading = true;
  }
}