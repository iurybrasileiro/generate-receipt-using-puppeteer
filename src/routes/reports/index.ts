import type { FastifyInstance } from "fastify";

import createPdfReport from "./create-pdf-report";

const reportsRoutes = (fastify: FastifyInstance) => {
  fastify.get('/reports', createPdfReport);
}

export default reportsRoutes