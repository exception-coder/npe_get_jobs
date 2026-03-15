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
export interface ISideMenuItem {
    text: string;
    level: number;
    id: string;
    isTitle?: boolean;
}
export interface ISideMenuProps {
    menus?: ISideMenuItem[];
    onClick?: (menu: ISideMenuItem) => void;
    className?: string;
    style?: React.CSSProperties;
    mode?: 'float' | 'side-bar';
    maxHeight: number;
    activeId?: string;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    maxWidth?: number;
    wrapperClass?: string;
    wrapperStyle?: React.CSSProperties;
    iconClass?: string;
    iconStyle?: React.CSSProperties;
}
export interface ISideMenuInstance {
    scrollTo: (id: string) => void;
}
export declare const SideMenu: import('react').ForwardRefExoticComponent<ISideMenuProps & import('react').RefAttributes<ISideMenuInstance>>;
