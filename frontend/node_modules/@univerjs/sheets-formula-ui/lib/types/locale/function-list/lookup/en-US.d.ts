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
};
export default locale;
