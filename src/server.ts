
import { fastify } from 'fastify';
import { env } from './env'
import { createProduct } from './routes/products-routes';
import { errorHandler } from './middlewares/error-handdling';



const app = fastify();


app.register(createProduct)
app.register(errorHandler)


app.listen({
    port: env.PORT,
}).then(() => {
    console.log("server running on port : " + env.PORT);
});
