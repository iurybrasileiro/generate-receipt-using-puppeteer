import Fastify from 'fastify';
import reportsRoutes from './routes/reports';
import dotenv from 'dotenv';

dotenv.config();

const PORT = +(process.env.PORT || 3000);

const fastify = Fastify();

fastify.register(reportsRoutes)

fastify.listen({ port: PORT, host: '0.0.0.0' }, (err, addr) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
   
  console.log(`Server listening at ${addr}`);
});