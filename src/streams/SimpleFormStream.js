import SimpleForm from '../components/SimpleForm';
import { map, startWith, delay } from 'rxjs/operators';
import { createEventHandler, componentFromStream } from 'recompose';

export const SimpleFormStream = componentFromStream(props$ => {
  const {
    stream: onInputs$,
    handler: handleInput
  } = createEventHandler();

  const text$ = onInputs$.pipe(
    map(e => e.target.value),
    delay(1000),
    startWith("")
  )
  
  return text$.pipe(
    map(text => ({text, handleInput})),
    map(SimpleForm)
  )
});
