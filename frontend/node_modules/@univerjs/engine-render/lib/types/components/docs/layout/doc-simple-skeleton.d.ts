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
export interface ILineInfo {
    text: string;
    width: number;
    height: number;
    baseline: number;
}
export declare class DocSimpleSkeleton {
    private _text;
    private _fontStyle;
    private _warp;
    private _width;
    private _height;
    private _lineBreaker;
    private _lines;
    private _dirty;
    private _lastBreakLength;
    constructor(_text: string, _fontStyle: string, _warp: boolean, _width: number, _height: number);
    calculate(): ILineInfo[];
    getLines(): ILineInfo[];
    getTotalHeight(): number;
    getTotalWidth(): number;
    makeDirty(): void;
}
