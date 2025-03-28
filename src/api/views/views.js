module.exports = {
  routes: [
    {
      method: "PUT",
      path: "/views/:contentType/:id",
      handler: "views.increment",
    },
  ],
};
