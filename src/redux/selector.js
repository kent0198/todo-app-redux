import {createSelector} from 'reselect'

export const todoListSelector=(state)=>{

    const searchText= searchTextSelector(state);

    const todoRemaining = state.todoList.filter((todo)=>{ // hàm filter này sẽ trả về những các todo nào thỏa điều kiện bên trong 

        return todo.name.includes(state.filters.search);

    });

    return todoRemaining;
}

export const searchTextSelector=(state)=>state.filters.search;