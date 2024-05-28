import { MessageDTO } from 'src/services/aws/dtos/message-dto';
import { AwsSnsServiceProtocol } from '../../services/aws/protocols/aws-sns-service-protocol';

export class AWSSERVICEINMEMORY implements AwsSnsServiceProtocol {
  async publishMessage(data: MessageDTO): Promise<void> {
    console.log(data);
  }
}
