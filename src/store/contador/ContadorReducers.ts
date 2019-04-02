import { Contador, ContadorAction } from './ContadorTypes';
import * as store from 'store';

const contadorState: Contador = {
    count: store.get('contador.count') || 0,
};

export const contador = (state = contadorState, action: ContadorAction): Contador => {
    let count: number;
    switch (action.type) {
        case 'EDITAR_CONTADOR':
            count = action.número + state.count;
            store.set('contador.count', count);
            return {
                ...state,
                count,
            };
        default:
            return state;
    }
};
