import React from 'react';
import { componentFromStream, setObservableConfig } from 'recompose';
import { map, switchMap } from 'rxjs/operators';
import { from } from 'rxjs';
import App from './App';
import { SimpleFormStream } from './streams/SimpleFormStream';
const rxjsConfig = {
  fromESObservable: from,
  toESObservable: function toESObservable(stream) {
    return stream;
  }
}

setObservableConfig(rxjsConfig);
export const AppStream = componentFromStream(props$ => 
  props$
    .pipe(
      map(props => (
        <div>
          <App {...props}/>
          <SimpleFormStream {...props}/>
        </div>  
      ))
    )
);
