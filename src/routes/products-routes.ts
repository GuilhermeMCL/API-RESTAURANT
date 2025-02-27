import { FastifyInstance } from "fastify";
import { ProductsController } from "../controllers/products-controlers";




const productsController = new ProductsController();

export async function createProduct(app: FastifyInstance) {
    app.post('/products', async (request, reply) => {
        return productsController.createProducts(request, reply)
    })

    app.get('/products', async (request, reply) => {
        return productsController.listProducts(request, reply)
    })

    app.get('/products/:id', async (request, reply) => {
        return productsController.listProductsByID(request, reply)
    })
}