# Omlet Type Script SDK
This SDK is designed to facilitate seamless authentication with Omlet and provide interaction with
devices. With our SDK, developers can easily retrieve device information, and execute actions
tailored to their devices and groups.

## Introduction
- [Getting Started](#getting-started)
- [Authentication](#authentication)
- [Omlet](#omlet)
- [Device Handler](#device-handler)
- [Group Handler](#group-handler)
- [User Handler](#user-handler)
- [Types](#types)

## Getting Started

### Overview
To use this SDK the user will already be registered with omlet as you will use the same email and password credentials to authenticate.
We will go through the steps for including this SDK in your application and how to interact with your devices.

### Installation
To install the SmartCoop SDK, ensure you have npm installed on your system. Then, create or navigate to your project
directory and execute the following command:

```bash
npm install smartcoop-ts-sdk
```

## Authentication

### Create API Key

To generate an API key you'll need to login to the developer console with the email and password that use for the App. 
Once logged in navigate to "API Keys" and click "Generate Key". Take note of this key.

## Omlet

### Overview
The Omlet object offers the ability to retrieve all of your devices, get a single device, create a
group handler and create a user handler.

### Creating an Instance
Use the apiKey you've created to start omlet.
```ts
import { createOmlet } from 'smartcoop-ts-sdk';

const omlet = createOmlet('CfYA8___key_from_above');
```
### Retrieving Devices
```ts
const devices: DeviceHandler[] = await omlet.getDevices();

const device: DeviceHandler[] = await omlet.getDeviceById('1234567');
```
These functions will return a [Device Handler](#device-handler) that will allow you to interact with individual devices.

### Create a Group
```ts
const group = omlet.createGroup('New Group Name');
```

### Retrieving Groups
```ts
const groups: GroupHandler[] = await omlet.getGroups();

const group: GroupHandler[] = await omlet.getGroupById('123456');
```

### Retrieving the User
```ts
const userHandler: UserHandler = await omlet.getUser();
```

## Device Handler
The Device Handler offers a way to interact with a specific device and also see the [Device data](#device).

### Device Data
The Device Handler will hold a [data](#device) object with the latest [state](#state) and [configuration](#configuration) of the device. You can
access each of the attributes through getter methods.

### Device Actions
Device [actions](#action) are used to interact with the device. A list of available actions is present on the device data. We can
perform actions on the device by retrieving one from the list:

```ts
const device : DeviceHandler = omlet.getDeviceById('123456');
const actions = device.getActions();
```

The [action](#action) object contains a description of the action. To perform an action,
filter out the action you want to perform, such as opening the door and pass it to the `action` function

```ts
const openAction: Action|undefined = device.getActions().find((action: Action) => action.name === 'open');
if (openAction) {
    await device.action(openAction)
}
```

### Updating Device Configuration
To update the devices configuration, we will need to interact with the [Configuration](#configuration) object.

```ts
const deviceData: Device = device.getData();
const configuration: Configuration = deviceData.configuration;
const newConfiguration = {
    ...configuration,
    door: {
        ...configuration.door,
        openTime: "07:30"
    }
} as Configuration;

await device.updateConfiguration(newConfiguration);
```

## Group Handler
The Group Handler offers a way to interact with a specific group and also see the group data.

### Group Data
The Group Handler will hold a [data](#group-data) object with group information, users, admins and devices belonging to the group

## Update Group Name
We can update a single groups name.

```ts
await group.updateGroupName('New Name');
```

## Delete Group
We can remove the group associated with the handler.

```ts
await group.deleteGroup();
```

## Invite User
We can invite users to the current group by email and specify their access.

```ts
// invite a user with User access
await group.inviteUser("user@example.com", 'User');

// invite a user with Admin access
await group.inviteUser("user@example.com", 'Admin');
```

## Remove User
We can remove users from the group by their email address.

```ts
await group.removeUser("user@example.com");
```

## Update User Access
We can update the users access level by their email address.

```ts
await group.updateUserAccess("user@example.com", 'Admin');
```

## User Handler
The User Handler offers a way to interact with features for the authenticated user.

### User Data
The User Handler will hold a [data](#user) object with users information and invites.

### Accept Invite
We can accept an invite by retrieving one from the data objects invites array"

```ts
import {GroupSubset} from "./group.subset";

const data: User = user.getData();

// invites is an array containing GroupSubset objects. Pass one of these
// to acceptInvite
const invites: GroupSubset[] = data.invites;

// pass one of these to acceptInvite
await user.acceptInvite(invite);
```

### Reject Invite
We can reject an invite by retrieving one from the data objects invites array:

```ts
await user.rejectInvite(invite);
```

## Types
We have the following data types that we use response and request from the Omlet API

### Action
The `Action` object provides the following details

```ts
interface Action {
    name: string;
    description: string;
    value: string;
    pending?: string | null;
    url: string;
}
```
### Configuration
The `Configuration` object will give you an overview of the current configuration of the device after retrieval

```ts
interface Configuration {
    general: ConfigurationGeneral;
    connectivity: ConfigurationConnectivity;
    door?: ConfigurationDoor | null;
    light?: ConfigurationLight | null;
}
```

### Configuration Connectivity
The `Configuration Connectivity` object provides the following details

```ts
interface ConfigurationConnectivity {
    wifiState: string;
}

```
### Configuration Door
The `Configuration Door` object provides the following details

```ts
interface ConfigurationDoor {
    doorType: string;
    openMode: string;
    openDelay: number;
    openLightLevel: number;
    openTime: string;
    closeMode: string;
    closeDelay: number;
    closeLightLevel: number;
    closeTime: string;
    colour: string;
}

```
### Configuration General
The `Configuration General` object provides the following details

```ts
interface ConfigurationGeneral {
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
```

### Configuration Light
The `Configuration Light` object provides the following details

```ts
interface ConfigurationLight {
    mode: string;
    minutesBeforeClose: number;
    maxOnTime: number;
    equipped: number;
}
```

### Device
The `Device` object represents an individual SmartCoop device.

```ts
interface Device {
    deviceId: string;
    name: string;
    deviceType: string;
    state: State;
    configuration: Configuration;
    actions: Action[];
}
```

### Group
The `Group` object represents a group the user belongs to.

```ts
interface Group {
    groupId: string;
    groupName: string;
    access?: string | null;
    devices: Device[];
    admins: User[];
    users: User[];
}
```

### Group Subset
```ts
interface GroupSubset {
    groupId: string;
    groupName: string;
    access: string;
}
```
### Group User
```ts
interface GroupUser {
    emailAddress: string;
    firstName: string;
    lastName: string;
    access: string;
}
```
### State
The `State` object will give you an overview of the current state of the device after retrieval

```ts
interface State {
    general: StateGeneral;
    connectivity: StateConnectivity;
    door?: StateDoor;
    light?: StateLight;
}
```
### State Connectivity
The `State Connectivity` object provides the following details

```ts
interface StateConnectivity {
    ssid: string;
    wifiStrength: string;
}
```

### State Door
The `State Door` object provides the following details

```ts
interface StateDoor {
    state: string;
    lastOpenTime: string;
    lastCloseTime: string;
    fault: string;
    lightLevel: number;
}
```

### State General
The `State General` object provides the following details

```ts
interface StateGeneral {
    firmwareVersionCurrent: string;
    firmwareVersionPrevious: string;
    firmwareLastCheck: string;
    batteryLevel: number;
    powerSource: string;
    uptime: number;
    displayLine1: string;
    displayLine2: string;
}
```

### State Light
The `State Light` object provides the following details

```ts
interface StateLight {
    state: string;
}
```

### User
The `User` object represents the authenticated user.

```ts
interface User {
    userId?: string;
    firstName: string;
    lastName: string;
    emailAddress?: string | null;
    siteLink?: string | null;
    invites?: GroupSubset[] | null;
}
```