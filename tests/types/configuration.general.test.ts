import { ConfigurationGeneral } from '../../src';

describe('Omlet.SmartCoop.Types.ConfigurationGeneral', () => {
    test('should create an instance of ConfigurationGeneral with correct properties', () => {
        const datetime = '2024-04-29 12:00:00';
        const timezone = 'UTC';
        const useDst = true;
        const updateFrequency = 60;
        const language = 'en';
        const overnightSleepEnable = true;
        const overnightSleepStart = '22:00';
        const overnightSleepEnd = '6:00';
        const pollFreq = 30;
        const stayAliveTime = 3600;
        const statusUpdatePeriod = 300;

        const generalConfig: ConfigurationGeneral = {
            datetime,
            timezone,
            useDst,
            updateFrequency,
            language,
            overnightSleepEnable,
            overnightSleepStart,
            overnightSleepEnd,
            pollFreq,
            stayAliveTime,
            statusUpdatePeriod
        };

        expect(generalConfig.datetime).toBe(datetime);
        expect(generalConfig.timezone).toBe(timezone);
        expect(generalConfig.useDst).toBe(useDst);
        expect(generalConfig.updateFrequency).toBe(updateFrequency);
        expect(generalConfig.language).toBe(language);
        expect(generalConfig.overnightSleepEnable).toBe(overnightSleepEnable);
        expect(generalConfig.overnightSleepStart).toBe(overnightSleepStart);
        expect(generalConfig.overnightSleepEnd).toBe(overnightSleepEnd);
        expect(generalConfig.pollFreq).toBe(pollFreq);
        expect(generalConfig.stayAliveTime).toBe(stayAliveTime);
        expect(generalConfig.statusUpdatePeriod).toBe(statusUpdatePeriod);
    });
});
