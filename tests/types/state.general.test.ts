import { StateGeneral } from '../../src';

describe('Omlet.SmartCoop.Types.StateGeneral', () => {
    test('should create an instance of StateGeneral with correct properties', () => {
        const firmwareVersionCurrent = '1.0.0';
        const firmwareVersionPrevious = '0.9.9';
        const firmwareLastCheck = '2024-04-29T12:00:00Z';
        const batteryLevel = 80;
        const powerSource = 'AC';
        const uptime = 3600;
        const displayLine1 = 'Line 1';
        const displayLine2 = 'Line 2';

        const stateGeneral: StateGeneral = {
            firmwareVersionCurrent,
            firmwareVersionPrevious,
            firmwareLastCheck,
            batteryLevel,
            powerSource,
            uptime,
            displayLine1,
            displayLine2
        };

        expect(stateGeneral.firmwareVersionCurrent).toBe(firmwareVersionCurrent);
        expect(stateGeneral.firmwareVersionPrevious).toBe(firmwareVersionPrevious);
        expect(stateGeneral.firmwareLastCheck).toBe(firmwareLastCheck);
        expect(stateGeneral.batteryLevel).toBe(batteryLevel);
        expect(stateGeneral.powerSource).toBe(powerSource);
        expect(stateGeneral.uptime).toBe(uptime);
        expect(stateGeneral.displayLine1).toBe(displayLine1);
        expect(stateGeneral.displayLine2).toBe(displayLine2);
    });
});