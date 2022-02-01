<template>
  <div id="tweet"></div>
</template>

<script>
export default {
  name: "tweet",
  props: {
    id: {
      type: String,
      required: true,
    },
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      addScriptPromise: null,
      isLoaded: false,
      isAvailable: false,
    };
  },
  mounted() {
    const params = this.id;
    Promise.resolve(
      window.twttr
        ? window.twttr
        : this.addPlatformScript("//platform.twitter.com/widgets.js")
    )
      .then((twttr) => {
        if (
          document.getElementsByTagName("HTML")[0].className.indexOf("dark") >
          -1
        ) {
          this.options.theme = "dark";
        }
        this.embedComponent(twttr, params, this.$el, this.options);
      })
      .then((data) => {
        this.isAvailable = data !== undefined;
        this.isLoaded = true;
      });
  },
  methods: {
    embedComponent(twttr, ...args) {
      return twttr.widgets.createTweet(...args);
    },
    addPlatformScript(src) {
      if (!this.addScriptPromise) {
        const s = document.createElement("script");
        s.setAttribute("src", src);
        document.body.appendChild(s);
        this.addScriptPromise = new Promise((resolve) => {
          s.onload = () => {
            resolve(window.twttr);
          };
        });
      }
      return this.addScriptPromise;
    },
  },
  render(h) {
    if (this.isLoaded && this.isAvailable) {
      return h("div", { class: this.$props.widgetClass });
    }

    if (this.isLoaded && !this.isAvailable && this.$props.errorMessage) {
      const $errorMsg = h("div", {
        class: this.$props.errorMessageClass,
        domProps: {
          innerHTML: this.$props.errorMessage,
        },
      });
      return h("div", [$errorMsg]);
    }

    return h("div", { class: this.$props.widgetClass }, this.$slots.default);
  },
};
</script>
