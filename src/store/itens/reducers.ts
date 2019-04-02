import update from 'immutability-helper';
import * as store from 'store';
import { Itens, ItensAction } from './tipos';

export const itensState: Itens = /* store.get('itens') || */ {
  porId: {},
  todosIds: [],
  todosNiveis: [],
  pais: {},
  ativos: store.get('itemAtivo') || []
};

const itens = (state: Itens = itensState, action: ItensAction): Itens => {
  let novoState: Itens;
  switch (action.type) {
    case 'DEFINIR_ITENS':
      return {
        porId: action.itens.porId,
        todosIds: action.itens.todosIds,
        todosNiveis: action.itens.todosNiveis,
        pais: action.itens.pais,
        ativos: [...state.ativos, ...action.itens.ativos]
      };

    case 'DEFINIR_ITEM_ATIVO':
      novoState = update(state, {
        ativos: { [action.indice]: { $set: action.id } }
      });
      store.set('itemAtivo', novoState.ativos);
      return novoState;

    case 'DEFINIR_ORDEM':
      return update(state, {
        pais: {
          [action.pai]: {
            $set: action.filhos
          }
        }
      });

    default:
      return state;
  }
};

export default itens;
