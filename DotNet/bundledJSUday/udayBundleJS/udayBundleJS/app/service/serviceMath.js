



require(['app'], function (app) {
    app.service("svrMath", [function () {
        return {
            getfunction: function () {
                return 'MathOperations';
            }

        }
    }]);
});



