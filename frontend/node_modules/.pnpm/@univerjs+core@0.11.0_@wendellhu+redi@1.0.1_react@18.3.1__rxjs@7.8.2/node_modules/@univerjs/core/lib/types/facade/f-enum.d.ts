import { AbsoluteRefType, AutoFillSeries, BaselineOffset, BooleanNumber, BorderStyleTypes, BorderType, ColorType, CommandType, CommonHideTypes, CopyPasteType, DataValidationErrorStyle, DataValidationOperator, DataValidationRenderMode, DataValidationStatus, DataValidationType, DeleteDirection, DeveloperMetadataVisibility, Dimension, Direction, HorizontalAlign, InterpolationPointType, LifecycleStages, LocaleType, MentionType, ProtectionType, RelativeDate, SheetTypes, TextDecoration, TextDirection, ThemeColorType, UniverInstanceType, VerticalAlign, WrapStrategy } from '@univerjs/core';
/**
 * @hideconstructor
 */
export declare class FEnum {
    /**
     * @ignore
     */
    static _instance: FEnum | null;
    static get(): FEnum;
    /**
     * @ignore
     */
    static extend(source: any): void;
    constructor();
    /**
     * Defines different types of absolute references
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.AbsoluteRefType);
     * ```
     */
    get AbsoluteRefType(): typeof AbsoluteRefType;
    /**
     * Defines different types of Univer instances
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.UniverInstanceType.UNIVER_SHEET);
     * ```
     */
    get UniverInstanceType(): typeof UniverInstanceType;
    /**
     * Represents different stages in the lifecycle
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.LifecycleStages.Rendered);
     * ```
     */
    get LifecycleStages(): typeof LifecycleStages;
    /**
     * Different types of data validation
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.DataValidationType.LIST);
     * ```
     */
    get DataValidationType(): typeof DataValidationType;
    /**
     * Different error display styles
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.DataValidationErrorStyle.WARNING);
     * ```
     */
    get DataValidationErrorStyle(): typeof DataValidationErrorStyle;
    /**
     * Different validation rendering modes
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.DataValidationRenderMode.TEXT);
     * ```
     */
    get DataValidationRenderMode(): typeof DataValidationRenderMode;
    /**
     * Different validation operators
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.DataValidationOperator.BETWEEN);
     * ```
     */
    get DataValidationOperator(): typeof DataValidationOperator;
    /**
     * Different validation states
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.DataValidationStatus.VALID);
     * ```
     */
    get DataValidationStatus(): typeof DataValidationStatus;
    /**
     * Different types of commands
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.CommandType.COMMAND);
     * ```
     */
    get CommandType(): typeof CommandType;
    /**
     * Different baseline offsets for text baseline positioning
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.BaselineOffset.SUPERSCRIPT);
     * ```
     */
    get BaselineOffset(): typeof BaselineOffset;
    /**
     * Boolean number representations
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.BooleanNumber.TRUE);
     * ```
     */
    get BooleanNumber(): typeof BooleanNumber;
    /**
     * Different horizontal text alignment options
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.HorizontalAlign.CENTER);
     * ```
     */
    get HorizontalAlign(): typeof HorizontalAlign;
    /**
     * Different text decoration styles
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.TextDecoration.DOUBLE);
     * ```
     */
    get TextDecoration(): typeof TextDecoration;
    /**
     * Different text direction options
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.TextDirection.LEFT_TO_RIGHT);
     * ```
     */
    get TextDirection(): typeof TextDirection;
    /**
     * Different vertical text alignment options
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.VerticalAlign.MIDDLE);
     * ```
     */
    get VerticalAlign(): typeof VerticalAlign;
    /**
     * Different wrap strategy options
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.WrapStrategy.WRAP);
     * ```
     */
    get WrapStrategy(): typeof WrapStrategy;
    /**
     * Different border types
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.BorderType.OUTSIDE);
     * ```
     */
    get BorderType(): typeof BorderType;
    /**
     * Different border style types
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.BorderStyleTypes.NONE);
     * ```
     */
    get BorderStyleTypes(): typeof BorderStyleTypes;
    /**
     * Auto fill series types
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.AutoFillSeries.ALTERNATE_SERIES);
     * ```
     */
    get AutoFillSeries(): typeof AutoFillSeries;
    /**
     * Color types
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.ColorType.RGB);
     * ```
     */
    get ColorType(): typeof ColorType;
    /**
     * Common hide types
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.CommonHideTypes.ON);
     * ```
     */
    get CommonHideTypes(): typeof CommonHideTypes;
    /**
     * Copy paste types
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.CopyPasteType.PASTE_VALUES);
     * ```
     */
    get CopyPasteType(): typeof CopyPasteType;
    /**
     * Delete direction types
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.DeleteDirection.LEFT);
     * ```
     */
    get DeleteDirection(): typeof DeleteDirection;
    /**
     * Developer metadata visibility types
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.DeveloperMetadataVisibility.DOCUMENT);
     * ```
     */
    get DeveloperMetadataVisibility(): typeof DeveloperMetadataVisibility;
    /**
     * Dimension types
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.Dimension.ROWS);
     * ```
     */
    get Dimension(): typeof Dimension;
    /**
     * Direction types
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.Direction.UP);
     * ```
     */
    get Direction(): typeof Direction;
    /**
     * Interpolation point types
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.InterpolationPointType.NUMBER);
     * ```
     */
    get InterpolationPointType(): typeof InterpolationPointType;
    /**
     * Locale types
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.LocaleType.EN_US);
     * ```
     */
    get LocaleType(): typeof LocaleType;
    /**
     * Mention types
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.MentionType.PERSON);
     * ```
     */
    get MentionType(): typeof MentionType;
    /**
     * Protection types
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.ProtectionType.RANGE);
     * ```
     */
    get ProtectionType(): typeof ProtectionType;
    /**
     * Relative date types
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.RelativeDate.TODAY);
     * ```
     */
    get RelativeDate(): typeof RelativeDate;
    /**
     * Sheet types
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.SheetTypes.GRID);
     * ```
     */
    get SheetTypes(): typeof SheetTypes;
    /**
     * Theme color types
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.ThemeColorType.ACCENT1);
     * ```
     */
    get ThemeColorType(): typeof ThemeColorType;
}
