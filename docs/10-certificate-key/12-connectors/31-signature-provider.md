# Signature Provider


# Signing Engine Management


## Create Signing Engine instance
```plantuml
    @startuml
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-client-operations/#tag/v2-Client-Operations/operation/revokeCertificate]]: Create Signing Engine instance
        Core -> Client [[connector-authority-provider-v2/#tag/Certificate-Management/operation/validateRevokeCertificateAttributes]]: List of existence of Signature Providers
        Client -> Core [[connector-authority-provider-v2/#tag/Certificate-Management/operation/validateRevokeCertificateAttributes]]: Selected Signature Provider 
        Core -> Connector: List of Attributes request 
        Connector -> Core: List of Attributes
        Core -> Client: List of Attributes
        Client -> Core [[connector-authority-provider-v2/#tag/Certificate-Management/operation/revokeCertificate]]: Attributes
        Core -> Connector: Create and Store Signing Server instance
        Connector -> Connector: Create and Store Signing Server instance
        Connector -> Core: Store Signing Server reference 
        Core -> Client: Return Signing Server UUI
    @enduml
```



# Signature Porfile Management


## Create Signature Profile

```plantuml
    @startuml
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-client-operations/#tag/v2-Client-Operations/operation/revokeCertificate]]: Create Signature Profile
        Core -> Core [[connector-authority-provider-v2/#tag/Certificate-Management/operation/validateRevokeCertificateAttributes]]: Check existence of Connector
        Core -> Core [[connector-authority-provider-v2/#tag/Certificate-Management/operation/validateRevokeCertificateAttributes]]: Check existence of Signature Profile name 
        Core -> Connector: Validate Attributes 
        Connector --> Core: Result of Attributes validation
        Core -> Connector [[connector-authority-provider-v2/#tag/Certificate-Management/operation/revokeCertificate]]: Sign Data
        Connector -> Connector: Register Signature Profile
        Connector -> Core: 8 Signature Profile details 
        Core -> Core: Store Signature Profile reference
        Core -> Client: Return Signature Profile UUID
    @enduml
```

## Get Signature Profile details

```plantuml
    @startuml
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-client-operations/#tag/v2-Client-Operations/operation/revokeCertificate]]: Get Signature Profile details
        Core -> Connector [[connector-authority-provider-v2/#tag/Certificate-Management/operation/validateRevokeCertificateAttributes]]: Get Signature Profile details
        Connector --> Core: Signature Profile details
        Core -> Client: Return Signature Profile details
    @enduml
```

## Update Signature Profile

```plantuml
    @startuml
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-client-operations/#tag/v2-Client-Operations/operation/revokeCertificate]]: Update Signature Profile
        Core -> Connector: Validate Attributes 
        Connector -> Core: Result of Attributes validation
        Core -> Connector [[connector-authority-provider-v2/#tag/Certificate-Management/operation/revokeCertificate]]: Update Signature Profile
        Connector -> Connector: Update Signature Profile Signature Profile
        Connector -> Core: Signature Profile details
        Core -> Core: Update Signature Profile reference
        Core -> Client: Return Signature Profile details
    @enduml
```
## Remove Signature Profile

```plantuml
    @startuml
    autonumber
    skinparam topurl https://docs.czertainly.com/api/
        Client -> Core [[core-client-operations/#tag/v2-Client-Operations/operation/revokeCertificate]]: Remove Signature Profile
        Core -> Core: Check for dependent objects
        Core -> Connector [[connector-authority-provider-v2/#tag/Certificate-Management/operation/validateRevokeCertificateAttributes]]: Remove Signature Profile
        Connector -> Connector: Remove Signature Profile reference
        Connector -> Core: Signature Profile removed
        Core --> Client: Signature Profile removed
    @enduml
```



# Signature Management

## Sign Data

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

## Table of `CORE` API


| Method | 	Name | Description |
| -------- | --------- | ---------------|
| `GET`| `listSignatureProfiles` | List all available (created) Signature Profiles, find in `core` database 
|`POST` |`createSignatureProfile` | Add new Signature Profile (only reference without Signature profile attributes) to `core` database



## Table of `Signature Provider` API


### Signing Engine Management


| Method | 	Name | Description |
| -------- | --------- | ---------------|
| `GET` | `listSigningServer` | list all created Signing Servers Instances (uuid, name, Signature Provider, attributes) from `connector` database
| `POST` |`createSigningServer` | add new Signing Server (name, Signature Provider, attributes) to `connector` database
| `GET` |`getSigningServerInstance` | get Signing Server Instance details (uuid, name, attributes) from `connector` database
| `POST` |`deleteSigningServerInstance` | delete Signing Server Instance (uuid, name, attributes) from `connector` database
| `POST` |`updateSigningServerInstance` | update Signing Server Instance (uuid, name, attributes) from `connector` database


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
|`GET` |`getSignatureAttributes` | return signature attributes specific for each connector (Czertainly Signing, SignServer, SEFIRA)


