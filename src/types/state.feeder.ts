export interface StateFeeder {
    state: string;
    lastOpenTime: string;
    lastCloseTime: string;
    fault: string;
    lightLevel: number;
    feedLevel: number;
    mode: string;
}
