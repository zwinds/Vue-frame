<template>
  <div id="app">
      <ul>
        <router-link to="/home" tag="li">HOME</router-link>
        <router-link to="/list" tag="li">LIST</router-link>
      </ul>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>


</style>
