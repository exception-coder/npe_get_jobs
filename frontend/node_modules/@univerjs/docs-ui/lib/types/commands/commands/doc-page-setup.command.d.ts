import { ICommand, ISize, PageOrientType } from '@univerjs/core';
export interface IDocPageSetupCommandParams {
    pageSize: ISize;
    pageOrient: PageOrientType;
    marginTop: number;
    marginBottom: number;
    marginLeft: number;
    marginRight: number;
}
export declare const DocPageSetupCommand: ICommand<IDocPageSetupCommandParams>;
