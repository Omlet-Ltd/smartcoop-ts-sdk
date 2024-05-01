import { StateConnectivity } from '../../src';

describe('Omlet.SmartCoop.Types.StateConnectivity', () => {
    test('should create an instance of StateConnectivity with correct properties', () => {
        const ssid = 'MyWiFi';
        const wifiStrength = 'Good';

        const stateConnectivity: StateConnectivity = {
            ssid,
            wifiStrength
        };

        expect(stateConnectivity.ssid).toBe(ssid);
        expect(stateConnectivity.wifiStrength).toBe(wifiStrength);
    });
});