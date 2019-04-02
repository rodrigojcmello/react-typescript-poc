type ModalAtivo = boolean;

export interface ModalState {
    ativo: ModalAtivo;
}

export interface EditarModalAction extends ModalState {
    type: 'EDITAR_MODAL';
}

export type EditarModal = (ativo: ModalAtivo) => EditarModalAction;

type ModalAction = EditarModalAction;

export type ModalReducer = (state: ModalState, action: ModalAction) => ModalState;