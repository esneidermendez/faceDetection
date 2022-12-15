import { Injectable } from '@nestjs/common';
import { HttpModuleOptions, HttpModuleOptionsFactory } from '@nestjs/axios';

@Injectable()
export class HttpConfigService implements HttpModuleOptionsFactory {
  createHttpOptions(): HttpModuleOptions {
    return {
      headers: {
        'Truora-API-Key':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiIiwiYWRkaXRpb25hbF9kYXRhIjoie30iLCJjbGllbnRfaWQiOiJUQ0lkMDE2MWJmYTRiNzAzNDk4NzE5MzBjMTUyN2IzNDliYSIsImV4cCI6MzIyMTA3MzE2MSwiZ3JhbnQiOiIiLCJpYXQiOjE2NDQyNzMxNjEsImlzcyI6Imh0dHBzOi8vY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vdXMtZWFzdC0xX0F5blpRWXJoZiIsImp0aSI6IjQ0MzUxODk4LWQyNzEtNDE3NC05NzVlLWMyYjEyMWE4YTU5MiIsImtleV9uYW1lIjoiZGVzYXJyb2xsbyIsImtleV90eXBlIjoiYmFja2VuZCIsInVzZXJuYW1lIjoiZ3J1cG9mdW5kYWNpb25zb2NpYWwtZGVzYXJyb2xsbyJ9.m-QJNE_wgzSEo7YAAjLp1RJHQXud2CDvWgt7SIuiCMI',
      },
    };
  }
}
