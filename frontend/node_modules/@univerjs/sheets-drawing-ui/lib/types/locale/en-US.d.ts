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
    sheetImage: {
        title: string;
        upload: {
            float: string;
            cell: string;
        };
        panel: {
            title: string;
        };
    };
    'image-popup': {
        replace: string;
        delete: string;
        edit: string;
        crop: string;
        reset: string;
    };
    'drawing-anchor': {
        title: string;
        both: string;
        position: string;
        none: string;
    };
    'update-status': {
        exceedMaxSize: string;
        invalidImageType: string;
        exceedMaxCount: string;
        invalidImage: string;
    };
    'cell-image': {
        pasteTitle: string;
        pasteContent: string;
        pasteError: string;
    };
};
export default locale;
