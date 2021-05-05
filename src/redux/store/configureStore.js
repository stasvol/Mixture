import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/';
import {save, load} from "redux-localstorage-simple";
import createSagaMiddleware from 'redux-saga';
import {sagaWatcher} from '../reducers/sagas'



const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const saga = createSagaMiddleware()

export default function () {
    return createStore(
        rootReducer,
        composeEnhancers(
            applyMiddleware( saga,
                save({namespace: 'NotesList'})
                 )
        ),
    );
         saga.run(sagaWatcher)
}
