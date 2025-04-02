const valida = require('./teste2');

describe("Validação de Nome", () => {
  test("Nome válido", () => {
    expect(valida.validarNome("Carlos")).toBe(true);
  });



  test("Nome válido", () => {
    expect(valida.validarNome("")).toBe(false);
  });


  test("Nome válido", () => {
    expect(valida.validaerNome(10)).toBe(false);
  });



  test("Nome válido", () => {
    expect(valida.validarNome("ca")).toBe(false);
  });
});


describe ("Validação de email", ()=>{
  test("Email válido", () => {
  expect(valida.validarEmail("jackson@gmail.com")).toBe(true);
  });

  test("Email válido", () => {
  expect(valida.validarEmail("jackson@")).toBe(false);
  });
  test("Email válido", () => {
    expect(valida.validarEmail("jacksongmailcom")).toBe(false);
  });
  test("Email válido", () => {
    expect(valida.validarEmail("jackongmail.com")).toBe(false);
  });
});

describe ("Validação de idade", ()=>{
  test("Idade valida", ()=>{
    expect(valida.validarIdade(29)).toBe(true);
  });
  test("Idade valida", ()=>{
    expect(valida.validarIdade("dez")).toBe(false);
  });
  test("Idade valida", ()=>{
    expect(valida.validarIdade(103)).toBe(false);
  });
  test("Idade valida", ()=>{
    expect(valida.validarIdade()).toBe(false);
  });
});
