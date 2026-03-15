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
export declare class RefAlias<T extends Record<string, unknown>, K extends keyof T = keyof T> {
    private _values;
    private _keys;
    private _keyMaps;
    constructor(values: T[], keys: K[]);
    _initKeyMap(item: T): void;
    /**
     * If a key group is specified, the order of values is determined by the key group, otherwise it depends on the keys at initialization
     * @param {string} key
     * @param {K[]} [keyGroup]
     * @return {*}
     * @memberof RefAlias
     */
    getValue(key: string, keyGroup?: K[]): T | null | undefined;
    hasValue(key: string): boolean;
    addValue(item: T): void;
    setValue(key: string, attr: keyof T, value: unknown): void;
    deleteValue(key: string, keyGroup?: K[]): void;
    getValues(): T[];
    getKeyMap(key: K): unknown[];
    clear(): void;
}
