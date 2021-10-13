<template>
  <input
    v-model="keyword"
    placeholder="영화 제목을 입력하세요" 
    title="ex.'frozen', 'lov' " 
    @keyup.enter="searchMovies" />
  <span
    class="material-icons"
    @click="searchMovies">
    search
  </span>
</template>

<script>
export default {
    computed: {
        keyword: {
            get() {
                return this.$store.state.movie.keyword
            },
            set(newKeyword) {
                this.$store.commit('movie/assignKeyword', newKeyword)
            }
        }
    },
    methods: {
        searchMovies() {
            this.$router.push({ 
                name: 'movies', 
                query: { search: this.keyword }
            })
        }
    }
}
</script>

<style scoped lang="scss">
input {
    width: 80%;
    height: 30%; 
    padding: 10px;
    background-color: transparent;
    border: 2px solid transparent;
    caret-color: $color-font;
    color: $color-font;
    font-size: 24px;
    font-family: 'Rubik', sans-serif;
    &:focus {
        border-color: $color-font;
        border-radius: 4px;
        outline: none;
        & + .material-icons {
            visible: visible;
        }
    }
}
.material-icons {
    visible: hidden;
    color: $color-font;
    white-space: nowrap;
    cursor: pointer;
    margin: 8px;
    font-size: 40px;
}
</style>
