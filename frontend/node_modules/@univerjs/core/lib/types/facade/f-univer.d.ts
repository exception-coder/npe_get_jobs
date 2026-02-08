import { CommandListener, IDisposable, IDocumentData, IExecutionOptions, ILanguagePack, IParagraphStyle, ITextDecoration, ITextStyle, LifecycleStages, ColorBuilder, Disposable, ICommandService, Injector, IUniverInstanceService, LifecycleService, ParagraphStyleBuilder, ParagraphStyleValue, RichTextBuilder, RichTextValue, TextDecorationBuilder, TextStyleBuilder, TextStyleValue, Univer } from '@univerjs/core';
import { Subscription } from 'rxjs';
import { IEventParamConfig, FEventName } from './f-event';
import { FBlob } from './f-blob';
import { FEnum } from './f-enum';
import { FEventRegistry } from './f-event-registry';
import { FHooks } from './f-hooks';
import { FUserManager } from './f-usermanager';
import { FUtil } from './f-util';
/**
 * @ignore
 */
declare const InitializerSymbol: unique symbol;
/**
 * The root Facade API object to interact with Univer. Please use `newAPI` static method
 * to create a new instance.
 *
 * @hideconstructor
 */
export declare class FUniver extends Disposable {
    protected readonly _injector: Injector;
    protected readonly _commandService: ICommandService;
    protected readonly _univerInstanceService: IUniverInstanceService;
    protected readonly _lifecycleService: LifecycleService;
    /**
     * Create an FUniver instance, if the injector is not provided, it will create a new Univer instance.
     * @static
     * @param {Univer | Injector} wrapped - The Univer instance or injector instance.
     * @returns {FUniver} - The FUniver instance.
     *
     * @example
     * ```ts
     * const univerAPI = FUniver.newAPI(univer);
     * ```
     */
    static newAPI(wrapped: Univer | Injector): FUniver;
    private [InitializerSymbol];
    /**
     * @ignore
     */
    _initialize(injector: Injector): void;
    /**
     * @ignore
     */
    static extend(source: any): void;
    protected _eventRegistry: FEventRegistry;
    registerEventHandler: (event: string, handler: () => IDisposable | Subscription) => IDisposable;
    constructor(_injector: Injector, _commandService: ICommandService, _univerInstanceService: IUniverInstanceService, _lifecycleService: LifecycleService);
    private _initCommandEvent;
    private _initBeforeCommandEvent;
    private _initUnitEvent;
    /**
     * Dispose the UniverSheet by the `unitId`. The UniverSheet would be unload from the application.
     * @param unitId The unit id of the UniverSheet.
     * @returns Whether the Univer instance is disposed successfully.
     *
     * @example
     * ```ts
     * const fWorkbook = univerAPI.getActiveWorkbook();
     * const unitId = fWorkbook?.getId();
     *
     * if (unitId) {
     *   univerAPI.disposeUnit(unitId);
     * }
     * ```
     */
    disposeUnit(unitId: string): boolean;
    /**
     * Get the current lifecycle stage.
     * @returns {LifecycleStages} - The current lifecycle stage.
     *
     * @example
     * ```ts
     * const stage = univerAPI.getCurrentLifecycleStage();
     * console.log(stage);
     * ```
     */
    getCurrentLifecycleStage(): LifecycleStages;
    /**
     * Undo an editing on the currently focused document.
     * @returns {Promise<boolean>} undo result
     *
     * @example
     * ```ts
     * await univerAPI.undo();
     * ```
     */
    undo(): Promise<boolean>;
    /**
     * Redo an editing on the currently focused document.
     * @returns {Promise<boolean>} redo result
     *
     * @example
     * ```ts
     * await univerAPI.redo();
     * ```
     */
    redo(): Promise<boolean>;
    /**
     * Toggle dark mode on or off.
     * @param {boolean} isDarkMode - Whether the dark mode is enabled.
     * @example
     * ```ts
     * univerAPI.toggleDarkMode(true);
     * ```
     */
    toggleDarkMode(isDarkMode: boolean): void;
    /**
     * Load locales for the given locale.
     * @description This method is utilized to load locales, which can be either built-in or custom-defined.
     * @param {string} locale - A unique locale identifier.
     * @param {ILanguagePack} locales  - The locales object containing the translations.
     * @example
     * ```ts
     * univerAPI.loadLocales('esES', {
     *   'Hello World': 'Hola Mundo',
     * });
     * ```
     */
    loadLocales(locale: string, locales: ILanguagePack): void;
    /**
     * Set the current locale.
     * @param {string} locale - A unique locale identifier.
     * @example
     * ```ts
     * univerAPI.setLocale('esES');
     * ```
     */
    setLocale(locale: string): void;
    /**
     * Register a callback that will be triggered before invoking a command.
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.BeforeCommandExecute, (event) => {})` instead.
     * @param {CommandListener} callback The callback.
     * @returns {IDisposable} The disposable instance.
     */
    onBeforeCommandExecute(callback: CommandListener): IDisposable;
    /**
     * Register a callback that will be triggered when a command is invoked.
     * @deprecated use `univerAPI.addEvent(univerAPI.Event.CommandExecuted, (event) => {})` instead.
     * @param {CommandListener} callback The callback.
     * @returns {IDisposable} The disposable instance.
     */
    onCommandExecuted(callback: CommandListener): IDisposable;
    /**
     * Execute a command with the given id and parameters.
     * @param id Identifier of the command.
     * @param params Parameters of this execution.
     * @param options Options of this execution.
     * @returns The result of the execution. It is a boolean value by default which indicates the command is executed.
     *
     * @example
     * ```ts
     * univerAPI.executeCommand('sheet.command.set-range-values', {
     *   value: { v: "Hello, Univer!" },
     *   range: { startRow: 0, startColumn: 0, endRow: 0, endColumn: 0 }
     * });
     * ```
     */
    executeCommand<P extends object = object, R = boolean>(id: string, params?: P, options?: IExecutionOptions): Promise<R>;
    /**
     * Execute a command with the given id and parameters synchronously.
     * @param id Identifier of the command.
     * @param params Parameters of this execution.
     * @param options Options of this execution.
     * @returns The result of the execution. It is a boolean value by default which indicates the command is executed.
     *
     * @example
     * ```ts
     * univerAPI.syncExecuteCommand('sheet.command.set-range-values', {
     *   value: { v: "Hello, Univer!" },
     *   range: { startRow: 0, startColumn: 0, endRow: 0, endColumn: 0 }
     * });
     * ```
     */
    syncExecuteCommand<P extends object = object, R = boolean>(id: string, params?: P, options?: IExecutionOptions): R;
    /**
     * Get hooks.
     * @deprecated use `addEvent` instead.
     * @returns {FHooks} FHooks instance
     */
    getHooks(): FHooks;
    get Enum(): FEnum;
    get Event(): FEventName;
    get Util(): FUtil;
    /**
     * Add an event listener
     * @param {string} event key of event
     * @param {(params: IEventParamConfig[typeof event]) => void} callback callback when event triggered
     * @returns {Disposable} The Disposable instance, for remove the listener
     * @example
     * ```ts
     * // Add life cycle changed event listener
     * const disposable = univerAPI.addEvent(univerAPI.Event.LifeCycleChanged, (params) => {
     *   const { stage } = params;
     *   console.log('life cycle changed', params);
     * });
     *
     * // Remove the event listener, use `disposable.dispose()`
     * ```
     */
    addEvent<T extends keyof IEventParamConfig>(event: T, callback: (params: IEventParamConfig[T]) => void): IDisposable;
    /**
     * Fire an event, used in internal only.
     * @param {string} event key of event
     * @param {any} params params of event
     * @returns {boolean} should cancel
     * @example
     * ```ts
     * this.fireEvent(univerAPI.Event.LifeCycleChanged, params);
     * ```
     */
    fireEvent<T extends keyof IEventParamConfig>(event: T, params: IEventParamConfig[T]): boolean | undefined;
    getUserManager(): FUserManager;
    /**
     * Create a new blob.
     * @returns {FBlob} The new blob instance
     * @example
     * ```ts
     * const blob = univerAPI.newBlob();
     * ```
     */
    newBlob(): FBlob;
    /**
     * Create a new color.
     * @returns {ColorBuilder} The new color instance
     * @example
     * ```ts
     * const color = univerAPI.newColor();
     * ```
     * @deprecated
     */
    newColor(): ColorBuilder;
    /**
     * Create a new rich text.
     * @param {IDocumentData} data
     * @returns {RichTextBuilder} The new rich text instance
     * @example
     * ```ts
     * const richText = univerAPI.newRichText({ body: { dataStream: 'Hello World\r\n' } });
     * const range = univerAPI.getActiveWorkbook().getActiveSheet().getRange('A1');
     * range.setRichTextValueForCell(richText);
     * ```
     */
    newRichText(data?: IDocumentData): RichTextBuilder;
    /**
     * Create a new rich text value.
     * @param {IDocumentData} data - The rich text data
     * @returns {RichTextValue} The new rich text value instance
     * @example
     * ```ts
     * const richTextValue = univerAPI.newRichTextValue({ body: { dataStream: 'Hello World\r\n' } });
     * const range = univerAPI.getActiveWorkbook().getActiveSheet().getRange('A1');
     * range.setRichTextValueForCell(richTextValue);
     * ```
     */
    newRichTextValue(data: IDocumentData): RichTextValue;
    /**
     * Create a new paragraph style.
     * @param {IParagraphStyle} style - The paragraph style
     * @returns {ParagraphStyleBuilder} The new paragraph style instance
     * @example
     * ```ts
     * const richText = univerAPI.newRichText({ body: { dataStream: 'Hello World\r\n' } });
     * const paragraphStyle = univerAPI.newParagraphStyle({ textStyle: { ff: 'Arial', fs: 12, it: univerAPI.Enum.BooleanNumber.TRUE, bl: univerAPI.Enum.BooleanNumber.TRUE } });
     * richText.insertParagraph(paragraphStyle);
     * const range = univerAPI.getActiveWorkbook().getActiveSheet().getRange('A1');
     * range.setRichTextValueForCell(richText);
     * ```
     */
    newParagraphStyle(style?: IParagraphStyle): ParagraphStyleBuilder;
    /**
     * Create a new paragraph style value.
     * @param {IParagraphStyle} style - The paragraph style
     * @returns {ParagraphStyleValue} The new paragraph style value instance
     * @example
     * ```ts
     * const paragraphStyleValue = univerAPI.newParagraphStyleValue();
     * ```
     */
    newParagraphStyleValue(style?: IParagraphStyle): ParagraphStyleValue;
    /**
     * Create a new text style.
     * @param {ITextStyle} style - The text style
     * @returns {TextStyleBuilder} The new text style instance
     * @example
     * ```ts
     * const textStyle = univerAPI.newTextStyle();
     * ```
     */
    newTextStyle(style?: ITextStyle): TextStyleBuilder;
    /**
     * Create a new text style value.
     * @param {ITextStyle} style - The text style
     * @returns {TextStyleValue} The new text style value instance
     * @example
     * ```ts
     * const textStyleValue = univerAPI.newTextStyleValue();
     * ```
     */
    newTextStyleValue(style?: ITextStyle): TextStyleValue;
    /**
     * Create a new text decoration.
     * @param {ITextDecoration} decoration - The text decoration
     * @returns {TextDecorationBuilder} The new text decoration instance
     * @example
     * ```ts
     * const decoration = univerAPI.newTextDecoration();
     * ```
     */
    newTextDecoration(decoration?: ITextDecoration): TextDecorationBuilder;
}
export {};
