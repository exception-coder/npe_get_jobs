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
};
export default locale;
