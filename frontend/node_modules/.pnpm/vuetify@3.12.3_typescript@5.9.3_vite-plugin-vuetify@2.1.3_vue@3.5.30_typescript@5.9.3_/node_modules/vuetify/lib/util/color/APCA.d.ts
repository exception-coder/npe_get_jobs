/**
 * WCAG 3.0 APCA perceptual contrast algorithm from https://github.com/Myndex/SAPC-APCA
 * @licence https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @see https://www.w3.org/WAI/GL/task-forces/silver/wiki/Visual_Contrast_of_Text_Subgroup
 */
// Types
import type { RGB } from '../index.js';
export declare function APCAcontrast(text: RGB, background: RGB): number;
