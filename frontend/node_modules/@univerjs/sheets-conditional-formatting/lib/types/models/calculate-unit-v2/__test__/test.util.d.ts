import { Dependency, ICommandService, Univer } from '@univerjs/core';
import { ConditionalFormattingRuleModel } from '../../../models/conditional-formatting-rule-model';
import { ConditionalFormattingService } from '../../../services/conditional-formatting.service';
import { ConditionalFormattingViewModel } from '../../conditional-formatting-view-model';
export declare const createTestBed: (dependencies?: Dependency[]) => {
    univer: Univer;
    get: {
        <T>(id: import('@wendellhu/redi').DependencyIdentifier<T>, lookUp?: import('@wendellhu/redi').LookUp): T;
        <T>(id: import('@wendellhu/redi').DependencyIdentifier<T>, quantity: import("@wendellhu/redi").Quantity.MANY, lookUp?: import('@wendellhu/redi').LookUp): T[];
        <T>(id: import('@wendellhu/redi').DependencyIdentifier<T>, quantity: import("@wendellhu/redi").Quantity.OPTIONAL, lookUp?: import('@wendellhu/redi').LookUp): T | null;
        <T>(id: import('@wendellhu/redi').DependencyIdentifier<T>, quantity: import("@wendellhu/redi").Quantity.REQUIRED, lookUp?: import('@wendellhu/redi').LookUp): T;
        <T>(id: import('@wendellhu/redi').DependencyIdentifier<T>, quantity?: import('@wendellhu/redi').Quantity, lookUp?: import('@wendellhu/redi').LookUp): T[] | T | null;
        <T>(id: import('@wendellhu/redi').DependencyIdentifier<T>, quantityOrLookup?: import('@wendellhu/redi').Quantity | import('@wendellhu/redi').LookUp, lookUp?: import('@wendellhu/redi').LookUp): T[] | T | null;
    };
    workbook: import('@univerjs/core').UnitModel<object, number>;
    unitId: string;
    subUnitId: string;
    commandService: ICommandService;
    getConditionalFormattingRuleModel: () => ConditionalFormattingRuleModel;
    getConditionalFormattingViewModel: () => ConditionalFormattingViewModel;
    getConditionalFormattingService: () => ConditionalFormattingService;
};
