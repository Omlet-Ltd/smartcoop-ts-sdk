import { ConfigurationConnectivity } from '../../src';

describe('Omlet.SmartCoop.Types.ConfigurationConnectivity', () => {
    test('should create an instance of ConfigurationConnectivity with correct properties', () => {
        const wifiState = 'connected';

        const connectivity: ConfigurationConnectivity = {
            wifiState
        };

        expect(connectivity.wifiState).toBe(wifiState);
    });
});
