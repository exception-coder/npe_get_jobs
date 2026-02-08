import { Nullable, Injector } from '@univerjs/core';
import { FBase } from './f-base';
export interface IFBlobSource {
    /**
     * Return the data inside this object as a blob.
     */
    getBlob(): FBlob;
    /**
     * Return the data inside this object as a blob converted to the specified content type.
     * @param contentType the content type refer to https://developer.mozilla.org/en-US/docs/Web/HTTP/MIME_types/Common_types
     */
    getAs(contentType: string): FBlob;
}
/**
 * @hideconstructor
 */
export declare class FBlob extends FBase {
    private _blob;
    protected readonly _injector: Injector;
    constructor(_blob: Nullable<Blob>, _injector: Injector);
    /**
     * Returns a copy of this blob.
     * @returns a new blob by copying the current blob
     * @example
     * ```ts
     * const blob = univerAPI.newBlob();
     * const newBlob = blob.copyBlob();
     * console.log(newBlob);
     * ```
     */
    copyBlob(): FBlob;
    /**
     * Return the data inside this object as a blob converted to the specified content type.
     * @param contentType the content type refer to https://developer.mozilla.org/en-US/docs/Web/HTTP/MIME_types/Common_types
     * @returns a new blob by converting the current blob to the specified content type
     * @example
     * ```ts
     * const blob = univerAPI.newBlob();
     * const newBlob = blob.getAs('text/plain');
     * console.log(newBlob);
     * ```
     */
    getAs(contentType: string): FBlob;
    /**
     * Get the blob as a string.
     * @returns
     * @example
     * ```ts
     * const blob = univerAPI.newBlob();
     * const data = await blob.getDataAsString();
     * console.log(data);
     * ```
     */
    getDataAsString(): Promise<string>;
    /**
     * Get the blob as a string.
     * @param charset the charset
     * @returns the blob content as a string
     * @example
     * ```ts
     * const blob = univerAPI.newBlob();
     * const data = await blob.getDataAsString('iso-8859-1');
     * console.log(data);
     * ```
     */
    getDataAsString(charset?: string): Promise<string>;
    /**
     * Gets the data stored in this blob.
     * @returns the blob content as a byte array
     * @example
     * ```ts
     * const blob = univerAPI.newBlob();
     * const bytes = await blob.getBytes();
     * console.log(bytes);
     * ```
     */
    getBytes(): Promise<Uint8Array>;
    /**
     * Sets the data stored in this blob.
     * @param bytes a byte array
     * @returns the blob object
     * @example
     * ```ts
     * const blob = univerAPI.newBlob();
     * const bytes = new Uint8Array(10);
     * blob.setBytes(bytes);
     * ```
     */
    setBytes(bytes: Uint8Array): FBlob;
    /**
     * Sets the data stored in this blob.
     * @param data blob data string
     * @returns the blob object
     * @example
     * ```ts
     * const blob = univerAPI.newBlob();
     * blob.setDataFromString('Hello, World!');
     * ```
     */
    setDataFromString(data: string): FBlob;
    /**
     * Sets the data stored in this blob.
     * @param data a string
     * @param contentType the content type refer to https://developer.mozilla.org/en-US/docs/Web/HTTP/MIME_types/Common_types
     * @returns the blob object
     * @example
     * ```ts
     * const blob = univerAPI.newBlob();
     * blob.setDataFromString('Hello, World!', 'text/plain');
     * ```
     */
    setDataFromString(data: string, contentType?: string): FBlob;
    /**
     * Gets the content type of the data stored in this blob.
     * @returns the content type
     * @example
     * ```ts
     * const blob = univerAPI.newBlob();
     * const contentType = blob.getContentType();
     * console.log(contentType);
     * ```
     */
    getContentType(): string | undefined;
    /**
     * Sets the content type of the data stored in this blob.
     * @param contentType the content type refer to https://developer.mozilla.org/en-US/docs/Web/HTTP/MIME_types/Common_types
     * @returns the blob object
     * @example
     * ```ts
     * const blob = univerAPI.newBlob();
     * blob.setContentType('text/plain');
     * ```
     */
    setContentType(contentType: string): FBlob;
}
