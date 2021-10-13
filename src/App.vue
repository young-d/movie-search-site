<template>
  <div class="app__inner">
    <div class="app__header">
      <div 
        class="header__logo"
        @click="goHome">
        <Logo />
      </div>
      <div class="header__line"></div>
      <div class="search-bar">
        <SearchBar />
      </div>
    </div>
    <div class="app__container">
      <RouterView />
    </div>
  </div>
</template>

<script>
import SearchBar from '~/components/SearchBar'
import Logo from '~/components/Logo'


export default {
  components: {
    SearchBar,
    Logo
  },
  methods: {
    goHome() {
      this.$router.push('/')
      this.$store.commit('movie/cleanKeyword')
    }
  } 
}
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}
.app__inner {
  min-width: 600px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  .app__header {
    background-color: #212121;
    position: sticky;
    top: 0;
    padding: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    .header__logo {
      display: flex;
      align-items: center;
      width: 200px;
    }
    .header__line {
      width: 1px;
      margin: 0 50px;
      background-color: #fff;
      height: 40%;
    }
    .search-bar {
      display: flex;
      align-items: center;
      width: calc(100% - 300px);
      height: 100%;
    }
  }
  .app__container {
    box-sizing: border-box;
    width: 100%;
    height: calc(100% - 100px);
    padding: 2%;
  }
}
</style>
