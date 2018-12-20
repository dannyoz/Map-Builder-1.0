<template>
  <section>
    <controls></controls>
    <div class="app">
      <sidebar></sidebar>
      <main-panel></main-panel>
      <alerts></alerts>
    </div>
  </section>
</template>

<script>
import controls from "@/components/controls";
import sidebar from "@/components/sidebar";
import mainPanel from "@/components/main-panel";
import alerts from "@/components/main-panel/alerts";

export default {
  name: "home",
  components: {
    controls,
    sidebar,
    mainPanel,
    alerts
  }
};
</script>
