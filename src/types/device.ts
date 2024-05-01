import { Action } from './action';
import { Configuration } from './configuration';
import { State } from './state';

export interface Device {
    deviceId: string;
    name: string;
    deviceType: string;
    state: State;
    configuration: Configuration;
    actions: Action[];
}