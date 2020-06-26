import {createStore, combineReducers} from 'redux';

import numerosRedurce from './redurces/numeros';

const reducers = combineReducers ({
    numeros: numerosRedurce,
})

function storeConfig (){
    return createStore(reducers);
}

export default storeConfig;