// Importando a classe CalcIMC
const CalcIMC = require('./calcIMC')

// Criar o objeto que herdará
// a classe CalcIMC
const calc = new CalcIMC()

it('Deve calcular o IMC', ()=>{
    expect(calc.calculoIMC(85,1.80)).toBe(26.234567901234566)
})

it('Deve retornar o IMC obesidade', ()=>{
    expect(calc.resultadoIMC(26.234567901234566)).toBe("IMC indica obesidade")
})