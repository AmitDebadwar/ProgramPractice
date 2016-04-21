 

require(['app'], function (app) {
    app.service("svrGetName", [function () {
        return {
            getName: function () {
                return 'coming from get name';
            }

        }
    }]);
});