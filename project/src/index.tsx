import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {rootReducer} from './store/root-reducer';
import {redirect} from './store/middlewares/redirect';
import {checkAuthAction, fetchFilmsAction, fetchPromoFilmAction} from './store/api-actions';
import {requireAuthorization} from './store/action';
import {createAPI} from './services/api';
import App from './components/app/app';
import {AuthorizationStatus} from './const';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuthAction());
store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromoFilmAction());

ReactDOM.render(
  <Provider store={store}>
    <ToastContainer />
    <App />
  </Provider>,
  document.getElementById('root'));

export {store};
