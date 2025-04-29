import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function runApplication(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}

void (async (): Promise<void> => {
  await runApplication();
})();
