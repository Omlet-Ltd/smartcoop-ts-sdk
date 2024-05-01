import { Action } from '../../src';

describe('Action', () => {
    test('should create an instance of Action with correct properties', () => {
        const name = 'Test Action';
        const description = 'Test Action Description';
        const value = 'Test Value';
        const pending = 'Pending';
        const url = 'http://example.com';

        const action: Action = {
            name: name,
            description: description,
            value: value,
            pending: pending,
            url: url
        };

        expect(action.name).toBe(name);
        expect(action.description).toBe(description);
        expect(action.value).toBe(value);
        expect(action.pending).toBe(pending);
        expect(action.url).toBe(url);
    });
});
