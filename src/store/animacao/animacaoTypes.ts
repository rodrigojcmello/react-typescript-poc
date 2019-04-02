export interface AnimacaoState {
    [key: string]: boolean;
}

export interface EditarAnimacaoAction {
    type: 'EDITAR_ANIMACAO';
    elemento: string;
    ativo: boolean;
}

export type EditarAnimacao = (elemento: string, ativo: boolean) => EditarAnimacaoAction;

type AnimacaoAction = EditarAnimacaoAction;

export type AnimacaoReducer = (elemento: AnimacaoState, action: AnimacaoAction) => AnimacaoState;