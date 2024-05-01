import {AxiosInstance} from 'axios';
import {Action} from './types';
import {Configuration} from './types';
import {Device} from './types';
import {createOmletType} from './factories/type.factory';
import {OmletType} from './types'

export interface DeviceHandler {
    action: (action: Action) => Promise<void>;
    getActions: () => Action[];
    getData: () => Device;
    refreshData: () => Promise<Device>;
    updateConfiguration: (configuration: Configuration) => Promise<void>;
}

export function createDeviceHandler(apiClient: AxiosInstance, data: Device): DeviceHandler {
    async function action(action: Action): Promise<void> {
        await apiClient.post(action.url);
    }

    function getActions(): Action[] {
        return data.actions;
    }

    function getData(): Device {
        return data;
    }

    async function refreshData(): Promise<Device> {
        const response = await apiClient.get(`/device/${data.deviceId}`);
        const deviceData: Device = createOmletType(OmletType.DEVICE, response.data);
        data = deviceData;
        return deviceData;
    }

    async function updateConfiguration(configuration: Configuration): Promise<void> {
        await apiClient.patch(`/device/${data.deviceId}/configuration`, configuration);
        data.configuration = configuration;
    }

    return {
        action,
        getActions,
        getData,
        refreshData,
        updateConfiguration,
    };
}