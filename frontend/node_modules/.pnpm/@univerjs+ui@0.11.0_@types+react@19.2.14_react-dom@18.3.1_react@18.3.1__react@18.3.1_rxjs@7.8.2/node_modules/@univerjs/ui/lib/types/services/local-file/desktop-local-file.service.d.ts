import { Disposable } from '@univerjs/core';
import { ILocalFileService, IOpenFileOptions } from './local-file.service';
export declare class DesktopLocalFileService extends Disposable implements ILocalFileService {
    openFile(options?: IOpenFileOptions): Promise<File[]>;
    downloadFile(data: Blob, fileName: string): void;
}
