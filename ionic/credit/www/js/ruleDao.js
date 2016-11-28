var creditApp = angular.module('creditApp');

creditApp.service('ruleDao', ['$http', '$log', function ($http, $log) {
    this.addRule = function (rule, callback) {
        $http.post('http://localhost:3000/rules', {
                'creditName': rule.creditName,
                'score': rule.score,
                'isIncome': rule.isIncome
            })
            .then(function (response) {
                $log.info("saved rule successfully");
                callback();
            }, function (response) {
                $log.info('failed to save rule ' + response.data);
            });
    }

    this.getRules = function (callback) {
        $http.get('http://localhost:3000/rules')
            .then(function (response) {
                var data = response.data;
                callback(data);
            }, function (response) {
                $log.info('failed to get rules ' + response.data);
            })
    }

    this.getRuleById = function (id, callback) {
        $http.get('http://localhost:3000/rules/' + id)
            .then(function (response) {
                var data = response.data[0];
                callback(data);
            }, function (response) {
                $log.info('failed to get rule by id ' + id);
            });
    }

    this.updateRule = function (rule, callback) {
        var id = rule._id;
        $http.put('http://localhost:3000/rules/' + id, {
                'creditName': rule.creditName,
                'score': rule.score,
                'isIncome': rule.isIncome
            })
            .then(function (response) {
                $log.info("saved rule successfully");
                callback();
            }, function (response) {
                $log.info('failed to update rule by id ' + id);
            })
    }

    this.deleteRule = function (rule, callback) {
        var id = rule._id;
        $http.delete('http://localhost:3000/rules/' + id)
            .then(function (response) {
                $log.info('deleted rule successfully');
                callback();
            }, function (response) {
                $log.error('failed to delete rule by id ' + id);
            });
    }
}])
