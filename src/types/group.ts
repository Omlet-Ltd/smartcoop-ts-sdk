import { Device } from './device';
import { User } from './user';

export interface Group {
    groupId: string;
    groupName: string;
    access?: string | null;
    devices: Device[];
    admins: User[];
    users: User[];
}