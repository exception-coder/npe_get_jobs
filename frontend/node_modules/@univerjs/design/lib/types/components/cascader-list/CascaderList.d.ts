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
export interface ICascaderOption {
    label: string;
    value: string;
    color?: string;
    children?: ICascaderOption[];
}
export interface ICascaderListProps {
    /**
     * The value of select
     */
    value: string[];
    /**
     * The options of select
     * @default []
     */
    options?: ICascaderOption[];
    /**
     * The callback function that is triggered when the value is changed
     */
    onChange: (value: string[]) => void;
    /**
     * The class name of the content
     */
    contentClassName?: string;
    /**
     * The class name of the wrapper
     */
    wrapperClassName?: string;
}
export declare function CascaderList(props: ICascaderListProps): import("react/jsx-runtime").JSX.Element;
