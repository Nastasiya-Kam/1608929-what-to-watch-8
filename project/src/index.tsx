import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createAPI} from './services/api';
import App from './components/app/app';
import {checkAuthAction, fetchFilmsAction, fetchPromoFilmAction} from './store/api-actions';
import {requireAuthorization} from './store/action';
import {AuthorizationStatus} from './const';
import {ThunkAppDispatch} from './types/action';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchFilmsAction());
(store.dispatch as ThunkAppDispatch)(fetchPromoFilmAction());

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root'));
