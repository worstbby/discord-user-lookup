# Discord User Lookup

## What is this?
Discord User Lookup is a simple web API written in NodeJS for getting info about a user from the Discord API. It was created for the purpose of using the Discord API in a browser setting, which you can't do beacuse of Access-Allow-Control-Origin. This API uses a Bot token to make the call, and return the data in the response.

---

# Usage:

### Base URL:
```
https://dislookup.am2i9.ml/api/
```

## Endpoints:


### Get User
**GET** `/user/<id>`

Example usage: 
```
GET: https://dislookup.am2i9.ml/api/user/317734264424890368
```
Response:
```json
{
    "id":"317734264424890368",
    "username":"AM2i9",
    "avatar":"e7e1676122ad03ece8db03be01ec042a",
    "discriminator":"0000",
    "public_flags":128}
```

### Get User Avatar
**GET** `/avatar/<id>.<format>`

Example usage: 
```
GET: https://dislookup.am2i9.ml/api/avatar/317734264424890368.webp
```

Response: My current pfp

***Additionally, the `size` query parameter can be added, and it will be added to the request to Discord***
```
GET: https://dislookup.am2i9.ml/api/avatar/317734264424890368.webp?size=256
```