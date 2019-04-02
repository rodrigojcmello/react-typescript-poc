import store from 'store';
import { Navegador, NavegadorAction } from './tipos';

export const navegadorState: Navegador = {
  larguraJanela: store.get('navegador.larguraJanela') || 0
};

const navegador = (state = navegadorState, action: NavegadorAction): Navegador => {
  if (action.type === 'DEFINIR_LARGURA_JANELA') {
    store.set('navegador.larguraJanela', action.larguraJanela);
    return {
      ...state,
      larguraJanela: action.larguraJanela
    };
  }
  return state;
};

export default navegador;
