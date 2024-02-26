# Signature Provider

# Overview
Signature Provider provides a framework which allows a user to sign uploaded data and verify signed data.
# How it works
To sign data, user must first create two entities - `Signing Engine` and `SignatureProfile`.
`Signing Engine` handles connection to signing server, ... 
`Signature Profile` uses `Signing Engine` and contains all logic commnon for a certain signing use case. For example, a Signature Profile 



# Provider objects

# Processes

### Signing Engine Management


| Method | 	Name | Description |
| -------- | --------- | ---------------|
| `GET` | `listSigningEngineInstances` | list all created Signing Engine Instances (uuid, name, Signature Provider, attributes) from `connector` database
| `POST` |`createSigningEngineInstance` | add new Signing Engine (name, Signature Provider, attributes) to `connector` database
| `GET` |`getSigningEngineInstance` | get Signing Engine Instance details (uuid, name, attributes) from `connector` database
| `DELETE` |`deleteSigninEngineInstance` | delete Signing Engine Instance (uuid, name, attributes) from `connector` database
| `PUT` |`updateSigningEngineInstance` | update Signing Engine Instance (uuid, name, attributes) from `connector` database



### Create Signing Engine instance
```plantuml
    @startuml
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-client-operations/#tag/v2-Client-Operations/operation/revokeCertificate]]: Create Signing Engine instance
        Core -> Client [[connector-authority-provider-v2/#tag/Certificate-Management/operation/validateRevokeCertificateAttributes]]: List of existence Signature Providers
        Client -> Core [[connector-authority-provider-v2/#tag/Certificate-Management/operation/validateRevokeCertificateAttributes]]: Selected Signature Provider 
        Core -> Connector: List of Attributes request 
        Connector -> Core: List of Attributes
        Core -> Client: List of Attributes
        Client -> Core [[connector-authority-provider-v2/#tag/Certificate-Management/operation/revokeCertificate]]: Attributes
        Core -> Connector: Create and Store a Signing Engine instance
        Connector -> Connector: Create and Store a Signing Engine instance
        Connector -> Core: Store Signing Engine reference 
        Core -> Client: Return Signing Engine UUID
    @enduml
```

### Get Signing Engine instance details
```plantuml
    @startuml
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-client-operations/#tag/v2-Client-Operations/operation/revokeCertificate]]: Get a Signing Engine instance details (instance UUID)
        Core -> Connector: Get a Signing Engine instance details 
        Connector -> Core: Return Signing Engine instance details
        Core -> Client: Return Signing Engine instance details
    @enduml
```


### Update Signing Engine instance
```plantuml
    @startuml
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-client-operations/#tag/v2-Client-Operations/operation/revokeCertificate]]: Update Signing Engine instance
        Core -> Connector: Validate Attributes 
        Connector -> Core: Result of Attribute validation
        Core -> Connector: Update Signing Engine instance
        
        Connector -> Connector: Update Signing Engine instance
        Connector -> Core: Update Signing Engine reference in the database
        Core -> Client: Return Signing Engine UUID
    @enduml
```



### Delete Signing Engine instance
```plantuml
    @startuml
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-client-operations/#tag/v2-Client-Operations/operation/revokeCertificate]]: Delete Signing Engine instance
        Core -> Core[[connector-authority-provider-v2/#tag/Certificate-Management/operation/validateRevokeCertificateAttributes]]: Check dependencies 
        Core -> Connector: Delete Signing Engine instance
        Connector -> Core: Return Signing Engine deletion status
        Core -> Core: Delete Signing Engine instance reference 
        Core -> Client: Return deletion status
    @enduml
```


# Signature Profile Management

| Method | 	Name | Description |
| -------- | --------- | ---------------|
| `GET` | `listSignatureProfiles` | list all created Signature Profiles (uuid, name, format, attributes) from `connector` database
| `POST` |`createSignatureProfile` | add new Signature Profile (name, format, attributes) to `connector` database
| `GET` |`getSignatureProfileDetails` | get Signature Profile (uuid, name, format, attributes) from `connector` database
| `PUT` | `updateSignatureProfile` | update Signature Profile (name, format, attributes) in `connector` database
| `DELETE` |`removeSignatureProfile` | remove Signature Profile Instance from `connector` database
| `GET` |`listSignatureProfileAttributes` | list Signature Profile Attributes (key restrictions, workers, ...)
| `POST` |`validateSignatureProfileAttributes` |....
| `GET` |`connectToSigningEngine` |  connect to `Signing Engine` address???


### Create Signature Profile

