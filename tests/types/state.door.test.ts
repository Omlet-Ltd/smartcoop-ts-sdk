import { StateDoor } from '../../src';

describe('Omlet.SmartCoop.Types.StateDoor', () => {
    test('should create an instance of StateDoor with correct properties', () => {
        const state = 'closed';
        const lastOpenTime = '2024-04-28T08:00:00Z';
        const lastCloseTime = '2024-04-28T18:00:00Z';
        const fault = 'none';
        const lightLevel = 80;

        const stateDoor: StateDoor = {
            state,
            lastOpenTime,
            lastCloseTime,
            fault,
            lightLevel
        };

        expect(stateDoor.state).toBe(state);
        expect(stateDoor.lastOpenTime).toBe(lastOpenTime);
        expect(stateDoor.lastCloseTime).toBe(lastCloseTime);
        expect(stateDoor.fault).toBe(fault);
        expect(stateDoor.lightLevel).toBe(lightLevel);
    });
});