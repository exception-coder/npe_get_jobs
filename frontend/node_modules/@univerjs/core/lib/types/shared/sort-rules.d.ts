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
export declare function sortRules(oa: any, ob: any): 0 | 1 | -1;
export declare function sortRulesByDesc(oa: any, ob: any): 0 | 1 | -1;
/**
 *
 * @param key compare key
 * @param ruler 1:asc , 0:desc
 * @returns sort function
 */
export declare function sortRulesFactory(key?: string, ruler?: number): (oa: any, ob: any) => number;
