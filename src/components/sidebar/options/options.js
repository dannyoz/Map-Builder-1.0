import store from "@/store";
import utils from "@/shared/utils";
import ApiService from "@/shared/api-service";
const apiService = new ApiService();

export default {
  data() {
    return {
      defaultWidth: String(store.state.mapSize.x),
      defaultHeight: String(store.state.mapSize.y),
      publishPath: "/Users/",
      fileName: "test"
    };
  },
  methods: {
    createMap() {
      utils.clearGrid();
      store.commit("setMapSize", {
        x: Number(this.defaultWidth),
        y: Number(this.defaultHeight)
      });
    },
    publish() {
      apiService
        .post("/api/publish", {
          path: this.publishPath,
          fileName: this.fileName,
          map: utils.loadGrid(1, 1)
        })
        .end((err, data) => {
          if (err) {
            store.commit("setAlert", {
              type: "error",
              message: err,
              notimer: true
            });
          } else {
            store.commit("setAlert", {
              type: "success",
              message: "Map saved"
            });
          }
        });
    }
  }
};
