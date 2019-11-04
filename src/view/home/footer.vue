<template>
  <div>
    <div>AAA{{$t('btn.hello')}}BBB{{$t('btn.world')}}{{$t('login.aaaa')}}</div>

  </div>
</template>

<script>
  export default {
    name: "footer",
    created() {
      let param = {
        name: '哇咔咔'
      }
      this.$store.dispatch('loginTest', param).then((res) => {
        console.log(this.$store.state.login.user)
        console.log(this.$store.getters.getUser)
      })
    }
  }
</script>

<style scoped>

</style>
