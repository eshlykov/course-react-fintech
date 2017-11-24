export const {
  ADD_NOTE,
  REMOVE_NOTE,
  REORDER_NOTE,
  UPDATE_NOTE,
  DELETE_ALL_NOTES
} = {
  ADD_NOTE: 'ADD_NOTE',
  REMOVE_NOTE: 'REMOVE_NOTE',
  REORDER_NOTE: 'REORDER_NOTE',
  UPDATE_NOTE: 'UPDATE_NOTE',
  DELETE_ALL_NOTES: 'DELETE_ALL_NOTES'
};

export default function notes (state = [], action) {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.note];
    case REMOVE_NOTE:
      return state.filter(note => note.id !== action.id);
    case REORDER_NOTE:
      const index1 = state.findIndex(note => note.id === action.fromId);
      const index2 = state.findIndex(note => note.id === action.toId);
      const i = Math.min(index1, index2);
      const j = Math.max(index1, index2);
      return [
        ...state.slice(0, i),
        state[j],
        ...state.slice(i + 1, j),
        state[i],
        ...state.slice(j + 1)
      ];
    case UPDATE_NOTE:
      return state.map(note => {
        if (note.id === action.note.id) {
          note.name = action.note.name;
        }
        return note;
      });
    case DELETE_ALL_NOTES:
      return [];
    default:
      return state;
  }
}
