<template>
  <div id="app">
    <Layout>
      <slide-y-down-transition mode="out-in">
        <router-view/>
      </slide-y-down-transition>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  @font-face {
  font-family: 'Montserrat';
    src: local("Montserrat"),
        local("Montserrat"),
        url('./assets/fonts/Montserrat/Montserrat-Regular.ttf');
  }

  * {
    font-family: 'Montserrat', sans-serif; 
    padding: 0;
    margin: 0;
  }
</style>
