import {Configuration} from "../../src";
import {ConfigurationGeneral} from "../../src";
import {ConfigurationConnectivity} from "../../src";
import {ConfigurationDoor} from "../../src";
import {ConfigurationLight} from "../../src";

describe('Omlet.SmartCoop.Types.Configuration', () => {
    test('should create an instance of Configuration with correct properties', () => {
        const general: ConfigurationGeneral = {
            datetime: '2024-04-29 12:00:00',
            timezone: 'UTC',
            useDst: true,
            updateFrequency: 60,
            language: 'en',
            overnightSleepEnable: true,
            overnightSleepStart: '22:00',
            overnightSleepEnd: '6:00',
            pollFreq: 30,
            stayAliveTime: 3600,
            statusUpdatePeriod: 300
        };

        const connectivity: ConfigurationConnectivity = {
            wifiState: 'connected'
        };

        const door: ConfigurationDoor = {
            doorType: 'Test Door Type',
            openMode: 'Test Open Mode',
            openDelay: 10,
            openLightLevel: 50,
            openTime: '10:00 AM',
            closeMode: 'Test Close Mode',
            closeDelay: 20,
            closeLightLevel: 70,
            closeTime: '6:00 PM',
            colour: 'Test Colour'
        };

        const light: ConfigurationLight = {
            mode: 'Test Mode',
            minutesBeforeClose: 10,
            maxOnTime: 60,
            equipped: 1
        };

        const config: Configuration = {
            general,
            connectivity,
            door,
            light
        };

        expect(config.general).toEqual(general);
        expect(config.connectivity).toEqual(connectivity);
        expect(config.door).toEqual(door);
        expect(config.light).toEqual(light);
    });
});
