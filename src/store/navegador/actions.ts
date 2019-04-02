import { DefinirLarguraJanelaAction } from './tipos';

export default function definirLarguraJanela(larguraJanela: number): DefinirLarguraJanelaAction {
  return {
    type: 'DEFINIR_LARGURA_JANELA',
    larguraJanela
  };
}
