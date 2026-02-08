import { HTTPService } from '@univerjs/network';
export declare class DomainRequestService {
    private readonly _httpService;
    constructor(_httpService: HTTPService);
    private _initRequestHeader;
}
