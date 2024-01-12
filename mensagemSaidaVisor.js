//Mensagem de saída que ira aparacer no visor
const linha = ("\n")
const msgSaudacao = ("Olá, Seja bem vindo ao\n \"Inventory control app\"")
const msgPergunta = ("O que você gostaria de fazer?")
const msgInserirDados = ("Preencha todos os dados:")
const ipuntEntrada = ("Opção 1 \(Login)\ ou Opção 2 \(Criar conta\)")
const escolhaDaEntrada =[
    [0 , 1],
    ["Login", "Criar Conta"]
]
const msgVerificacao = ("Cadastrado feito com sucesso?")
//Informações que dos clientes

//Usuario 1
const nome1 = "Nome: Gabriela Carvalho\n"
const comercio1 = "Nome do comercio: Bom vizinho\n"
const numero1 = "Numero so seu celular: (11)91234-5678\n"
const usuario1 = nome1 + comercio1 + numero1
//Usuario 2
const nome2 = "Adimarck Santos Mendes"
const comercio2 = "Nome do comercio: Mal vizinho\n"
const numero2 = "Numero so seu celular: (11)92234-5678\n"
const usuario2 = nome2 + comercio2 + numero2
//Usuario 3
const nome3 = "Amanda Aparecida"
const comercio3 = "Nome do comercio: Um vizinho\n"
const numero3 = "Numero so seu celular: (11)93234-5678\n"
const usuario3 = nome3 + comercio3 + numero3
//Usuario 4
const nome4 = "Nome: Gabriela Carvalho\n"
const comercio4 = "Nome do comercio: Bom vizinho\n"
const numero4 = "Numero so seu celular: (11)91234-5678\n"
const usuario4 = nome1 + comercio1 + numero1

//Comparação de clientes ja cadastrados

let verifcacaoCasdrasto = usuario1 !== usuario2
verifcacaoCasdrasto = usuario1 !== usuario2 !== usuario3
verifcacaoCasdrasto = usuario1 !== usuario2 !== usuario3 !== usuario4

//Mensagem de saudacao de saída que ira aparecer no visor
console.log(msgSaudacao)
console.log(linha)
console.log(msgPergunta)
console.log(linha)
console.log(ipuntEntrada)

// Pula linha
console.log(linha)

// Visualização dos dados do cliente Usuário 1
console.log("Opção escolhida 2 - "+escolhaDaEntrada[1][1])
console.log(linha)
console.log(msgInserirDados)
console.log(usuario1)
console.log(linha)
console.log(msgVerificacao +" "+verifcacaoCasdrasto)

// Pula linha
console.log(linha)

//Mensagem de saudacao de saída que ira aparecer no visor
console.log(msgSaudacao)
console.log(linha)
console.log(msgPergunta)
console.log(linha)
console.log(ipuntEntrada)

// Pula linha
console.log(linha)

// Visualização dos dados do cliente Usuário 2
console.log("Opção escolhida 2 - "+escolhaDaEntrada[1][1])
console.log(linha)
console.log(msgInserirDados)
console.log(usuario2)
console.log(linha)
console.log(msgVerificacao +" "+verifcacaoCasdrasto)

// Pula linha
console.log(linha)

// Visualização dos dados do cliente Usuário 2
console.log("Opção escolhida 2 - "+escolhaDaEntrada[1][1])
console.log(linha)
console.log(msgInserirDados)
console.log(usuario2)
console.log(linha)
console.log(msgVerificacao +" "+verifcacaoCasdrasto)
