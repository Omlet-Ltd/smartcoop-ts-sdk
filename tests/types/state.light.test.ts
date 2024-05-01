import { StateLight } from '../../src';

describe('Omlet.SmartCoop.Types.StateLight', () => {
    test('should create an instance of StateLight with correct state', () => {
        const state = 'on';

        const stateLight: StateLight = {
            state
        };

        expect(stateLight.state).toBe(state);
    });
});
