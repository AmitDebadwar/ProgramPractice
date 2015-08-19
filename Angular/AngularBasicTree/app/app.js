var app=angular.module('Mod',['ui.tree']);

app.controller('Ctrl',function($scope){
$scope.msg='Activated';
 
    $scope.remove = function(scope) {
      scope.remove();
    };

    $scope.toggle = function(scope) {
      scope.toggle();
    };

    $scope.moveLastToTheBegginig = function () {
      var a = $scope.data.pop();
      $scope.data.splice(0,0, a);
    };

    $scope.newSubItem = function(scope) {
      var nodeData = scope.$modelValue;
      nodeData.nodes.push({
        id: nodeData.id * 10 + nodeData.nodes.length,
        title: nodeData.title + '.' + (nodeData.nodes.length + 1),
        nodes: []
      });
    };

    var getRootNodesScope = function() {
      return angular.element(document.getElementById("tree-root")).scope();
    };

    $scope.collapseAll = function() {
      var scope = getRootNodesScope();
      scope.collapseAll();
    };

    $scope.expandAll = function() {
      var scope = getRootNodesScope();
      scope.expandAll();
    };
    
    
    

$scope.data = [{
    'id':1,
    'title':'LOI 5 Search Area 3672673.8377837782',
    'nodes':[
        {
            'id':11,
            'title':'Tracks (5)',
            'nodes':[
                {
                    'id':111,
                    'title':'12 Barnard (3)',
                    'nodes':[{
                        'id':1111,
                        'title':'Destinations (8)',
                        'nodes':[]
                    },{
                        'id':112,
                        'title':'David (3)',
                        'nodes':[]
                        
                    }]
                }
            ]
        }
    ]
}];
    
    
});

    