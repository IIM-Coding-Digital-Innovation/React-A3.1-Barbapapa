const initialState = {
    count: null,
    list: ["aaa","bbb","ccc"],
  };
  
  export default function counter(state = initialState, action) {
    switch (action.type) {
      case 'INCREMENT':
        return {
          count: state.count + 1
        };
      case 'DECREMENT':
        return {
          count: state.count - 1
        };
      default:
        return state;
    }
  }