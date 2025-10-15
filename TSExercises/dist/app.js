"use strict";
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
const count = document.getElementById('count');
let todos = [];
let nextId = 1;
function render() {
    if (!list || !count)
        return;
    list.innerHTML = '';
    if (todos.length === 0) {
        const li = document.createElement('li');
        li.className = 'empty';
        li.textContent = 'No todos yet.';
        list.appendChild(li);
    }
    else {
        for (const todo of todos) {
            const li = document.createElement('li');
            li.className = 'todo-item' + (todo.completed ? ' completed' : '');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.completed;
            checkbox.addEventListener('change', () => toggleTodo(todo.id));
            const text = document.createElement('span');
            text.className = 'text';
            text.textContent = todo.text;
            li.append(checkbox, text);
            list.appendChild(li);
        }
    }
    const remaining = todos.filter((t) => !t.completed).length;
    count.textContent = `${remaining} remaining`;
}
render();
const addTodo = (text) => {
    const trimmed = text.trim();
    if (!trimmed)
        return;
    todos.unshift({ id: nextId++, text: trimmed, completed: false });
    render();
};
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!input)
        return;
    addTodo(input.value);
    input.value = '';
    input.focus();
});
const toggleTodo = (id) => {
    todos = todos.map((t) => (t.id ? { ...t, completed: !t.completed } : t));
    render();
};
