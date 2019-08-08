<template>
  <div class="togglebutton-wrapper" v-bind:class="isactive ? 'togglebutton-checked' : ''">
    <label v-bind:for="name">
      <span class="togglebutton-label">{{ label }}</span>
      <span class="tooglebutton-box"></span>
    </label>
    <input
      v-bind:id="name"
      type="checkbox"
      v-bind:name="name"
      v-model="isactive"
      v-on:change="onToogle"
    />
  </div>
</template>
<script>
export default {
  name: 'togglebutton',
  props: ['label', 'name', 'sortByStatus'],
  model: {
    prop: 'checked',
    event: 'change',
  },
  data() {
    return {
      isactive: this.sortByStatus,
    };
  },
  methods: {
    onToogle() {
      this.$emit('clicked', this.isactive);
    },
  },
};
</script>
