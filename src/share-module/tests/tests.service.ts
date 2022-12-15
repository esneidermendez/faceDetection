import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { BASEURL } from 'src/common/api-resource';
import { firstValueFrom, Observable } from 'rxjs';
import { ResponseDto } from '../../common/dto/responseFotos.dto';
import { Response } from '../../common/dto/response.dto';
import { AppConfiguration } from 'read-appsettings-json';

@Injectable()
export class TestsService {
    private readonly logger = new Logger('TestService')
    constructor(private httpService: HttpService) {}

    base = AppConfiguration.Setting().URL_TRUORA;
    user = '42c54116-56c1-41a2-bf71-ea25452906b1';
    complement = AppConfiguration.Setting().URL_TRUORA_COMPLEMENT;
    video = 'VLD5c155c81fd8824a10d656498054f008b';
    params = AppConfiguration.Setting().URL_TRUORA_COMPLEMENT_PARAMS;

    baseUrl = this.base + this.user + this.complement + this.video + this.params;

    //getFotos(Param , Query): Observable<AxiosResponse<ResponseDto>> {
    getFotos(Param, Query): void {
        try {
            console.log(Param)
            console.log(Query)
        } catch (error) {
            console.log(error)
        }
    }
}
