import {ThunkActionResult} from '../types/action';
import {loadFilms, loadPromo, requireAuthorization, requireLogout} from './action';
import {saveToken, dropToken, Token} from '../services/token';
import {APIRoute, AuthorizationStatus} from '../const';
import {Film, Films} from '../types/films';
import {AuthData} from '../types/auth-data';
import {adaptToClient} from '../utils';

const fetchFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Films>(APIRoute.Films);
    const adaptedData = data.map((film) => adaptToClient(film));

    dispatch(loadFilms(adaptedData));
  };

const fetchPromoFilmAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Film>(APIRoute.Promo);
    const adaptedData = adaptToClient(data);

    dispatch(loadPromo(adaptedData));
  };

const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      });
  };

const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  };

const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };

export {
  fetchFilmsAction,
  fetchPromoFilmAction,
  checkAuthAction,
  loginAction,
  logoutAction
};
