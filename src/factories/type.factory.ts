import { OmletType } from '../types/omlet.type';
import {Configuration} from "../types/configuration";
import {ConfigurationGeneral} from "../types/configuration.general";
import {ConfigurationConnectivity} from "../types/configuration.connectivity";
import {ConfigurationDoor} from "../types/configuration.door";
import {ConfigurationLight} from "../types/configuration.light";
import {State} from "../types/state";
import {StateGeneral} from "../types/state.general";
import {StateConnectivity} from "../types/state.connectivity";
import {StateDoor} from "../types/state.door";
import {StateLight} from "../types/state.light";
import {Device} from "../types/device";
import {Action} from "../types/action";
import {GroupUser} from "../types/group.user";
import {GroupSubset} from "../types/group.subset";
import {Group} from "../types/group";
import {User} from "../types/user";

export function createOmletType(type: OmletType, data: any): any {
    switch (type) {
        case OmletType.CONFIGURATION:
            return {
                general: createOmletType(OmletType.CONFIGURATION_GENERAL, data.general),
                connectivity: createOmletType(OmletType.CONFIGURATION_CONNECTIVITY, data.connectivity),
                door: createOmletType(OmletType.CONFIGURATION_DOOR, data.door),
                light: createOmletType(OmletType.CONFIGURATION_LIGHT, data.light),
            } as Configuration;
        case OmletType.CONFIGURATION_GENERAL:
            return {
                datetime: data.datetime,
                timezone: data.timezone,
                useDst: data.useDst ?? null,
                updateFrequency: data.updateFrequency,
                language: data.language,
                overnightSleepEnable: data.overnightSleepEnable,
                overnightSleepStart: data.overnightSleepStart,
                overnightSleepEnd: data.overnightSleepEnd,
                pollFreq: data.pollFreq,
                stayAliveTime: data.stayAliveTime,
                statusUpdatePeriod: data.statusUpdatePeriod,
            } as ConfigurationGeneral;
        case OmletType.CONFIGURATION_CONNECTIVITY:
            return {
                wifiState: data.wifiState,
            } as ConfigurationConnectivity;
        case OmletType.CONFIGURATION_DOOR:
            return {
                doorType: data.doorType,
                openMode: data.openMode,
                openDelay: data.openDelay,
                openLightLevel: data.openLightLevel,
                openTime: data.openTime,
                closeMode: data.closeMode,
                closeDelay: data.closeDelay,
                closeLightLevel: data.closeLightLevel,
                closeTime: data.closeTime,
                colour: data.colour,
            } as ConfigurationDoor;
        case OmletType.CONFIGURATION_LIGHT:
            return {
                mode: data.mode,
                minutesBeforeClose: data.minutesBeforeClose,
                maxOnTime: data.maxOnTime,
                equipped: data.equipped,
            } as ConfigurationLight;
        case OmletType.STATE:
            return {
                general: createOmletType(OmletType.STATE_GENERAL, data.general),
                connectivity: createOmletType(OmletType.STATE_CONNECTIVITY, data.connectivity),
                door: createOmletType(OmletType.STATE_DOOR, data.door),
                light: createOmletType(OmletType.STATE_LIGHT, data.light),
            } as State;
        case OmletType.STATE_GENERAL:
            return {
                firmwareVersionCurrent: data.firmwareVersionCurrent,
                firmwareVersionPrevious: data.firmwareVersionPrevious,
                firmwareLastCheck: data.firmwareLastCheck,
                batteryLevel: data.batteryLevel,
                powerSource: data.powerSource,
                uptime: data.uptime,
                displayLine1: data.displayLine1,
                displayLine2: data.displayLine2,
            } as StateGeneral;
        case OmletType.STATE_CONNECTIVITY:
            return {
                ssid: data.ssid,
                wifiStrength: data.wifiStrength,
            } as StateConnectivity;
        case OmletType.STATE_DOOR:
            return {
                state: data.state,
                lastOpenTime: data.lastOpenTime,
                lastCloseTime: data.lastCloseTime,
                fault: data.fault,
                lightLevel: data.lightLevel,
            } as StateDoor;
        case OmletType.STATE_LIGHT:
            return {
                state: data.state,
            } as StateLight;
        case OmletType.DEVICE:
            return {
                deviceId: data.deviceId,
                name: data.name,
                deviceType: data.deviceType,
                state: createOmletType(OmletType.STATE, data.state),
                configuration: createOmletType(OmletType.CONFIGURATION, data.configuration),
                actions: data.actions.map((actionData: any) => createOmletType(OmletType.ACTION, actionData)),
            } as Device;
        case OmletType.ACTION:
            return {
                name: data.actionName,
                description: data.description,
                value: data.actionValue,
                pending: data.actionPending ?? null,
                url: data.url,
            } as Action;
        case OmletType.GROUP_USER:
            return {
                emailAddress: data.emailAddress,
                firstName: data.firstName,
                lastName: data.lastName,
                access: data.access,
            } as GroupUser;
        case OmletType.GROUP_SUBSET:
            return {
                groupId: data.groupId,
                groupName: data.groupName,
                access: data.access,
            } as GroupSubset;
        case OmletType.GROUP:
            return {
                groupId: data.groupId,
                groupName: data.groupName,
                access: data.access ?? null,
                devices: data.devices.map((deviceData: any) => createOmletType(OmletType.DEVICE, deviceData)),
                admins: data.admins.map((adminData: any) => createOmletType(OmletType.GROUP_USER, adminData)),
                users: data.users.map((userData: any) => createOmletType(OmletType.GROUP_USER, userData)),
            } as Group;
        case OmletType.USER:
            return {
                userId: data.userId ?? null,
                firstName: data.firstName,
                lastName: data.lastName,
                emailAddress: data.emailAddress ?? null,
                siteLink: data.siteLink ?? null,
                invites: data.invites.map((inviteData: any) => createOmletType(OmletType.GROUP_SUBSET, inviteData)),
            } as User;
        default:
            throw new Error(`Unknown DTO type: ${type}`);
    }
}

