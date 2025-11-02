import Fastify from 'fastify';
import reportsRoutes from './routes/reports';

const fastify = Fastify();

fastify.register(reportsRoutes)

fastify.listen({ port: 3000, host: '0.0.0.0' }, (err, addr) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
   
  console.log(`Server listening at ${addr}`);
});