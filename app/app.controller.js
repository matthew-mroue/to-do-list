"use strict";
function ToDoController() {
    const vm = this;
    vm.tasks = [
        { task: "Walk the dog", completed: false},
        { task: "Woke up", completed: true},
        { task: "Eat dinner", completed: false},
        { task: "Say nice things to people", completed: true}
    ];
}

angular
.module("todoApp")
.controller("ToDoController", ToDoController);