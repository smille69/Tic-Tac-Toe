define(['durandal/app', 'durandal/system', 'plugins/router', 'plugins/http', 'knockout'], function (app, system, router, http, ko) {

    var snippet = function(data) {
        var self = this;
        self.id = ko.observable(data.id);
        self.title = ko.observable(data.title);
        self.code = ko.observable(data.code);
        self.linenos = ko.observable(data.linenos);
        self.language = ko.observable(data.language);
        self.style = ko.observable(data.style);
    };

    var vm = function () {
        var self = this;
        // Data
        self.title = "Test App Home"
        self.test = ko.observable('test string');
        self.snippets = ko.observableArray([]);
        self.id = ko.observable();
        self.code = ko.observable();
        self.title = ko.observable();
        self.linenos = ko.observable();
        self.language = ko.observable();
        self.style = ko.observable();

        // Behaviours
        self.activate = activate;
        self.viewAttached = viewAttached;
        self.doSomething = doSomething;
        self.initializePageVars = initializePageVars;

        function viewAttached() {
            initializePageVars();
            return true;
        }

        function initializePageVars() {
            getSnippets();
        }

        function doSomething() {
            getSnippets();
            getSnippetRecord();
            putSnippetRecord();
        }

        function getSnippets() {
            var svc = "http://localhost:8000/snippets";
            http.get(svc).then(function(response, status) {
               //var result = $.parseJSON(response);
                self.snippets.removeAll();
                $.each(response, function(i, item) {
                   var s = new snippet(item);
                    self.snippets.push(s);
                });
            });

        }

        function getSnippetRecord() {
            var svc = "http://localhost:8000/snippets/2";
            http.get(svc).then(function(response,status) {
               self.id(response.id);
               self.code(response.code);
               self.linenos(response.linenos);
               self.title(response.title);
               self.language(response.language);
               self.style(response.style);
            });
        }

        function putSnippetRecord() {
            var svc = "http://localhost:8000/snippets/2/";
            var data = {
                id: 2,
                code: 'return here;',
                title: 'New Title',
                linenos: true,
                language: 'perl',
                style: 'friendly'
            }
            /*http.post(svc, data).then(function(response) {
               var result = response;
            });*/
            $.ajax({
                 type: "PUT",
                 url: svc,
                 contentType: "application/json; charset=utf-8",
                 data: JSON.stringify(data),
                 dataType: "json",
                success: function (data, status, jqXHR) {
                    var test = status;
                 },

                 error: function (jqXHR, status) {
                     var test = status;

                 }
             });

        }


    };

    function activate() {
        return true;
    }







    return vm;

});