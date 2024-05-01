import { AxiosInstance } from 'axios';
import { Group } from './types';

export enum Access {
    User = 'User',
    Admin = 'Admin'
}

export interface GroupHandler {
    updateGroupName: (groupName: string) => Promise<void>;
    deleteGroup: () => Promise<void>;
    inviteUser: (emailAddress: string, access: Access) => Promise<void>;
    removeUser: (emailAddress: string) => Promise<void>;
    updateUserAccess: (emailAddress: string, access: Access) => Promise<void>;
    getData: () => Group;
}

export function createGroupHandler(apiClient: AxiosInstance, data: Group): GroupHandler {
    async function updateGroupName(groupName: string): Promise<void> {
        await apiClient.patch(`/group/${data.groupId}`, { groupName });
        data.groupName = groupName;
    }

    async function deleteGroup(): Promise<void> {
        await apiClient.delete(`/group/${data.groupId}`);
    }

    async function inviteUser(emailAddress: string, access: Access): Promise<void> {
        await apiClient.post(`/group/${data.groupId}/user`, { emailAddress, access });
    }

    async function removeUser(emailAddress: string): Promise<void> {
        await apiClient.delete(`/group/${data.groupId}/user`, { data: { emailAddress } });
    }

    async function updateUserAccess(emailAddress: string, access: Access): Promise<void> {
        await apiClient.patch(`/group/${data.groupId}/user`, { emailAddress, access });
    }

    function getData(): Group {
        return data;
    }

    return {
        updateGroupName,
        deleteGroup,
        inviteUser,
        removeUser,
        updateUserAccess,
        getData,
    };
}
