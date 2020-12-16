import { BrowserTestCase } from "./browser_test_case";
import { RemoteChannel } from "./remote_channel";
import { Element } from "@theintern/leadfoot";
declare type EventLog = [string, any];
export declare class TurboTestCase extends BrowserTestCase {
    eventLogChannel: RemoteChannel<EventLog>;
    lastBody?: Element;
    beforeTest(): Promise<void>;
    get nextWindowHandle(): Promise<string>;
    nextEventNamed(eventName: string): Promise<any>;
    get nextBeat(): Promise<void>;
    get nextBody(): Promise<Element>;
    get changedBody(): Promise<Element | undefined>;
    get visitAction(): Promise<string>;
    drainEventLog(): Promise<void>;
}
export {};
