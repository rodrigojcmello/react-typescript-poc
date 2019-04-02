import { AnimacaoReducer, AnimacaoState } from './animacaoTypes';

const stateAnimacao: AnimacaoState = {
    item: false,
    telaAvancar: false
};

const animacao: AnimacaoReducer = (state = stateAnimacao, action) => {
    if (action.type === 'EDITAR_ANIMACAO') {
        return {
            ...state,
            ...{ [action.elemento]: action.ativo }
        };
    }
    return state;
};

export default animacao;
