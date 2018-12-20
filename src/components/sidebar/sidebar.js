import store from "@/store";
import utils from "@/shared/utils";
import tiles from "@/components/sidebar/tiles";
import options from "@/components/sidebar/options";

export default {
  components: {
    tiles,
    options
  },
  computed: {
    hidden() {
      return utils.isHidden();
    },
    currentTab() {
      return store.state.currentTab;
    }
  }
};
