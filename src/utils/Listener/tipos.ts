import { bindActionCreators, Dispatch } from 'redux';
import definirLarguraJanela from '../../store/navegador/actions';
import { DefinirLarguraJanela } from '../../store/navegador/tipos';

// Componente

export interface Props extends DispatchToProps {
  children: JSX.Element;
}

// Redux

interface DispatchToProps {
  definirLarguraJanela: DefinirLarguraJanela;
}
export function mapDispatchToProps(dispatch: Dispatch): DispatchToProps {
  return bindActionCreators({ definirLarguraJanela }, dispatch);
}
