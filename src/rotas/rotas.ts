import { RouteConfig } from 'react-router-config';
import uniqid from 'uniqid';
import Tela1 from '../telas/Tela1';
import Tela2 from '../telas/Tela2';

interface Config extends RouteConfig {
  privado?: boolean;
  id: string;
}

const rotas: Config[] = [
  {
    component: Tela2,
    path: '/tela-2',
    id: uniqid()
  },
  {
    component: Tela1,
    path: '/tela-1',
    id: uniqid()
  },
  {
    component: Tela1,
    path: '/',
    exact: true,
    id: uniqid('inicio')
  }
];

export default rotas;
