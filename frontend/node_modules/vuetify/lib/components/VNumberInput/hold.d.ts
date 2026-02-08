export declare function useHold({ toggleUpDown }: {
    toggleUpDown: (increment: boolean) => void;
}): {
    holdStart: (value: "down" | "up") => void;
    holdStop: () => void;
};
