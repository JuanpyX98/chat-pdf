---
title: Mensajes
sidebar_position: 3
---

# Mensajes

A continuacion explicare la estructura y orden de envio de mensajes. Para iniciar una conversacion, es necesario primeramente enviar una plantilla.

## Plantillas

En ella, se podran insertar difrenets tipos de contenidos, como texto, documento, imagen, video, botones, etc.

Como se mensionó anteriormente, se debe enviar una plantilla para iniciar una conversación, si el cliente contesta, se podrán enviar mensajes personalizados sin utilizar necesariamente una plantilla.

## Para crear una plantilla

Para crear una plantilla, dirigase [aqui](https://business.facebook.com/wa/manage/message-templates/?business_id=292363679993732&waba_id=105219032639043).

![Plantilla](../../src/img/whatsapp/plantilla.png)

Allí se visaulzarán las plantillas que tiene disponible, ingresa a ** Crear Plantilla **, una vez adentro, selecciona la categoria:

![](../../src/img/whatsapp/plantillaCrear.png)

Podra encontrar mas informacion sobre las categorias [aqui](https://developers.facebook.com/docs/whatsapp/updates-to-pricing/new-template-guidelines/), el nombre de la plantilla, y el idioma; luego dirigase a ** siguiente **:

![](../../src/img/whatsapp/plantillaDatos.png)

Seguidamente, se llenan los campos referidos a la estrucrura de la plantilla, como texto, botones, encabezados, etc. 

![](../../src/img/whatsapp/plantillaSemifinalizado.png)

Una vez llenado los campos, seleeciona ** enviar **.

Confirma la creación de la platilla y finalizaría el proceso.

## Tipos de mensajes

Una vez que el usuario respondió a la plantilla, se podrán enviar mensajes en diferentes formatos, como texto, imagenes, audios, videos, documentos, etc.

Ingresa [aqui](https://developers.facebook.com/micro_site/url/?click_from_context_menu=true&country=AR&destination=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fwhatsapp%2Fon-premises%2Freference%2Fmessages%23par-metros&event_type=click&last_nav_impression_id=0MgBLq1aEmO91ykHS&max_percent_page_viewed=20&max_viewport_height_px=559&max_viewport_width_px=1280&orig_http_referrer=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fwhatsapp%2Fon-premises%2Freference%2Fmessages&orig_request_uri=https%3A%2F%2Fdevelopers.facebook.com%2Fajax%2Fdocs%2Fnav%2F%3Fpath1%3Dwhatsapp%26path2%3Don-premises%26path3%3Dreference%26path4%3Dmessages&region=latam&scrolled=true&session_id=1UuZMJkbLdXYoisyn&site=developers) para encontrar mas informacion sobre los parametros del json.

### Tpo plantilla

Es el primer mensaje que se debe enviar.

```json
POST /v1/messages
{
  "to": "recipient_wa_id",
  "type": "template",
  "template": {
        "namespace": "your-namespace",
        "name": "your-template-name",
        "language": {
            "code": "your-language-and-locale-code",
            "policy": "deterministic"
        },
        "components": [{
            "type": "body",
            "parameters": [
                {
                    "type": "text",
                    "text": "your-text-string"
                },
                {
                    "type": "currency",
                    "currency": {
                        "fallback_value": "$100.99",
                        "code": "USD",
                        "amount_1000": 100990
                    }
                },
                {
                    "type": "date_time",
                    "date_time" : {
                        "fallback_value": "February 25, 1977",
                        "day_of_week": 5,
                        "day_of_month": 25,
                        "year": 1977,
                        "month": 2,
                        "hour": 15,
                        "minute": 33
                    }
                },
                {
                "type": "date_time",
                    "date_time" : {
                    "fallback_value": "February 25, 1977",
                    "timestamp": 1485470276
                    }
                }
            ]
        }]
    }
}
```

Respuesta 

{
  "messages": [{
    "id": "gBEGkYiEB1VXAglK1ZEqA1YKPrU"
  }]
} 

Encontrara mas informacion sobre los parametros de las plantillas [aqui](https://developers.facebook.com/micro_site/url/?click_from_context_menu=true&country=AR&destination=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fwhatsapp%2Fapi%2Fmessages%23message-templates&event_type=click&last_nav_impression_id=0vwppni4m12pUzK4S&max_percent_page_viewed=82&max_viewport_height_px=559&max_viewport_width_px=1280&orig_http_referrer=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fwhatsapp%2Fmessage-templates%2Fcreation&orig_request_uri=https%3A%2F%2Fdevelopers.facebook.com%2Fajax%2Fdocs%2Fnav%2F%3Fpath1%3Dwhatsapp%26path2%3Dmessage-templates%26path3%3Dcreation&region=latam&scrolled=true&session_id=1UuZMJkbLdXYoisyn&site=developers).

### Tipo texto

Solicitud POST:

```json

POST /v1/messages
{
    "preview_url": false | true,
    "recipient_type": "individual",
    "to": "whatsapp-id",
    "type": "text",
    "text": {
        "body": "your-text-message-content"
    }
}

```

Respuesta

```json
{
  "messages": [{
    "id": "gBEGkYiEB1VXAglK1ZEqA1YKPrU"
  }]
}
```

Si todo se envia correctamente, el webhook le enviará un json con un id que es unico por mensaje.

### Tipo multimedia

```json
POST /v1/messages
{
  "recipient_type": "individual",
  "to": "whatsapp-id",
  "type": "audio" | "contact" | "document" | "image" | "location" | "sticker" | "text" | "video",
  
  "audio": {
    "id": "your-media-id"
  }
  
  "document": {
    "id": "your-media-id",
    "filename": "your-document-filename"
  }
  
  "document": {
    "link": "the-provider-name/protocol://the-url",
    "provider": {
        "name" : "provider-name"
    }
  }
  
  "document": {
    "link": "http(s)://the-url.pdf"
  }
  
  "video": {
    "id": "your-media-id"  
  }
  
  "image": {
    "link": "http(s)://the-url",
    "provider": {
        "name" : "provider-name"
    }
  }
  
  "image": {
    "id": "your-media-id"   
  }
  
  "sticker": {
    "id": "your-media-id"
  }
  
  "sticker": {
    "link": "http(s)://the-url",
    "provider": {
      "name" : "provider-name"
    }
  }
}
```

Respuesta:

```json
{
  "messages": [{
    "id": "gBEGkYiEB1VXAglK1ZEqA1YKPrU"
  }]
}  
```

Si se desea enviar multiples mensajes, se deberá enviar uno por json, ya que cada mensaje debe tener su id unico.

En caso de haber un error en enviar dichas solicitudes, retornará un [Codigo de Error](https://developers.facebook.com/docs/whatsapp/on-premises/errors)

Para ver los estados de los mensajes, selecciona [aqui](https://developers.facebook.com/docs/whatsapp/conversation-types).

Para mas informacion de los tipos de mensajes, ingrese [aqui](https://developers.facebook.com/micro_site/url/?click_from_context_menu=true&country=AR&destination=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fwhatsapp%2Fon-premises%2Fguides%2Fmessages&event_type=click&last_nav_impression_id=0z6iJbscvWy2dc1nP&max_percent_page_viewed=75&max_viewport_height_px=559&max_viewport_width_px=1280&orig_http_referrer=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fwhatsapp%2Fapi%2Fmessages%2Fmedia&orig_request_uri=https%3A%2F%2Fdevelopers.facebook.com%2Fajax%2Fdocs%2Fnav%2F%3Fpath1%3Dwhatsapp%26path2%3Dapi%26path3%3Dmessages%26path4%3Dmedia&region=latam&scrolled=true&session_id=1UuZMJkbLdXYoisyn&site=developers).

## Envio de Mensajes

Para empezar debemos tener en cuenta a que PATH o url enviar la peticion.

```text
  'https://graph.facebook.com/v17.0/idTelefono/messages'
```

Podemos agregar al cuerpo de la peticion o body plantillas o mensajes comunes.

Por ejemplo:

```javascript

  const plantilla = {
  messaging_product: "whatsapp",
  to: "numero de telefono",
  type: "template",
  template: {
        name: "Nombre de la plantilla",
        language: {
            code: "Codigo del idioma"
        },
}}
    const url = 'https://graph.facebook.com/v17.0/106501102509058/messages' ;

   axios.post(url,JSON.stringify(plantilla),{headers:{'Authorization':  'Bearer EAAxd8SGQptIBOwWr9RGnZBMR1h52ENPHqKlWAuXbjeSR8cdw3MpF2mwbdR4bwi6zmqXZBPd0CJTZBYc2gr87H7CC9uNXVmJJ8EoVpp8yruWGCViARkIiikQWT6pSqrOvTHYgZBs9E0wVN07kHhHfeQVvLZAXuuKq83eg9neCOsZC2CcAWnTXVLlMp3vZAuqSgfpIhvdGPZAPdOcZBKjn20WgZD',
  'Content-Type': 'application/json'}})
    .then(function(response){
        console.log(response);
      res.send('Enviado el mensaje').status(200)
    })
    .catch(function(error){
        console.log(error);
      res.status(500).send("No enviado")
    })
```

## Recibir Notificaciones

A continuacion se muestra que llegara a su endpoint desde el webhook de whatsapp. Ante cualquier evento, ya sea recibir mensaje, confirmacion de lectura, etc.

```javascript
  //  El json que le llegara por cauquier evento que surga, ya sea recibir un mensaje en cualquir formato, estados de mensajes, etc
  {
  "object": "whatsapp_business_account",
  "entry": [{
    "id": "WHATSAPP-BUSINESS-ACCOUNT-ID",
    "changes": [{
      "value": {
         "messaging_product": "whatsapp",
         "metadata": {
           "display_phone_number": "PHONE-NUMBER",
           "phone_number_id": "PHONE-NUMBER-ID"
         },
      //# Additional arrays and objects
         "contacts": [{...}]
         "errors": [{...}]
         "messages": [{...}]
         "statuses": [{...}]
      },
      "field": "messages"
    }]
  }]
}

```

A continuacion se le explpicara de que trata el archivo json que le llegara.

"object": "whatsapp_business_account": Indica que se trata de un objeto relacionado con una cuenta de negocios de WhatsApp.

"entry": Es una matriz (array) que contiene eventos o entradas. En este caso, parece que se trata de un evento relacionado con cambios en la cuenta de negocios de WhatsApp.

"id": "WHATSAPP-BUSINESS-ACCOUNT-ID": Identificador único de la cuenta de negocios de WhatsApp que experimenta los cambios.

"changes": Es una matriz que contiene los cambios específicos que ocurrieron en la cuenta.

"value": Es un objeto que contiene los detalles del cambio que ocurrió en la cuenta. Parece que estos cambios están relacionados con mensajes.

"messaging_product": "whatsapp": Indica que el producto de mensajería es WhatsApp.

"metadata": Objeto que contiene metadatos adicionales sobre el cambio.

"display_phone_number": "PHONE-NUMBER": Número de teléfono que se muestra.

"phone_number_id": "PHONE-NUMBER-ID": Identificador único del número de teléfono.

"contacts", "errors", "messages", "statuses": Estas parecen ser otras partes de la información relacionada con el cambio. Sin ver los detalles completos, no es posible dar una explicación detallada sobre cada una de ellas.

"field": "messages": Indica que el cambio se refiere al campo de "messages" (mensajes).

Encontraras mas informacion sobre como se compone el archivo json de notificacion [aqui](https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks/components)