/**
 * Copyright 2023-present DreamNum Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
interface IHeadersConstructorProps {
    [key: string]: string | number | boolean;
}
export declare const ApplicationJSONType = "application/json";
/**
 * Check if the content type is application/json
 * "application/json" or "application/json; charset=utf-8" or ["application/json"]
 * @param contentType
 */
export declare function isApplicationJSONType(contentType: string | string[]): boolean;
/**
 * It wraps headers of HTTP requests' and responses' headers.
 */
export declare class HTTPHeaders {
    private readonly _headers;
    constructor(headers?: IHeadersConstructorProps | Headers | string);
    forEach(callback: (name: string, value: string[]) => void): void;
    has(key: string): boolean;
    get(key: string): string[] | null;
    set(key: string, value: string | number | boolean): void;
    toHeadersInit(body?: any): HeadersInit;
    private _setHeader;
    private _handleHeadersString;
    private _handleHeadersConstructorProps;
    private _handleHeaders;
}
export {};
