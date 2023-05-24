const initialState = {
    notes: [],
  };
  
  function rootReducer(state = initialState, action) {
    if (action.type === 'ADD_NOTE') {
      return {
        notes: [
          ...state.notes,
          {
            id: state.notes.length + 1,
            title: action.title,
            content: action.content
          }
        ]
      };
    } else if (action.type === 'REMOVE_NOTE') {
      return {
        notes: state.notes.filter(note => note.id !== action.id)
      };
    } else if (action.type === 'UPDATE_NOTE') {
      return {
        notes: state.notes.map(note => {
          if (note.id === action.id) {
            return {
              ...note,
              title: action.title,
              content: action.content
            };
          } else {
            return note;
          }
        })
      };
    } else {
      return state;
    }
  }
  
  export default rootReducer;
