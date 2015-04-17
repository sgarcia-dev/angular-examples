angular.module('app')
    .filter('parseDate', parseDate)
    .controller('appController', appController);

appController.$inject = ['dataFactory'];

function appController(data) {
    var viewModel = this;

    viewModel.fieldData = {
        summary: "",
        description: "",
        progress: 0,
        dueDate: null
    };

    viewModel.todos = data.getTodos();
    viewModel.addTodo = addTodo;

    function addTodo() {
        var newTodo = {
            summary: viewModel.fieldData.summary,
            description: viewModel.fieldData.description,
            progress: viewModel.fieldData.progress,
            dueDate: viewModel.fieldData.dueDate
        };
        
        data.addTodo(newTodo);
        
        viewModel.fieldData.summary = "";
        viewModel.fieldData.description = "";
        viewModel.fieldData.progress = 0;
        viewModel.fieldData.dueDate = null;
        
        $('#newTodoModal').modal('toggle');
    }
}

function parseDate() {
    return function(input) {
        return new Date(input).toDateString();
    };
}