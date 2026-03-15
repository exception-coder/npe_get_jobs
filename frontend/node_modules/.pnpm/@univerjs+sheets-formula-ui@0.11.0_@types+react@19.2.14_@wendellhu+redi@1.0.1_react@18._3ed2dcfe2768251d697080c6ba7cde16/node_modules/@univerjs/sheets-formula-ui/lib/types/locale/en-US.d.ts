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
    shortcut: {
        'sheets-formula-ui': {
            'quick-sum': string;
        };
    };
    formula: {
        insert: {
            tooltip: string;
            sum: string;
            average: string;
            count: string;
            max: string;
            min: string;
            more: string;
        };
        functionList: {
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
            ENCODEURL: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    text: {
                        name: string;
                        detail: string;
                    };
                };
            };
            FILTERXML: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            WEBSERVICE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            BETADIST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                    alpha: {
                        name: string;
                        detail: string;
                    };
                    beta: {
                        name: string;
                        detail: string;
                    };
                    A: {
                        name: string;
                        detail: string;
                    };
                    B: {
                        name: string;
                        detail: string;
                    };
                };
            };
            BETAINV: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    probability: {
                        name: string;
                        detail: string;
                    };
                    alpha: {
                        name: string;
                        detail: string;
                    };
                    beta: {
                        name: string;
                        detail: string;
                    };
                    A: {
                        name: string;
                        detail: string;
                    };
                    B: {
                        name: string;
                        detail: string;
                    };
                };
            };
            BINOMDIST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    numberS: {
                        name: string;
                        detail: string;
                    };
                    trials: {
                        name: string;
                        detail: string;
                    };
                    probabilityS: {
                        name: string;
                        detail: string;
                    };
                    cumulative: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CHIDIST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                    degFreedom: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CHIINV: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    probability: {
                        name: string;
                        detail: string;
                    };
                    degFreedom: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CHITEST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    actualRange: {
                        name: string;
                        detail: string;
                    };
                    expectedRange: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CONFIDENCE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    alpha: {
                        name: string;
                        detail: string;
                    };
                    standardDev: {
                        name: string;
                        detail: string;
                    };
                    size: {
                        name: string;
                        detail: string;
                    };
                };
            };
            COVAR: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array1: {
                        name: string;
                        detail: string;
                    };
                    array2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CRITBINOM: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    trials: {
                        name: string;
                        detail: string;
                    };
                    probabilityS: {
                        name: string;
                        detail: string;
                    };
                    alpha: {
                        name: string;
                        detail: string;
                    };
                };
            };
            EXPONDIST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                    lambda: {
                        name: string;
                        detail: string;
                    };
                    cumulative: {
                        name: string;
                        detail: string;
                    };
                };
            };
            FDIST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                    degFreedom1: {
                        name: string;
                        detail: string;
                    };
                    degFreedom2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            FINV: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    probability: {
                        name: string;
                        detail: string;
                    };
                    degFreedom1: {
                        name: string;
                        detail: string;
                    };
                    degFreedom2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            FTEST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array1: {
                        name: string;
                        detail: string;
                    };
                    array2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            GAMMADIST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                    alpha: {
                        name: string;
                        detail: string;
                    };
                    beta: {
                        name: string;
                        detail: string;
                    };
                    cumulative: {
                        name: string;
                        detail: string;
                    };
                };
            };
            GAMMAINV: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    probability: {
                        name: string;
                        detail: string;
                    };
                    alpha: {
                        name: string;
                        detail: string;
                    };
                    beta: {
                        name: string;
                        detail: string;
                    };
                };
            };
            HYPGEOMDIST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    sampleS: {
                        name: string;
                        detail: string;
                    };
                    numberSample: {
                        name: string;
                        detail: string;
                    };
                    populationS: {
                        name: string;
                        detail: string;
                    };
                    numberPop: {
                        name: string;
                        detail: string;
                    };
                    cumulative: {
                        name: string;
                        detail: string;
                    };
                };
            };
            LOGINV: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    probability: {
                        name: string;
                        detail: string;
                    };
                    mean: {
                        name: string;
                        detail: string;
                    };
                    standardDev: {
                        name: string;
                        detail: string;
                    };
                };
            };
            LOGNORMDIST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                    mean: {
                        name: string;
                        detail: string;
                    };
                    standardDev: {
                        name: string;
                        detail: string;
                    };
                    cumulative: {
                        name: string;
                        detail: string;
                    };
                };
            };
            MODE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            NEGBINOMDIST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    numberF: {
                        name: string;
                        detail: string;
                    };
                    numberS: {
                        name: string;
                        detail: string;
                    };
                    probabilityS: {
                        name: string;
                        detail: string;
                    };
                    cumulative: {
                        name: string;
                        detail: string;
                    };
                };
            };
            NORMDIST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                    mean: {
                        name: string;
                        detail: string;
                    };
                    standardDev: {
                        name: string;
                        detail: string;
                    };
                    cumulative: {
                        name: string;
                        detail: string;
                    };
                };
            };
            NORMINV: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    probability: {
                        name: string;
                        detail: string;
                    };
                    mean: {
                        name: string;
                        detail: string;
                    };
                    standardDev: {
                        name: string;
                        detail: string;
                    };
                };
            };
            NORMSDIST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    z: {
                        name: string;
                        detail: string;
                    };
                };
            };
            NORMSINV: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    probability: {
                        name: string;
                        detail: string;
                    };
                };
            };
            PERCENTILE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array: {
                        name: string;
                        detail: string;
                    };
                    k: {
                        name: string;
                        detail: string;
                    };
                };
            };
            PERCENTRANK: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array: {
                        name: string;
                        detail: string;
                    };
                    x: {
                        name: string;
                        detail: string;
                    };
                    significance: {
                        name: string;
                        detail: string;
                    };
                };
            };
            POISSON: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                    mean: {
                        name: string;
                        detail: string;
                    };
                    cumulative: {
                        name: string;
                        detail: string;
                    };
                };
            };
            QUARTILE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array: {
                        name: string;
                        detail: string;
                    };
                    quart: {
                        name: string;
                        detail: string;
                    };
                };
            };
            RANK: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    ref: {
                        name: string;
                        detail: string;
                    };
                    order: {
                        name: string;
                        detail: string;
                    };
                };
            };
            STDEV: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            STDEVP: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            TDIST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                    degFreedom: {
                        name: string;
                        detail: string;
                    };
                    tails: {
                        name: string;
                        detail: string;
                    };
                };
            };
            TINV: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    probability: {
                        name: string;
                        detail: string;
                    };
                    degFreedom: {
                        name: string;
                        detail: string;
                    };
                };
            };
            TTEST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array1: {
                        name: string;
                        detail: string;
                    };
                    array2: {
                        name: string;
                        detail: string;
                    };
                    tails: {
                        name: string;
                        detail: string;
                    };
                    type: {
                        name: string;
                        detail: string;
                    };
                };
            };
            VAR: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            VARP: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            WEIBULL: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                    alpha: {
                        name: string;
                        detail: string;
                    };
                    beta: {
                        name: string;
                        detail: string;
                    };
                    cumulative: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ZTEST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array: {
                        name: string;
                        detail: string;
                    };
                    x: {
                        name: string;
                        detail: string;
                    };
                    sigma: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CUBEKPIMEMBER: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CUBEMEMBER: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CUBEMEMBERPROPERTY: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CUBERANKEDMEMBER: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CUBESET: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CUBESETCOUNT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CUBEVALUE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            BESSELI: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                    n: {
                        name: string;
                        detail: string;
                    };
                };
            };
            BESSELJ: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                    n: {
                        name: string;
                        detail: string;
                    };
                };
            };
            BESSELK: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                    n: {
                        name: string;
                        detail: string;
                    };
                };
            };
            BESSELY: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                    n: {
                        name: string;
                        detail: string;
                    };
                };
            };
            BIN2DEC: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            BIN2HEX: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    places: {
                        name: string;
                        detail: string;
                    };
                };
            };
            BIN2OCT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    places: {
                        name: string;
                        detail: string;
                    };
                };
            };
            BITAND: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            BITLSHIFT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    shiftAmount: {
                        name: string;
                        detail: string;
                    };
                };
            };
            BITOR: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            BITRSHIFT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    shiftAmount: {
                        name: string;
                        detail: string;
                    };
                };
            };
            BITXOR: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            COMPLEX: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    realNum: {
                        name: string;
                        detail: string;
                    };
                    iNum: {
                        name: string;
                        detail: string;
                    };
                    suffix: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CONVERT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    fromUnit: {
                        name: string;
                        detail: string;
                    };
                    toUnit: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DEC2BIN: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    places: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DEC2HEX: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    places: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DEC2OCT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    places: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DELTA: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ERF: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    lowerLimit: {
                        name: string;
                        detail: string;
                    };
                    upperLimit: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ERF_PRECISE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ERFC: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ERFC_PRECISE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                };
            };
            GESTEP: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    step: {
                        name: string;
                        detail: string;
                    };
                };
            };
            HEX2BIN: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    places: {
                        name: string;
                        detail: string;
                    };
                };
            };
            HEX2DEC: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            HEX2OCT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    places: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IMABS: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    inumber: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IMAGINARY: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    inumber: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IMARGUMENT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    inumber: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IMCONJUGATE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    inumber: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IMCOS: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    inumber: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IMCOSH: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    inumber: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IMCOT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    inumber: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IMCOTH: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    inumber: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IMCSC: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    inumber: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IMCSCH: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    inumber: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IMDIV: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    inumber1: {
                        name: string;
                        detail: string;
                    };
                    inumber2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IMEXP: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    inumber: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IMLN: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    inumber: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IMLOG: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    inumber: {
                        name: string;
                        detail: string;
                    };
                    base: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IMLOG10: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    inumber: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IMLOG2: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    inumber: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IMPOWER: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    inumber: {
                        name: string;
                        detail: string;
                    };
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IMPRODUCT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    inumber1: {
                        name: string;
                        detail: string;
                    };
                    inumber2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IMREAL: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    inumber: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IMSEC: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    inumber: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IMSECH: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    inumber: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IMSIN: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    inumber: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IMSINH: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    inumber: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IMSQRT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    inumber: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IMSUB: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    inumber1: {
                        name: string;
                        detail: string;
                    };
                    inumber2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IMSUM: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    inumber1: {
                        name: string;
                        detail: string;
                    };
                    inumber2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IMTAN: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    inumber: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IMTANH: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    inumber: {
                        name: string;
                        detail: string;
                    };
                };
            };
            OCT2BIN: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    places: {
                        name: string;
                        detail: string;
                    };
                };
            };
            OCT2DEC: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            OCT2HEX: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    places: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CELL: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    infoType: {
                        name: string;
                        detail: string;
                    };
                    reference: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ERROR_TYPE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    errorVal: {
                        name: string;
                        detail: string;
                    };
                };
            };
            INFO: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ISBETWEEN: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    valueToCompare: {
                        name: string;
                        detail: string;
                    };
                    lowerValue: {
                        name: string;
                        detail: string;
                    };
                    upperValue: {
                        name: string;
                        detail: string;
                    };
                    lowerValueIsInclusive: {
                        name: string;
                        detail: string;
                    };
                    upperValueIsInclusive: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ISBLANK: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    value: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ISDATE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    value: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ISEMAIL: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    value: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ISERR: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    value: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ISERROR: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    value: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ISEVEN: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    value: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ISFORMULA: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    reference: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ISLOGICAL: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    value: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ISNA: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    value: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ISNONTEXT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    value: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ISNUMBER: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    value: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ISODD: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    value: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ISOMITTED: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ISREF: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    value: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ISTEXT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    value: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ISURL: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    value: {
                        name: string;
                        detail: string;
                    };
                };
            };
            N: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    value: {
                        name: string;
                        detail: string;
                    };
                };
            };
            NA: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {};
            };
            SHEET: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    value: {
                        name: string;
                        detail: string;
                    };
                };
            };
            SHEETS: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {};
            };
            TYPE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    value: {
                        name: string;
                        detail: string;
                    };
                };
            };
            AND: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    logical1: {
                        name: string;
                        detail: string;
                    };
                    logical2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            BYCOL: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array: {
                        name: string;
                        detail: string;
                    };
                    lambda: {
                        name: string;
                        detail: string;
                    };
                };
            };
            BYROW: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array: {
                        name: string;
                        detail: string;
                    };
                    lambda: {
                        name: string;
                        detail: string;
                    };
                };
            };
            FALSE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {};
            };
            IF: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    logicalTest: {
                        name: string;
                        detail: string;
                    };
                    valueIfTrue: {
                        name: string;
                        detail: string;
                    };
                    valueIfFalse: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IFERROR: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    value: {
                        name: string;
                        detail: string;
                    };
                    valueIfError: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IFNA: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    value: {
                        name: string;
                        detail: string;
                    };
                    valueIfNa: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IFS: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    logicalTest1: {
                        name: string;
                        detail: string;
                    };
                    valueIfTrue1: {
                        name: string;
                        detail: string;
                    };
                    logicalTest2: {
                        name: string;
                        detail: string;
                    };
                    valueIfTrue2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            LAMBDA: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    parameter: {
                        name: string;
                        detail: string;
                    };
                    calculation: {
                        name: string;
                        detail: string;
                    };
                };
            };
            LET: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    name1: {
                        name: string;
                        detail: string;
                    };
                    nameValue1: {
                        name: string;
                        detail: string;
                    };
                    calculationOrName2: {
                        name: string;
                        detail: string;
                    };
                    nameValue2: {
                        name: string;
                        detail: string;
                    };
                    calculationOrName3: {
                        name: string;
                        detail: string;
                    };
                };
            };
            MAKEARRAY: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                    value3: {
                        name: string;
                        detail: string;
                    };
                };
            };
            MAP: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array1: {
                        name: string;
                        detail: string;
                    };
                    array2: {
                        name: string;
                        detail: string;
                    };
                    lambda: {
                        name: string;
                        detail: string;
                    };
                };
            };
            NOT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    logical: {
                        name: string;
                        detail: string;
                    };
                };
            };
            OR: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    logical1: {
                        name: string;
                        detail: string;
                    };
                    logical2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            REDUCE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    initialValue: {
                        name: string;
                        detail: string;
                    };
                    array: {
                        name: string;
                        detail: string;
                    };
                    lambda: {
                        name: string;
                        detail: string;
                    };
                };
            };
            SCAN: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    initialValue: {
                        name: string;
                        detail: string;
                    };
                    array: {
                        name: string;
                        detail: string;
                    };
                    lambda: {
                        name: string;
                        detail: string;
                    };
                };
            };
            SWITCH: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    expression: {
                        name: string;
                        detail: string;
                    };
                    value1: {
                        name: string;
                        detail: string;
                    };
                    result1: {
                        name: string;
                        detail: string;
                    };
                    defaultOrValue2: {
                        name: string;
                        detail: string;
                    };
                    result2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            TRUE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {};
            };
            XOR: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    logical1: {
                        name: string;
                        detail: string;
                    };
                    logical2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ASC: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    text: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ARRAYTOTEXT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array: {
                        name: string;
                        detail: string;
                    };
                    format: {
                        name: string;
                        detail: string;
                    };
                };
            };
            BAHTTEXT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CHAR: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CLEAN: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    text: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CODE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    text: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CONCAT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    text1: {
                        name: string;
                        detail: string;
                    };
                    text2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CONCATENATE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    text1: {
                        name: string;
                        detail: string;
                    };
                    text2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DBCS: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    text: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DOLLAR: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    decimals: {
                        name: string;
                        detail: string;
                    };
                };
            };
            EXACT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    text1: {
                        name: string;
                        detail: string;
                    };
                    text2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            FIND: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    findText: {
                        name: string;
                        detail: string;
                    };
                    withinText: {
                        name: string;
                        detail: string;
                    };
                    startNum: {
                        name: string;
                        detail: string;
                    };
                };
            };
            FINDB: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    findText: {
                        name: string;
                        detail: string;
                    };
                    withinText: {
                        name: string;
                        detail: string;
                    };
                    startNum: {
                        name: string;
                        detail: string;
                    };
                };
            };
            FIXED: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    decimals: {
                        name: string;
                        detail: string;
                    };
                    noCommas: {
                        name: string;
                        detail: string;
                    };
                };
            };
            LEFT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    text: {
                        name: string;
                        detail: string;
                    };
                    numChars: {
                        name: string;
                        detail: string;
                    };
                };
            };
            LEFTB: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    text: {
                        name: string;
                        detail: string;
                    };
                    numBytes: {
                        name: string;
                        detail: string;
                    };
                };
            };
            LEN: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    text: {
                        name: string;
                        detail: string;
                    };
                };
            };
            LENB: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    text: {
                        name: string;
                        detail: string;
                    };
                };
            };
            LOWER: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    text: {
                        name: string;
                        detail: string;
                    };
                };
            };
            MID: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    text: {
                        name: string;
                        detail: string;
                    };
                    startNum: {
                        name: string;
                        detail: string;
                    };
                    numChars: {
                        name: string;
                        detail: string;
                    };
                };
            };
            MIDB: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    text: {
                        name: string;
                        detail: string;
                    };
                    startNum: {
                        name: string;
                        detail: string;
                    };
                    numBytes: {
                        name: string;
                        detail: string;
                    };
                };
            };
            NUMBERSTRING: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    type: {
                        name: string;
                        detail: string;
                    };
                };
            };
            NUMBERVALUE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    text: {
                        name: string;
                        detail: string;
                    };
                    decimalSeparator: {
                        name: string;
                        detail: string;
                    };
                    groupSeparator: {
                        name: string;
                        detail: string;
                    };
                };
            };
            PHONETIC: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            PROPER: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    text: {
                        name: string;
                        detail: string;
                    };
                };
            };
            REGEXEXTRACT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    text: {
                        name: string;
                        detail: string;
                    };
                    regularExpression: {
                        name: string;
                        detail: string;
                    };
                };
            };
            REGEXMATCH: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    text: {
                        name: string;
                        detail: string;
                    };
                    regularExpression: {
                        name: string;
                        detail: string;
                    };
                };
            };
            REGEXREPLACE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    text: {
                        name: string;
                        detail: string;
                    };
                    regularExpression: {
                        name: string;
                        detail: string;
                    };
                    replacement: {
                        name: string;
                        detail: string;
                    };
                };
            };
            REPLACE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    oldText: {
                        name: string;
                        detail: string;
                    };
                    startNum: {
                        name: string;
                        detail: string;
                    };
                    numChars: {
                        name: string;
                        detail: string;
                    };
                    newText: {
                        name: string;
                        detail: string;
                    };
                };
            };
            REPLACEB: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    oldText: {
                        name: string;
                        detail: string;
                    };
                    startNum: {
                        name: string;
                        detail: string;
                    };
                    numBytes: {
                        name: string;
                        detail: string;
                    };
                    newText: {
                        name: string;
                        detail: string;
                    };
                };
            };
            REPT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    text: {
                        name: string;
                        detail: string;
                    };
                    numberTimes: {
                        name: string;
                        detail: string;
                    };
                };
            };
            RIGHT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    text: {
                        name: string;
                        detail: string;
                    };
                    numChars: {
                        name: string;
                        detail: string;
                    };
                };
            };
            RIGHTB: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    text: {
                        name: string;
                        detail: string;
                    };
                    numBytes: {
                        name: string;
                        detail: string;
                    };
                };
            };
            SEARCH: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    findText: {
                        name: string;
                        detail: string;
                    };
                    withinText: {
                        name: string;
                        detail: string;
                    };
                    startNum: {
                        name: string;
                        detail: string;
                    };
                };
            };
            SEARCHB: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    findText: {
                        name: string;
                        detail: string;
                    };
                    withinText: {
                        name: string;
                        detail: string;
                    };
                    startNum: {
                        name: string;
                        detail: string;
                    };
                };
            };
            SUBSTITUTE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    text: {
                        name: string;
                        detail: string;
                    };
                    oldText: {
                        name: string;
                        detail: string;
                    };
                    newText: {
                        name: string;
                        detail: string;
                    };
                    instanceNum: {
                        name: string;
                        detail: string;
                    };
                };
            };
            T: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    value: {
                        name: string;
                        detail: string;
                    };
                };
            };
            TEXT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    value: {
                        name: string;
                        detail: string;
                    };
                    formatText: {
                        name: string;
                        detail: string;
                    };
                };
            };
            TEXTAFTER: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    text: {
                        name: string;
                        detail: string;
                    };
                    delimiter: {
                        name: string;
                        detail: string;
                    };
                    instanceNum: {
                        name: string;
                        detail: string;
                    };
                    matchMode: {
                        name: string;
                        detail: string;
                    };
                    matchEnd: {
                        name: string;
                        detail: string;
                    };
                    ifNotFound: {
                        name: string;
                        detail: string;
                    };
                };
            };
            TEXTBEFORE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    text: {
                        name: string;
                        detail: string;
                    };
                    delimiter: {
                        name: string;
                        detail: string;
                    };
                    instanceNum: {
                        name: string;
                        detail: string;
                    };
                    matchMode: {
                        name: string;
                        detail: string;
                    };
                    matchEnd: {
                        name: string;
                        detail: string;
                    };
                    ifNotFound: {
                        name: string;
                        detail: string;
                    };
                };
            };
            TEXTJOIN: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    delimiter: {
                        name: string;
                        detail: string;
                    };
                    ignoreEmpty: {
                        name: string;
                        detail: string;
                    };
                    text1: {
                        name: string;
                        detail: string;
                    };
                    text2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            TEXTSPLIT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    text: {
                        name: string;
                        detail: string;
                    };
                    colDelimiter: {
                        name: string;
                        detail: string;
                    };
                    rowDelimiter: {
                        name: string;
                        detail: string;
                    };
                    ignoreEmpty: {
                        name: string;
                        detail: string;
                    };
                    matchMode: {
                        name: string;
                        detail: string;
                    };
                    padWith: {
                        name: string;
                        detail: string;
                    };
                };
            };
            TRIM: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    text: {
                        name: string;
                        detail: string;
                    };
                };
            };
            UNICHAR: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            UNICODE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    text: {
                        name: string;
                        detail: string;
                    };
                };
            };
            UPPER: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    text: {
                        name: string;
                        detail: string;
                    };
                };
            };
            VALUE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    text: {
                        name: string;
                        detail: string;
                    };
                };
            };
            VALUETOTEXT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    value: {
                        name: string;
                        detail: string;
                    };
                    format: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CALL: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            EUROCONVERT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            REGISTER_ID: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DAVERAGE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    database: {
                        name: string;
                        detail: string;
                    };
                    field: {
                        name: string;
                        detail: string;
                    };
                    criteria: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DCOUNT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    database: {
                        name: string;
                        detail: string;
                    };
                    field: {
                        name: string;
                        detail: string;
                    };
                    criteria: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DCOUNTA: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    database: {
                        name: string;
                        detail: string;
                    };
                    field: {
                        name: string;
                        detail: string;
                    };
                    criteria: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DGET: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    database: {
                        name: string;
                        detail: string;
                    };
                    field: {
                        name: string;
                        detail: string;
                    };
                    criteria: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DMAX: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    database: {
                        name: string;
                        detail: string;
                    };
                    field: {
                        name: string;
                        detail: string;
                    };
                    criteria: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DMIN: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    database: {
                        name: string;
                        detail: string;
                    };
                    field: {
                        name: string;
                        detail: string;
                    };
                    criteria: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DPRODUCT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    database: {
                        name: string;
                        detail: string;
                    };
                    field: {
                        name: string;
                        detail: string;
                    };
                    criteria: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DSTDEV: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    database: {
                        name: string;
                        detail: string;
                    };
                    field: {
                        name: string;
                        detail: string;
                    };
                    criteria: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DSTDEVP: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    database: {
                        name: string;
                        detail: string;
                    };
                    field: {
                        name: string;
                        detail: string;
                    };
                    criteria: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DSUM: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    database: {
                        name: string;
                        detail: string;
                    };
                    field: {
                        name: string;
                        detail: string;
                    };
                    criteria: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DVAR: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    database: {
                        name: string;
                        detail: string;
                    };
                    field: {
                        name: string;
                        detail: string;
                    };
                    criteria: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DVARP: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    database: {
                        name: string;
                        detail: string;
                    };
                    field: {
                        name: string;
                        detail: string;
                    };
                    criteria: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ADDRESS: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    row_num: {
                        name: string;
                        detail: string;
                    };
                    column_num: {
                        name: string;
                        detail: string;
                    };
                    abs_num: {
                        name: string;
                        detail: string;
                    };
                    a1: {
                        name: string;
                        detail: string;
                    };
                    sheet_text: {
                        name: string;
                        detail: string;
                    };
                };
            };
            AREAS: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    reference: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CHOOSE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    indexNum: {
                        name: string;
                        detail: string;
                    };
                    value1: {
                        name: string;
                        detail: string;
                    };
                    value2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CHOOSECOLS: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array: {
                        name: string;
                        detail: string;
                    };
                    colNum1: {
                        name: string;
                        detail: string;
                    };
                    colNum2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CHOOSEROWS: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array: {
                        name: string;
                        detail: string;
                    };
                    rowNum1: {
                        name: string;
                        detail: string;
                    };
                    rowNum2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            COLUMN: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    reference: {
                        name: string;
                        detail: string;
                    };
                };
            };
            COLUMNS: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DROP: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array: {
                        name: string;
                        detail: string;
                    };
                    rows: {
                        name: string;
                        detail: string;
                    };
                    columns: {
                        name: string;
                        detail: string;
                    };
                };
            };
            EXPAND: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array: {
                        name: string;
                        detail: string;
                    };
                    rows: {
                        name: string;
                        detail: string;
                    };
                    columns: {
                        name: string;
                        detail: string;
                    };
                    padWith: {
                        name: string;
                        detail: string;
                    };
                };
            };
            FILTER: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array: {
                        name: string;
                        detail: string;
                    };
                    include: {
                        name: string;
                        detail: string;
                    };
                    ifEmpty: {
                        name: string;
                        detail: string;
                    };
                };
            };
            FORMULATEXT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    reference: {
                        name: string;
                        detail: string;
                    };
                };
            };
            GETPIVOTDATA: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            HLOOKUP: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    lookupValue: {
                        name: string;
                        detail: string;
                    };
                    tableArray: {
                        name: string;
                        detail: string;
                    };
                    rowIndexNum: {
                        name: string;
                        detail: string;
                    };
                    rangeLookup: {
                        name: string;
                        detail: string;
                    };
                };
            };
            HSTACK: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array1: {
                        name: string;
                        detail: string;
                    };
                    array2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            HYPERLINK: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    url: {
                        name: string;
                        detail: string;
                    };
                    linkLabel: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IMAGE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            INDEX: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    reference: {
                        name: string;
                        detail: string;
                    };
                    rowNum: {
                        name: string;
                        detail: string;
                    };
                    columnNum: {
                        name: string;
                        detail: string;
                    };
                    areaNum: {
                        name: string;
                        detail: string;
                    };
                };
            };
            INDIRECT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    refText: {
                        name: string;
                        detail: string;
                    };
                    a1: {
                        name: string;
                        detail: string;
                    };
                };
            };
            LOOKUP: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    lookupValue: {
                        name: string;
                        detail: string;
                    };
                    lookupVectorOrArray: {
                        name: string;
                        detail: string;
                    };
                    resultVector: {
                        name: string;
                        detail: string;
                    };
                };
            };
            MATCH: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    lookupValue: {
                        name: string;
                        detail: string;
                    };
                    lookupArray: {
                        name: string;
                        detail: string;
                    };
                    matchType: {
                        name: string;
                        detail: string;
                    };
                };
            };
            OFFSET: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    reference: {
                        name: string;
                        detail: string;
                    };
                    rows: {
                        name: string;
                        detail: string;
                    };
                    cols: {
                        name: string;
                        detail: string;
                    };
                    height: {
                        name: string;
                        detail: string;
                    };
                    width: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ROW: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    reference: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ROWS: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array: {
                        name: string;
                        detail: string;
                    };
                };
            };
            RTD: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            SORT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array: {
                        name: string;
                        detail: string;
                    };
                    sortIndex: {
                        name: string;
                        detail: string;
                    };
                    sortOrder: {
                        name: string;
                        detail: string;
                    };
                    byCol: {
                        name: string;
                        detail: string;
                    };
                };
            };
            SORTBY: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array: {
                        name: string;
                        detail: string;
                    };
                    byArray1: {
                        name: string;
                        detail: string;
                    };
                    sortOrder1: {
                        name: string;
                        detail: string;
                    };
                    byArray2: {
                        name: string;
                        detail: string;
                    };
                    sortOrder2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            TAKE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array: {
                        name: string;
                        detail: string;
                    };
                    rows: {
                        name: string;
                        detail: string;
                    };
                    columns: {
                        name: string;
                        detail: string;
                    };
                };
            };
            TOCOL: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array: {
                        name: string;
                        detail: string;
                    };
                    ignore: {
                        name: string;
                        detail: string;
                    };
                    scanByColumn: {
                        name: string;
                        detail: string;
                    };
                };
            };
            TOROW: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array: {
                        name: string;
                        detail: string;
                    };
                    ignore: {
                        name: string;
                        detail: string;
                    };
                    scanByColumn: {
                        name: string;
                        detail: string;
                    };
                };
            };
            TRANSPOSE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array: {
                        name: string;
                        detail: string;
                    };
                };
            };
            UNIQUE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array: {
                        name: string;
                        detail: string;
                    };
                    byCol: {
                        name: string;
                        detail: string;
                    };
                    exactlyOnce: {
                        name: string;
                        detail: string;
                    };
                };
            };
            VLOOKUP: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    lookupValue: {
                        name: string;
                        detail: string;
                    };
                    tableArray: {
                        name: string;
                        detail: string;
                    };
                    colIndexNum: {
                        name: string;
                        detail: string;
                    };
                    rangeLookup: {
                        name: string;
                        detail: string;
                    };
                };
            };
            VSTACK: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array1: {
                        name: string;
                        detail: string;
                    };
                    array2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            WRAPCOLS: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    vector: {
                        name: string;
                        detail: string;
                    };
                    wrapCount: {
                        name: string;
                        detail: string;
                    };
                    padWith: {
                        name: string;
                        detail: string;
                    };
                };
            };
            WRAPROWS: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    vector: {
                        name: string;
                        detail: string;
                    };
                    wrapCount: {
                        name: string;
                        detail: string;
                    };
                    padWith: {
                        name: string;
                        detail: string;
                    };
                };
            };
            XLOOKUP: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    lookupValue: {
                        name: string;
                        detail: string;
                    };
                    lookupArray: {
                        name: string;
                        detail: string;
                    };
                    returnArray: {
                        name: string;
                        detail: string;
                    };
                    ifNotFound: {
                        name: string;
                        detail: string;
                    };
                    matchMode: {
                        name: string;
                        detail: string;
                    };
                    searchMode: {
                        name: string;
                        detail: string;
                    };
                };
            };
            XMATCH: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    lookupValue: {
                        name: string;
                        detail: string;
                    };
                    lookupArray: {
                        name: string;
                        detail: string;
                    };
                    matchMode: {
                        name: string;
                        detail: string;
                    };
                    searchMode: {
                        name: string;
                        detail: string;
                    };
                };
            };
            AVEDEV: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            AVERAGE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            AVERAGE_WEIGHTED: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    values: {
                        name: string;
                        detail: string;
                    };
                    weights: {
                        name: string;
                        detail: string;
                    };
                    additionalValues: {
                        name: string;
                        detail: string;
                    };
                    additionalWeights: {
                        name: string;
                        detail: string;
                    };
                };
            };
            AVERAGEA: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    value1: {
                        name: string;
                        detail: string;
                    };
                    value2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            AVERAGEIF: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    range: {
                        name: string;
                        detail: string;
                    };
                    criteria: {
                        name: string;
                        detail: string;
                    };
                    averageRange: {
                        name: string;
                        detail: string;
                    };
                };
            };
            AVERAGEIFS: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    averageRange: {
                        name: string;
                        detail: string;
                    };
                    criteriaRange1: {
                        name: string;
                        detail: string;
                    };
                    criteria1: {
                        name: string;
                        detail: string;
                    };
                    criteriaRange2: {
                        name: string;
                        detail: string;
                    };
                    criteria2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            BETA_DIST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                    alpha: {
                        name: string;
                        detail: string;
                    };
                    beta: {
                        name: string;
                        detail: string;
                    };
                    cumulative: {
                        name: string;
                        detail: string;
                    };
                    A: {
                        name: string;
                        detail: string;
                    };
                    B: {
                        name: string;
                        detail: string;
                    };
                };
            };
            BETA_INV: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    probability: {
                        name: string;
                        detail: string;
                    };
                    alpha: {
                        name: string;
                        detail: string;
                    };
                    beta: {
                        name: string;
                        detail: string;
                    };
                    A: {
                        name: string;
                        detail: string;
                    };
                    B: {
                        name: string;
                        detail: string;
                    };
                };
            };
            BINOM_DIST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    numberS: {
                        name: string;
                        detail: string;
                    };
                    trials: {
                        name: string;
                        detail: string;
                    };
                    probabilityS: {
                        name: string;
                        detail: string;
                    };
                    cumulative: {
                        name: string;
                        detail: string;
                    };
                };
            };
            BINOM_DIST_RANGE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    trials: {
                        name: string;
                        detail: string;
                    };
                    probabilityS: {
                        name: string;
                        detail: string;
                    };
                    numberS: {
                        name: string;
                        detail: string;
                    };
                    numberS2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            BINOM_INV: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    trials: {
                        name: string;
                        detail: string;
                    };
                    probabilityS: {
                        name: string;
                        detail: string;
                    };
                    alpha: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CHISQ_DIST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                    degFreedom: {
                        name: string;
                        detail: string;
                    };
                    cumulative: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CHISQ_DIST_RT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                    degFreedom: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CHISQ_INV: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    probability: {
                        name: string;
                        detail: string;
                    };
                    degFreedom: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CHISQ_INV_RT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    probability: {
                        name: string;
                        detail: string;
                    };
                    degFreedom: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CHISQ_TEST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    actualRange: {
                        name: string;
                        detail: string;
                    };
                    expectedRange: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CONFIDENCE_NORM: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    alpha: {
                        name: string;
                        detail: string;
                    };
                    standardDev: {
                        name: string;
                        detail: string;
                    };
                    size: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CONFIDENCE_T: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    alpha: {
                        name: string;
                        detail: string;
                    };
                    standardDev: {
                        name: string;
                        detail: string;
                    };
                    size: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CORREL: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array1: {
                        name: string;
                        detail: string;
                    };
                    array2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            COUNT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    value1: {
                        name: string;
                        detail: string;
                    };
                    value2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            COUNTA: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            COUNTBLANK: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    range: {
                        name: string;
                        detail: string;
                    };
                };
            };
            COUNTIF: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    range: {
                        name: string;
                        detail: string;
                    };
                    criteria: {
                        name: string;
                        detail: string;
                    };
                };
            };
            COUNTIFS: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    criteriaRange1: {
                        name: string;
                        detail: string;
                    };
                    criteria1: {
                        name: string;
                        detail: string;
                    };
                    criteriaRange2: {
                        name: string;
                        detail: string;
                    };
                    criteria2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            COVARIANCE_P: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array1: {
                        name: string;
                        detail: string;
                    };
                    array2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            COVARIANCE_S: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array1: {
                        name: string;
                        detail: string;
                    };
                    array2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DEVSQ: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            EXPON_DIST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                    lambda: {
                        name: string;
                        detail: string;
                    };
                    cumulative: {
                        name: string;
                        detail: string;
                    };
                };
            };
            F_DIST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                    degFreedom1: {
                        name: string;
                        detail: string;
                    };
                    degFreedom2: {
                        name: string;
                        detail: string;
                    };
                    cumulative: {
                        name: string;
                        detail: string;
                    };
                };
            };
            F_DIST_RT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                    degFreedom1: {
                        name: string;
                        detail: string;
                    };
                    degFreedom2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            F_INV: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    probability: {
                        name: string;
                        detail: string;
                    };
                    degFreedom1: {
                        name: string;
                        detail: string;
                    };
                    degFreedom2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            F_INV_RT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    probability: {
                        name: string;
                        detail: string;
                    };
                    degFreedom1: {
                        name: string;
                        detail: string;
                    };
                    degFreedom2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            F_TEST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array1: {
                        name: string;
                        detail: string;
                    };
                    array2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            FISHER: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                };
            };
            FISHERINV: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    y: {
                        name: string;
                        detail: string;
                    };
                };
            };
            FORECAST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                    knownYs: {
                        name: string;
                        detail: string;
                    };
                    knownXs: {
                        name: string;
                        detail: string;
                    };
                };
            };
            FORECAST_ETS: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            FORECAST_ETS_CONFINT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            FORECAST_ETS_SEASONALITY: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            FORECAST_ETS_STAT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            FORECAST_LINEAR: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                    knownYs: {
                        name: string;
                        detail: string;
                    };
                    knownXs: {
                        name: string;
                        detail: string;
                    };
                };
            };
            FREQUENCY: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    dataArray: {
                        name: string;
                        detail: string;
                    };
                    binsArray: {
                        name: string;
                        detail: string;
                    };
                };
            };
            GAMMA: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            GAMMA_DIST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                    alpha: {
                        name: string;
                        detail: string;
                    };
                    beta: {
                        name: string;
                        detail: string;
                    };
                    cumulative: {
                        name: string;
                        detail: string;
                    };
                };
            };
            GAMMA_INV: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    probability: {
                        name: string;
                        detail: string;
                    };
                    alpha: {
                        name: string;
                        detail: string;
                    };
                    beta: {
                        name: string;
                        detail: string;
                    };
                };
            };
            GAMMALN: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                };
            };
            GAMMALN_PRECISE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                };
            };
            GAUSS: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    z: {
                        name: string;
                        detail: string;
                    };
                };
            };
            GEOMEAN: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            GROWTH: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    knownYs: {
                        name: string;
                        detail: string;
                    };
                    knownXs: {
                        name: string;
                        detail: string;
                    };
                    newXs: {
                        name: string;
                        detail: string;
                    };
                    constb: {
                        name: string;
                        detail: string;
                    };
                };
            };
            HARMEAN: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            HYPGEOM_DIST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    sampleS: {
                        name: string;
                        detail: string;
                    };
                    numberSample: {
                        name: string;
                        detail: string;
                    };
                    populationS: {
                        name: string;
                        detail: string;
                    };
                    numberPop: {
                        name: string;
                        detail: string;
                    };
                    cumulative: {
                        name: string;
                        detail: string;
                    };
                };
            };
            INTERCEPT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    knownYs: {
                        name: string;
                        detail: string;
                    };
                    knownXs: {
                        name: string;
                        detail: string;
                    };
                };
            };
            KURT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            LARGE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array: {
                        name: string;
                        detail: string;
                    };
                    k: {
                        name: string;
                        detail: string;
                    };
                };
            };
            LINEST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    knownYs: {
                        name: string;
                        detail: string;
                    };
                    knownXs: {
                        name: string;
                        detail: string;
                    };
                    constb: {
                        name: string;
                        detail: string;
                    };
                    stats: {
                        name: string;
                        detail: string;
                    };
                };
            };
            LOGEST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    knownYs: {
                        name: string;
                        detail: string;
                    };
                    knownXs: {
                        name: string;
                        detail: string;
                    };
                    constb: {
                        name: string;
                        detail: string;
                    };
                    stats: {
                        name: string;
                        detail: string;
                    };
                };
            };
            LOGNORM_DIST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                    mean: {
                        name: string;
                        detail: string;
                    };
                    standardDev: {
                        name: string;
                        detail: string;
                    };
                    cumulative: {
                        name: string;
                        detail: string;
                    };
                };
            };
            LOGNORM_INV: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    probability: {
                        name: string;
                        detail: string;
                    };
                    mean: {
                        name: string;
                        detail: string;
                    };
                    standardDev: {
                        name: string;
                        detail: string;
                    };
                };
            };
            MARGINOFERROR: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    range: {
                        name: string;
                        detail: string;
                    };
                    confidence: {
                        name: string;
                        detail: string;
                    };
                };
            };
            MAX: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            MAXA: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    value1: {
                        name: string;
                        detail: string;
                    };
                    value2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            MAXIFS: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    maxRange: {
                        name: string;
                        detail: string;
                    };
                    criteriaRange1: {
                        name: string;
                        detail: string;
                    };
                    criteria1: {
                        name: string;
                        detail: string;
                    };
                    criteriaRange2: {
                        name: string;
                        detail: string;
                    };
                    criteria2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            MEDIAN: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            MIN: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            MINA: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    value1: {
                        name: string;
                        detail: string;
                    };
                    value2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            MINIFS: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    minRange: {
                        name: string;
                        detail: string;
                    };
                    criteriaRange1: {
                        name: string;
                        detail: string;
                    };
                    criteria1: {
                        name: string;
                        detail: string;
                    };
                    criteriaRange2: {
                        name: string;
                        detail: string;
                    };
                    criteria2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            MODE_MULT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            MODE_SNGL: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            NEGBINOM_DIST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    numberF: {
                        name: string;
                        detail: string;
                    };
                    numberS: {
                        name: string;
                        detail: string;
                    };
                    probabilityS: {
                        name: string;
                        detail: string;
                    };
                    cumulative: {
                        name: string;
                        detail: string;
                    };
                };
            };
            NORM_DIST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                    mean: {
                        name: string;
                        detail: string;
                    };
                    standardDev: {
                        name: string;
                        detail: string;
                    };
                    cumulative: {
                        name: string;
                        detail: string;
                    };
                };
            };
            NORM_INV: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    probability: {
                        name: string;
                        detail: string;
                    };
                    mean: {
                        name: string;
                        detail: string;
                    };
                    standardDev: {
                        name: string;
                        detail: string;
                    };
                };
            };
            NORM_S_DIST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    z: {
                        name: string;
                        detail: string;
                    };
                    cumulative: {
                        name: string;
                        detail: string;
                    };
                };
            };
            NORM_S_INV: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    probability: {
                        name: string;
                        detail: string;
                    };
                };
            };
            PEARSON: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array1: {
                        name: string;
                        detail: string;
                    };
                    array2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            PERCENTILE_EXC: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array: {
                        name: string;
                        detail: string;
                    };
                    k: {
                        name: string;
                        detail: string;
                    };
                };
            };
            PERCENTILE_INC: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array: {
                        name: string;
                        detail: string;
                    };
                    k: {
                        name: string;
                        detail: string;
                    };
                };
            };
            PERCENTRANK_EXC: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array: {
                        name: string;
                        detail: string;
                    };
                    x: {
                        name: string;
                        detail: string;
                    };
                    significance: {
                        name: string;
                        detail: string;
                    };
                };
            };
            PERCENTRANK_INC: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array: {
                        name: string;
                        detail: string;
                    };
                    x: {
                        name: string;
                        detail: string;
                    };
                    significance: {
                        name: string;
                        detail: string;
                    };
                };
            };
            PERMUT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    numberChosen: {
                        name: string;
                        detail: string;
                    };
                };
            };
            PERMUTATIONA: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    numberChosen: {
                        name: string;
                        detail: string;
                    };
                };
            };
            PHI: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                };
            };
            POISSON_DIST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                    mean: {
                        name: string;
                        detail: string;
                    };
                    cumulative: {
                        name: string;
                        detail: string;
                    };
                };
            };
            PROB: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    xRange: {
                        name: string;
                        detail: string;
                    };
                    probRange: {
                        name: string;
                        detail: string;
                    };
                    lowerLimit: {
                        name: string;
                        detail: string;
                    };
                    upperLimit: {
                        name: string;
                        detail: string;
                    };
                };
            };
            QUARTILE_EXC: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array: {
                        name: string;
                        detail: string;
                    };
                    quart: {
                        name: string;
                        detail: string;
                    };
                };
            };
            QUARTILE_INC: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array: {
                        name: string;
                        detail: string;
                    };
                    quart: {
                        name: string;
                        detail: string;
                    };
                };
            };
            RANK_AVG: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    ref: {
                        name: string;
                        detail: string;
                    };
                    order: {
                        name: string;
                        detail: string;
                    };
                };
            };
            RANK_EQ: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    ref: {
                        name: string;
                        detail: string;
                    };
                    order: {
                        name: string;
                        detail: string;
                    };
                };
            };
            RSQ: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array1: {
                        name: string;
                        detail: string;
                    };
                    array2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            SKEW: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            SKEW_P: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            SLOPE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    knownYs: {
                        name: string;
                        detail: string;
                    };
                    knownXs: {
                        name: string;
                        detail: string;
                    };
                };
            };
            SMALL: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array: {
                        name: string;
                        detail: string;
                    };
                    k: {
                        name: string;
                        detail: string;
                    };
                };
            };
            STANDARDIZE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                    mean: {
                        name: string;
                        detail: string;
                    };
                    standardDev: {
                        name: string;
                        detail: string;
                    };
                };
            };
            STDEV_P: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            STDEV_S: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            STDEVA: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    value1: {
                        name: string;
                        detail: string;
                    };
                    value2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            STDEVPA: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    value1: {
                        name: string;
                        detail: string;
                    };
                    value2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            STEYX: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    knownYs: {
                        name: string;
                        detail: string;
                    };
                    knownXs: {
                        name: string;
                        detail: string;
                    };
                };
            };
            T_DIST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                    degFreedom: {
                        name: string;
                        detail: string;
                    };
                    cumulative: {
                        name: string;
                        detail: string;
                    };
                };
            };
            T_DIST_2T: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                    degFreedom: {
                        name: string;
                        detail: string;
                    };
                };
            };
            T_DIST_RT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                    degFreedom: {
                        name: string;
                        detail: string;
                    };
                };
            };
            T_INV: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    probability: {
                        name: string;
                        detail: string;
                    };
                    degFreedom: {
                        name: string;
                        detail: string;
                    };
                };
            };
            T_INV_2T: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    probability: {
                        name: string;
                        detail: string;
                    };
                    degFreedom: {
                        name: string;
                        detail: string;
                    };
                };
            };
            T_TEST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array1: {
                        name: string;
                        detail: string;
                    };
                    array2: {
                        name: string;
                        detail: string;
                    };
                    tails: {
                        name: string;
                        detail: string;
                    };
                    type: {
                        name: string;
                        detail: string;
                    };
                };
            };
            TREND: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    knownYs: {
                        name: string;
                        detail: string;
                    };
                    knownXs: {
                        name: string;
                        detail: string;
                    };
                    newXs: {
                        name: string;
                        detail: string;
                    };
                    constb: {
                        name: string;
                        detail: string;
                    };
                };
            };
            TRIMMEAN: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array: {
                        name: string;
                        detail: string;
                    };
                    percent: {
                        name: string;
                        detail: string;
                    };
                };
            };
            VAR_P: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            VAR_S: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            VARA: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    value1: {
                        name: string;
                        detail: string;
                    };
                    value2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            VARPA: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    value1: {
                        name: string;
                        detail: string;
                    };
                    value2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            WEIBULL_DIST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                    alpha: {
                        name: string;
                        detail: string;
                    };
                    beta: {
                        name: string;
                        detail: string;
                    };
                    cumulative: {
                        name: string;
                        detail: string;
                    };
                };
            };
            Z_TEST: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array: {
                        name: string;
                        detail: string;
                    };
                    x: {
                        name: string;
                        detail: string;
                    };
                    sigma: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ABS: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ACOS: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ACOSH: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ACOT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ACOTH: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            AGGREGATE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ARABIC: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    text: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ASIN: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ASINH: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ATAN: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ATAN2: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    xNum: {
                        name: string;
                        detail: string;
                    };
                    yNum: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ATANH: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            BASE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    radix: {
                        name: string;
                        detail: string;
                    };
                    minLength: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CEILING: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    significance: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CEILING_MATH: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    significance: {
                        name: string;
                        detail: string;
                    };
                    mode: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CEILING_PRECISE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    significance: {
                        name: string;
                        detail: string;
                    };
                };
            };
            COMBIN: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    numberChosen: {
                        name: string;
                        detail: string;
                    };
                };
            };
            COMBINA: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    numberChosen: {
                        name: string;
                        detail: string;
                    };
                };
            };
            COS: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            COSH: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            COT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            COTH: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CSC: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CSCH: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DECIMAL: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    text: {
                        name: string;
                        detail: string;
                    };
                    radix: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DEGREES: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    angle: {
                        name: string;
                        detail: string;
                    };
                };
            };
            EVEN: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            EXP: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            FACT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            FACTDOUBLE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            FLOOR: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    significance: {
                        name: string;
                        detail: string;
                    };
                };
            };
            FLOOR_MATH: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    significance: {
                        name: string;
                        detail: string;
                    };
                    mode: {
                        name: string;
                        detail: string;
                    };
                };
            };
            FLOOR_PRECISE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    significance: {
                        name: string;
                        detail: string;
                    };
                };
            };
            GCD: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            INT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ISO_CEILING: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            LCM: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            LN: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            LOG: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    base: {
                        name: string;
                        detail: string;
                    };
                };
            };
            LOG10: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            MDETERM: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array: {
                        name: string;
                        detail: string;
                    };
                };
            };
            MINVERSE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array: {
                        name: string;
                        detail: string;
                    };
                };
            };
            MMULT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array1: {
                        name: string;
                        detail: string;
                    };
                    array2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            MOD: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    divisor: {
                        name: string;
                        detail: string;
                    };
                };
            };
            MROUND: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    multiple: {
                        name: string;
                        detail: string;
                    };
                };
            };
            MULTINOMIAL: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            MUNIT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    dimension: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ODD: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            PI: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {};
            };
            POWER: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    power: {
                        name: string;
                        detail: string;
                    };
                };
            };
            PRODUCT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            QUOTIENT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    numerator: {
                        name: string;
                        detail: string;
                    };
                    denominator: {
                        name: string;
                        detail: string;
                    };
                };
            };
            RADIANS: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    angle: {
                        name: string;
                        detail: string;
                    };
                };
            };
            RAND: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {};
            };
            RANDARRAY: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    rows: {
                        name: string;
                        detail: string;
                    };
                    columns: {
                        name: string;
                        detail: string;
                    };
                    min: {
                        name: string;
                        detail: string;
                    };
                    max: {
                        name: string;
                        detail: string;
                    };
                    wholeNumber: {
                        name: string;
                        detail: string;
                    };
                };
            };
            RANDBETWEEN: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    bottom: {
                        name: string;
                        detail: string;
                    };
                    top: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ROMAN: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    form: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ROUND: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    numDigits: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ROUNDBANK: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    numDigits: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ROUNDDOWN: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    numDigits: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ROUNDUP: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    numDigits: {
                        name: string;
                        detail: string;
                    };
                };
            };
            SEC: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            SECH: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            SERIESSUM: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    x: {
                        name: string;
                        detail: string;
                    };
                    n: {
                        name: string;
                        detail: string;
                    };
                    m: {
                        name: string;
                        detail: string;
                    };
                    coefficients: {
                        name: string;
                        detail: string;
                    };
                };
            };
            SEQUENCE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    rows: {
                        name: string;
                        detail: string;
                    };
                    columns: {
                        name: string;
                        detail: string;
                    };
                    start: {
                        name: string;
                        detail: string;
                    };
                    step: {
                        name: string;
                        detail: string;
                    };
                };
            };
            SIGN: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            SIN: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            SINH: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            SQRT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            SQRTPI: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            SUBTOTAL: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    functionNum: {
                        name: string;
                        detail: string;
                    };
                    ref1: {
                        name: string;
                        detail: string;
                    };
                    ref2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            SUM: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            SUMIF: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    range: {
                        name: string;
                        detail: string;
                    };
                    criteria: {
                        name: string;
                        detail: string;
                    };
                    sumRange: {
                        name: string;
                        detail: string;
                    };
                };
            };
            SUMIFS: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    sumRange: {
                        name: string;
                        detail: string;
                    };
                    criteriaRange1: {
                        name: string;
                        detail: string;
                    };
                    criteria1: {
                        name: string;
                        detail: string;
                    };
                    criteriaRange2: {
                        name: string;
                        detail: string;
                    };
                    criteria2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            SUMPRODUCT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    array1: {
                        name: string;
                        detail: string;
                    };
                    array2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            SUMSQ: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            SUMX2MY2: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    arrayX: {
                        name: string;
                        detail: string;
                    };
                    arrayY: {
                        name: string;
                        detail: string;
                    };
                };
            };
            SUMX2PY2: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    arrayX: {
                        name: string;
                        detail: string;
                    };
                    arrayY: {
                        name: string;
                        detail: string;
                    };
                };
            };
            SUMXMY2: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    arrayX: {
                        name: string;
                        detail: string;
                    };
                    arrayY: {
                        name: string;
                        detail: string;
                    };
                };
            };
            TAN: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            TANH: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                };
            };
            TRUNC: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number: {
                        name: string;
                        detail: string;
                    };
                    numDigits: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DATE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    year: {
                        name: string;
                        detail: string;
                    };
                    month: {
                        name: string;
                        detail: string;
                    };
                    day: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DATEDIF: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    startDate: {
                        name: string;
                        detail: string;
                    };
                    endDate: {
                        name: string;
                        detail: string;
                    };
                    method: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DATEVALUE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    dateText: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DAY: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    serialNumber: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DAYS: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    endDate: {
                        name: string;
                        detail: string;
                    };
                    startDate: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DAYS360: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    startDate: {
                        name: string;
                        detail: string;
                    };
                    endDate: {
                        name: string;
                        detail: string;
                    };
                    method: {
                        name: string;
                        detail: string;
                    };
                };
            };
            EDATE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    startDate: {
                        name: string;
                        detail: string;
                    };
                    months: {
                        name: string;
                        detail: string;
                    };
                };
            };
            EOMONTH: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    startDate: {
                        name: string;
                        detail: string;
                    };
                    months: {
                        name: string;
                        detail: string;
                    };
                };
            };
            EPOCHTODATE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    timestamp: {
                        name: string;
                        detail: string;
                    };
                    unit: {
                        name: string;
                        detail: string;
                    };
                };
            };
            HOUR: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    serialNumber: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ISOWEEKNUM: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    date: {
                        name: string;
                        detail: string;
                    };
                };
            };
            MINUTE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    serialNumber: {
                        name: string;
                        detail: string;
                    };
                };
            };
            MONTH: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    serialNumber: {
                        name: string;
                        detail: string;
                    };
                };
            };
            NETWORKDAYS: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    startDate: {
                        name: string;
                        detail: string;
                    };
                    endDate: {
                        name: string;
                        detail: string;
                    };
                    holidays: {
                        name: string;
                        detail: string;
                    };
                };
            };
            NETWORKDAYS_INTL: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    startDate: {
                        name: string;
                        detail: string;
                    };
                    endDate: {
                        name: string;
                        detail: string;
                    };
                    weekend: {
                        name: string;
                        detail: string;
                    };
                    holidays: {
                        name: string;
                        detail: string;
                    };
                };
            };
            NOW: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {};
            };
            SECOND: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    serialNumber: {
                        name: string;
                        detail: string;
                    };
                };
            };
            TIME: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    hour: {
                        name: string;
                        detail: string;
                    };
                    minute: {
                        name: string;
                        detail: string;
                    };
                    second: {
                        name: string;
                        detail: string;
                    };
                };
            };
            TIMEVALUE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    timeText: {
                        name: string;
                        detail: string;
                    };
                };
            };
            TO_DATE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    value: {
                        name: string;
                        detail: string;
                    };
                };
            };
            TODAY: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {};
            };
            WEEKDAY: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    serialNumber: {
                        name: string;
                        detail: string;
                    };
                    returnType: {
                        name: string;
                        detail: string;
                    };
                };
            };
            WEEKNUM: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    serialNumber: {
                        name: string;
                        detail: string;
                    };
                    returnType: {
                        name: string;
                        detail: string;
                    };
                };
            };
            WORKDAY: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    startDate: {
                        name: string;
                        detail: string;
                    };
                    days: {
                        name: string;
                        detail: string;
                    };
                    holidays: {
                        name: string;
                        detail: string;
                    };
                };
            };
            WORKDAY_INTL: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    startDate: {
                        name: string;
                        detail: string;
                    };
                    days: {
                        name: string;
                        detail: string;
                    };
                    weekend: {
                        name: string;
                        detail: string;
                    };
                    holidays: {
                        name: string;
                        detail: string;
                    };
                };
            };
            YEAR: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    serialNumber: {
                        name: string;
                        detail: string;
                    };
                };
            };
            YEARFRAC: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    startDate: {
                        name: string;
                        detail: string;
                    };
                    endDate: {
                        name: string;
                        detail: string;
                    };
                    basis: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ACCRINT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    issue: {
                        name: string;
                        detail: string;
                    };
                    firstInterest: {
                        name: string;
                        detail: string;
                    };
                    settlement: {
                        name: string;
                        detail: string;
                    };
                    rate: {
                        name: string;
                        detail: string;
                    };
                    par: {
                        name: string;
                        detail: string;
                    };
                    frequency: {
                        name: string;
                        detail: string;
                    };
                    basis: {
                        name: string;
                        detail: string;
                    };
                    calcMethod: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ACCRINTM: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    issue: {
                        name: string;
                        detail: string;
                    };
                    settlement: {
                        name: string;
                        detail: string;
                    };
                    rate: {
                        name: string;
                        detail: string;
                    };
                    par: {
                        name: string;
                        detail: string;
                    };
                    basis: {
                        name: string;
                        detail: string;
                    };
                };
            };
            AMORDEGRC: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    number1: {
                        name: string;
                        detail: string;
                    };
                    number2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            AMORLINC: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    cost: {
                        name: string;
                        detail: string;
                    };
                    datePurchased: {
                        name: string;
                        detail: string;
                    };
                    firstPeriod: {
                        name: string;
                        detail: string;
                    };
                    salvage: {
                        name: string;
                        detail: string;
                    };
                    period: {
                        name: string;
                        detail: string;
                    };
                    rate: {
                        name: string;
                        detail: string;
                    };
                    basis: {
                        name: string;
                        detail: string;
                    };
                };
            };
            COUPDAYBS: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    settlement: {
                        name: string;
                        detail: string;
                    };
                    maturity: {
                        name: string;
                        detail: string;
                    };
                    frequency: {
                        name: string;
                        detail: string;
                    };
                    basis: {
                        name: string;
                        detail: string;
                    };
                };
            };
            COUPDAYS: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    settlement: {
                        name: string;
                        detail: string;
                    };
                    maturity: {
                        name: string;
                        detail: string;
                    };
                    frequency: {
                        name: string;
                        detail: string;
                    };
                    basis: {
                        name: string;
                        detail: string;
                    };
                };
            };
            COUPDAYSNC: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    settlement: {
                        name: string;
                        detail: string;
                    };
                    maturity: {
                        name: string;
                        detail: string;
                    };
                    frequency: {
                        name: string;
                        detail: string;
                    };
                    basis: {
                        name: string;
                        detail: string;
                    };
                };
            };
            COUPNCD: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    settlement: {
                        name: string;
                        detail: string;
                    };
                    maturity: {
                        name: string;
                        detail: string;
                    };
                    frequency: {
                        name: string;
                        detail: string;
                    };
                    basis: {
                        name: string;
                        detail: string;
                    };
                };
            };
            COUPNUM: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    settlement: {
                        name: string;
                        detail: string;
                    };
                    maturity: {
                        name: string;
                        detail: string;
                    };
                    frequency: {
                        name: string;
                        detail: string;
                    };
                    basis: {
                        name: string;
                        detail: string;
                    };
                };
            };
            COUPPCD: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    settlement: {
                        name: string;
                        detail: string;
                    };
                    maturity: {
                        name: string;
                        detail: string;
                    };
                    frequency: {
                        name: string;
                        detail: string;
                    };
                    basis: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CUMIPMT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    rate: {
                        name: string;
                        detail: string;
                    };
                    nper: {
                        name: string;
                        detail: string;
                    };
                    pv: {
                        name: string;
                        detail: string;
                    };
                    startPeriod: {
                        name: string;
                        detail: string;
                    };
                    endPeriod: {
                        name: string;
                        detail: string;
                    };
                    type: {
                        name: string;
                        detail: string;
                    };
                };
            };
            CUMPRINC: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    rate: {
                        name: string;
                        detail: string;
                    };
                    nper: {
                        name: string;
                        detail: string;
                    };
                    pv: {
                        name: string;
                        detail: string;
                    };
                    startPeriod: {
                        name: string;
                        detail: string;
                    };
                    endPeriod: {
                        name: string;
                        detail: string;
                    };
                    type: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DB: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    cost: {
                        name: string;
                        detail: string;
                    };
                    salvage: {
                        name: string;
                        detail: string;
                    };
                    life: {
                        name: string;
                        detail: string;
                    };
                    period: {
                        name: string;
                        detail: string;
                    };
                    month: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DDB: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    cost: {
                        name: string;
                        detail: string;
                    };
                    salvage: {
                        name: string;
                        detail: string;
                    };
                    life: {
                        name: string;
                        detail: string;
                    };
                    period: {
                        name: string;
                        detail: string;
                    };
                    factor: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DISC: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    settlement: {
                        name: string;
                        detail: string;
                    };
                    maturity: {
                        name: string;
                        detail: string;
                    };
                    pr: {
                        name: string;
                        detail: string;
                    };
                    redemption: {
                        name: string;
                        detail: string;
                    };
                    basis: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DOLLARDE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    fractionalDollar: {
                        name: string;
                        detail: string;
                    };
                    fraction: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DOLLARFR: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    decimalDollar: {
                        name: string;
                        detail: string;
                    };
                    fraction: {
                        name: string;
                        detail: string;
                    };
                };
            };
            DURATION: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    settlement: {
                        name: string;
                        detail: string;
                    };
                    maturity: {
                        name: string;
                        detail: string;
                    };
                    coupon: {
                        name: string;
                        detail: string;
                    };
                    yld: {
                        name: string;
                        detail: string;
                    };
                    frequency: {
                        name: string;
                        detail: string;
                    };
                    basis: {
                        name: string;
                        detail: string;
                    };
                };
            };
            EFFECT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    nominalRate: {
                        name: string;
                        detail: string;
                    };
                    npery: {
                        name: string;
                        detail: string;
                    };
                };
            };
            FV: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    rate: {
                        name: string;
                        detail: string;
                    };
                    nper: {
                        name: string;
                        detail: string;
                    };
                    pmt: {
                        name: string;
                        detail: string;
                    };
                    pv: {
                        name: string;
                        detail: string;
                    };
                    type: {
                        name: string;
                        detail: string;
                    };
                };
            };
            FVSCHEDULE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    principal: {
                        name: string;
                        detail: string;
                    };
                    schedule: {
                        name: string;
                        detail: string;
                    };
                };
            };
            INTRATE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    settlement: {
                        name: string;
                        detail: string;
                    };
                    maturity: {
                        name: string;
                        detail: string;
                    };
                    investment: {
                        name: string;
                        detail: string;
                    };
                    redemption: {
                        name: string;
                        detail: string;
                    };
                    basis: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IPMT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    rate: {
                        name: string;
                        detail: string;
                    };
                    per: {
                        name: string;
                        detail: string;
                    };
                    nper: {
                        name: string;
                        detail: string;
                    };
                    pv: {
                        name: string;
                        detail: string;
                    };
                    fv: {
                        name: string;
                        detail: string;
                    };
                    type: {
                        name: string;
                        detail: string;
                    };
                };
            };
            IRR: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    values: {
                        name: string;
                        detail: string;
                    };
                    guess: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ISPMT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    rate: {
                        name: string;
                        detail: string;
                    };
                    per: {
                        name: string;
                        detail: string;
                    };
                    nper: {
                        name: string;
                        detail: string;
                    };
                    pv: {
                        name: string;
                        detail: string;
                    };
                };
            };
            MDURATION: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    settlement: {
                        name: string;
                        detail: string;
                    };
                    maturity: {
                        name: string;
                        detail: string;
                    };
                    coupon: {
                        name: string;
                        detail: string;
                    };
                    yld: {
                        name: string;
                        detail: string;
                    };
                    frequency: {
                        name: string;
                        detail: string;
                    };
                    basis: {
                        name: string;
                        detail: string;
                    };
                };
            };
            MIRR: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    values: {
                        name: string;
                        detail: string;
                    };
                    financeRate: {
                        name: string;
                        detail: string;
                    };
                    reinvestRate: {
                        name: string;
                        detail: string;
                    };
                };
            };
            NOMINAL: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    effectRate: {
                        name: string;
                        detail: string;
                    };
                    npery: {
                        name: string;
                        detail: string;
                    };
                };
            };
            NPER: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    rate: {
                        name: string;
                        detail: string;
                    };
                    pmt: {
                        name: string;
                        detail: string;
                    };
                    pv: {
                        name: string;
                        detail: string;
                    };
                    fv: {
                        name: string;
                        detail: string;
                    };
                    type: {
                        name: string;
                        detail: string;
                    };
                };
            };
            NPV: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    rate: {
                        name: string;
                        detail: string;
                    };
                    value1: {
                        name: string;
                        detail: string;
                    };
                    value2: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ODDFPRICE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    settlement: {
                        name: string;
                        detail: string;
                    };
                    maturity: {
                        name: string;
                        detail: string;
                    };
                    issue: {
                        name: string;
                        detail: string;
                    };
                    firstCoupon: {
                        name: string;
                        detail: string;
                    };
                    rate: {
                        name: string;
                        detail: string;
                    };
                    yld: {
                        name: string;
                        detail: string;
                    };
                    redemption: {
                        name: string;
                        detail: string;
                    };
                    frequency: {
                        name: string;
                        detail: string;
                    };
                    basis: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ODDFYIELD: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    settlement: {
                        name: string;
                        detail: string;
                    };
                    maturity: {
                        name: string;
                        detail: string;
                    };
                    issue: {
                        name: string;
                        detail: string;
                    };
                    firstCoupon: {
                        name: string;
                        detail: string;
                    };
                    rate: {
                        name: string;
                        detail: string;
                    };
                    pr: {
                        name: string;
                        detail: string;
                    };
                    redemption: {
                        name: string;
                        detail: string;
                    };
                    frequency: {
                        name: string;
                        detail: string;
                    };
                    basis: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ODDLPRICE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    settlement: {
                        name: string;
                        detail: string;
                    };
                    maturity: {
                        name: string;
                        detail: string;
                    };
                    lastInterest: {
                        name: string;
                        detail: string;
                    };
                    rate: {
                        name: string;
                        detail: string;
                    };
                    yld: {
                        name: string;
                        detail: string;
                    };
                    redemption: {
                        name: string;
                        detail: string;
                    };
                    frequency: {
                        name: string;
                        detail: string;
                    };
                    basis: {
                        name: string;
                        detail: string;
                    };
                };
            };
            ODDLYIELD: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    settlement: {
                        name: string;
                        detail: string;
                    };
                    maturity: {
                        name: string;
                        detail: string;
                    };
                    lastInterest: {
                        name: string;
                        detail: string;
                    };
                    rate: {
                        name: string;
                        detail: string;
                    };
                    pr: {
                        name: string;
                        detail: string;
                    };
                    redemption: {
                        name: string;
                        detail: string;
                    };
                    frequency: {
                        name: string;
                        detail: string;
                    };
                    basis: {
                        name: string;
                        detail: string;
                    };
                };
            };
            PDURATION: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    rate: {
                        name: string;
                        detail: string;
                    };
                    pv: {
                        name: string;
                        detail: string;
                    };
                    fv: {
                        name: string;
                        detail: string;
                    };
                };
            };
            PMT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    rate: {
                        name: string;
                        detail: string;
                    };
                    nper: {
                        name: string;
                        detail: string;
                    };
                    pv: {
                        name: string;
                        detail: string;
                    };
                    fv: {
                        name: string;
                        detail: string;
                    };
                    type: {
                        name: string;
                        detail: string;
                    };
                };
            };
            PPMT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    rate: {
                        name: string;
                        detail: string;
                    };
                    per: {
                        name: string;
                        detail: string;
                    };
                    nper: {
                        name: string;
                        detail: string;
                    };
                    pv: {
                        name: string;
                        detail: string;
                    };
                    fv: {
                        name: string;
                        detail: string;
                    };
                    type: {
                        name: string;
                        detail: string;
                    };
                };
            };
            PRICE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    settlement: {
                        name: string;
                        detail: string;
                    };
                    maturity: {
                        name: string;
                        detail: string;
                    };
                    rate: {
                        name: string;
                        detail: string;
                    };
                    yld: {
                        name: string;
                        detail: string;
                    };
                    redemption: {
                        name: string;
                        detail: string;
                    };
                    frequency: {
                        name: string;
                        detail: string;
                    };
                    basis: {
                        name: string;
                        detail: string;
                    };
                };
            };
            PRICEDISC: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    settlement: {
                        name: string;
                        detail: string;
                    };
                    maturity: {
                        name: string;
                        detail: string;
                    };
                    discount: {
                        name: string;
                        detail: string;
                    };
                    redemption: {
                        name: string;
                        detail: string;
                    };
                    basis: {
                        name: string;
                        detail: string;
                    };
                };
            };
            PRICEMAT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    settlement: {
                        name: string;
                        detail: string;
                    };
                    maturity: {
                        name: string;
                        detail: string;
                    };
                    issue: {
                        name: string;
                        detail: string;
                    };
                    rate: {
                        name: string;
                        detail: string;
                    };
                    yld: {
                        name: string;
                        detail: string;
                    };
                    basis: {
                        name: string;
                        detail: string;
                    };
                };
            };
            PV: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    rate: {
                        name: string;
                        detail: string;
                    };
                    nper: {
                        name: string;
                        detail: string;
                    };
                    pmt: {
                        name: string;
                        detail: string;
                    };
                    fv: {
                        name: string;
                        detail: string;
                    };
                    type: {
                        name: string;
                        detail: string;
                    };
                };
            };
            RATE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    nper: {
                        name: string;
                        detail: string;
                    };
                    pmt: {
                        name: string;
                        detail: string;
                    };
                    pv: {
                        name: string;
                        detail: string;
                    };
                    fv: {
                        name: string;
                        detail: string;
                    };
                    type: {
                        name: string;
                        detail: string;
                    };
                    guess: {
                        name: string;
                        detail: string;
                    };
                };
            };
            RECEIVED: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    settlement: {
                        name: string;
                        detail: string;
                    };
                    maturity: {
                        name: string;
                        detail: string;
                    };
                    investment: {
                        name: string;
                        detail: string;
                    };
                    discount: {
                        name: string;
                        detail: string;
                    };
                    basis: {
                        name: string;
                        detail: string;
                    };
                };
            };
            RRI: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    nper: {
                        name: string;
                        detail: string;
                    };
                    pv: {
                        name: string;
                        detail: string;
                    };
                    fv: {
                        name: string;
                        detail: string;
                    };
                };
            };
            SLN: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    cost: {
                        name: string;
                        detail: string;
                    };
                    salvage: {
                        name: string;
                        detail: string;
                    };
                    life: {
                        name: string;
                        detail: string;
                    };
                };
            };
            SYD: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    cost: {
                        name: string;
                        detail: string;
                    };
                    salvage: {
                        name: string;
                        detail: string;
                    };
                    life: {
                        name: string;
                        detail: string;
                    };
                    per: {
                        name: string;
                        detail: string;
                    };
                };
            };
            TBILLEQ: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    settlement: {
                        name: string;
                        detail: string;
                    };
                    maturity: {
                        name: string;
                        detail: string;
                    };
                    discount: {
                        name: string;
                        detail: string;
                    };
                };
            };
            TBILLPRICE: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    settlement: {
                        name: string;
                        detail: string;
                    };
                    maturity: {
                        name: string;
                        detail: string;
                    };
                    discount: {
                        name: string;
                        detail: string;
                    };
                };
            };
            TBILLYIELD: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    settlement: {
                        name: string;
                        detail: string;
                    };
                    maturity: {
                        name: string;
                        detail: string;
                    };
                    pr: {
                        name: string;
                        detail: string;
                    };
                };
            };
            VDB: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    cost: {
                        name: string;
                        detail: string;
                    };
                    salvage: {
                        name: string;
                        detail: string;
                    };
                    life: {
                        name: string;
                        detail: string;
                    };
                    startPeriod: {
                        name: string;
                        detail: string;
                    };
                    endPeriod: {
                        name: string;
                        detail: string;
                    };
                    factor: {
                        name: string;
                        detail: string;
                    };
                    noSwitch: {
                        name: string;
                        detail: string;
                    };
                };
            };
            XIRR: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    values: {
                        name: string;
                        detail: string;
                    };
                    dates: {
                        name: string;
                        detail: string;
                    };
                    guess: {
                        name: string;
                        detail: string;
                    };
                };
            };
            XNPV: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    rate: {
                        name: string;
                        detail: string;
                    };
                    values: {
                        name: string;
                        detail: string;
                    };
                    dates: {
                        name: string;
                        detail: string;
                    };
                };
            };
            YIELD: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    settlement: {
                        name: string;
                        detail: string;
                    };
                    maturity: {
                        name: string;
                        detail: string;
                    };
                    rate: {
                        name: string;
                        detail: string;
                    };
                    pr: {
                        name: string;
                        detail: string;
                    };
                    redemption: {
                        name: string;
                        detail: string;
                    };
                    frequency: {
                        name: string;
                        detail: string;
                    };
                    basis: {
                        name: string;
                        detail: string;
                    };
                };
            };
            YIELDDISC: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    settlement: {
                        name: string;
                        detail: string;
                    };
                    maturity: {
                        name: string;
                        detail: string;
                    };
                    pr: {
                        name: string;
                        detail: string;
                    };
                    redemption: {
                        name: string;
                        detail: string;
                    };
                    basis: {
                        name: string;
                        detail: string;
                    };
                };
            };
            YIELDMAT: {
                description: string;
                abstract: string;
                links: {
                    title: string;
                    url: string;
                }[];
                functionParameter: {
                    settlement: {
                        name: string;
                        detail: string;
                    };
                    maturity: {
                        name: string;
                        detail: string;
                    };
                    issue: {
                        name: string;
                        detail: string;
                    };
                    rate: {
                        name: string;
                        detail: string;
                    };
                    pr: {
                        name: string;
                        detail: string;
                    };
                    basis: {
                        name: string;
                        detail: string;
                    };
                };
            };
        };
        prompt: {
            helpExample: string;
            helpAbstract: string;
            required: string;
            optional: string;
        };
        error: {
            title: string;
            divByZero: string;
            name: string;
            value: string;
            num: string;
            na: string;
            cycle: string;
            ref: string;
            spill: string;
            calc: string;
            error: string;
            connect: string;
            null: string;
        };
        functionType: {
            financial: string;
            date: string;
            math: string;
            statistical: string;
            lookup: string;
            database: string;
            text: string;
            logical: string;
            information: string;
            engineering: string;
            cube: string;
            compatibility: string;
            web: string;
            array: string;
            univer: string;
            user: string;
            definedname: string;
        };
        moreFunctions: {
            confirm: string;
            prev: string;
            next: string;
            searchFunctionPlaceholder: string;
            allFunctions: string;
            syntax: string;
        };
        operation: {
            pasteFormula: string;
        };
    };
};
export default locale;
