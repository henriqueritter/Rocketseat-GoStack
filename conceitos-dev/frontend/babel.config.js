module.exports = {
  presets: [ //presets sao configs criadas por terceiros
    '@babel/preset-env', //vai converter o codigo de JS mais moderno pra um JS mais antigo baseado no ambiente da nossa aplicacao
    //ex: ele vai nos browsers ver quais funcionalidades que os browsers ainda nao usam e vai converter apenas a funcionalidades que os browsers aainda nao tem
    //podemos passar configs pra esse preset-env como ex de pedir para ele transformar nosso codigo de forma que o IE10 entenda nosso codigo
    ///vamos utilizar a versao default do babel preset-env
    '@babel/preset-react' //vai adicionar as funcs do REACT nessa conversão
  ],
  plugins: [
    '@babel/plugin-transform-runtime' //usado para utilizar o async await nas requisicoes
  ]
}