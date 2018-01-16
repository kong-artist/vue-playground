Vue.component('todo-controls', {
    data: function() {
        return {
            inputField: ''
        }
    },
    props: ['todos'],
    methods: {
        addTodo: function() {
            this.todos.push({
            task: this.inputField,
            completed: false
            });
        },
        deleteCompleted: function() {
            this.$emit('delete-completed');
        },
        isTodosEmpty: function () {
            return this.todos.filter(el => el.completed) && this.todos.filter(el => el.completed).length > 0;
        }
    },
    template: `
        <div>
            <input type="text" placeholder="Enter Todo Here..." v-model="inputField">
            <button type="button" name="addTodo" v-on:click="addTodo" v-show="inputField">Add Todo</button>
            <button type="button" name="deleteCompleted" v-on:click="deleteCompleted" v-show="isTodosEmpty()">Delete Completed</button>
        </div>`
});

Vue.component('todo-item', {
    props: ['item'],
    methods: {
        deleteTodo: function(idx) {
            this.$emit('delete-todo', idx);
        }
    },
    template: `
        <li v-bind:class="{ completed: item.todo.completed, todo: !item.todo.completed}">
            <input type="checkbox" v-model="item.todo.completed" >

            {{ item.todo.task }}
            {{ item.idx }}
            <button v-on:click="deleteTodo(item.idx)">X</button>
        </li>
    `
});


let app = new Vue({
    el: '#app',
    data: {
    title: "My Todo App",
    todos: [],
    },
    methods: {
        deleteCompleted: function() {
            this.todos = this.todos.filter(el => !el.completed)
        },
        deleteTodo: function(idx) {
            this.todos.splice(idx, 1);
        }
    },
});
