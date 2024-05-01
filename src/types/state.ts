import {StateGeneral} from './state.general';
import {StateConnectivity} from './state.connectivity';
import {StateDoor} from './state.door';
import {StateLight} from './state.light';

export interface State {
    general: StateGeneral;
    connectivity: StateConnectivity;
    door?: StateDoor;
    light?: StateLight;
}