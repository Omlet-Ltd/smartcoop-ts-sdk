export interface ConfigurationGeneral {
    datetime: string;
    timezone: string;
    useDst?: boolean | null;
    updateFrequency: number;
    language: string;
    overnightSleepEnable: boolean;
    overnightSleepStart: string;
    overnightSleepEnd: string;
    pollFreq: number;
    stayAliveTime: number;
    statusUpdatePeriod: number;
}