<template>
  <li>
    <a :href="item.href">
      {{ item.text }}
    </a>
  </li>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>

<style scoped>
li {
  width: 100px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-size: 14px;
  display: flex;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  display: block;
  cursor: pointer;
  color: #000;
}

a:hover {
  color: #000;
  opacity: 0.6;
}

small {
  font-size: 14px;
  color: #999;
  text-align: center;
  display: block;
}
</style>