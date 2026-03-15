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
export interface ISliderProps {
    /** The value of slider. When range is false, use number, otherwise, use [number, number] */
    value: number;
    /**
     * The minimum value the slider can slide to
     *  @default 0
     */
    min?: number;
    /**
     * The maximum value the slider can slide to
     *  @default 400
     */
    max?: number;
    /**
     * Whether the slider is disabled
     *  @default false
     */
    disabled?: boolean;
    /**
     * The maximum value the slider can slide to
     *  @default 100
     */
    resetPoint?: number;
    /** Shortcuts of slider */
    shortcuts: number[];
    /** (value) => void */
    onChange?: (value: number) => void;
}
/**
 * Slider Component
 */
export declare function Slider(props: ISliderProps): import("react/jsx-runtime").JSX.Element;
