import { ConfigurationLight } from '../../src';

describe('Omlet.SmartCoop.Types.ConfigurationLight', () => {
    test('should create an instance of ConfigurationLight with correct properties', () => {
        const mode = 'Test Mode';
        const minutesBeforeClose = 10;
        const maxOnTime = 60;
        const equipped = 1;

        const lightConfig: ConfigurationLight = {
            mode,
            minutesBeforeClose,
            maxOnTime,
            equipped
        };

        expect(lightConfig.mode).toBe(mode);
        expect(lightConfig.minutesBeforeClose).toBe(minutesBeforeClose);
        expect(lightConfig.maxOnTime).toBe(maxOnTime);
        expect(lightConfig.equipped).toBe(equipped);
    });
});
