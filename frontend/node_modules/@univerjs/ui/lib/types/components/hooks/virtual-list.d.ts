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
type ItemHeight<T> = (index: number, data: T) => number;
export interface IVirtualListOptions<T> {
    containerTarget: React.RefObject<HTMLElement>;
    itemHeight: number | ItemHeight<T>;
    overscan?: number;
}
declare const useVirtualList: <T>(list: T[], options: IVirtualListOptions<T>) => readonly [{
    index: number;
    data: T;
}[], {
    readonly wrapperStyle: {
        height: string | undefined;
        marginTop: string | undefined;
    };
    readonly scrollTo: (index: number) => void;
    readonly containerProps: {
        readonly onScroll: (e: React.UIEvent<HTMLElement, UIEvent>) => void;
    };
}];
export { useVirtualList };
