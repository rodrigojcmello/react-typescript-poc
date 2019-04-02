export interface Tema {
  fonte1: string;
  cor1: string;
  primaryColorInverted: string;
  preto1: string;
  preto2: string;
  corDivisao: string;
}

export const tema: Tema = {
  fonte1: 'Roboto, sans-serif',
  cor1: '#C86DD7',
  primaryColorInverted: 'purple',
  preto1: '#4D4D4D', // 70% preto
  preto2: '#999999', // 60% preto
  corDivisao: '#EFEFEF' // 94% branco
};
