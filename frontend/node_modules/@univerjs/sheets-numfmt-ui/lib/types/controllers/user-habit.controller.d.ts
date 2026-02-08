import { ILocalStorageService } from '@univerjs/core';
type HabitValue = string | number;
interface IUserHabitController {
    addHabit(habit: string, initValue: HabitValue[]): Promise<void>;
    markHabit(habit: string, value: HabitValue): void;
    deleteHabit(habit: string): void;
    getHabit(habit: string, sortList?: HabitValue[]): Promise<HabitValue[]>;
}
export declare const UserHabitCurrencyContext: import('react').Context<string[]>;
export declare class UserHabitController implements IUserHabitController {
    private _localStorageService;
    constructor(_localStorageService: ILocalStorageService);
    private _getKey;
    addHabit<T = unknown[]>(habit: string, initValue: T): Promise<void>;
    markHabit(habit: string, value: HabitValue): void;
    getHabit(habit: string, sortList: HabitValue[]): Promise<HabitValue[]>;
    deleteHabit(habit: string): void;
}
export {};
