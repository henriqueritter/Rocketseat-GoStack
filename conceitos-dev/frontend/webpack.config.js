const path = require('path');  //como o arqivo do webpack é utilizado pelo NODE como exemplo o PATH

module.exports = {
   //arquivo de entrada da nossa aplicação
  entry: path.resolve(__dirname, 'src', 'index.js'), //dir name é a pasta frontend
  output: {
    path: path.resolve(__dirname, 'public'), //caminho do arquivo gerado apos ser convertido(o bundle)
    filename: 'bundle.js' //nome do arquivo transpilado
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  //como para outras extensoes nao utilizaremos o babel vamos fazer as regras e dizer quais loaders sao usados
  // para quais arquivos
  module: {
    rules: [
      //O Codigo abaixo basicamente é "veja todos os arquivos .JS que nao estejam em node modules e converta eles usando o babel-loader"
      {       //o de baixo significa que vai procurar todo arquivo que tenha a extensao .js isso é uma EXPRESSAO REGULAR
        test: /\.js$/,
        exclude: /node_modules/,  //estamos excluindo os arquivos da pasta node modules passarem pela transpilacao
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },   //vai pegar os CSS interpretados pelo css loader e vai injetar no nosso HTML
          { loader: 'css-loader' }      //vai ler arquivos CSS e vai interpretar as importacoes dentro dele(background url etc..)
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,  //o i transforma isso case insensitive (caso a extensaovenha em maiusculo)
        use: 'file-loader' 
      }

    ]
  }
};