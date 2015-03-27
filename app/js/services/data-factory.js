angular.module('app')
    .factory('dataFactory', dataFactory);

dataFactory.$inject = ['localStorageService'];
function dataFactory(localStorageService) {
    return {
        set: localStorageService.set,
        get: localStorageService.get,
    }
}