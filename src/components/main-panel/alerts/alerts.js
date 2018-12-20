import store from "@/store";

export default {
  computed: {
    alert() {
      return store.state.alert;
    }
  },
  watch: {
    alert() {
      if (!alert.notimer) {
        this.timeout();
      }
    }
  },
  methods: {
    close() {
      store.commit("setAlert", null);
    },
    timeout() {
      setTimeout(() => {
        this.close();
      }, 4500);
    }
  }
};
