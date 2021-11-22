import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {AuthorizationStatus} from '../../const';

const getAuthoritationStatus = (state: State): AuthorizationStatus => state[NameSpace.user].authorizationStatus;

export {getAuthoritationStatus};
