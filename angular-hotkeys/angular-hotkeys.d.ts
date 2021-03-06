// Type definitions for angular-hotkeys
// Project: https://github.com/chieffancypants/angular-hotkeys
// Definitions by: Jason Zhao <https://github.com/jlz27>, Stefan Steinhart <https://github.com/reppners>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module ng.hotkeys {

    interface HotkeysProvider {
        template: string;
        templateTitle:string;
        includeCheatSheet: boolean;
        cheatSheetHotkey: string;
        cheatSheetDescription: string;

        add(combo: string, callback: (event: Event, hotkey?: Hotkey) => void, action?: string, allowIn?: Array<string>, persistent?: boolean): ng.hotkeys.Hotkey;

        add(combo: string, description: string, callback: (event: Event, hotkey?: Hotkey) => void, action?: string, allowIn?: Array<string>, persistent?: boolean): ng.hotkeys.Hotkey;

        add(hotkeyObj: ng.hotkeys.Hotkey): ng.hotkeys.Hotkey;

        bindTo(scope : ng.IScope): ng.hotkeys.HotkeysProviderChained;

        del(combo: string): void;

        del(hotkeyObj: ng.hotkeys.Hotkey): void;

        get(combo: string): ng.hotkeys.Hotkey;

        toggleCheatSheet(): void;

        purgeHotkeys(): void;
    }

    interface HotkeysProviderChained {
        add(combo: string, description: string, callback: (event: Event, hotkeys: ng.hotkeys.Hotkey) => void): HotkeysProviderChained;

        add(hotkeyObj: ng.hotkeys.Hotkey): HotkeysProviderChained;
    }

    interface Hotkey {
        combo: string;
        description?: string;
        callback: (event: Event, hotkey: ng.hotkeys.Hotkey) => void;
        action?: string;
        allowIn?: Array<string>;
        persistent?: boolean;
    }
}
