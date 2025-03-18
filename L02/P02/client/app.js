const app = new Vue({
  el: "#app",
  data: {
    users: [],
    name: "",
    city: "",
  },
  created: function () {
    axios.get("http://localhost:8080/users").then((res) => {
      this.users = res.data;
    });
  },
  methods: {
    addUser: function () {
      axios
        .post("http://localhost:8080/users", {
          name: this.name,
          city: this.city,
        })
        .then((res) => (this.users = res.data));
    },
    editUser: function (id) {
      axios
        .put(`http://localhost:8080/users/${id}`, {
          name: this.name ?? undefined,
          city: this.city ?? undefined,
        })
        .then((res) => (this.users = res.data));
    },
    deleteUser: function (id) {
      axios
        .delete(`http://localhost:8080/users/${id}`)
        .then((res) => (this.users = res.data));
    },
  },
});
