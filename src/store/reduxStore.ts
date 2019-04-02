import { Action, combineReducers, createStore } from 'redux';
import animacao from './animacao/animacaoReducers';
import { AnimacaoState } from './animacao/animacaoTypes';
import { Itens } from './itens/tipos';
import { ModalState } from './modal/modalTypes';
import { Post } from './posts/postsTypes';
import itens from './itens/reducers';
import { posts } from './posts/postsReducers';
import { modal } from './modal/modalReducers';
import { Navegador } from './navegador/tipos';
import navegador from './navegador/reducers';

export interface AppState extends Action {
  itens: Itens;
  posts: Post[];
  modal: ModalState;
  animacao: AnimacaoState;
  navegador: Navegador;
}

const reducers = combineReducers({
  itens,
  posts,
  modal,
  animacao,
  navegador
});

export const reduxStore = createStore(
  reducers,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
