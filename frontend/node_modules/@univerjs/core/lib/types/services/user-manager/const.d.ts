import { IUser, UnitRole } from '@univerjs/protocol';
export declare const createDefaultUser: (type?: UnitRole) => IUser;
export declare const isDevRole: (userId: string, type: UnitRole) => boolean;
