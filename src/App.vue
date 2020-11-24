<template>
  <h1 class="header">Hello {{ name }}</h1>
</template>

<script>
  export default {
    name: 'Foo',
    data() {
      return {
        name: 'tmhao2005'
      }
    },
    created() {
      console.log('created x3')
    }
  }
</script>

<style lang="scss">
  .header {
    color: red;
  }
</style>