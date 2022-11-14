export interface TodoItemState {
    name: string
    count: number
    index: number
}

export interface ITodoItemState {
    length: any
    items: TodoItemState[] //[oat, almond, soy] => original: string[] (array with str inside)W
}