const getAllCustomers = (app) => {

  return app.data.customer
}

module.exports = app => {
  const controller = {}
  
  controller.getAllCustomers = () => getAllCustomers(app)

  return controller
}