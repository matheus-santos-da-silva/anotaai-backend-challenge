import { Inject, Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { MessageDTO } from './dtos/message-dto';
import { AwsSnsServiceProtocol } from './protocols/aws-sns-service-protocol';

@Injectable()
export class AwsSnsService implements AwsSnsServiceProtocol {
  constructor(@Inject('AWS.SNS') private readonly sns: AWS.SNS) {}

  async publishMessage({ message, topicArn }: MessageDTO): Promise<void> {
    const params = {
      Message: message,
      TopicArn: topicArn,
    };

    try {
      await this.sns.publish(params).promise();
      console.log('Mensagem publicada no tópico com sucesso');
    } catch (error) {
      console.error('Erro ao enviar a mensagem:', error);
    }
  }
}
