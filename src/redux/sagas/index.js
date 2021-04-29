import {all} from 'redux-saga/effects';
import rickandmortySaga from './rickandmorty.sagas';

export default function* rootSaga(){
    yield all([
        rickandmortySaga(),
    ])
}