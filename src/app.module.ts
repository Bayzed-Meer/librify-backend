import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { appConfig } from './config/app.config';
import { HealthModule } from './modules/health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(appConfig.dbUrl, {
      dbName: appConfig.dbName,
    }),
    HealthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
