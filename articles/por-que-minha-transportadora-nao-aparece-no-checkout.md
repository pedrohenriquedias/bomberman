Para finalizar um pedido na plataforma VTEX, é necessário selecionar uma forma de entrega na etapa de checkout.  

Eventualmente, uma transportadora pode não ser exibida no checkout. Separamos cinco cenários em que esse erro ocorre e suas respectivas soluções. 

Vale ressaltar que antes de prosseguir a leitura desse artigo, é preciso garantir que todas as [transportadoras estão cadastradas](https://help.vtex.com/pt/tutorial/gerenciar-transportadora) corretamente na plataforma. Além disso, todas as soluções são feitas no módulo de [Estoque & entrega](https://help.vtex.com/pt/tutorial/visao-geral-logistics) do nosso admin. 

## Concorrência entre transportadoras do mesmo tipo

No momento de cadastro de uma transportadora, é preciso incluir o [tipo de entrega](https://help.vtex.com/pt/tutorial/como-funciona-o-tipo-de-entrega/) desta transportadora. No checkout, são exibidos os **tipos de entrega** e não o nome das transportadoras. O checkout exibe sempre a transportadora mais rápida/barata **entre as opções de um mesmo tipo de entrega**. Assim, uma transportadora não aparece no checkout quando outra do **mesmo tipo** tem menor prazo/custo cadastrado.

### Solução

Caso você queira que todas as transportadoras sejam exibidas, você deve cadastrá-las no módulo de Estoque & entrega como transportadoras com **tipos de entrega diferentes**.

## Transportadora não atende o endereço informado 

Ao cadastrar uma nova transportadora, a [planilha de frete](https://help.vtex.com/pt/tutorial/importar-planilha-de-frete) deve ser preenchida com as **faixas de CEP** ou **polígono para geolocalização** que podem ser atendidas por ela. Os campos dessa planilha relativos à localização são `country`, `zipCodeStart` e `zipCodeEnd` e `PolygonName`

Caso seu cliente deseje que um pedido seja entregue em uma região não cadastrada na planilha, a transportadora não aparecerá como opção no checkout.

### Solução

Verifique na [planilha de frete](https://help.vtex.com/pt/tutorial/importar-planilha-de-frete) se as faixas de CEP ou os polígonos de geolocalização configurados atendem o endereço do pedido. 

## Volume do pedido excede o máximo permitido

Caso o volume do carrinho exceda o **volume máximo** cadastrado na planilha de frete, o pedido é automaticamente ignorado pela transportadora. **OBS: Como eu calculo o volume dos itens no carrinho?**

### Solução

Neste caso, o ideal é validar na configuração da transportadora no módulo de Estoque & entrega se o volume máximo configurado é o mesmo do limite da transportadora.  

Para isso, é necessário baixar a planilha de frete, alterar os valores da coluna MaxVolume e importá-la novamente para a plataforma. **OBS: Não entendi esta solução: de que maneira validar se o volume máximo configurado na planilha é o mesmo do limite da transportadora vai me ajudar a solucionar o problema? Pode existir o caso em que o volume do carrinho é superior ao do cadastrado na planilha e não existe nenhum erro nisso**

[//]: # (This may be the most platform independent comment)

## Peso do pedido excede o máximo permitido

Caso o peso dos itens do pedido exceda o **peso máximo** cadastrado na planilha de frete, o pedido é automaticamente ignorado pela transportadora. **OBS: Como eu calculo o peso dos itens no carrinho?** 

#### Solução

O raciocínio é o mesmo em relação ao item anterior: valide nas configurações da transportadora, em Estoque & entrega, se o peso máximo cadastrado é o mesmo do limite da transportadora.

Dessa vez, será necessário alterar os valores nos campos weightStart e weightEnd e na planilha de frete. Em seguida, importe o documento novamente para a plataforma. **OBS: Dica importante: temos que evitar fazer referências a passos anteriores do artigo. Pode ser que o nosso usuário queira saber apenas como resolver o caso do peso máximo. Assim, temos que ter todas as informações nesse passo, mesmo que tenhamos que repetir algumas informções**


## Quebra de pacotes não permitida

É possível habilitar a divisão de um pedido em dois pacotes **OBS: como? onde? existe algum artigo que fale sobre este processo? precisamos dar mais contexto para o nosso usuário**. Por exemplo: caso um pedido tenha 40kg, mas o peso máximo cadastrado na planilha de frete seja 30kg, é possível autorizar duas entregas em que cada uma transporte 20kg. Se a divisão de carga não estiver habilitada na sua loja e o peso do pedido ultrapassar o limite da transportadora, ela não aparecerá no checkout.

#### Solução

Habilite a divisão de carga quando a entrega ultrapassar o limite da transportadora em Estoque & entregas, em Configurações. **OBS: não existe nenhum artigo que fale sobre como fazer isso? Se não houver, temos que ensinar neste passo e, se for o caso, transformar esta explicação em uma artigo**
