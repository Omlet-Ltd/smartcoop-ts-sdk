import { ConfigurationGeneral } from './configuration.general';
import { ConfigurationConnectivity } from './configuration.connectivity';
import { ConfigurationDoor } from './configuration.door';
import { ConfigurationLight } from './configuration.light';
import { ConfigurationFeeder } from './configuration.feeder';
import { ConfigurationFan } from './configuration.fan';

export interface Configuration {
    general: ConfigurationGeneral;
    connectivity: ConfigurationConnectivity;
    door?: ConfigurationDoor;
    light?: ConfigurationLight;
    feeder?: ConfigurationFeeder;
    fan?: ConfigurationFan;
}
