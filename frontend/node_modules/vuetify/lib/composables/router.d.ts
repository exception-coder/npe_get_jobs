// Types
import type { PropType, Ref, SetupContext } from 'vue';
// @ts-ignore
import type { useLink as _useLink, NavigationGuardNext, RouteLocationNormalizedLoaded, RouteLocationRaw, Router } from 'vue-router';
import type { EventProp } from '../util/index.js';
export declare function useRoute(): Ref<RouteLocationNormalizedLoaded | undefined>;
export declare function useRouter(): Router | undefined;
export interface LinkProps {
    href: string | undefined;
    replace: boolean | undefined;
    to: RouteLocationRaw | undefined;
    exact: boolean | undefined;
    disabled: boolean | undefined;
}
export interface LinkListeners {
    onClick?: EventProp | undefined;
    onClickOnce?: EventProp | undefined;
}
export interface UseLink extends Omit<Partial<ReturnType<typeof _useLink>>, 'href'> {
    isLink: Readonly<Ref<boolean>>;
    isRouterLink: Readonly<Ref<boolean>>;
    isClickable: Readonly<Ref<boolean>>;
    href: Ref<string | undefined>;
    linkProps: Record<string, string | undefined>;
}
export declare function useLink(props: LinkProps & LinkListeners, attrs: SetupContext['attrs']): UseLink;
export declare const makeRouterProps: <Defaults extends {
    href?: unknown;
    replace?: unknown;
    to?: unknown;
    exact?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    href: unknown extends Defaults["href"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["href"] ? string : string | Defaults["href"]>;
        default: unknown extends Defaults["href"] ? string : string | Defaults["href"];
    };
    replace: unknown extends Defaults["replace"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["replace"] ? boolean : boolean | Defaults["replace"]>;
        default: unknown extends Defaults["replace"] ? boolean : boolean | Defaults["replace"];
    };
    to: unknown extends Defaults["to"] ? PropType<string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric> : {
        type: PropType<unknown extends Defaults["to"] ? string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric : string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric | Defaults["to"]>;
        default: unknown extends Defaults["to"] ? string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric : Defaults["to"] | NonNullable<string | import("vue-router").RouteLocationAsPathGeneric | import("vue-router").RouteLocationAsRelativeGeneric>;
    };
    exact: unknown extends Defaults["exact"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["exact"] ? boolean : boolean | Defaults["exact"]>;
        default: unknown extends Defaults["exact"] ? boolean : boolean | Defaults["exact"];
    };
};
export declare function useBackButton(router: Router | undefined, cb: (next: NavigationGuardNext) => void): void;
