export interface Action {
    name: string;
    description: string;
    value: string;
    pending?: string | null;
    url: string;
}
