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
declare const HoverCardPrimitive: import('react').FC<import('@radix-ui/react-hover-card').HoverCardProps>;
declare const HoverCardPortal: import('react').FC<import('@radix-ui/react-hover-card').HoverCardPortalProps>;
declare const HoverCardTrigger: import('react').ForwardRefExoticComponent<import('@radix-ui/react-hover-card').HoverCardTriggerProps & import('react').RefAttributes<HTMLAnchorElement>>;
declare const HoverCardContent: import('react').ForwardRefExoticComponent<Omit<import('@radix-ui/react-hover-card').HoverCardContentProps & import('react').RefAttributes<HTMLDivElement>, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export { HoverCardContent, HoverCardPortal, HoverCardPrimitive, HoverCardTrigger };
