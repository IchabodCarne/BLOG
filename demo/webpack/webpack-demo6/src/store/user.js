import { defineStore } from "pinia";

export const userStore = defineStore("user", {
  state: () => {
    return {
      userList: [],
    };
  },
  actions: {
    setUserList(payload) {
      this.userList = payload;
    },
  },
});
