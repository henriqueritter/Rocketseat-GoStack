import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;

/**
 * iOS com emulador: localhost comum no base URL
 * 
 * ios com disposito fisico: IP DA MAQUINA NO LOCALHOST
 * 
 * 
 * Android com emulador: adb reverse tcp:3333 tcp:3333   pois o emulador do 
 *  android é uma maquina virtual, fazendo isso podemos utilizar o localhost no baseURL
 * 
 * Android com emulador podemos utilizar tbm um IP especifico para o emulador do android (10.0.2.2) emualador
 * do android studio, no emulador do Genymotion podemos usar o 10.0.3.2
 * 
 * Android dispositivo fisico usamos o IP Da maquina
 */