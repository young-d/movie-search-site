<template>
  <div class="detail-page__top">
    <span
      class="material-icons"
      @click="$router.back">
      keyboard_backspace
    </span>
  </div>
  <div
    v-if="selectedMovie.Response"
    class="detail-page__bottom">
    <section 
      class="movie-poster">
      <img
        v-if="hasImage"
        alt="movie-poster"
        :src="selectedMovie.Poster" />
      <img
        v-else
        alt="no-poster"
        src="http://folo.co.kr/img/gm_noimage.png" />
    </section>
    <section class="movie-text">
      <div class="movie-title">
        {{ selectedMovie.Title }}
      </div>
      <div class="movie-info">
        {{ selectedMovie.Type }} | {{ selectedMovie.Year }}
      </div>
      <div class="movie-plot">
        {{ selectedMovie.Plot }}
      </div>
    </section>
  </div>
  <div v-else>
    해당 영화의 정보가 없습니다.
  </div>
</template>

<script>
export default {
  computed: {
    selectedMovie() {
      return this.$store.state.movie.selectedMovie
    },
    hasImage() {
      return this.$store.state.movie.selectedMovie.Poster !== 'N/A'
    }
  },
  watch: {
    '$route': 'readSelectedMovie'
  },
  created() {
    this.readSelectedMovie()
  },
  methods: {
    readSelectedMovie() {
      this.$store.dispatch('movie/readSelectedMovie', this.$route.params.id)
    }
  }
}
</script>

<style scoped lang="scss">
.detail-page__top {
  .material-icons {
    font-size: 50px;
    margin-bottom: 30px;
    padding: 2px;
    color: #616161;
    border: transparent;
    border-radius: 50px;
    cursor: pointer;
    &:hover {
      background-color: #e0e0e0;
    }
  }
}

.detail-page__bottom {
  display: flex;
  justify-content: center;
  font-family: 'Rubik', sans-serif;
  word-break: keep-all;
  height: 100%;
  .movie-text {
    width: 60%;
    .movie-title {
      font-size: 2em;
      font-weight: bold;
    }
    .movie-info {
      display: flex;
      flex-direction: column;
      margin: 10px 2px 20px 0;
      font-size: 1.1em;
      color: #616161;
    }
    .movie-plot {
      white-space: pre-wrap;
      max-height: calc(90% - 100px);
      font-size: 1.2em;
      padding: 5%;
      line-height: 1.4;
      overflow: scroll;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
      &::-webkit-scrollbar {
        display: none;
      }
      border: transparent;
      border-radius: 5px;
      box-shadow: 2px 2px 10px #ddd;
    }
  }
  .movie-poster {
    width: 26%;
    margin-right: 6%;
    align-text: center;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .empty {
    height: fit-content;
    background-image: url('http://folo.co.kr/img/gm_noimage.png');
    background-size: cover;
    box-shadow: 2px 2px 5px #ddd;
  }
}
</style>
