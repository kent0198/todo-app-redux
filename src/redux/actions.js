export const addTodoAction=(data)=>{
    return {
        type:'todoList/addTodo',
        payload:data
    }
}
export const searchFilterChange=(text)=>{
    return {
        type:'filters/searchFilterChange',
        payload:text // tham só
    }
}