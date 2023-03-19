import { createAction } from "redux-actions";

export const createTodo = createAction("CREATE_TODO");
export const removeTodo = createAction("REMOVE_TODO");
export const completeTodo = createAction("COMPLETE_TODO");
export const editTodo = createAction("EDIT_TODO");
export const saveEditing = createAction("SAVE_EDITING");
export const undoEditing = createAction("UNDO_EDITING");
