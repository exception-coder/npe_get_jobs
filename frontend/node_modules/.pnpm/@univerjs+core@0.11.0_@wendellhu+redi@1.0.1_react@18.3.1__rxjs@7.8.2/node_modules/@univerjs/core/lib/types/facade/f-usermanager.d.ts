import { IUser, Injector, UserManagerService } from '@univerjs/core';
import { FBase } from './f-base';
/**
 * @hideconstructor
 */
export declare class FUserManager extends FBase {
    protected readonly _injector: Injector;
    private readonly _userManagerService;
    constructor(_injector: Injector, _userManagerService: UserManagerService);
    /**
     * Get current user info.
     * @returns {IUser} Current user info.
     * @example
     * ```typescript
     * univerAPI.getUserManager().getCurrentUser();
     * ```
     */
    getCurrentUser(): IUser;
}
