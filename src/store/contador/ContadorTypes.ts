export interface Contador {
    count: number;
}

export interface EditarContatadoAction {
    número: number;
    type: 'EDITAR_CONTADOR';
}

export type EditarContador = (número: number) => EditarContatadoAction;

export type ContadorAction = EditarContatadoAction;
