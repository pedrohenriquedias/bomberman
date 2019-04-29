Na VTEX, a autenticação de integrações via [APIs](https://help.vtex.com/tutorial/introducao-as-apis-vtex--3SjAqQ0BeUqu2ge8AiIkmW) é realizada por meio de [appKey e appToken](https://help.vtex.com/tutorial/criar-appkey-e-apptoken-para-autenticar-integracoes--43tQeyQJgAKGEuCqQKAOI2). Entretanto, existem alguns casos em que uma integração pode falhar por conta de erros relacionados a essas chaves de autenticação. Veja abaixo como solucionar alguns problemas comuns relacionados à autenticação por appKey e appToken:

## Associação de appKey e appToken

Ao acessar __Perfis de acesso__, dentro do módulo de __[Gerenciamento da Conta](https://help.vtex.com/tutorial/visao-geral-do-modulo-license-manager?locale=pt)__, é possível [configurar perfis](https://help.vtex.com/tutorial/como-criar-perfil-de-acesso--tutorials_526) com níveis de acesso diferentes à plataforma.

Todo par de appKey e appToken quando criado não é vinculado a um perfil de acesso. Dessa forma, __é necessário vincular ambas chaves a um perfil de acesso desejado__. 

Um dos motivos de erro na autenticação pode ser a falta de vínculo das chaves criadas a um perfil de acesso. Outro possível erro é a vinculação do appKey e appToken um perfil que, embora cadastrado, não tenha acesso para exercer determinada ação na plataforma.

<div class="alert alert-info">
Apenas o [usuário Master](https://help.vtex.com/tutorial/o-que-e-o-usuario-master--3oPr7YuIkEYqUGmEqIMSEy) tem permissão para manipular as chaves, isso é, criar a appKey e o appToken usados em integrações com a loja.
</div>

## Chaves invertidas

Para [cadastrar um usuário](https://help.vtex.com/tutorial/gerenciando-usuarios--tutorials_512), o campo `Email` deve ser preenchido com o appKey, enquanto o campo `Nome Completo` deve conter o valor do appToken. Eventualmente, as informações podem ser trocadas erroneamente, ou seja, o appKey é preenchido pelo usuário no campo do appToken e vice-versa.

Para reverter o erro, verifique se as informações foram incluídas de forma correta acessando __[Usuários](https://help.vtex.com/tutorial/gerenciando-usuarios--tutorials_512#object-object)__, no módulo __Gerenciamento da conta__.

## Erro de digitação

Ambas chaves devem ser preenchidas nos seus respectivos campos, sem espaçamento e mantendo a caixa das letras - __case sensitive__. Um pequeno erro no preenchimento pode impedir o funcionamento da integração.

Você pode verificar possíveis erros de digitação nos campos no módulo __Gerenciamento de conta__, em __[Usuários__](https://help.vtex.com/tutorial/gerenciando-usuarios--tutorials_512#object-object). 

<div class="alert alert-warning">
O appToken é exibido para o usuário apenas no momento da sua criação, não podendo ser recuperado posteriormente.
</div>

