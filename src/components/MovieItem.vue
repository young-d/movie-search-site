<template>
  <li @click="showDetail(movie.imdbID)">
    <div 
      :class="{ empty: !hasImage }" 
      class="movie-poster">
      <img
        v-if="hasImage"
        alt="poster-image"
        :src="movie.Poster" />
    </div>
    <div class="movie-infos">
      {{ movie.Title }} ({{ movie.Year }})
    </div>
  </li>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      hasImage: this.movie.Poster !== 'N/A'
    }
  },
  methods: {
    showDetail(id) {
      this.$store.dispatch('movie/readSelectedMovie', id)
      this.$router.push({ name: 'detail', params: { id }})
    }
  }
}
</script>

<style scoped lang="scss">
li {
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 1%;
  border: transparent;
  border-radius: 5px;
  .movie-poster {
    width: 100%;
    height: 400px;
    overflow: hidden;
    box-shadow: 2px 2px 5px #ddd;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }
  .empty {
    background-image: url('http://folo.co.kr/img/gm_noimage.png');
    width: 100%;
    height: 400px;
    background-size: cover;
    box-shadow: 2px 2px 5px #ddd;
    cursor: pointer;
  }
  .movie-infos {
    margin-top: 10px;
    padding: 1%;
    font-size: 20px;
    font-weight: bold;
    color: #616161;
    word-break: keep-all;
  }
}
</style>
