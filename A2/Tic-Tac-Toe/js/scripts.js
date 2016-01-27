var zones = [],
        SIZE = 3,
        EMPTY = "&nbsp;",
        score,
        moves,
        turn = "X",
        wins = [7, 56, 448, 73, 146, 292, 273, 84],
        xWins = 0,
        oWins = 0;

    var startNewGame = function(){
        turn = "X";
        score = {"X": 0, "O": 0};
        moves = 0;
        zones.forEach(function (zones) {zones.html(EMPTY);});
        if (xWins != 0 || oWins != 0){
            document.getElementById("resultMessage").innerHTML = "X: " + xWins + " &nbsp: &nbsp; O: " + oWins;
        }
    };
    
    var win = function(score){
        for (var x = 0; x < wins.length; x += 1){
            if((wins[x] & score) === wins[x]){
                return true;
            }
        }
    }
    
    var set = function(){
        if($(this).html() !== EMPTY){
            return;
        }
        $(this).html(turn);
        console.log($(this));
        moves += 1;
        score[turn] += $(this)[0].indicator;
        console.log(score[turn]);
        if(win(score[turn])){
            document.getElementById("resultMessage").innerHTML = turn +" wins!";
            if (turn === "X"){
                xWins++;
            } else{
                oWins++;
            }
        } else if (moves === SIZE * SIZE){
            document.getElementById("scoreBoard").innerHTML = "Tied";
        }else{
            turn = turn === "X" ? "O" : "X";
        }
    };

    var play = function(){
        var board = $("<table border=1 cellspacing=0 align=center>"), indicator = 1;
        for(var x = 0; x < SIZE; x += 1){
            var row = $("<tr>");
            board.append(row);
            for(var y = 0; y < SIZE; y += 1){
                var cell = $("<td height=125 width=125 align= center valign=center style='font-size:30px; border-width: 3px'></td>");
                cell[0].indicator = indicator;
                cell.click(set);
                row.append(cell);
                zones.push(cell);
                indicator += indicator;
            }
        }
        
        $(document.getElementById("game") || document.body).append(board);
        startNewGame();
    };
    
    play();