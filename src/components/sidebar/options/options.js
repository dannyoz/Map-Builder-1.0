import store from "@/store";
import {
  loadPublishPath,
  clearGrid,
  savePublishPath,
  loadGrid
} from "@/shared/utils";
import ApiService from "@/shared/api-service";
const apiService = new ApiService();

export default {
  data() {
    return {
      defaultWidth: String(store.state.mapSize.x),
      defaultHeight: String(store.state.mapSize.y),
      publishPath: "",
      fileName: "test"
    };
  },
  mounted() {
    this.publishPath = loadPublishPath("/Users/dan");
  },
  methods: {
    createMap() {
      clearGrid();
      store.commit("setMapSize", {
        x: Number(this.defaultWidth),
        y: Number(this.defaultHeight)
      });
    },
    publish() {
      savePublishPath(this.publishPath);
      apiService
        .post("publish", {
          path: this.publishPath,
          fileName: this.fileName,
          map: loadGrid(1, 1)
        })
        .end(err => {
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
