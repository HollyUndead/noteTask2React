export interface TodoState {
    todos: any[],
    loading: boolean,
    error: null | string,
    page: number,
    limit: number
}

export enum TodoActionTypes {
    FETCH_TODO = 'FETCH_TODO',
    FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS',
    FETCH_TODO_ERROR = 'FETCH_TODO_ERROR',
    SET_TODO_PAGE = 'SET_TODO_PAGE'
}

interface FetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_TODO_SUCCESS,
    payload: any[]
}

interface FetchTodoErrorAction {
    type: TodoActionTypes.FETCH_TODO_ERROR,
    payload: string
}

interface FetchTodoPage {
    type: TodoActionTypes.SET_TODO_PAGE
    payload: number
}

interface FetchTodoAction {
    type: TodoActionTypes.FETCH_TODO
}

export type TodoAction = FetchTodoSuccessAction | FetchTodoErrorAction | FetchTodoPage | FetchTodoAction