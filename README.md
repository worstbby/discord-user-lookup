## ¿Qué es esto?
Discord User Lookup es una API web simple escrita en NodeJS para obtener información sobre un usuario de la API de Discord. Fue creado con el propósito de usar la API de Discord en una configuración de navegador, lo que no puede hacer debido a Access-Allow-Control-Origin. Esta API utiliza un token de bot para realizar la llamada y devolver los datos en la respuesta.

---

# Uso:

### Base URL:
```
https://discord-user-lookup.vercel.app/api/
```

### Obtener información de usuario
**GET** `/user/<id>`

Ejemplo de uso: 
```
GET: https://discord-user-lookup.vercel.app/api/user/317734264424890368
```
Respuesta:
```json
{
  "id": "924328060738732062",
  "username": "better",
  "avatar": "a_f0ab44a112439bfcd82d578f946dab7b",
  "discriminator": "0001",
  "public_flags": 4194560,
  "banner": "a_c3e4e3fee3b373ae410b3a9e73122e32",
}
```

### Obtener avatar de usuario

**GET**: `/avatar/<id>.<format>`

Ejemplo: 
```
GET: https://discord-user-lookup.vercel.app/api/avatar/924328060738732062.gif
```

Respuesta mi actual pfp:

***Además, se puede agregar el parámetro de consulta `tamaño`, y se agregará a la solicitud a Discord***
```
GET: https://discord-user-lookup.vercel.app/api/avatar/317734264424890368.webp?size=256
```

### Obtener banner de usuario

**GET**: `/banner/<id>`

Respuesta mi actual banner:

```
GET: https://discord-user-lookup.vercel.app/api/banner/317734264424890368
```
