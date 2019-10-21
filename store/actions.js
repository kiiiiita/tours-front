import axios from "axios"
import firebase from '~/plugins/firebase'

const BASE_URL = "http://localhost:3000/api/v1/"

export default {
  async getUser({ commit }, payload) {
    await commit("showLoading")
    let response = await axios
      .get(`${BASE_URL}users`, {
        headers: { "Content-Type": "application/json" },
        params: {
          email: payload.email,
        },
        timeout: 15000
      })
      .catch(error => {
        commit("hideLoading")
        console.error(error)
        this.$router.push("/error")
      })
      if (response.data == null) {
        response = await axios
          .post(`${BASE_URL}users`, {
            email: payload.email
          })
          .catch(error => {
            commit("hideLoading")
            console.error(error)
            this.$router.push("/error")
          })
      }
      commit("setUser", response.data)
      commit("hideLoading")
  },
  async saveUser({ commit }, payload) {
    const response = await axios
      .put(`${BASE_URL}users`, {
        id: payload.user.id,
        name: payload.user.name,
        email: payload.user.email,
        introduction: payload.user.introduction
      })
      .catch(error => {
        console.error(error)
        this.$router.push("/error")
      });
    commit("setUser", response.data)
  },
  async getMembers({ commit }, payload) {
    const response = await axios
      .get(`${BASE_URL}members`, {
        headers: { "Content-Type": "application/json" },
        params: {
          id: payload.user.id,
        },
        timeout: 15000
      })
      .catch(error => {
        console.error(error)
        this.$router.push("/error")
      });
    commit("setMembers", response.data)
  },
  async getMember({ commit }, payload) {
    const response = await axios
      .get(`${BASE_URL}members/${payload.member}`, {
        headers: { "Content-Type": "application/json" },
        timeout: 15000
      })
      .catch(error => {
        console.error(error)
        this.$router.push("/error")
      });
    commit("setMember", response.data)
  },
  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  },
  googleLogout({ commit }) {
    firebase.auth().signOut()
      .then(() => {
        commit("setUser", null)
        this.$router.push('/')
      }).catch((error) => {
        alert(error)
      })
  }
}
