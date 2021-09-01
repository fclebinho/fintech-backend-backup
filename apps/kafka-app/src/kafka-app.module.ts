import { Module } from '@nestjs/common';
import { KafkaAppController } from './kafka-app.controller';
import { KafkaAppService } from './kafka-app.service';

@Module({
  imports: [],
  controllers: [KafkaAppController],
  providers: [KafkaAppService],
})
export class KafkaAppModule {}