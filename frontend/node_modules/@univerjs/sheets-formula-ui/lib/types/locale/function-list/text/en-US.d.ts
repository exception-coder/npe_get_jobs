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
};
export default locale;
