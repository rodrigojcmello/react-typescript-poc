import { createHashHistory } from 'history';
import { SyntheticEvent } from 'react';
import { editarAnimacao } from '../store/animacao/animacaoActions';
import { reduxStore } from '../store/reduxStore';

export const historia = createHashHistory();

export const link = (evento: SyntheticEvent<HTMLButtonElement>): void => {
  evento.preventDefault();
  const { destino } = evento.currentTarget.dataset;
  const avancar = evento.currentTarget.dataset.avancar === 'true';
  reduxStore.dispatch(editarAnimacao('telaAvancar', avancar));
  historia.push(destino);
};
