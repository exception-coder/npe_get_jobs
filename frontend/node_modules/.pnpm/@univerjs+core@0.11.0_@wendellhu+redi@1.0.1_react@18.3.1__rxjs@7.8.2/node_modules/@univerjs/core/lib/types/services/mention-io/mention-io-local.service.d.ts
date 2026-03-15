import { IListMentionParam, IListMentionResponse, IMentionIOService } from './type';
import { UserManagerService } from '../user-manager/user-manager.service';
export declare class MentionIOLocalService implements IMentionIOService {
    private _userManagerService;
    constructor(_userManagerService: UserManagerService);
    list(params: IListMentionParam): Promise<IListMentionResponse>;
}
