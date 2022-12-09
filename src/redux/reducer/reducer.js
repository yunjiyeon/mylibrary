let initialState = { booksList : [], keyword: "" }; // 새 state (keyword) 추가

function reducer(state = initialState, action){
  let { type, payload} = action; // action 재분해 이용 
  switch (type){
    case "ADD_BOOKS" :
      state.booksList.push({
        name:payload.name, 
        writer:payload.writer,
      });
      break;

    case "SEARCH_BY_NAME" : // 새로운 케이스 추가 
      state.keyword = payload.keyword
      break;
  }
  return{...state};
}

export default reducer;