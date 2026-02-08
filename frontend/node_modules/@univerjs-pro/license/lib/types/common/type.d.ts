export declare enum ReleaseType {
    DEV = 1,
    NO_COMMERCIAL = 2,
    COMMERCIAL = 3
}
export interface IFeature {
    /**
     * Unit feature.
     * @property {number} et - Expiration time.
     * @property {number} mu - Maximum unit.
     * @property {number} mm - Maximum members.
     * @property {number} cu - Concurrent units.
     */
    uf: {
        et: number;
        mu: number;
        mm: number;
        cu: number;
    };
    /**
     * Sheet feature.
     * @property {number} et - Expiration time.
     * @property {number} ptn - Pivot table number.
     * @property {number} mis - Maximum import size.
     * @property {number} mpn - Maximum print number.
     * @property {boolean} rv - Whether reviews are enabled.
     */
    sf: {
        et: number;
        ptn: number;
        mis: number;
        mpn: number;
        rv: boolean;
        c: string[];
        s: boolean;
        a: boolean;
    };
    /**
     * Document feature.
     * @property {number} et - Expiration time.
     * @property {number} mis - Maximum import size.
     * @property {number} mpn - Maximum print number.
     * @property {boolean} rv - Whether reviews are enabled.
     */
    df: {
        et: number;
        mis: number;
        mpn: number;
        rv: boolean;
    };
    /**
     * Workspace feature.
     * @property {number} et - Expiration time.
     * @property {number} mhn - Maximum history number.
     */
    wsf: {
        et: number;
        mhn: number;
    };
}
export interface ILicenseInfo {
    /**
     * ID.
     * @property {string} i - The unique id.
     */
    i: string;
    /**
     * Version.
     * @property {string} v - The version.
     */
    v: string;
    /**
     * Domains allowed by the license.
     * @property {string[]} dm - An array of domains.
     */
    dm: string[];
    /**
     * Release type.
     * @property {ReleaseType} rt - The type of release.
     */
    rt: ReleaseType;
    /**
     * Feature associated with the license.
     * @property {IFeature} ft - The feature object containing various limits and capabilities.
     */
    ft: IFeature;
    /**
     * Upgrade deadline.
     * @property {number} ud - The timestamp for the upgrade deadline.
     */
    ud: number;
    /**
     * License issuance timestamp.
     * @property {number} at - The timestamp when the license was issued.
     */
    at: number;
    /**
     * Email address associated with the license (optional).
     * @property {string} [e] - The email associated with the license.
     */
    e?: string;
    /**
     * Difficulty level (optional).
     * @property {number} [d] - A numeric value representing difficulty.
     */
    d?: number;
    /**
     * Nonce for additional security (optional).
     * @property {number} [n] - A nonce for preventing replay attacks.
     */
    n?: number;
    /**
     * -
     * @property {string} [p] -
     */
    p?: string;
}
type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};
export interface ILicenseDecryptedInfo {
    valid: boolean;
    message: IPartialILicenseInfo;
}
export type IPartialIFeature = DeepPartial<IFeature>;
export type IPartialILicenseInfo = DeepPartial<ILicenseInfo>;
export type IFeatureType = keyof IFeature;
export type ISheetFeatureType = keyof IFeature['sf'];
export type ISheetFeatureLimitRes = boolean | number | string[];
export type IDocFeatureType = keyof IFeature['df'];
export type IDocFeatureLimitRes = boolean | number | string[];
export {};
