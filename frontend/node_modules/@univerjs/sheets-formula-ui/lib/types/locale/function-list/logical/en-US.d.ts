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
};
export default locale;
