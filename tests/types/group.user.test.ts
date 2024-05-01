import { GroupUser } from '../../src';

describe('Omlet.SmartCoop.Types.GroupUser', () => {
    test('should create an instance of GroupUser with correct properties', () => {
        const emailAddress = 'john@example.com';
        const firstName = 'John';
        const lastName = 'Doe';
        const access = 'READ_WRITE';

        const groupUser: GroupUser = {
            emailAddress,
            firstName,
            lastName,
            access
        };

        expect(groupUser.emailAddress).toBe(emailAddress);
        expect(groupUser.firstName).toBe(firstName);
        expect(groupUser.lastName).toBe(lastName);
        expect(groupUser.access).toBe(access);
    });
});