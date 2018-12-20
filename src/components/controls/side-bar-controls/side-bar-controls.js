import store from "@/store";
export default {
  data() {
    return {
      current: 0,
      tabs: [
        {
          title: "Build",
          component: "tiles",
          icon: "block-icon-layers"
        },
        {
          title: "Options",
          component: "options",
          icon: "block-icon-cog"
        }
      ]
    };
  },
  mounted() {
    this.switchTab(this.current);
  },
  methods: {
    switchTab(index) {
      this.current = index;
      const component = this.tabs[index].component;
      store.commit("switchTab", component);
    },
    tabClass(tab) {
      return [tab.icon];
    }
  }
};
