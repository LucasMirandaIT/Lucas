import { trigger, style, state, transition, animate, AnimationTriggerMetadata } from '@angular/animations';
import { Input } from '@angular/core';

export class DdsAnimations {

    public static ddsFadeIn: AnimationTriggerMetadata = trigger('ddsFadeIn', [
        transition(':enter', [
            style({opacity: '0'}),
            animate('300ms ease-in', style({opacity: '1'}))
        ])
    ]);

    public static ddsFadeOut: AnimationTriggerMetadata = trigger('ddsFadeOut', [
        transition(':leave', [
            style({opacity: '1'}),
            animate('300ms ease-out', style({opacity: '0'}))
        ])
    ]);

    public static ddsFadeInOut: AnimationTriggerMetadata = trigger('ddsFadeInOut', [
        transition(':enter', [
            style({opacity: '0'}),
            animate('300ms ease-in', style({opacity: '1'}))
        ]),
        transition(':leave', [
            style({opacity: '1'}),
            animate('300ms ease-out', style({opacity: '0'}))
        ])
    ]);

    public static ddsHorizontalFadeIn: AnimationTriggerMetadata = trigger('ddsHorizontalFadeIn', [
        transition(':enter', [
            style({width: '0', opacity: '0'}),
            animate('300ms ease-in', style({width: '*', opacity: '1'}))
        ])
    ]);

    public static ddsHorizontalFadeOut: AnimationTriggerMetadata = trigger('ddsHorizontalFadeOut', [
        transition(':leave', [
            style({width: '*', opacity: '1'}),
            animate('300ms ease-out', style({width: '0', opacity: '0'}))
        ])
    ]);

    public static ddsHorizontalFadeInOut: AnimationTriggerMetadata = trigger('ddsHorizontalFadeInOut', [
        transition(':enter', [
            style({width: '0', opacity: '0'}),
            animate('300ms ease-in', style({width: '*', opacity: '1'}))
        ]),
        transition(':leave', [
            style({width: '*', opacity: '1'}),
            animate('300ms ease-out', style({width: '0', opacity: '0'}))
        ])
    ]);

    public static ddsVerticalFadeIn: AnimationTriggerMetadata = trigger('ddsVerticalFadeIn', [
        transition(':enter', [
            style({height: '0', opacity: '0'}),
            animate('300ms ease-in', style({height: '*', opacity: '1'}))
        ])
    ]);

    public static ddsVerticalFadeOut: AnimationTriggerMetadata = trigger('ddsVerticalFadeOut', [
        transition(':leave', [
            style({height: '*', opacity: '1'}),
            animate('300ms ease-out', style({height: '0', opacity: '0'}))
        ])
    ]);

    public static ddsVerticalFadeInOut: AnimationTriggerMetadata = trigger('ddsVerticalFadeInOut', [
        transition(':enter', [
            style({height: '0', opacity: '0'}),
            animate('300ms ease-in', style({height: '*', opacity: '1'}))
        ]),
        transition(':leave', [
            style({height: '*', opacity: '1'}),
            animate('300ms ease-out', style({height: '0', opacity: '0'}))
        ])
    ]);

}
