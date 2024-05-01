import {AxiosInstance} from 'axios';
import {createDeviceHandler, DeviceHandler} from './device.handler';
import {createOmletType} from './factories/type.factory';
import {OmletType} from './types';
import {createGroupHandler, GroupHandler} from "./group.handler";
import {createUserHandler, UserHandler} from "./user.handler";
import {createApiClient} from "./clients/api.client";

interface Omlet {
    getDevices: () => Promise<DeviceHandler[]>;
    getDeviceById: (deviceId: string) => Promise<DeviceHandler>;
    getGroups: () => Promise<GroupHandler[]>;
    createGroup: (groupName: string) => Promise<GroupHandler>;
    getGroupById: (groupId: string) => Promise<GroupHandler>;
    getUser: () => Promise<UserHandler>;
}

export function createOmlet(token: string): Omlet {
    const apiClient: AxiosInstance = createApiClient(token);

    async function getDevices(): Promise<DeviceHandler[]> {
        const response = await apiClient.get('/device');

        return response.data.map(
            (data: any) => createDeviceHandler(
                apiClient,
                createOmletType(OmletType.DEVICE, data)
            )
        )
    }

    async function getDeviceById(deviceId: string): Promise<DeviceHandler> {
        const response = await apiClient.get(`/device/${deviceId}`);
        return createDeviceHandler(
            apiClient,
            createOmletType(OmletType.DEVICE, response.data)
        );
    }

    async function getGroups(): Promise<GroupHandler[]> {
        const response = await apiClient.get('/group');
        return response.data.map(
            (data: any) => createGroupHandler(
                apiClient,
                createOmletType(OmletType.GROUP, data)
            )
        )
    }

    async function createGroup(groupName: string): Promise<GroupHandler> {
        const response = await apiClient.post('/group', {groupName});
        return createGroupHandler(
            apiClient,
            createOmletType(OmletType.GROUP, response.data)
        )
    }

    async function getGroupById(groupId: string): Promise<GroupHandler> {
        const response = await apiClient.get(`/group/${groupId}`);
        return createGroupHandler(
            apiClient,
            createOmletType(OmletType.GROUP, response.data)
        )
    }

    async function getUser(): Promise<UserHandler> {
        const response = await apiClient.get('/whoami');
        return createUserHandler(
            apiClient,
            createOmletType(OmletType.USER, response.data)
        )
    }

    return {
        getDevices,
        getDeviceById,
        getGroups,
        createGroup,
        getGroupById,
        getUser
    };
}
