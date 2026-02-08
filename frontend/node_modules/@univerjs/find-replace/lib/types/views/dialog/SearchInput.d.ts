import { LocaleService } from '@univerjs/core';
import { IInputProps } from '@univerjs/design';
import { IFindReplaceService } from '../../services/find-replace.service';
export interface ISearchInputProps extends Pick<IInputProps, 'onFocus' | 'onBlur' | 'className' | 'onChange'> {
    findCompleted: boolean;
    localeService: LocaleService;
    findReplaceService: IFindReplaceService;
    matchesPosition: number;
    matchesCount: number;
    initialFindString: string;
}
export declare function SearchInput(props: ISearchInputProps): import("react/jsx-runtime").JSX.Element;
