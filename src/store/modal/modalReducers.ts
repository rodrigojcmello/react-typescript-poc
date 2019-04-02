import { ModalReducer, ModalState } from './modalTypes';

const stateModal: ModalState = {
    ativo: false
};

export const modal: ModalReducer = (state = stateModal, action) => {
    switch (action.type) {
        case 'EDITAR_MODAL':
            return {
                state,
                ...{ ativo: action.ativo },
            };
        default:
            return state;
    }
};