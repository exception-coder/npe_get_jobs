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
export interface IAnchor {
    id: string;
    type: 'before' | 'after' | 'self';
}
export declare const findIndexByAnchor: <T = unknown[]>(anchor: IAnchor, ruleList: T[], get: (v: T) => string) => number | null;
/**
 * This function has side effects that modify the ruleList
 * @param {IAnchor} start
 * @param {IAnchor} end
 * @param {ReturnType<ConditionalFormattingRuleModel['getSubunitRules']>} ruleList
 * @return {*}
 */
export declare const moveByAnchor: <T = unknown[]>(start: IAnchor, end: IAnchor, ruleList: T[], get: (v: T) => string) => null | undefined;
/**
 * Only [after,after] and [after,before] can support symmetric operations
 */
export declare const transformSupportSymmetryAnchor: <T = unknown[]>(start: IAnchor, end: IAnchor, ruleList: T[], get: (v: T) => string) => [IAnchor, IAnchor] | null;
export declare const anchorUndoFactory: (start: IAnchor, end: IAnchor) => [IAnchor, IAnchor] | null;
export declare const isAnchorEqual: (anchor1: IAnchor, anchor2: IAnchor) => boolean;
