define(['durandal/app', 'durandal/system', 'plugins/router', 'plugins/http', 'knockout'], function (app, system, router, http, ko) {

    var loading = ko.observable();

    var vm = function () {
        var self = this;
        // Data
        self.title = "Tic Tac Toe"
        self.squares = ko.observableArray([]);
        self.EMPTY = ko.observable('\xA0');
        self.moves = ko.observable(0);
        self.turn = ko.observable('X');
        self.lbl1 = ko.observable('1');
        self.lbl2 = ko.observable('2');
        self.lbl3 = ko.observable('3');
        self.lbl4 = ko.observable('4');
        self.lbl5 = ko.observable('5');
        self.lbl6 = ko.observable('6');
        self.lbl7 = ko.observable('7');
        self.lbl8 = ko.observable('8');
        self.lbl9 = ko.observable('9');
        self.xscore = ko.observable(0);
        self.oscore = ko.observable(0);

        // Behaviours
        self.activate = activate;
        self.viewAttached = viewAttached;
        self.initializePageVars = initializePageVars;
        self.startNewGame = startNewGame;
        self.win = win;
        self.set = set;
        self.checkWin = checkWin;
        self.set1 = set1;
        self.set2 = set2;
        self.set3 = set3;
        self.set4 = set4;
        self.set5 = set5;
        self.set6 = set6;
        self.set7 = set7;
        self.set8 = set8;
        self.set9 = set9;

        function viewAttached() {
            initializePageVars();
            loading(false);
            return true;
        }

        function initializePageVars() {
            system.log('starting initializePageVars');
            startNewGame();
        }

        function startNewGame() {
            
            self.turn('X');
            self.xscore(0);
            self.oscore(0);
            self.moves(0);

            self.lbl1('1');
            self.lbl2('2');
            self.lbl3('3');
            self.lbl4('4');
            self.lbl5('5');
            self.lbl6('6');
            self.lbl7('7');
            self.lbl8('8');
            self.lbl9('9');

        }

        function win(score) {

            var wins = [ 7, 56, 448, 73, 146, 292, 273, 84 ];

            for(var i=0; i<wins.length; i++) {
                if ((wins[i] & score) === wins[i]) {
                    return true;
                }
            }
            return false;
        }

        function checkWin() {

            var xresult, oresult;

            if (self.turn() === 'X') {
                xresult = win(self.xscore());
            } else {
                oresult = win(self.oscore());
            }

            if (xresult === true || oresult === true) {
                if (xresult) { alert('X wins!'); startNewGame(); }
                if (oresult) { alert('O Wins!'); startNewGame(); }
            } else if (self.moves() === 9) {
                alert('Cat game!');
                startNewGame();
            } else {
                self.turn() === 'X' ? self.turn('O') : self.turn('X');
            }
            

        }

        function incrementScore(score) {

            // increment the score for the current turn
            if (self.turn() === 'X') {
                self.xscore(self.xscore()+score);
            } else {
                self.oscore(self.oscore()+score);
            }
            // increment the total moves
            self.moves(self.moves()+1);

            checkWin();
        }

        function set(cellid) {
            //if (loading() === true) return;

            switch(cellid) {
                case 1:
                    if (self.lbl1() === '1') {
                        self.lbl1(self.turn());
                        incrementScore(64);
                    }
                    break;
                case 2:
                    if (self.lbl2() === '2') {
                        self.lbl2(self.turn());
                        incrementScore(128);
                    }
                    break;
                case 3:
                    if (self.lbl3() === '3') {
                        self.lbl3(self.turn());
                        incrementScore(256);
                    }
                    break;
                case 4:
                    if (self.lbl4() === '4') {
                        self.lbl4(self.turn());
                        incrementScore(8);
                    }
                    break;
                case 5:
                    if (self.lbl5() === '5') {
                        self.lbl5(self.turn());
                        incrementScore(16);
                    }
                    break;
                case 6:
                    if (self.lbl6() === '6') {
                        self.lbl6(self.turn());
                        incrementScore(32);
                    }
                    break;
                case 7:
                    if (self.lbl7() === '7') {
                        self.lbl7(self.turn());
                        incrementScore(1);
                    }
                    break;
                case 8:
                    if (self.lbl8() === '8') {
                        self.lbl8(self.turn());
                        incrementScore(2);
                    }
                    break;
                case 9:
                    if (self.lbl9() === '9') {
                        self.lbl9(self.turn());
                        incrementScore(4);
                    }
                    break;
            } // end switch

        }

        function set1() {
            set(1);
        }
        function set2() {
            set(2);
        }
        function set3() {
            set(3);
        }
        function set4() {
            set(4);
        }
        function set5() {
            set(5);
        }
        function set6() {
            set(6);
        }
        function set7() {
            set(7);
        }
        function set8() {
            set(8);
        }
        function set9() {
            set(9);
        }

        

    };

    function activate() {
        loading(true);
        return true;
    }

    return vm;

});