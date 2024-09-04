
// DOM

let dolar = 5.2

let usdInput = document.querySelector("#usd");
let brlInput = document.querySelector("#brl");
let DolarHoje = document.querySelector('#dolarAtual')
// armazenando os dois input em duas vareaveis . . . 

usdInput.addEventListener("keyup", () => {
    convert('usd-to-brl')
});
// Evento que quero capturar é ao soltar a tecla do teclado (keyup)
brlInput.addEventListener("keyup", () => {
    convert('brl-to-usd')
});



usdInput.addEventListener("blur", () => {
    usdInput.value = formatCurrency(usdInput.value)
});

brlInput.addEventListener("blur", () => {
    brlInput.value = formatCurrency(brlInput.value)
});

usdInput.value = "1000,00"

convert('usd-to-brl')  // convertendo de dolar para real . 

//   FUNCÕES ----- . . .

/*----------funcão que vai converter valor de dolar pra real vise e versa-----*/
function convert(type){                       //FUNÇÃO CONVERTER . . .
                                             // Lógica dessa função .
    if(type == 'usd-to-brl'){               //ajustar valor de dollar para real
        let fixedValue = fixValue(usdInput.value) //pegar o valor formatado
        let result = fixedValue * dolar  // valor do dolar e multiplica .

        result = result.toFixed(2) //pegando valor de result e deixando com 2 digitos finais.
                                // ou seja exemplo 534.55677 --> 534.55
        brlInput.value = formatCurrency(result)

    }                             
                          
    if(type == 'brl-to-usd'){            
        let fixedValue = fixValue(brlInput.value)
        let result = fixedValue / dolar
        result = result.toFixed(2)
        usdInput.value = formatCurrency(result)
    }  
};

/*-------função encarregada de formatar os números--------*/
function formatCurrency(value){           // FUNÇÃO FORMATAR
      // ajustar o valor
   let fixedValue = fixValue(value)        
   // utilizar uma função de formatar números criando um objeto
   let options = {
    useGrouping: false,   // bliblioteca interna do js que consegue formatar números. 
    minimumFractionDigits: 2   // colocando no minímo 2 digitos ou números .000 -> .00 .
   }
   let formatter = new Intl.NumberFormat('pt-BR', options)
   return formatter.format(fixedValue) // retornar o valor formatado e correto
};                                     


// função TROCA A ','por'.', transforma em um NÚMERO DE FATO,e verifica se digitou errado.
function fixValue(value){                    
    let fixedValue = value.replace(',', '.') //trocar virgula por ponto . 
    let flotValue = parseFloat(fixedValue)   //trocar string por número .
    if(flotValue === NaN){     //atribuindo 0 em flotValue se for igual a (NaN)                
        flotValue = 0                        
    }  
    return flotValue          //retorna valor já formatado e pronto pra uso .                                  
};                             //exemplo '1000,00' -> '1000.00' --> 1000.00                         

/* variavel fixedValue recebe valor e corrigi. comando REPLACE ela troca 
o valor de 1000','00 string e troca por '.' . resumindo troca a virgula por '.'
ATENÇÃO MESMO ASSIM o número recebido continuará sendo uma STRING '1000.00'.
para transformar essa STRING é número verdadeiro usa-se (parseFloat) para
converte a STRING em NÚMERO de ponto flutuante exemplo ( "90" --> 90 ). . . 
   Uma medida de segurança se o usuário por acaso digitar uma string ao
invés de um número ele voltara NaN então cria uma condição que se o resultado
FLOTVALUE for igual e NAN ele aplica o valor 0 evitando que fique vazio ou gere 
um erro .*/ 

