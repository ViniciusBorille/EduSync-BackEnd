function validarNome(nome) {
    if (!nome || typeof nome !== "string" || nome.trim().length < 3) {
      return false;
    }
    return true;
  }
  
  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  function validarIdade(idade) {
    if (typeof idade !== "number" || idade < 18 || idade > 100) {
      return false;
    }
    return true;
  }
  
  module.exports = { validarNome, validarEmail, validarIdade };
  

