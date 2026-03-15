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
    ARRAY_CONSTRAIN: {
        description: string;
        abstract: string;
        links: {
            title: string;
            url: string;
        }[];
        functionParameter: {
            inputRange: {
                name: string;
                detail: string;
            };
            numRows: {
                name: string;
                detail: string;
            };
            numCols: {
                name: string;
                detail: string;
            };
        };
    };
    FLATTEN: {
        description: string;
        abstract: string;
        links: {
            title: string;
            url: string;
        }[];
        functionParameter: {
            range1: {
                name: string;
                detail: string;
            };
            range2: {
                name: string;
                detail: string;
            };
        };
    };
};
export default locale;
