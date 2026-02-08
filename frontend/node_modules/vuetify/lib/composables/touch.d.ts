export interface Sample {
    t: number;
    d: number;
}
/**
 * Returns pointer velocity in px/s
 */
export declare function calculateImpulseVelocity(samples: Sample[]): number;
export declare function useVelocity(): {
    addMovement: (e: TouchEvent) => void;
    endTouch: (e: TouchEvent) => void;
    getVelocity: (id: number) => {
        x: number;
        y: number;
        readonly direction: "down" | "left" | "right" | "up";
    };
};
