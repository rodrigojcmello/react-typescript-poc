import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createPortal } from 'react-dom';
import IconeDelete from '../../assets/svg/simple-small/delete.svg';
import E from './estilo';
import { mapDispatchToProps, Props } from './tipos';

class Modal extends PureComponent<Props> {
  state = {
    animacao: false
  };

  el = document.createElement('div');

  fechar = () => {
    this.setState({ animacao: true }, () => {
      setTimeout(() => {
        const { editarModal } = this.props;
        editarModal(false);
      }, 300);
    });
  };

  componentDidMount(): void {
    document.getElementById('modal').appendChild(this.el);
  }

  componentWillUnmount(): void {
    document.getElementById('modal').removeChild(this.el);
  }

  render(): JSX.Element {
    const { titulo, conteudo } = this.props;
    const { animacao } = this.state;
    return createPortal(
      <E.Modal encerrar={animacao}>
        <E.Caixa>
          <E.Cabecalho>
            <E.Titulo>
              {titulo}
              <E.Fechar onClick={this.fechar}>
                <IconeDelete />
              </E.Fechar>
            </E.Titulo>
          </E.Cabecalho>
          <E.Conteudo>{conteudo}</E.Conteudo>
        </E.Caixa>
        <E.Fundo />
      </E.Modal>,
      this.el
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Modal);
