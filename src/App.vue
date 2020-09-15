<template>
  <h1 class="header">{{ name }}</h1>
</template>

<script>
  export default {
    name: 'Foo',
    data() {
      return {
        name: 'Foo'
      }
    }
  }
</script>

<style lang="scss">
  .header {
    color: red;
  }
</style>