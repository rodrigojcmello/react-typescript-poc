import { bindActionCreators, Dispatch } from 'redux';
import { editarModal } from '../../store/modal/modalActions';
import { EditarModal } from '../../store/modal/modalTypes';

// Componente

export interface Props extends DispatchToProps {
  titulo: string;
  conteudo: JSX.Element;
}

// Redux

interface DispatchToProps {
  editarModal: EditarModal;
}
export function mapDispatchToProps(dispatch: Dispatch): DispatchToProps {
  return bindActionCreators({ editarModal }, dispatch);
}
