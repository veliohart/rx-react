import { createEventHandler, componentFromStream } from 'recompose';
import { map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import SimpleForm from '../components/SimpleForm';

const API_URL = 'https://jsonplaceholder.typicode.com/';
const KEY = 'todos';
const getQueryParams = (params) => {
  const params = Object
    .keys()
    .map(key => !!parms[key] ? `${key}=${params[key]}` : '')
    .join('&');
  return params.length ? `?${params}` : '';
}

const getSuggestionsURL = (text) => `${API_URL}${KEY}${getQueryParams({name: text})}`;

const AutocompleateStream = componentFromStream(props$ => 
  props$.pipe(
    map(props => {

    })
  )
);