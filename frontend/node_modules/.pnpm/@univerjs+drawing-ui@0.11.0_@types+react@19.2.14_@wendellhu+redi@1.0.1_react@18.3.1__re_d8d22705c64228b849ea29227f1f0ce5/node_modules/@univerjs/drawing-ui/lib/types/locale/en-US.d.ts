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
declare const locale: {
    'image-popup': {
        replace: string;
        delete: string;
        edit: string;
        crop: string;
        reset: string;
    };
    'image-cropper': {
        error: string;
    };
    'image-panel': {
        arrange: {
            title: string;
            forward: string;
            backward: string;
            front: string;
            back: string;
        };
        transform: {
            title: string;
            rotate: string;
            x: string;
            y: string;
            width: string;
            height: string;
            lock: string;
        };
        crop: {
            title: string;
            start: string;
            mode: string;
        };
        group: {
            title: string;
            group: string;
            reGroup: string;
            unGroup: string;
        };
        align: {
            title: string;
            default: string;
            left: string;
            center: string;
            right: string;
            top: string;
            middle: string;
            bottom: string;
            horizon: string;
            vertical: string;
        };
        null: string;
    };
    'drawing-view': string;
    shortcut: {
        'drawing-move-down': string;
        'drawing-move-up': string;
        'drawing-move-left': string;
        'drawing-move-right': string;
        'drawing-delete': string;
    };
};
export default locale;
