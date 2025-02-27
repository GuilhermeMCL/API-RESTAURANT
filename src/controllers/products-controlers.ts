import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { knex } from "../database";

export class ProductsController {

    async listProductsByID(request: FastifyRequest, reply: FastifyReply) {
        try {

            const paramsSchema = z.object({
                id: z.string()
            })
            paramsSchema.parse(request.params)
            const { id } = request.params as { id: string };
            const product = await knex.select("*").from("products").where({ id });
            return reply.send(product)
        }
        catch (error) { return reply.status(500).send({ mesesege: "Internal Server Error" }) }

    }
    async createProducts(request: FastifyRequest, reply: FastifyReply) {
        try {
            const bodySchema = z.object({
                name: z.string(),
                price: z.number().gt(0, { message: "Price must be greater than 0 // o preço do produto deve ser maior que 0" })
            })

            const { name, price } = bodySchema.parse(request.body)
            await knex.insert({ name, price }).into("products");
            return reply.send({ name, price });
        }
        catch (error) {
            return reply.status(500).send({ mesesege: "Internal Server Error" })
        }
    }

    async listProducts(request: FastifyRequest, reply: FastifyReply) {
        try {
            const products = await knex.select("*").from("products");
            return reply.send(products)

        }
        catch (error) { return reply.status(500).send({ mesesege: "Internal Server Error" }) }
    }
}