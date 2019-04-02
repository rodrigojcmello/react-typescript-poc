import { EditarModal } from './modalTypes';

export const editarModal: EditarModal = ativo => ({
    type: 'EDITAR_MODAL',
    ativo
});