import React from 'react';
import './index.css';

import reportWebVitals from './reportWebVitals';

import {rerenderEntireTree} from "./render";
import {addWallPostToState} from "./redux/state";
import {state} from "./redux/state";

rerenderEntireTree(state, addWallPostToState);





reportWebVitals();
