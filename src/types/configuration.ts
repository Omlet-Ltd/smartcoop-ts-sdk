import { ConfigurationGeneral } from './configuration.general';
import { ConfigurationConnectivity } from './configuration.connectivity';
import { ConfigurationDoor } from './configuration.door';
import { ConfigurationLight } from './configuration.light';

export interface Configuration {
    general: ConfigurationGeneral;
    connectivity: ConfigurationConnectivity;
    door?: ConfigurationDoor | null;
    light?: ConfigurationLight | null;
}
