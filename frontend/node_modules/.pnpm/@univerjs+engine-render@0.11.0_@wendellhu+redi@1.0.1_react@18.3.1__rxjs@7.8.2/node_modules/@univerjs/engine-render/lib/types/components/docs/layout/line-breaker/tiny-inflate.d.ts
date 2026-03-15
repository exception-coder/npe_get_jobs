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
export declare class Tree {
    table: Uint16Array<ArrayBuffer>;
    trans: Uint16Array<ArrayBuffer>;
}
export declare class Data {
    source: Uint8Array;
    dest: Uint8Array;
    sourceIndex: number;
    tag: number;
    bitcount: number;
    destLen: number;
    ltree: Tree;
    dtree: Tree;
    constructor(source: Uint8Array, dest: Uint8Array);
}
export default function tinf_uncompress(source: Uint8Array, dest: Uint8Array): Uint8Array<ArrayBufferLike>;
