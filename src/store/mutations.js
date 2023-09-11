const addOneItem = (state, todoItem) => {
    let obj = {completed: false, item: todoItem};
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}
const removeOneItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.todoItem.index, 1);
}
const toggleOneItem = (state, payload) => {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}
const clearTodo = (state) => {
    localStorage.clear();
    state.todoItems.splice(0);
}

export { addOneItem, removeOneItem, toggleOneItem, clearTodo }