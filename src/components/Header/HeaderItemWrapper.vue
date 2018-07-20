<template>
  <div class="navbar-menu">
    <ul class="navbar-start">
      <slot />
    </ul>
  </div>
</template>

<style scoped>
ul {
  justify-content: space-between;
  list-style: none;
  display: flex;
}
</style>