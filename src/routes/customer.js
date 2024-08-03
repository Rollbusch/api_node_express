module.exports = app => {

  const customerController = app.controllers.customer

  app.get("/api/v1/customer", (req, res) => {

    const data = customerController.getAllCustomers()

    res.json(data).end();
  })

}
