import { MessageDTO } from '../dtos/message-dto';

export abstract class AwsSnsServiceProtocol {
  abstract publishMessage(data: MessageDTO): Promise<void>;
}
