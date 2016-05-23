

//////////////////////////////////////////////////////////////////////////

$scope.users = [
   {id: 1, name: 'awesome user1', status: 2, group: 4, groupName: 'admin'},
   {id: 2, name: 'awesome user2', status: undefined, group: 3, groupName: 'vip'},
   {id: 3, name: 'awesome user3', status: 2, group: null}
]; 

$scope.statuses = [
  {value: 1, text: 'status1'},
  {value: 2, text: 'status2'},
  {value: 3, text: 'status3'},
  {value: 4, text: 'status4'}
]; 

$scope.groups = [];
$scope.loadGroups = function() {
    return $scope.groups.length ? null : $http.get('/groups').success(function(data) {
        $scope.groups = data;
    });
};

$scope.showGroup = function(user) {
    if(user.group && $scope.groups.length) {
        var selected = $filter('filter')($scope.groups, {id: user.group});
        return selected.length ? selected[0].text : 'Not set';
    } else {
        return user.groupName || 'Not set';
    }
};

$scope.showStatus = function(user) {
    var selected = [];
    if(user.status) {
        selected = $filter('filter')($scope.statuses, {value: user.status});
    }
    return selected.length ? selected[0].text : 'Not set';
};

$scope.checkName = function(data, id) {
    if (id === 2 && data !== 'awesome') {
        return "Username 2 should be `awesome`";
    }
};

$scope.saveUser = function(data, id) {
    //$scope.user not updated yet
    angular.extend(data, {id: id});
    return $http.post('/saveUser', data);
};

// remove user
$scope.removeUser = function(index) {
    $scope.users.splice(index, 1);
};

// add user
$scope.addUser = function() {
    $scope.inserted = {
        id: $scope.users.length+1,
        name: '',
        status: null,
        group: null 
    };
    $scope.users.push($scope.inserted);
};
});


///////////////////////////////////
$scope.allStudentInfo = function () {
    $http.get(getStudents, {}).success(function (data, status) {
        console.log(data);
    });


}


$scope.gridDataSource = {
    transport: {
        read: function (e) {
            $http.get(getStudents, {}).success(function (data, status) {
                console.log(e);
                e.success(data.Data);
            });

        }
    },

    schema: {
        total: function (response) {
            console.log(response.Data);
            return response.Data
        },
        model: {
            id: "RollNo",
            fields: {

                'Name': { type: "string", editable: true, nullable: false, validation: { required: true } },
                'RollNo': { type: "string", editable: true, nullable: false, validation: { required: true } }
            }
        }
    },


    pageSize: 2,
    serverPaging: true,
    serverFiltering: true



};



$scope.gridDataSource786 = {
    transport: {
        read: function (response) {
            $http.get(getStudents, {}).success(function (data, status) {
                console.log(data.Data);
                response.success(data.Data);
            });
        }
    },
    pageSize: 2,
    serverPaging: true,
    serverFiltering: true



};


$scope.dsm1 = new kendo.data.DataSource({
    transport: {
        read: function (e) {

            var requestData = {
                page: e.data.page,
                pageSize: e.data.pageSize,
                type: "hello"
            };


            $http.get(getStudents, { data: requestData }).success(function (data, status) {
                console.log(data.Data);
                e.success(data);
            });
        }
    },
    pageSize: 2,
    serverPaging: true,
    serverFiltering: true,

    schema: {
        total: function (total) {
            return total.Data.length;

        },
        data: "Data"

    }
});



$scope.gridDataSource123 = {
    transport: {
        read: function (options) {
            var webapi = new kendo.data.transports.webapi({ prefix: "" });
            var params = webapi.parameterMap(options.data);

            $http.get(getStudents, {})
                .success(function (data) {
                    options.success(data);
                    
                })
                .error(function (data) {
                    options.error();
                });
        }
    },
    pageSize: 10,
    serverPaging: true,
    serverSorting: true,
    serverFiltering: true,
    serverGrouping: true,
    serverAggregates: true,
    schema: $.extend({}, kendo.data.schemas.webapi, { data: "Data", total: "Total", errors: "Errors" })
};



