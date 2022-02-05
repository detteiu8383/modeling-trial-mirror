<template>
  <span class="blender-version-text">
    {{ version }}
  </span>
</template>

<script>
export default {
  name: "blenderVersion",
  data() {
    return { version: "" };
  },
  async mounted() {
    // https://api.github.com/repos/blender/blender/releases/latest
    const data = await fetch(
      "https://api.github.com/repos/blender/blender/tags"
    );
    const versions = await data.json();
    this.version = versions[0].name;
  },
};
</script>

<style></style>
