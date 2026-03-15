import { Nullable } from '@univerjs/core';
/**
 * Alias type for number that are floats
 */
export type float = number;
/**
 * Alias type for number that are doubles.
 */
export type double = number;
export type int = number;
/**
 * Alias type for number array or Float32Array
 */
export type FloatArray = number[] | Float32Array;
/**
 * Alias type for number array or Float32Array or Int32 Array or Uint32Array or Uint16Array
 */
export type IndicesArray = number[] | Int32Array | Uint32Array | Uint16Array;
/**
 * Alias for types that can be used by a Buffer or  VertexBuffer.
 */
export type DataArray = number[] | ArrayBuffer | ArrayBufferView;
/**
 * Alias type for primitive types
 */
type Primitive = undefined | null | boolean | string | number | Function;
/**
 * Type modifier to make all the properties of an object Readonly
 */
export type Immutable<T> = T extends Primitive ? T : T extends Array<infer U> ? readonly U[] : DeepImmutable<T>;
/**
 * Type modifier to make all the properties of an object Readonly recursively
 */
export type DeepImmutable<T> = T extends Primitive ? T : T extends Array<infer U> ? IDeepImmutableArray<U> : DeepImmutableObject<T>;
/**
 * Type modifier to make object properties readonly.
 */
export type DeepImmutableObject<T> = {
    readonly [K in keyof T]: DeepImmutable<T[K]>;
};
/** @hidden */
interface IDeepImmutableArray<T> extends ReadonlyArray<DeepImmutable<T>> {
}
/** @hidden */
/**
 * Event Types
 */
export declare enum DeviceInputEventType {
    /** PointerMove */
    PointerMove = 0,
    /** PointerDown */
    PointerDown = 1,
    /** PointerUp */
    PointerUp = 2,
    Dblclick = 3,
    Keyboard = 4
}
/**
 *  Native friendly interface for Event Obj ect
 */
export interface IEvent extends Event {
    /**
     * Device type
     */
    deviceType: DeviceType;
    /**
     * Device slot
     */
    inputIndex: number;
    /**
     * Previous state of given input, for what???, nobody read this value.
     */
    previousState: Nullable<number>;
    /**
     * Current state of given input
     */
    currentState: Nullable<number>;
}
/**
 * Native friendly interface for UIEvent Object
 */
export interface IUIEvent extends IEvent, UIEvent {
}
/**
 * Native friendly interface for KeyboardEvent Object
 */
export interface IKeyboardEvent extends IUIEvent {
    /**
     * Status of Alt key being pressed
     */
    altKey: boolean;
    /**
     * Unicode value of character pressed
     * @deprecated
     */
    charCode?: number;
    /**
     * Code for key based on layout
     */
    code: string;
    /**
     * Status of Ctrl key being pressed
     */
    ctrlKey: boolean;
    /**
     * String representation of key
     */
    key: string;
    keyCode: number;
    /**
     * Status of Meta key (eg. Windows key) being pressed
     */
    metaKey: boolean;
    /**
     * Status of Shift key being pressed
     */
    shiftKey: boolean;
}
/**
 * Native friendly interface for MouseEvent Object
 */
export interface IMouseEvent extends IUIEvent, MouseEvent {
    /**
     * Status of Alt key being pressed
     */
    altKey: boolean;
    /**
     * Value of single mouse button pressed
     */
    button: number;
    /**
     * Value of all mouse buttons pressed
     */
    buttons: number;
    /**
     * Current X coordinate
     */
    clientX: number;
    /**
     * Current Y coordinate
     */
    clientY: number;
    /**
     * Status of Ctrl key being pressed
     */
    ctrlKey: boolean;
    /**
     * Status of Meta key (eg. Windows key) being pressed
     */
    metaKey: boolean;
    /**
     * Delta of movement on X axis
     */
    movementX: number;
    /**
     * Delta of movement on Y axis
     */
    movementY: number;
    /**
     * Delta of movement on X axis
     */
    mozMovementX?: number;
    /**
     * Delta of movement on Y axis
     */
    mozMovementY?: number;
    /**
     * Delta of movement on X axis
     */
    msMovementX?: any;
    /**
     * Delta of movement on Y axi s
     */
    msMovementY?: any;
    /**
     * Current coordinate of X within container
     */
    offsetX: number;
    /**
     * Current coordinate of Y within container
     */
    offsetY: number;
    /**
     * Status of Shift key being pressed
     */
    shiftKey: boolean;
    /**
     * Delta of movement on X axis
     */
    webkitMovementX?: any;
    /**
     * Delta of movement on Y axis
     */
    webkitMovementY?: any;
    /**
     * Alias of clientX
     */
    x: number;
    /**
     * Alias of clientY
     */
    y: number;
}
/**
 * Native friendly interface for PointerEvent Object
 */
export interface IPointerEvent extends IMouseEvent {
    /**
     * Pointer Event ID
     */
    pointerId: number;
    /**
     * Type of pointer
     */
    pointerType: string;
}
/**
 * Native friendly interface for DragEvent Object
 */
export interface IDragEvent extends IMouseEvent {
    /**
     * Holds the drag operation's data
     */
    dataTransfer: DataTransfer;
}
/**
 * Native friendly interface for WheelEvent Object
 */
export interface IWheelEvent extends IMouseEvent {
    /**
     * Units for delta value
     */
    deltaMode: number;
    /**
     * Horizontal scroll delta
     */
    deltaX: number;
    deltaY: number;
    /**
     * Z-Axis scroll delta
     */
    deltaZ: number;
    /**
     * WheelDelta (From MouseWheel Event)
     */
    wheelDelta?: number;
}
/**
 * Constants used for Events
 */
export declare class EventConstants {
    /**
     * Pixel delta for Wheel Events (Default)
     */
    static DOM_DELTA_PIXEL: number;
    /**
     * Line delta for Wheel Events
     */
    static DOM_DELTA_LINE: number;
    /**
     * Page delta for Wheel Events
     */
    static DOM_DELTA_PAGE: number;
}
/**
 * Enum for Device Types
 */
export declare enum DeviceType {
    /** Generic */
    Generic = 0,
    /** Keyboard */
    Keyboard = 1,
    /** Mouse */
    Mouse = 2,
    /** Touch Pointers */
    Touch = 3
}
/**
 * Enum for All Pointers (Touch/Mouse)
 */
export declare enum PointerInput {
    /** Horizontal Axis */
    Horizontal = 0,
    /** Vertical Axis */
    Vertical = 1,
    /** Left Click or Touch */
    LeftClick = 2,
    /** Middle Click */
    MiddleClick = 3,
    /** Right Click */
    RightClick = 4,
    /** Browser Back */
    BrowserBack = 5,
    /** Browser Forward */
    BrowserForward = 6,
    /** Mouse Wheel X */
    MouseWheelX = 7,
    /** Mouse Wheel Y */
    MouseWheelY = 8,
    /** Mouse Wheel Z */
    MouseWheelZ = 9,
    /** Delta X */
    DeltaHorizontal = 10,
    /** Delta Y */
    DeltaVertical = 11,
    /** MoveBeing Hijack for simultaneous buttons pressed for instance */
    FakeMove = 12
}
export {};
