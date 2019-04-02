import { EditarContador, EditarContatadoAction } from './ContadorTypes';

export const editarContador: EditarContador = (número): EditarContatadoAction => ({
    type: 'EDITAR_CONTADOR',
    número,
});
