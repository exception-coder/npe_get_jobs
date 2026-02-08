export declare function useFileDrop(): {
    handleDrop: (e: DragEvent) => Promise<File[]>;
    hasFilesOrFolders: (e: DragEvent) => boolean;
};
