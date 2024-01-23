const Product = require("../models/Product");

const ProductController = {
  async index(request, response) {
    const products = await Product.findAll({ limit: 10 });

    return response.send(products);
  },

  async store(request, response) {
    await Product.create(request.body)
    
    return response.status(201).send('Product has been created.')
  },

  async show(request, response) {
    const product = await Product.findByPk(request.params.id);

    if (!product) return response.status(404).send({ message: 'Product not found.' });

    return response.send(product);
  },

  async update(request, response) {
    await Product.update(request.body, {
      where: {
        id: request.params.id
      }
    })

    return response.send('Product has been updated.')
  },

  async delete(request, response) {
    await Product.destroy({
      where: {
        id: request.params.id
      }
    })

    return response.send({ message: 'Product has been removed.' })

  }
};

module.exports = ProductController;
