import store from "@/store";

export default {
  data() {
    return {
      zoom: 100
    };
  },
  methods: {
    handleZoom() {
      store.commit("setZoom", this.zoom);
    }
  }
};
