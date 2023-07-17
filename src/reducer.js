const initialState = [];
const TreeStructure ={}  
  const reducer = (state={}, action) => {
    if (action.type === "FETCH_DETAIL") {
      state={...state,rowData: action.payload.response, TreeStructure:{category:action.payload.category, currentTreeLabel:"Default"}}      // return state
    }
   if(action.type === "LABEL_CHANGE") {
      state={...state, TreeStructure: {...state.TreeStructure, currentTreeLabel: action.payload}}
    }
    console.log('State values', state)
    return state
  };
  
  export default reducer;