import { Group } from '../../src';
import { Device } from '../../src';
import { User } from '../../src';

describe('Omlet.SmartCoop.Types.Group', () => {
    test('should create an instance of Group with correct properties', () => {
        const groupId = '1';
        const groupName = 'Group 1';
        const access = 'admin';
        const devices: Device[] = [];
        const admins: User[] = [];
        const users: User[] = [];

        const group: Group = {
            groupId,
            groupName,
            access,
            devices,
            admins,
            users
        };

        expect(group.groupId).toBe(groupId);
        expect(group.groupName).toBe(groupName);
        expect(group.access).toBe(access);
        expect(group.devices).toEqual(devices);
        expect(group.admins).toEqual(admins);
        expect(group.users).toEqual(users);
    });
});
