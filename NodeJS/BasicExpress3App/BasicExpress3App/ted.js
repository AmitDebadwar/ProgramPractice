var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

var config = {
    userName: 'iwebuser',
    password: 'iwebuser',
    server: 'PNEITSH52343D',
    options: {
    database:'AmitD_ATT'
    }
   
};

var connection = new Connection(config);

connection.on('connect', function (err) {
    // If no error, then good to go...
    executeStatement();
}
);

connection.on('debug', function (text) {
    //console.log(text);
}
);

var request;

function executeStatement() {
    request = new Request("select *from tblUser", function (err, rowCount) {
        if (err) {
            console.log(err);
        } else {
            console.log(rowCount + ' rows');
        }
        
        connection.close();
    });
    
    request.on('row', function (columns) {
        columns.forEach(function (column) {
            if (column.value === null) {
                console.log('NULL');
            } else {
                console.log(column.value);
            }
        });
    });
    
    request.on('done', function (rowCount, more) {
        console.log(rowCount + ' rows returned');
    });
    
    
    connection.execSql(request);
}