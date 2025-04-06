import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection, ConnectionStates } from 'mongoose';
import { ApiResponse } from '../../common/helpers/api-response';

@Injectable()
export class HealthService {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  healthStatus(): ApiResponse<string> {
    const status = this.connection.readyState;

    return new ApiResponse<string>({
      data: status === ConnectionStates.connected ? 'UP' : 'DOWN',
      statusCode: status === ConnectionStates.connected ? 200 : 503,
      message:
        status === ConnectionStates.connected
          ? 'Server is running'
          : 'Server is down',
    });
  }
}
