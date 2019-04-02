import { EditarAnimacao } from './animacaoTypes';

export const editarAnimacao: EditarAnimacao = (elemento, ativo) => ({
    type: 'EDITAR_ANIMACAO',
    elemento,
    ativo
});