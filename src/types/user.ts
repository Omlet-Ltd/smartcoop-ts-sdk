import { GroupSubset } from './group.subset';

export interface User {
    userId?: string;
    firstName: string;
    lastName: string;
    emailAddress?: string | null;
    siteLink?: string | null;
    invites?: GroupSubset[] | null;
}