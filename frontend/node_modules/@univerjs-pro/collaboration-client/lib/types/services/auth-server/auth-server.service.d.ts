import { IConfigService, LocaleService } from '@univerjs/core';
import { HTTPService } from '@univerjs/network';
export declare class AuthServerService {
    private readonly _configService;
    private readonly _httpService;
    private readonly localeService;
    constructor(_configService: IConfigService, _httpService: HTTPService, localeService: LocaleService);
    init(): void;
    private _getLoginPath;
}