```plantuml
    @startuml
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-client-operations/#tag/v2-Client-Operations/operation/revokeCertificate]]: Create Signature Profile
        Core -> Core [[connector-authority-provider-v2/#tag/Certificate-Management/operation/validateRevokeCertificateAttributes]]: Check existence of Signature Profile name (duplication)
        Core -> Client: List of Signing Engines Instances
        Client -> Core: Selected Signing Engine Instance
        Core -> Connector: Get Attributes 
        Connector --> Core: List of Attributes
        Core -> Client: List of Attributes
        Client -> Core: Attributes
        Core -> Connector: Validate Attributes 
        Connector --> Core: Result of Attributes validation
        Core -> Core: Store Signature Profile
        Core -> Client: Return Signature Profile UUID
    @enduml
```

### Get Signature Profile details

```plantuml
    @startuml
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-client-operations/#tag/v2-Client-Operations/operation/revokeCertificate]]: Get Signature Profile details
        Core -> Client: Return Signature Profile details
    @enduml
```

### Update Signature Profile

```plantuml
    @startuml
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-client-operations/#tag/v2-Client-Operations/operation/revokeCertificate]]: Update Signature Profile (Signature Profile UUID)
        Core -> Connector: Validate Attributes 
        Connector -> Core: Result of Attributes validation
        Core -> Core: Update Signature Profile
        Core -> Client: Return Signature Profile UUID
    @enduml
```
### Remove Signature Profile

```plantuml
    @startuml
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-client-operations/#tag/v2-Client-Operations/operation/revokeCertificate]]: Remove Signature Profile
        Core -> Core: Check for dependent objects
        Core -> Core:  Remove Signature Profile from Database
        Core --> Client: Signature Profile removed
    @enduml
```



# Signature Management

### Sign Data

```plantuml
    @startuml
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-client-operations/#tag/v2-Client-Operations/operation/revokeCertificate]]: Data to Sign
        Core -> Connector [[connector-authority-provider-v2/#tag/Certificate-Management/operation/validateRevokeCertificateAttributes]]: Validate format of Data to Sign
        Connector -> Core: Result of Attributes validation
        Core -> Connector [[connector-authority-provider-v2/#tag/Certificate-Management/operation/revokeCertificate]]: Sign Data
        Connector -> Core: Return Signed Data 
        Core -> Core: Store Signed Data, if necessary
        Core -> Client: Return Signed Data
    @enduml
```

### Validate Signed Data

```plantuml
    @startuml
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-client-operations/#tag/v2-Client-Operations/operation/revokeCertificate]]: Signed Data to Validate
        Core -> Connector [[connector-authority-provider-v2/#tag/Certificate-Management/operation/validateRevokeCertificateAttributes]]: Validate format of Data to Sign
        Connector -> Core: Result of Attributes validation
        Core -> Connector [[connector-authority-provider-v2/#tag/Certificate-Management/operation/revokeCertificate]]: Validate Data
        Connector -> Core: Return Validation Result
        Core -> Client: Return Validation Result
    @enduml
```


## Table of `CORE` API


| Method | 	Name | Description |
| -------- | --------- | ---------------|
| `GET`| `listSignatureProfiles` | List all available (created) Signature Profiles, find in `core` database 
|`POST` |`createSignatureProfile` | Add new Signature Profile (only reference without Signature profile attributes) to `core` database



## Table of `Signature Provider` API


### Signing Engine Management


| Method | 	Name | Description |
| -------- | --------- | ---------------|
| `GET` | `listSigningEngineInstances` | list all created Signing Engine Instances (uuid, name, Signature Provider, attributes) from `connector` database
| `POST` |`createSigningEngineInstance` | add new Signing Engine (name, Signature Provider, attributes) to `connector` database
| `GET` |`getSigningEngineInstance` | get Signing Engine Instance details (uuid, name, attributes) from `connector` database
| `POST` |`deleteSigninEngineInstance` | delete Signing Engine Instance (uuid, name, attributes) from `connector` database
| `POST` |`updateSigningEngineInstance` | update Signing Engine Instance (uuid, name, attributes) from `connector` database

### Signature Profile Management

| Method | 	Name | Description |
| -------- | --------- | ---------------|
| `GET` | `listSignatureProfiles` | list all created Signature Profiles (uuid, name, format, attributes) from `connector` database
| `POST` |`createSignatureProfile` | add new Signature Profile (name, format, attributes) to `connector` database
| `GET` |`getSignatureProfileInstance` | get Signature Profile (uuid, name, format, attributes) from `connector` database
| `POST` | `updateSignatureProfile` | update Signature Profile (name, format, attributes) in `connector` database
| `DELETE` |`removeSignatureProfileInstance` | remove Signature Profile Instance from `connector` database
| `GET` |`listSignatureProfileAttributes` | list Signature Profile Attributes (key restrictions, workers, ...)
| `POST` |`validateAttributes` |
| `GET` |`connectToSigningServer` |  connect to `Signing Server` address???


### Signature Management

| Method | 	Name | Description |
| -------- | --------- | ---------------|
|`POST` |`signData` | return signed data
|`GET` |`getSignatureAttributes` | return signature attributes specific for each connector


