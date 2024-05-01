import { AxiosInstance } from 'axios';
import { User } from './types';
import { GroupSubset } from './types';

export interface UserHandler {
    getData: () => User;
    acceptInvite: (groupSubset: GroupSubset) => Promise<void>;
    rejectInvite: (groupSubset: GroupSubset) => Promise<void>;
}

export function createUserHandler(apiClient: AxiosInstance, data: User): UserHandler {
    async function acceptInvite(groupSubset: GroupSubset): Promise<void> {
        await apiClient.post(`/invite/${groupSubset.groupId}`, {});
    }

    async function rejectInvite(groupSubset: GroupSubset): Promise<void> {
        await apiClient.delete(`/invite/${groupSubset.groupId}`,  {});
    }

    function getData(): User {
        return data;
    }

    return {
        getData,
        acceptInvite,
        rejectInvite
    };
}
