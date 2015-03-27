angular.module('app')
    .controller('todoController', todoController);

todoController.$inject = ['dataFactory'];
function todoController(data) {
    var viewModel = this;
    viewModel.debugOne = debugOne;
    viewModel.debugTwo = debugTwo;
    
    function debugOne() {
        data.set('val', { name: 'Max' });
        toastr.info('Set data to local storage', 'todoController.debugTwo');
    }
    
    function debugTwo() {
        var val = data.get('val');
        toastr.info('Got the following data: ' + val.name, 'todoController: debugTwo()');
    }
}