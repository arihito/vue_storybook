<template>
  <div :class="heroClass">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">{{ title }}</h1>
        <h2 class="subtitle">{{ subtitle }}</h2>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    size: {
      type: String,
      default: '',
      validator (val) {
        return ['', 'medium', 'large'].indexOf(val) + 1
      }
    },
    color: {
      type: String,
      default: '',
      validator (val) {
        return ['', 'primary', 'info', 'success', 'warning', 'danger', 'light', 'dark'].indexOf(val) + 1
      }
    }
  },
  computed: {
    heroClass () {
      const styles = { 'hero': true }
      this.size ? styles[`is-${this.size}`]= true : ''
      this.color ? styles[`is-${this.color}`] = true : ''
      return styles
    }
  }
}
</script>

<style lang="css">
</style>