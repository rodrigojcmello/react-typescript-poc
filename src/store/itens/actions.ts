import {
  DefinirItemAtivo,
  DefinirItens,
  DefinirOrdem,
  Itens
} from './tipos';

export const definirItens: DefinirItens = (itens: Itens) => ({
  type: 'DEFINIR_ITENS',
  itens
});

export const definirItemAtivo: DefinirItemAtivo = (
  id: string,
  indice: number
) => ({
  type: 'DEFINIR_ITEM_ATIVO',
  id,
  indice
});

export const definirOrdem: DefinirOrdem = (id: string, filhos: string[]) => ({
  type: 'DEFINIR_ORDEM',
  pai: id,
  filhos
});
