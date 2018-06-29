import React from 'react';
import {
  mapPropsStream,
  createEventHandler,
  compose
} from 'recompose';
import {
  merge,
  of,
  zip,
  from,
  interval
} from 'rxjs/';
import {
  switchMap,
  startWith,
  scan,
  pluck,
  catchError,
  mapTo
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const count = mapPropsStream(props$ => {
  const {stream: onInc$, handler: handleInc} = createEventHandler();
  const {stream: onDec$, handler: handleDec} = createEventHandler();

  return props$.pipe(
    switchMap(props => merge(
      onInc$.pipe(mapTo(1)),
      onDec$.pipe(mapTo(-1))
    ).pipe(
      startWith(0),
      scan((acc, curr) => acc + curr)
    ),
    (props, count) => ({
      ...props,
      count,
      handleInc,
      handleDec
    })))
});

const load = mapPropsStream(props$ => props$.pipe(
  switchMap(props => ajax(`https://swapi.co/api/people/${props.count}`).pipe(
    pluck('response'),
    startWith({name: 'Loading...'}),
    catchError(err => of({name: 'Not Found!'}))
  ),
  (props, person) => ({ ...props, person }))
))

const typewriter = mapPropsStream(props$ => props$.pipe(
  switchMap(
    props => zip(
      from(props.person.name),
      interval(20),
      letter => letter
    ).pipe(
      scan((acc, curr) => acc + curr)
    ),
    (props, name) => ({
      ...props,
      person: {...props.person, name }
    })
  )
))

const Counter = props => (
  <div>
    <button onClick={props.handleInc}>+</button>
    <button onClick={props.handleDec}>-</button>

    <h3>{props.count}</h3>
    <h3>{props.person.name}</h3>
  </div>
);

export const CounterWithPersonLoader = compose(
  count,
  load,
  typewriter
)(Counter)