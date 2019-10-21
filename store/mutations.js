export default {
  setUser(state, user) {
    state.user = user
  },
  setMembers(state, members) {
    state.members = members
  },
  setMember(state, member) {
    state.member = member
  },
  hideLoading(state) {
    state.isLoading = false;
  },
  showLoading(state) {
    state.isLoading = true;
  }
}