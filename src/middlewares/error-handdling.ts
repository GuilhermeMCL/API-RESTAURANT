import { FastifyRequest, FastifyReply, FastifyInstance } from 'fastify';
import { AppError } from '../utils/app-error';

export function errorHandler(app: FastifyInstance) {
    app.setErrorHandler(async (error: Error, request: FastifyRequest, reply: FastifyReply) => {
        if (error instanceof AppError) {
            return reply.status(error.statusCode).send({ message: error.message });
        }
        return reply.status(500).send({ message: "Internal Server Error" });
    });

    app
}