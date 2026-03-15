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
export declare enum PlaceholderType {
    NONE = 0,//Default value, signifies it is not a placeholder.
    BODY = 1,//Body text.
    CHART = 2,//Chart or graph.
    CLIP_ART = 3,//Clip art image.
    CENTERED_TITLE = 4,//Title centered.
    DIAGRAM = 5,//Diagram.
    DATE_AND_TIME = 6,//Date and time.
    FOOTER = 7,//Footer text.
    HEADER = 8,//Header text.
    MEDIA = 9,//Multimedia.
    OBJECT = 10,//Any content type.
    PICTURE = 11,//Picture.
    SLIDE_NUMBER = 12,//Number of a slide.
    SUBTITLE = 13,//Subtitle.
    TABLE = 14,//Table.
    TITLE = 15,//Slide title.
    SLIDE_IMAGE = 16
}
