export default {
  data() {
    return {
      api: null,
      loading: true
    };
  },
  methods: {
    fetchData(url) {
      this.loading = true;
      this.data = null;
      fetch(`http://localhost:3000/${url}`)
        .then(resp => resp.json())
        .then(resp => {
          setTimeout(() => {
            this.api = resp;
            this.loading = false;
          }, 1500);
        });
    }
  }
};
