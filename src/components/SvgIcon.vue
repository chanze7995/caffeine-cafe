<template>
    <svg :class="svgClass" aria-hidden="true">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="iconId"></use>
    </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconName: {
      type: String,
      required: true
    },
    iconClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconId () {
      return `#icon-${this.iconName}`
    },
    svgClass () {
      if (this.iconClass) {
        return this.iconClass
      } else {
        return 'svg-icon'
      }
    }

  }
}
</script>

<style scoped>
.svg-icon {
  width: 1.5em;
  height: 1.5em;
  fill: currentColor;
  overflow: hidden;
}
</style>
