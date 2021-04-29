import {takeLatest, call, put} from 'redux-saga/effects';
import {FETCH_GET_CHARACTERS, response_characters, error} from './../actions/rickandmorty.action';
import axios from 'axios';


function* getCharacters(){
    try {
        const response = yield axios.get("https://rickandmortyapi.com/api/character").then((res)=>res);
        yield put(response_characters(response.data.results));
    } catch (e) {
        yield put(error(e));
    }
}


export default function* rickandmortySaga(){
    yield takeLatest(FETCH_GET_CHARACTERS,getCharacters);
}