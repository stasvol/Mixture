import { combineReducers } from 'redux';
import notes from './notes';
import {artworkId} from "./add_content";

const rootReducer = combineReducers({

  notes,
  artworkId
});

export default rootReducer;