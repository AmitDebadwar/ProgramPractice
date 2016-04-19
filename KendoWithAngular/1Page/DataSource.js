vm.dropDown = new kendo.data.DataSource({
    data: [
        {id: 1, name: 'Opt 1'},
        {id: 2, name: 'Opt 2'},
        {id: 3, name: 'Opt 3'},
        {id: 4, name: 'Opt 4'},
        {id: 5, name: 'Opt 5'}
    ]
});

$scope.treeData = new kendo.data.HierarchicalDataSource({ data: [
    { text: "Ashok", type: 'CH', items: [
        {text: 'Sandhya', type: 'CH', items: [
            {text: 'Devansh', type: 'MO'},
            {text: 'Kalyani', type: 'MO'}
        ]},
        {text: 'Pankaj', type: 'MO'}
    ]},
    { text: "Chandrakant", type: 'CH', items: [
        { text: "Amit", type: 'MO' },
        { text: "Shraddha", type: 'MO' }
    ] },
    { text: "Suresh", type: 'CH', items: [
        {text: 'Pooja', type: 'MO'},
        {text: 'Shreyas', type: 'MO'}
    ] }
]});


//bind remote json file data
$("#chart").kendoChart({
    dataSource: {
        transport: {
            read: {
                url: "../content/dataviz/js/spain-electricity.json",
                dataType: "json"
            }
        },
        sort: {
            field: "year",
            dir: "asc"
        }
    }});



$scope.marksDataSource = new kendo.data.DataSource({
    transport: {
        read: function (e) {
            e.success($scope.marksSeries)
        }
    }
});