import {AuthorizationStatus} from '../../const';
import {ActionType} from '../../types/action';
import {userProcess} from './user-process';

// Код проверки авторизации
// https://github.com/htmlacademy-react/guess-melody-8/pull/8/commits/c9a9e6f8730f4ab718e513c309e6248c444a3085

describe('Reducer: user-process', () => {
  const state = {
    authorizationStatus: AuthorizationStatus.Unknown,
  };

  it('should update authorizationStatus to "AUTH"', () => {
    const requiredAuthorizationAction = {
      type: ActionType.RequireAuthorization,
      payload: AuthorizationStatus.Auth,
    };

    expect(userProcess(state, requiredAuthorizationAction))
      .toEqual({authorizationStatus: AuthorizationStatus.Auth});
  });

  it('should update authorizationStatus to "NO_AUTH"', () => {
    const requiredAuthorizationAction = {
      type: ActionType.RequireAuthorization,
      payload: AuthorizationStatus.NoAuth,
    };

    expect(userProcess(state, requiredAuthorizationAction))
      .toEqual({authorizationStatus: AuthorizationStatus.NoAuth});
  });
});
