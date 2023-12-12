class CalcIMC{
    // método calculoIMC()
    calculoIMC(peso, altura){
        const imc = peso/(altura*altura)
        return imc
    }

    // método resultadoIMC()

    // será necessário receber o valor
    // calculado no método calculoIMC

    // será necessária a atribuição
    // de uma nova variável para receber
    // esse valor

    // variável resIMC receberá o valor
    // calculado em calculoIMC()

    resultadoIMC(){

        // é preciso chamar a função
        // calculoIMC para receber o
        // valor calculado
        var resIMC = this.calculoIMC()
        
        if (resIMC < 19){
            return "IMC indica magreza"
        }
        else if (resIMC >= 19 && resIMC < 24){
            return "IMC indica peso normal"
        }
        else if (resIMC >= 24 && resIMC < 29){
            return "IMC indica acima do peso"
        }
        else {
            return "IMC indica obesidade"
        }
    }

}

/* const calc = new CalcIMC()
const imc = calc.calculoIMC(85, 1.80)
const res = calc.resultadoIMC(imc)
console.log(res) */


// Exportando a classe
// para outro arquivo
module.exports = CalcIMC