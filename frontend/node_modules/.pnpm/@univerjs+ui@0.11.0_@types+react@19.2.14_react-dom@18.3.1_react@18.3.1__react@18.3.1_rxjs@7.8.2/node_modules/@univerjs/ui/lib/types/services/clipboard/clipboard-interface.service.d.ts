import { Disposable, ILogService, LocaleService } from '@univerjs/core';
import { INotificationService } from '../notification/notification.service';
export declare const PLAIN_TEXT_CLIPBOARD_MIME_TYPE = "text/plain";
export declare const HTML_CLIPBOARD_MIME_TYPE = "text/html";
export declare const FILE_PNG_CLIPBOARD_MIME_TYPE = "image/png";
export declare const FILE__JPEG_CLIPBOARD_MIME_TYPE = "image/jpeg";
export declare const FILE__BMP_CLIPBOARD_MIME_TYPE = "image/bmp";
export declare const FILE__WEBP_CLIPBOARD_MIME_TYPE = "image/webp";
export declare const FILE_SVG_XML_CLIPBOARD_MIME_TYPE = "image/svg+xml";
export declare const imageMimeTypeSet: Set<string>;
/**
 * This interface provides an interface to access system's clipboard.
 */
export interface IClipboardInterfaceService {
    /**
     * Write plain text into clipboard. Use write() to write both plain text and html.
     * @param text
     */
    writeText(text: string): Promise<void>;
    /**
     * Write both plain text and html into clipboard.
     * @param text
     * @param html
     */
    write(text: string, html: string): Promise<void>;
    /**
     * Read plain text from clipboard. Use read() to read both plain text and html.
     * @returns plain text
     */
    readText(): Promise<string>;
    /**
     * Read `ClipboardItem[]` from clipboard.
     */
    read(): Promise<ClipboardItem[]>;
    /**
     * This property tells if the platform supports reading data directly from the clipboard.
     */
    readonly supportClipboard: boolean;
}
export declare const IClipboardInterfaceService: import('@wendellhu/redi').IdentifierDecorator<IClipboardInterfaceService>;
export declare class BrowserClipboardService extends Disposable implements IClipboardInterfaceService {
    private readonly _localeService;
    private readonly _logService;
    private readonly _notificationService?;
    get supportClipboard(): boolean;
    constructor(_localeService: LocaleService, _logService: ILogService, _notificationService?: INotificationService | undefined);
    write(text: string, html: string): Promise<void>;
    writeText(text: string): Promise<void>;
    read(): Promise<ClipboardItem[]>;
    readText(): Promise<string>;
    private _legacyCopyHtml;
    private _legacyCopyText;
    private _showClipboardAuthenticationNotification;
}
