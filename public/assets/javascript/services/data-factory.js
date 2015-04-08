angular.module('app')
    .factory('dataFactory', dataFactory);

dataFactory.$inject = ['localStorageService'];
function dataFactory(localStorageService) {
    var key = 'todo',
        cache = localStorageService.get(key);
    
    // initialize if empty with dummy value
    if (!cache) {
        var initdata = {
            versionDate: new Date().toJSON(),
            author: 'Sergei Garcia',
            todos: [{
                summary: 'Buy office supplies',
                description: "Buy 2 pencils, a ruler and a pencil sharpener",
                progress: 0.5,
                dueDate: new Date(2015, 4, 5)
            }]
        };
        cache = initdata;
        localStorageService.set(key, initdata);
    }
    
    return {
        getTodos: function() {
            return cache.todos;
        },
        getTodo: function() {
            
        },
        addTodo: function(todo) {
            cache.todos.push(todo);
            this.save();
        },
        deleteTodo: function() {
            
        },
        save: function() {
            localStorageService.set(key, cache);
        }
    };
}