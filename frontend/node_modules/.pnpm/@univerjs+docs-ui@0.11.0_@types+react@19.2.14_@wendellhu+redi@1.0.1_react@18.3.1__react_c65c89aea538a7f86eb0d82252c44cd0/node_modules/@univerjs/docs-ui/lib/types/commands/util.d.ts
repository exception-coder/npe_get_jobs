import { DocSkeletonManagerService } from '@univerjs/docs';
import { DocumentDataModel, IAccessor } from '@univerjs/core';
/**
 * Get the skeleton of the command's target.
 * @param accessor The injection accessor.
 * @param unitId Unit ID.
 */
export declare function getCommandSkeleton(accessor: IAccessor, unitId: string): DocSkeletonManagerService | undefined;
export declare function getRichTextEditPath(docDataModel: DocumentDataModel, segmentId?: string): string[];
