export declare enum PrintDirection {
    Portrait = "Portrait",
    Landscape = "Landscape"
}
export declare enum PrintScale {
    Origin = "Origin",
    FitWidth = "FitWidth",
    FitHeight = "FitHeight",
    FitPage = "FitPage",
    Custom = "Custom"
}
export declare enum PrintAlign {
    Start = "Start",
    End = "End",
    Middle = "Middle"
}
export declare enum PrintPaperMargin {
    Normal = "Normal",
    Narrow = "Narrow",
    Wide = "Wide",
    None = "None",
    Custom = "Custom"
}
export interface IPrintMargin {
    top: number;
    left: number;
    right: number;
    bottom: number;
}
