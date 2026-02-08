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
    'find-replace': {
        toolbar: string;
        shortcut: {
            'open-find-dialog': string;
            'open-replace-dialog': string;
            'close-dialog': string;
            'go-to-next-match': string;
            'go-to-previous-match': string;
            'focus-selection': string;
        };
        dialog: {
            title: string;
            find: string;
            replace: string;
            'replace-all': string;
            'case-sensitive': string;
            'find-placeholder': string;
            'advanced-finding': string;
            'replace-placeholder': string;
            'match-the-whole-cell': string;
            'find-direction': {
                title: string;
                row: string;
                column: string;
            };
            'find-scope': {
                title: string;
                'current-sheet': string;
                workbook: string;
            };
            'find-by': {
                title: string;
                value: string;
                formula: string;
            };
            'no-match': string;
            'no-result': string;
        };
        replace: {
            'all-success': string;
            'all-failure': string;
            confirm: {
                title: string;
            };
        };
    };
    'find-replace-shortcuts': string;
};
export default locale;
