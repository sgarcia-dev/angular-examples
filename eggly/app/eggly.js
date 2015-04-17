angular.module('Eggly', [])
    .controller('MainCtrl', MainCtrl);

function MainCtrl($scope) {
    // ---------------------------------
    // STATE
    // ---------------------------------
    $scope.currentCategory = null;
    $scope.isCreating = null;
    $scope.isEditing = null;
    $scope.editedBookmark = null;

    $scope.categories = [{
        "id": 0,
        "name": "Development"
    }, {
        "id": 1,
        "name": "Design"
    }, {
        "id": 2,
        "name": "Exercise"
    }, {
        "id": 3,
        "name": "Humor"
    }];

    $scope.bookmarks = [{
        "id": 0,
        "title": "AngularJS",
        "url": "http://angularjs.org",
        "category": "Development"
    }, {
        "id": 1,
        "title": "Egghead.io",
        "url": "http://angularjs.org",
        "category": "Development"
    }, {
        "id": 2,
        "title": "A List Apart",
        "url": "http://alistapart.com/",
        "category": "Design"
    }, {
        "id": 3,
        "title": "One Page Love",
        "url": "http://onepagelove.com/",
        "category": "Design"
    }, {
        "id": 4,
        "title": "MobilityWOD",
        "url": "http://www.mobilitywod.com/",
        "category": "Exercise"
    }, {
        "id": 5,
        "title": "Robb Wolf",
        "url": "http://robbwolf.com/",
        "category": "Exercise"
    }, {
        "id": 6,
        "title": "Senor Gif",
        "url": "http://memebase.cheezburger.com/senorgif",
        "category": "Humor"
    }, {
        "id": 7,
        "title": "Wimp",
        "url": "http://wimp.com",
        "category": "Humor"
    }, {
        "id": 8,
        "title": "Dump",
        "url": "http://dump.com",
        "category": "Humor"
    }];
    
    // ---------------------------------
    // IMPLEMENTATION
    // ---------------------------------
    // category changing
    $scope.setCurrentCategory = setCurrentCategory;
    $scope.isCurrentCategory = isCurrentCategory;
    // crud states
    $scope.shouldShowCreating = shouldShowCreating;
    $scope.startCreating = startCreating;
    $scope.cancelCreating = cancelCreating;
    $scope.startEditing = startEditing;
    $scope.cancelEditing = cancelEditing;
    $scope.shouldShowEditing = shouldShowEditing;
    // crud methods
    $scope.setEditedBookmark = setEditedBookmark;
    $scope.isSelectedBookmark = isSelectedBookmark;
    $scope.createBookmark = createBookmark;
    $scope.updateBookmark = updateBookmark;
    $scope.deleteBookmark = deleteBookmark;
    
    // ---------------------------------
    // METHODS
    // ---------------------------------
    // category changing
    function setCurrentCategory(_category) {
        $scope.currentCategory = _category;
    }

    function isCurrentCategory(_category) {
        return $scope.currentCategory !== null && _category.name == $scope.currentCategory.name;
    }
    // crud states
    function shouldShowCreating() {
        return $scope.currentCategory && !$scope.isEditing;
    }

    function startCreating() {
        $scope.isCreating = true;
        $scope.isEditing = false;
        resetCreateForm();
    }

    function cancelCreating() {
        $scope.isCreating = false;
    }


    function shouldShowEditing() {
        return $scope.isEditing && !$scope.isCreating;
    }

    function startEditing() {
        $scope.isCreating = false;
        $scope.isEditing = true;
    }

    function cancelEditing() {
        $scope.isEditing = false;
        $scope.editedBookmark = null;
    }
    // crud methods
    function setEditedBookmark(bookmark) {
        $scope.editedBookmark = angular.copy(bookmark);
    }

    function isSelectedBookmark(bookmarkId) {
        return $scope.editedBookmark !== null && $scope.editedBookmark.id === bookmarkId;
    }

    function resetCreateForm() {
        $scope.newBookmark = {
            title: '',
            url: '',
            category: $scope.currentCategory.name
        };
    }

    function createBookmark(bookmark) {
        console.log(bookmark);
        bookmark.id = $scope.bookmarks.length;
        $scope.bookmarks.push(bookmark);

        resetCreateForm();
    }

    function updateBookmark(bookmark) {
        console.log(bookmark);
        var index = _.findIndex($scope.bookmarks, function(b) {
            return b.id == bookmark.id
        });
        $scope.bookmarks[index] = bookmark;

        $scope.editedBookmark = null;
        $scope.isEditing = false;
    }

    function deleteBookmark(bookmark) {
        _.remove($scope.bookmarks, function(item) {
            return item.id == bookmark.id;
        });
    }
};