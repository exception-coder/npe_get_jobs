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
type ItemValue = string | number;
interface ISegmentedItem<T extends ItemValue = ItemValue> {
    label: string;
    value: T;
}
interface ISegmentedProps<T extends ItemValue = ItemValue> {
    items: ISegmentedItem<T>[];
    value?: T;
    defaultValue?: T;
    onChange?: (value: T) => void;
    className?: string;
}
export declare function Segmented<T extends ItemValue = ItemValue>({ items, value, defaultValue, onChange, className, }: ISegmentedProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
