import { Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
import { IDefinedNamesService } from '@univerjs/engine-formula';
import { IDescriptionService } from '../services/description.service';
/**
 * header highlight
 * column menu: show, hover and mousedown event
 */
export declare class DefinedNameController extends Disposable {
    private readonly _descriptionService;
    private readonly _definedNamesService;
    private readonly _univerInstanceService;
    private readonly _commandService;
    private _preUnitId;
    constructor(_descriptionService: IDescriptionService, _definedNamesService: IDefinedNamesService, _univerInstanceService: IUniverInstanceService, _commandService: ICommandService);
    private _initialize;
    private _descriptionListener;
    private _changeUnitListener;
    private _changeSheetListener;
    private _registerDescription;
    private _unregisterDescription;
    private _unRegisterDescriptions;
    private _getUnitIdAndSheetId;
    private _registerDescriptions;
    private _unregisterDescriptionsForNotInSheetId;
}
