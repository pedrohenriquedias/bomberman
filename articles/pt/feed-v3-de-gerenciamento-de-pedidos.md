[//]: # (Title: Feed v3 do Gerenciamento de pedidos)

<div class="alert alert-danger">
Por conta de ajustes necessários, a configuração do Feed v3 se encontra temporariamente indisponível.
</div>

A nova versão do feed permite mais agilidade à gestão dos eventos de pedidos da sua loja por meio de filtros em cada chamada, tempo de espera para exibição de um evento depois da sua consulta, entre outras vantagens. 

## Como funciona a API do feed v3

O feed trabalha com duas chamadas: uma para ler o feed e outra para informar ao feed que um evento já foi lido e portanto deve ser excluído.

### Get feed order status

A [chamada de leitura do feed](https://documenter.getpostman.com/view/487146/vtex-orders-api/6tjSKqi#4b68b4b0-c8a1-479d-98f9-4ae255d4ca12) é a seguinte:

__Método__: `GET`

__URL__: `https://{{accountName}}.myvtex.com/api/orders/feed?maxlot={{maxLot}}`

Quando é feita essa chamada `GET`, o sistema retorna uma lista de eventos, que são as mudanças de status dos pedidos. Cada evento corresponde a uma mudança de status.

O parâmetro `maxLot` indica o número máximo de eventos que podem ser retornados a cada chamada.  No feed v3 você pode especificar __até 10 resultados__. 

Outra funcionalidade disponível no Feed v3 é a configuração do tempo de espera para exibição de um evento depois da sua consulta. O tempo de espera default é de 30 segundos e poderá ser configurado até 43200 segundos (12 horas). 
Quando a loja faz um GET de eventos do feed, __todos__ os eventos retornados ficam no tempo de espera configurado, ou seja, eles saem do feed e não aparecem mais na consulta pelo tempo configurado. 

Se esses eventos não forem _commitados_ no tempo configurado, eles voltam a aparecer no feed. 

Veja abaixo como fazer o commit.

### Feed Configuration

O Feed v3 possibilita configurar o feed com filtros e intervalos necessários para a operação.

Defina quais status e dominios estarão visíveis no feed de evento através da [API Feed Configuration](https://documenter.getpostman.com/view/487146/vtex-orders-api/6tjSKqi#ef83f68b-0289-4c0d-ad8f-d1a3aa66cd13). Por exemplo, caso deseje apenas os status “ready-for-handling” e “cancel” visíveis no feed, o campo `filter.status` no body do request ao Feed Configuration deverá ser enviado da seguinte maneira:
```
{
  "filter": {
      "status": ["ready-for-handling","cancel"],

  },
  "visibilityTimeoutInSeconds": 120
}

```
O campo `filter.domain` está relacionado a origem do pedido.

Já a configuração do tempo de espera para exibição do status deverá ser aplicada no campo `visibilityTimeoutInSeconds`. 

### Confirm item feed order status

Depois que você fez a leitura do feed, é hora de _commitar_ os eventos.

__Método__: `POST`

__URL__: `https://{{accountName}}.myvtex.com/api/orders/feed`

http://myvtex.com/api/orders/feed/config

__Body__:
<pre><code>
[
    {
        "handles": "{Value}"
    }
]
</code></pre>

Para os excluir do feed os eventos considerados inúteis, basta _commitar_ usando o método `POST` acima ou configurar o filtro de status no Feed Configuration. 

Para os eventos úteis - ou seja, aqueles cuja mudança de status desencadeia alguma ação -, você deve fazer as ações necessárias (normalmente tendo que consultar o pedido completo com a chamada [Get Order](https://documenter.getpostman.com/view/487146/oms/6tjSKqi#43524211-bbed-4f80-9a9b-d96b32347f0a) da API do Gerenciamento de pedidos) e _commitar_ os eventos. Com isso, esses também serão excluídos do feed.

Portanto, __não existem casos em que um evento do feed não deva ser _commitado_.__ Seu sistema deve _commitar_ todos os eventos. O campo `visibilityTimeoutInSeconds` indica o tempo máximo para realizar um commit de um `handle`. 

No body do commit deve ser passado o valor do `handles`. Este valor é retornado pela API do feed quando você faz o GET, e é por meio dele que a API sabe a qual evento você está se referindo quando faz o commit. No exemplo acima, esse valor deve substituir o `{Value}`. No body, cada array pode conter quantos `handles` forem necessários, isso é, é possível _commitar_ mais de um valor de `handles` por vez.  

<div class="alert alert-warning">
Cada credencial usada para integração vai enxergar um feed exclusivo. Ou seja, <b>sistemas diferentes da mesma loja têm que usar appKeys diferentes</b>. Se dois sistemas usarem a mesma appKey, o feed será o mesmo para ambos e o evento commitado por um deles sumirá para os dois.
</div>

<div class="alert alert-danger">
Uma vez que um evento foi commitado, não é possível recuperá-lo no feed com o mesmo usuário.
</div>

Um evento permanece no feed por um tempo máximo de __4 dias__. Isto significa que:
- Na primeira vez que um usuário consumir o feed, ele verá os eventos dos últimos 4 dias.
- Se um evento não for consumido em até 4 dias, o mesmo é excluído do feed e os dados referentes a ele são perdidos.

### Hook

O Hook é uma alternativa ao Feed v3, voltado para operações robustas que demandam integrações mais complexas.
Sua principal funcionalidade é notificar o _endpoint_ sempre que houver atualização no status de um pedido, sem a necessidade de consultar o feed continuamente mesmo sem novos eventos.

Configure quais eventos e em qual URL deseja receber as notificações utilizando a [API Hook Configuration](https://documenter.getpostman.com/view/487146/vtex-orders-api/6tjSKqi#b9d8d3b1-7f40-4314-b05b-f8c44f87e060).

__O endPoint configurado deverá sempre responder o server code 200.__

<div class="alert alert-danger">
Caso o endPoint não responda com o server code esperado por mais de uma hora, os eventos desse período serão perdidos ainda que posteriormente sejam enviadas novas notificações. Serão realizadas até 100 tentativas ao endpoint dentro de 4 dias. Depois desse período, caso não seja obtida a resposta esperada, a configuração do Hook será removida e a VTEX não enviará novas notificações até que uma nova configuração seja realizada. <strong>Por conta disso, a VTEX recomenda a utilização do Hook somente para operações estáveis</strong>. 
</div>

<div class="alert alert-info">
O intervalo das tentativas é calculado por um algoritmo interno de progressão geométrica.
</div>
