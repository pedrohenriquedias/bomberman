Para finalizar um pedido na plataforma VTEX, é necessário selecionar uma transportadora na etapa de checkout para entrega.  

Porém, eventualmente, a transportadora pode não ser exibida no checkout. Separamos cinco cenários em que esse erro ocorre e suas respectivas soluções. 

Vale ressaltar que antes de prosseguir a leitura desse artigo, é preciso garantir que todas as [transportadoras estão cadastradas](https://help.vtex.com/pt/tutorial/gerenciar-transportadora "transportadoras estão cadastradas") na plataforma. Além disso, todas as soluções são feitas no módulo [Estoque & entrega](https://help.vtex.com/pt/tutorial/visao-geral-logistics/child "Estoque & Entrega"). 

## Conflito entre tipos de transportadora

No momento de cadastro das transportadoras, é preciso fazer uma categorização das mesmas. Todas as transportadoras com o mesmo custo de entrega ficam juntas em um agrupamento. Por isso, podemos dizer que existem [tipos](https://help.vtex.com/pt/tutorial/como-funciona-o-tipo-de-entrega/ "tipos") diferentes de transportadoras. 

No carrinho não são exibidos os nomes das transportadoras, e sim os tipos de frete. Por conseguinte, uma transportadora não aparece no checkout quando outra, de mesmo tipo, tem menor custo ou prazo cadastrado.

#### Solução

Caso você queira que todas as transportadoras que atendam o carrinho sejam exibidas, elas devem ser cadastradas no módulo de Estoque & entrega como transportadoras de tipos diferentes.

## Endereço não encontrado 

Ao cadastrar uma nova transportadora, a [planilha de frete](https://help.vtex.com/pt/tutorial/importar-planilha-de-frete "planilha de frete") deve ser preenchida com as faixas de cep que podem ser atendidas. Os campos dessa planilha relativos à localização são: country, zipCodeStart e zipCodeEnd.

Caso o usuário queira que o seu pedido seja entregue em um endereço que não foi cadastrado na planilha, a transportadora não aparecerá como opção a ser escolhida.

#### Solução

Nesse caso, o ideal é validar no módulo Estoque & entrega, nas configurações da transportadora, se as faixas de cep configuradas abrangem o endereço do pedido. 

## Volume do pedido excede o máximo permitido

Caso um item exceda o volume máximo cadastrado na planilha de frete, o pedido é automáticamente ignorado pela transportadora.

#### Solução

Neste caso, o ideal é validar na configuração da transportadora no módulo de Estoque & entrega se o volume máximo configurado é o mesmo do limite da transportadora. 

Para isso, é necessário baixar a planilha de frete, alterar os valores da coluna MaxVolume e importá-la novamente para a plataforma.

## Peso do pedido excede o máximo permitido

Assim como é preciso cadastrar um volume máximo na planilha de frete, o mesmo precisa ser feito quanto ao peso dos itens. 

#### Solução

O raciocínio é o mesmo em relação ao item anterior: valide nas configurações da transportadora, em Estoque & entrega, se o peso máximo cadastrado é o mesmo do limite da transportadora.

Dessa vez, será necessário alterar os valores nos campos weightStart e weightEnd e na planilha de frete. Em seguida, importe o documento novamente para a plataforma.

## Quebra de pacotes não permitida

É possível habilitar a divisão de um pedido em dois pacotes. Por exemplo, caso o pedido tenha 40kg, mas o máximo permitido pela transportadora seja 30kg, é possível autorizar duas entregas em que cada uma transporte 20kg. Se a divisão de carga não estiver habilitada na sua loja e o pedido ultrapassar o limite da transportadora, a última não aparecerá no checkout. 

#### Solução

Habilite a divisão de carga quando a entrega ultrapassar o limite da transportadora em Estoque & entregas, em Configurações. 
