import {ADD_NOTE} from "../actions/notes";
import {save, load} from "redux-localstorage-simple"

let initState = load({namespace: 'NotesList'})

if (!initState || !initState.notes || !initState.notes.length) {
    initState = {
        notes: ["note 1", "note 2", "note 3", "note 4"],
    }
}

export default function (state = initState.notes, action) {
    switch (action.type) {
        case ADD_NOTE:
            return [
                ...state.slice(0, action.afterIndex + 1),
                action.text,
                ...state.slice(action.afterIndex + 1)
            ];
        default:
            return state;
    }
}
