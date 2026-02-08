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
export interface AnimateConfig {
    loop: boolean;
    begin: number;
    end: number;
    duration: number;
    delay: number;
    type: string;
    receive: (v: number) => void;
    success: (v: number) => void;
    cancel: (v: number) => void;
    complete: (v: number) => void;
}
export declare enum AnimateStatus {
    Request = 0,
    Cancel = 1
}
export declare class Animate {
    protected _config: AnimateConfig;
    protected _status: AnimateStatus;
    protected _start: number;
    protected _handle: number;
    protected _delayHandle: NodeJS.Timeout | number | null;
    constructor(config: Partial<AnimateConfig>);
    static success(...animates: Animate[]): Promise<void>;
    request(): void;
    cancel(): void;
    protected _fakeHandle(): void;
}
