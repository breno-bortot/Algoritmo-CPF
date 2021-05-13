// validação de CPF
let x = 'insira o CPF aqui'
x = [...x]
const aDigitoBefore = x[9]
const bDigitoBefore = x[10]

const n = x



n.pop()
n.pop()


//Passo 1 e 2 

while (n.length < 11) {
    let res = 0

    for (let index = 0; index < n.length; index++) {
        res += (n[index] * ((n.length + 1) - index))
    }
    res %= 11
    res = 11 - res

    if (res >= 10) res = 0

    n.push(res)

}

let aDigito = n[9]
let bDigito = n[10]
console.log(`primeiro dígito: ${aDigito}`)
console.log(`segundo dígito: ${bDigito}`)
//// Validação


aDigitoBefore == aDigito && bDigitoBefore == bDigito ? console.log('CPF valido') : console.log('CPF inválido')
