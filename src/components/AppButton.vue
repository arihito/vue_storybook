<template>
  <button :class="buttonClass" @click="handleClick">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: '',
      validator (val) {
        return ['small', 'medium', 'large',''].indexOf(val) + 1
      }
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    buttonClass () {
      const styles = { 'button': true }
      styles[`is-${this.size || ''}`] = true
      styles[`is-${this.color || ''}`] = true
      return styles
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>