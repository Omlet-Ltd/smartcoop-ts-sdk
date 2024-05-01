import { User } from '../../src';
import { GroupSubset } from '../../src';

describe('Omlet.SmartCoop.Types.User', () => {
    test('should create an instance of User with correct properties', () => {
        const userId = '1';
        const firstName = 'John';
        const lastName = 'Doe';
        const emailAddress = 'john@example.com';
        const siteLink = 'http://example.com';
        const invites: GroupSubset[] = [];

        const user: User = {
            userId,
            firstName,
            lastName,
            emailAddress,
            siteLink,
            invites
        };

        expect(user.userId).toBe(userId);
        expect(user.firstName).toBe(firstName);
        expect(user.lastName).toBe(lastName);
        expect(user.emailAddress).toBe(emailAddress);
        expect(user.siteLink).toBe(siteLink);
        expect(user.invites).toEqual(invites);
    });
});
