$(document).ready(function(){
    var x_index = 0;
    var o_index = 0;
    $(".square").click(function(){
        if(!$("#button").hasClass("started")) {
            return;
        }
        

        let circles = $(".circle");
        if (circles[0].classList.contains("turn")){
            if ($(this)[0].innerText == "") {
                $(this)[0].innerText = "o";
                $(".circle").toggleClass("turn");
                o_index = o_index + 1;
                console.log("o-" + o_index);
                // O  
                if(o_index > 2){
                    checkScore('o');
                }
            }
            else{
                alert("You cannot click this square, chose the empty one!");

            }
            
        }
        else{
            if ($(this)[0].innerText == ""){
                $(this)[0].innerText = "x";
                $(".circle").toggleClass("turn");
                x_index = x_index + 1;
                console.log("x-" + x_index);
                //X
                if(x_index > 2){
                    checkScore('x');
                }    
            }
            else{
                alert("You cannot click this square, chose the empty one!");
                
            }
            
        }


    });

    function checkScore(type){
        let squares = $(".square");
        if(type == 'x'){
            if(squares[0].innerText == 'x' && squares[1].innerText == 'x' && squares[2].innerText == 'x') {
                alert("Player 2 has won!");
            }
            if(squares[3].innerText == 'x' && squares[4].innerText == 'x' && squares[5].innerText == 'x') {
                alert("Player 2 has won!");
            }
            if(squares[6].innerText == 'x' && squares[7].innerText == 'x' && squares[8].innerText == 'x') {
                alert("Player 2 has won!");
            }
            if(squares[0].innerText == 'x' && squares[3].innerText == 'x' && squares[6].innerText == 'x') {
                alert("Player 2 has won!");
            }
            if(squares[1].innerText == 'x' && squares[4].innerText == 'x' && squares[7].innerText == 'x') {
                alert("Player 2 has won!");
            }
            if(squares[2].innerText == 'x' && squares[5].innerText == 'x' && squares[8].innerText == 'x') {
                alert("Player 2 has won!");
            }
            if(squares[0].innerText == 'x' && squares[4].innerText == 'x' && squares[8].innerText == 'x') {
                alert("Player 2 has won!");
            }
            if(squares[2].innerText == 'x' && squares[4].innerText == 'x' && squares[6].innerText == 'x') {
                alert("Player 2 has won!");
            }
        }
        else{
            if(squares[0].innerText == 'o' && squares[1].innerText == 'o' && squares[2].innerText == 'o') {
                alert("Player 1 has won!");
            }
            if(squares[3].innerText == 'o' && squares[4].innerText == 'o' && squares[5].innerText == 'o') {
                alert("Player 1 has won!");
            }
            if(squares[6].innerText == 'o' && squares[7].innerText == 'o' && squares[8].innerText == 'o') {
                alert("Player 1 has won!");
            }
            if(squares[0].innerText == 'o' && squares[3].innerText == 'o' && squares[6].innerText == 'o') {
                alert("Player 1 has won!");
            }
            if(squares[1].innerText == 'o' && squares[4].innerText == 'o' && squares[7].innerText == 'o') {
                alert("Player 1 has won!");
            }
            if(squares[2].innerText == 'o' && squares[5].innerText == 'o' && squares[8].innerText == 'o') {
                alert("Player 1 has won!");
            }
            if(squares[0].innerText == 'o' && squares[4].innerText == 'o' && squares[8].innerText == 'o') {
                alert("Player 1 has won!");
            }
            if(squares[2].innerText == 'o' && squares[4].innerText == 'o' && squares[6].innerText == 'o') {
                alert("Player 1 has won!");
            }
        }
    }

    $("#button").click(function() {
        if($("#button").hasClass("started")) {
            resetBoard();
        }
        $("#button").toggleClass("started");
    })

    function resetBoard() {
        let squares = $(".square");
        for (let i = 0; i < squares.length; i++) {
            squares[i].innerText = "";
        }
        if(!$("#player1")[0].children[0].classList.contains("turn")) {
            $(".circle").toggleClass("turn");
        }
    }


})