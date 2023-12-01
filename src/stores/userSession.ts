import { defineStore } from "pinia"

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: {
      firstEntrance: true
    }
  }),
  getters: {
    isUserFirstEntrance: state => state.user.firstEntrance
  },
  actions: {
    setUserFirstEntrance() {
      this.user.firstEntrance = false
    }
  }
})
