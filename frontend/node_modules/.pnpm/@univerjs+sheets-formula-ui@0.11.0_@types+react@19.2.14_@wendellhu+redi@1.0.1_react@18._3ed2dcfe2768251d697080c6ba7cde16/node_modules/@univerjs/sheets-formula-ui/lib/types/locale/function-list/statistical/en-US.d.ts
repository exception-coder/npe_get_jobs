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
};
export default locale;
