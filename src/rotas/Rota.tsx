import React from 'react';
import {
  Redirect,
  Route,
  RouteProps,
  Switch,
  withRouter
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { RouteConfigComponentProps } from 'react-router-config';
import rotas from './rotas';
import { styled } from '../assets/estilo/styled-components';

const fakeAuth = true;

const TelaContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

function Rota(props: RouteProps): JSX.Element {
  const { location } = props;
  return (
    <Route
      render={() => (
        <TelaContainer>
          <TransitionGroup>
            <CSSTransition
              timeout={300}
              classNames="tela"
              key={location.pathname}
            >
              <Switch location={location}>
                {rotas.map(
                  ({ component: Component, privado, id, ...resto }) => {
                    return (
                      <Route
                        key={id}
                        render={(propsRota: RouteConfigComponentProps) =>
                          !privado || (privado && fakeAuth) ? (
                            <Component {...propsRota} />
                          ) : (
                            <Redirect to="/" />
                          )
                        }
                        {...resto}
                      />
                    );
                  }
                )}
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </TelaContainer>
      )}
    />
  );
}

export default withRouter(Rota);
