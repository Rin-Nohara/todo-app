import { ADD_TASK, VIEW_ALL_TASK, EDIT_TASK } from "./actionType";

const taskInitState: any[] = []

function reducer(state: any, action: any, payload: any) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        payload
      ];
    case VIEW_ALL_TASK:
      return { count: state.count - 1 };
    case EDIT_TASK:
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export default {
  taskStore: {
    reducer,
    taskInitState
  },
};
