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
};
export default locale;
