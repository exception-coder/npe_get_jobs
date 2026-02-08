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
export declare enum SHAPE_TYPE {
    RECT = "rect",
    CIRCLE = "circle",
    PATH = "path"
}
export declare enum LINK_VIEW_PORT_TYPE {
    XY = 0,
    X = 1,
    Y = 2
}
export declare const MIDDLE_CELL_POS_MAGIC_NUMBER = 1;
export declare const DEFAULT_FONTFACE_PLANE = "\"Helvetica Neue\", Helvetica, Arial, \"PingFang SC\", \"Hiragino Sans GB\", \"Heiti SC\", \"Microsoft YaHei\", \"WenQuanYi Micro Hei\", sans-serif";
export declare const DEFAULT_SKELETON_HEADER: {
    marginTop: number;
    lines: never[];
    drawings: Map<any, any>;
    height: number;
    st: number;
    ed: number;
    marginLeft: number;
};
export declare const DEFAULT_SKELETON_FOOTER: {
    marginBottom: number;
    lines: never[];
    drawings: Map<any, any>;
    height: number;
    st: number;
    ed: number;
    marginLeft: number;
};
export declare const DEFAULT_OFFSET_SPACING = 1;
export declare const DEFAULT_DOCUMENT_FONTSIZE = 14;
/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
 */
export declare enum CURSOR_TYPE {
    DEFAULT = "default",
    AUTO = "auto",
    CROSSHAIR = "crosshair",
    POINTER = "pointer",
    MOVE = "move",
    EAST_RESIZE = "e-resize",
    NORTH_EAST_RESIZE = "ne-resize",
    NORTH_WEST_RESIZE = "nw-resize",
    NORTH_RESIZE = "n-resize",
    SOUTH_EAST_RESIZE = "se-resize",
    SOUTH_WEST_RESIZE = "sw-resize",
    SOUTH_RESIZE = "s-resize",
    WEST_RESIZE = "w-resize",
    TEXT = "text",
    WAIT = "wait",
    HELP = "help",
    CELL = "cell",
    NONE = "none",
    VERTICAL_TEXT = "vertical-text",
    NO_DROP = "no-drop",
    GRAB = "grab",
    GRABBING = "grabbing",
    ALL_SCROLL = "all-scroll",
    COLUMN_RESIZE = "col-resize",
    ROW_RESIZE = "row-resize",
    PROGRESS = "progress",
    NOT_ALLOWED = "not-allowed",
    ZOOM_IN = "zoom-in",
    ZOOM_OUT = "zoom-out"
}
export declare enum DOCUMENT_CONTEXT_CLIP_TYPE {
    noClip = 0,
    DOC_SIZE = 1,
    CONTENT_SIZE_LEFT = 2,
    CONTENT_SIZE_CENTER = 3,
    CONTENT_SIZE_Right = 4
}
export declare const COLOR_BLACK_RGB = "rgb(0,0,0)";
export declare enum BORDER_TYPE {
    TOP = "t",
    BOTTOM = "b",
    LEFT = "l",
    RIGHT = "r",
    TL_BR = "tl_br",
    TL_BC = "tl_bc",
    TL_MR = "tl_mr",
    BL_TR = "bl_tr",
    ML_TR = "ml_tr",
    BC_TR = "bc_tr"
}
export declare enum ORIENTATION_TYPE {
    UP = 0,
    DOWN = 1
}
export declare enum RENDER_CLASS_TYPE {
    ENGINE = "Engine",
    SCENE = "Scene",
    BASE_OBJECT = "BaseObject",
    SCENE_VIEWER = "SceneViewer",
    CANVAS = "Canvas",
    VIEWPORT = "Viewport",
    LAYER = "Layer",
    GROUP = "Group",
    IMAGE = "Image",
    SHAPE = "Shape",
    TEXT = "Text"
}
export declare const MAXIMUM_ROW_HEIGHT = 2000;
export declare const MAXIMUM_COL_WIDTH = 2000;
export declare const MIN_COL_WIDTH = 2;
export declare const FIX_ONE_PIXEL_BLUR_OFFSET = 0.5;
export declare const DRAWING_OBJECT_LOWER_LAYER_INDEX = 3;
export declare const DRAWING_OBJECT_LAYER_INDEX = 4;
export declare const DRAWING_OBJECT_UPPER_LAYER_INDEX = 5;
