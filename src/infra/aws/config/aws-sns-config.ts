import { AWS_ACCESS_KEY, AWS_SECRET_KEY, AWS_REGION } from '../../../env';
import { Module } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Module({
  providers: [
    {
      provide: 'AWS.SNS',
      useValue: new AWS.SNS({
        region: AWS_REGION,
        credentials: {
          accessKeyId: AWS_ACCESS_KEY,
          secretAccessKey: AWS_SECRET_KEY,
        },
      }),
    },
  ],
  exports: ['AWS.SNS'],
})
export class AwsSNSModule {}
