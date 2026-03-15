import { DependencyOverride } from '@univerjs/core';
import { IScrollBarProps } from '@univerjs/engine-render';
import { ComponentType, MenuConfig } from '@univerjs/ui';
import { IPermissionDetailUserPartProps } from '../views/permission/panel-detail/PermissionDetailUserPart';
export declare const SHEETS_UI_PLUGIN_CONFIG_KEY = "sheets-ui.config";
export declare const configSymbol: unique symbol;
export interface IUniverSheetsUIConfig {
    menu?: MenuConfig;
    disableAutoFocus?: true;
    override?: DependencyOverride;
    /**
     * The maximum count of rows triggering auto height. This is used to avoid performance issue.
     * @default 1000
     */
    maxAutoHeightCount?: number;
    /**
     * Whether to show the formula bar.
     */
    formulaBar?: boolean;
    /**
     * The config of the footer.
     * @default {}
     */
    footer?: false | {
        /**
         * Sheet bar is the manager of sub sheets, including add/switch/delete sub sheets.
         * @default true
         */
        sheetBar?: boolean;
        /**
         * statistic bar including statistic info current selections, such as count, sum, average, etc.
         * @default true
         */
        statisticBar?: boolean;
        /**
         * Including the menus in the footer. such as highlight, gridlines, etc.
         * @default true
         */
        menus?: boolean;
        /**
         * Zoom slider is the zoom slider in the footer.
         * @default true
         */
        zoomSlider?: boolean;
    };
    /**
     * @deprecated Use `footer.statisticBar` instead.
     */
    statusBarStatistic?: boolean;
    clipboardConfig?: {
        hidePasteOptions?: boolean;
    };
    /** The config of the scroll bar. */
    scrollConfig?: IScrollBarProps;
    /**
     * Strategy for showing the protected range shadow.
     * - true or 'always': Show shadow for all protected ranges (default behavior)
     * - 'non-editable': Only show shadow for ranges that cannot be edited (Edit permission is false)
     * - 'non-viewable': Only show shadow for ranges that cannot be viewed (View permission is false)
     * - false or 'none': Never show shadow for protected ranges
     * @default true
     */
    protectedRangeShadow?: boolean | 'always' | 'non-editable' | 'non-viewable' | 'none';
    /**
     * The custom component of the protected range user selector.
     */
    protectedRangeUserSelector?: {
        /**
         * custom component, should implement the `IPermissionDetailUserPartProps` interface.
         */
        component: ComponentType<IPermissionDetailUserPartProps>;
        /**
         * The framework of the component. Must be passed correctly.
         */
        framework: string;
    };
    /**
     * Whether to disable the force string alert.
     * @default false
     */
    disableForceStringAlert?: boolean;
    /**
     * Whether to disable the force string mark.
     * @default false
     */
    disableForceStringMark?: boolean;
}
export declare const defaultPluginConfig: IUniverSheetsUIConfig;
/**
 * Convert the protectedRangeShadow config to shadow strategy
 * - true -> 'always'
 * - false -> 'none'
 * - string values remain unchanged
 * @param config The protectedRangeShadow config value
 * @returns The shadow strategy
 */
export declare function convertToShadowStrategy(config?: boolean | 'always' | 'non-editable' | 'non-viewable' | 'none'): 'always' | 'non-editable' | 'non-viewable' | 'none';
