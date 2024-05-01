import { ConfigurationDoor } from '../../src';

describe('Omlet.SmartCoop.Types.ConfigurationDoor', () => {
    test('should create an instance of ConfigurationDoor with correct properties', () => {
        const doorType = 'Test Door Type';
        const openMode = 'Test Open Mode';
        const openDelay = 10;
        const openLightLevel = 50;
        const openTime = '10:00 AM';
        const closeMode = 'Test Close Mode';
        const closeDelay = 20;
        const closeLightLevel = 70;
        const closeTime = '6:00 PM';
        const colour = 'Test Colour';

        const doorConfig: ConfigurationDoor = {
            doorType,
            openMode,
            openDelay,
            openLightLevel,
            openTime,
            closeMode,
            closeDelay,
            closeLightLevel,
            closeTime,
            colour
        };

        expect(doorConfig.doorType).toBe(doorType);
        expect(doorConfig.openMode).toBe(openMode);
        expect(doorConfig.openDelay).toBe(openDelay);
        expect(doorConfig.openLightLevel).toBe(openLightLevel);
        expect(doorConfig.openTime).toBe(openTime);
        expect(doorConfig.closeMode).toBe(closeMode);
        expect(doorConfig.closeDelay).toBe(closeDelay);
        expect(doorConfig.closeLightLevel).toBe(closeLightLevel);
        expect(doorConfig.closeTime).toBe(closeTime);
        expect(doorConfig.colour).toBe(colour);
    });
});
