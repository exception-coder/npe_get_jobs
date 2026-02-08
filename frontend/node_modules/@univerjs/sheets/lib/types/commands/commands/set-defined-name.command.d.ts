import { ICommand } from '@univerjs/core';
/**
 * The command to update defined name
 *
 * 1. The old defined name can be obtained through IDefinedNamesService, and does not need to be passed in from the outside, making the command input more concise

   2. Unlike InsertDefinedNameCommand, the old defined name needs to be deleted here at the same time. Because the command interception in UpdateDefinedNameController will add SetDefinedNameMutation or RemoveDefinedNameMutation, it results in that in DefinedNameController, only mutations can be listened to to update Function Description (commands cannot be listened to), so it is necessary to ensure that each mutation triggered by the command has completed all work.
 */
export declare const SetDefinedNameCommand: ICommand;
