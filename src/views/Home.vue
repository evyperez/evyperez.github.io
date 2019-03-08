<template>
  <div class="content">
    <section v-if="Object.entries(movie).length === 0" class="movie--search">
      <h1>Sallve Movies</h1>
      <form @submit.prevent="searchMovie" id="registeroffice">
        <input type="text" v-model="form.movieName" placeholder="Find a movie" required>
        <label for="name">name of movie</label>
        <button type="submit">Search</button>
      </form>
    </section>
    <section v-else-if="movie.Error" class="movie--error">
      <div class="movie__header">
        <h1>{{ movie.Error }}</h1>
      </div>
      <button @click="cleanMovie">Voltar</button>

    </section>
    <section class="movie" :aria-busy="loading ? 'true' : 'false'" v-else>
      <div class="movie__header">
        <div class="movie__title">
            <h2>{{ movie.Title }}</h2>
        </div>
        <div class="movie__subtitle">
            <p>{{ movie.Released }}</p>
            <p>{{ movie.Genre }}</p>
        </div>
      </div>


      <div class="movie__body">
        <div class="movie__img">
          <img :src="movie.Poster">
        </div>

        <div class="movie__text">
          <h3>Plot</h3>
          <p>{{ movie.Plot }}</p>
          <h3>Actors</h3>
          <p>{{ movie.Actors }}</p>
          <h3>Director</h3>
          <p>{{ movie.Director }}</p>
          <h3>Writer</h3>
          <p>{{ movie.Writer }}</p>

          <div class="movie__ratings">
            <h3>Ratings</h3>
              <div v-for="(Ratings, index) in movie.Ratings" :key="index">
                <h4>{{ Ratings.Source }}</h4>
                <p>{{ Ratings.Value }}
                </p>

              </div>
          </div>
        </div>
      </div>

      <div class="movie__footer">
        <button @click="cleanMovie">Voltar</button>
      </div>

    </section>
  </div>
</template>
<script>

export default {
  name: "home",
    data() {
      return {
        form: {
          movieName: '',
        },
        loading: false,
      };
    },
  computed: {
    movie() {
      return this.$store.state.movie || lala;
    },
  },
  methods: {
    toggleLoading() {
      this.loading = !this.loading;
    },
    cleanMovie() {
      this.$store.commit('SET_MOVIE', {});
    },
    searchMovie() {
      this.toggleLoading();

      const payload = {};

      if (this.form.movieName) {
        payload.movie = this.form.movieName;
      }
      this.$store.dispatch('GET_MOVIE', payload)
        .then(() => {
          this.toggleLoading();
        })
        .catch((error) => {
          this.toggleLoading();
        });

    }
  },
};
</script>
