<script setup lang="ts">
import styles from './index.module.scss'
</script>

<template>
  <div>
    <div class="header">header</div>
    <p :class="styles.title" >标题</p>
  </div>
</template>

<style lang="scss" scoped>
.header {
  color: $theme-text-color
}
</style>
