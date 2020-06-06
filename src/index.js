import React from 'react';
import ReactDOM from 'react-dom';
import NoteList from "./components/NoteList"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <NoteList />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
