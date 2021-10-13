<template>
  <div class="search-result">
    <b><u>"{{ keyword }}"</u>에 대한 검색 결과</b>
  </div>
  <ul>
    <MovieItem 
      v-for="movie in movies"
      :key="movie.imdbID" 
      :movie="movie" />
  </ul>
</template>

<script>
import MovieItem from '~/components/MovieItem'

export default {
    components: {
        MovieItem
    },
    computed: {
        movies() {
            return this.$store.state.movie.movies
        },
        keyword() {
            return this.$route.query.search
        }
    },
    watch: {
        '$route': 'readSearchMovies'
    },
    created() {
        this.readSearchMovies()
    },
    methods: {
        readSearchMovies() {
            this.$store.dispatch('movie/readSearchMovies', this.keyword)
        }
    }
}
</script>

<style scoped lang="scss">
.search-result {
    font-size: 20px;
    padding: 10px;
}
ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
}
</style>
