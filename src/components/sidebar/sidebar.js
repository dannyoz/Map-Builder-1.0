import store from "@/store";
import { isHidden } from "@/shared/utils";
import tiles from "@/components/sidebar/tiles";
import options from "@/components/sidebar/options";

export default {
  components: {
    tiles,
    options
  },
  computed: {
    hidden() {
      return isHidden();
    },
    currentTab() {
      return store.state.currentTab;
    }
  }
};
