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
export declare class Registry<T = any> {
    private _data;
    static create<T = any>(): Registry<T>;
    add(dataInstance: T): void;
    delete(dataInstance: T): void;
    getData(): T[];
}
/**
 * Add extension modules statically when the plugin is initialized, so that the plugin can register these extension modules uniformly
 *
 * @privateRemarks
 * zh: 在插件初始化的时候静态添加扩展模块，方便插件统一注册这些扩展模块
 */
export declare class RegistryAsMap {
    private _data;
    static create(): RegistryAsMap;
    add(id: string, dataInstance: any): void;
    delete(id: string): void;
    getData(): Map<string, any>;
}
