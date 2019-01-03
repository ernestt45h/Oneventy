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
  watch: {
    'navigator.onLine'(val){
      console.log('you are', val ? 'online' : 'offline')
    }
  },
  name: 'App',
  created() {
    this.authUser(this.$store.getters['user/getUser'])
  
    this.$auth.onAuthStateChanged((user)=>{
      this.authUser(user)
    })
  },
  methods: {
    authUser(user){
      if(!user){
        this.$router.push({name: 'Login'})
      }
    }
  },
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

.primary { color: #fff; background-color: #039BE5 !important }	/* Main Primary color: #fff; background-color */
.primary-lighter { color: #fff; background-color: #1C92CB !important }
.primary-light { color: #fff; background-color: #0996DA !important }
.primary-dark { color: #fff; background-color: #028DD1 !important }
.primary-darker { color: #fff; background-color: #017DB9 !important }
.secondary { color: #fff; background-color: #4007E9 !important }	/* Main Secondary color: #fff; background-color (1) */
.secondary-lighter { color: #fff; background-color: #5429D3 !important }
.secondary-light { color: #fff; background-color: #4815DF !important }
.secondary-dark { color: #fff; background-color: #3904D8 !important }
.secondary-darker { color: #fff; background-color: #3202C3 !important }
.accent { color: #fff; background-color: #FFD500 !important }	/* Main Secondary color: #fff; background-color (2) */
.accent-lighter { color: #fff; background-color: #FFD918 !important }
.accent-light { color: #fff; background-color: #FFD500 !important }
.accent-dark { color: #fff; background-color: #FFD500 !important }
.accent-darker { color: #fff; background-color: #FFD500 !important }
.complement { color: #fff; background-color: #FF8900 !important }	/* Main Complement color: #fff; background-color */
.complement-lighter { color: #fff; background-color: #FF9418 !important }
.complement-light { color: #fff; background-color: #FF8900 !important }
.complement-dark { color: #fff; background-color: #FF8900 !important }
.complement-darker { color: #fff; background-color: #FF8900 !important }
.primary-text { color:  #039BE5 !important }	/* Main Primary color: #fff; background-color */
.secondary-text { color:  #4007E9 !important }	/* Main Secondary color: #fff; background-color (1) */
.accent-text { color:  #FFD500 !important }	/* Main Secondary color: #fff; background-color (2) */
.complement-text { color:  #FF8900 !important }	/* Main Complement color: #fff; background-color */

</style>
