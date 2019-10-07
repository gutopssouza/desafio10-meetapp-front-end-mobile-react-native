import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { utcToZonedTime } from 'date-fns-tz';

import api from '~/services/api';

import {
  loadMeetUpSuccess,
  updateMeetUpSuccess,
  meetUpFailed,
  destroyMeetUpSuccess,
} from '~/store/modules/meetup/actions';

export function* loadMeetUp() {
  try {
    const response = yield call(api.get, 'organizing');

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const data = response.data.map(meetup => {
      const date = utcToZonedTime(meetup.date, timezone);

      const dateFormatted = format(date, "d 'de' MMMM ', às ' H'h'", {
        locale: pt,
      });

      return {
        dateFormatted,
        ...meetup,
      };
    });

    yield put(loadMeetUpSuccess(data));
  } catch (err) {
    Alert.alert(
      'Falha no carregamento de meetups',
      'Erro ao carregar seus meetups'
    );
    yield put(meetUpFailed());
  }
}

export function* addMeetUp({ payload }) {
  try {
    yield call(api.post, 'meetups', payload.meetup);

    Alert.alert('Sucesso!', 'Meetup adicionado com sucesso!');

    // history.push('/dashboard');
  } catch (err) {
    Alert.alert(
      'Erro ao adicionar meetup',
      'Erro ao adicionar o meetup, verifique os dados'
    );
    yield put(meetUpFailed());
  }
}

export function* updateMeetUp({ payload }) {
  try {
    const response = yield call(api.put, `meetups/${payload.id}`, payload.data);

    yield put(updateMeetUpSuccess(response.data));

    Alert.alert('Sucesso!', 'MeetUp Atualizado com sucesso!');
  } catch (err) {
    Alert.alert('Erro ao atualizar', 'Erro ao atualizar!');
    yield put(meetUpFailed());
  }
}

export function* destroyMeetUp({ payload }) {
  try {
    yield call(api.delete, `meetups/${payload.id}`);
    // history.push('/dashboard');
    yield put(destroyMeetUpSuccess(payload.id));

    Alert.alert('Sucesso', 'Meetup cancelado com sucesso!');
  } catch (err) {
    Alert.alert('Erro ao deletar meetup', 'Erro ao deletar meetup!');
    yield put(meetUpFailed());
  }
}

export default all([
  takeLatest('@meetup/LOAD_MEET_UP_REQUEST', loadMeetUp),
  takeLatest('@meetup/ADD_MEET_UP', addMeetUp),
  takeLatest('@meetup/UPDATE_MEET_UP_REQUEST', updateMeetUp),
  takeLatest('@meetup/DESTROY_MEET_UP_REQUEST', destroyMeetUp),
]);
