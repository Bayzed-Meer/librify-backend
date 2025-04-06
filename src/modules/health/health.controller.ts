import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';
import { ApiResponse } from '../../common/helpers/api-response';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  getHealthStatus(): ApiResponse<string> {
    return this.healthService.healthStatus();
  }
}
