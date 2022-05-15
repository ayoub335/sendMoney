import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
const helmet = require('helmet');
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
    bodyParser: true,
  });
  await app.listen(3000);
  app.enable('trust proxy');
  app.use(helmet());
  app.enableCors();
  

}
bootstrap();
