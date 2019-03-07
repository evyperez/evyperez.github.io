<template>
  <div class="content">
    <h1>Sallve Movies</h1>
    <form @submit.prevent="searchMovie" id="registeroffice">
      <label for="name">Nome</label>
      <input type="text" v-model="form.movie"  placeholder="Find a movie">
      <button type="submit">Find a movie</button>

      {{ movie }}
    </form>
  </div>
</template>
<script>
export default {
  name: "home",
    data() {
      return {
        form: {
          movie: '',
        },
        submitLoading: false,
      };
    },
  computed: {
    movie() {
      return this.$store.state.movie;
    },
  },
  methods: {
    toggleSubmitLoading() {
      this.submitLoading = !this.submitLoading;
    },
    searchMovie() {
      const payload = {};

      if (this.form.movie) {
        payload.movie = this.form.movie;
      }
      this.$store.dispatch('GET_MOVIE', payload)
        .then(() => {
          this.toggleSubmitLoading();
        })
        .catch((error) => {
          this.toggleSubmitLoading();
        });

    }
  },
};
</script>
