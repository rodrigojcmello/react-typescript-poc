import * as firebase from 'firebase';

export interface Item {
  titulo: string;
  concluido: boolean;
  dataCriacao: firebase.firestore.Timestamp;
  pai?: string;
  nivelHierarquico: number;
  ordem: number;
}

export interface PorId {
  [index: string]: Item;
}

interface Nivel {
  [index: number]: string[];
}

export interface Pais {
  [id: string]: string[];
}

export interface Itens {
  porId: PorId;
  todosIds: string[];
  todosNiveis: Nivel;
  pais: Pais;
  ativos: string[];
}

interface DefinirItensAction {
  type: 'DEFINIR_ITENS';
  itens: Itens;
}

export type DefinirItens = (itens: Itens) => DefinirItensAction;

interface DefinirItemAtivoAction {
  type: 'DEFINIR_ITEM_ATIVO';
  id: string;
  indice: number;
}

export type DefinirItemAtivo = (
  id: string,
  indice: number
) => DefinirItemAtivoAction;

interface DefinirOrdemAction {
  type: 'DEFINIR_ORDEM';
  pai: string;
  filhos: string[];
}

export type DefinirOrdem = (id: string, filhos: string[]) => DefinirOrdemAction;

export type ItensAction =
  | DefinirItensAction
  | DefinirItemAtivoAction
  | DefinirOrdemAction;
