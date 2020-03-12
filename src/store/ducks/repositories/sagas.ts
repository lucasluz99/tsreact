import {
  call, put,
} from 'redux-saga/effects';
import api from '../../../services/api';

import * as RepositoriesActions from './actions';

export function* load() {
  try {
    const response = yield call(api.get, 'users/lucasluz99/repos');


    yield put(RepositoriesActions.loadSuccess(response.data));
  } catch (err) {
    yield put(RepositoriesActions.loadFailure());
  }
}
