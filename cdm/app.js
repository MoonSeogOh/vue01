const pageLoad = function () {
  const { createApp } = Vue;
  const app = createApp({
    data() {
      return {
        message: "Hell Vue!",
      };
    },
  });
  app.mount("#app");
};
