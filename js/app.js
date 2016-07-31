// helper function for output
function writeAnswer(answer) {
    $('div.answer').append($('<div>').text(answer));
}

/*
function kiteGame(numberOfKites) {
    var answer;

        for(var i = 1; i < numberOfKites; i++){
        	if(0 === i%3 && 0 === i%5){
          	answer += "Peche! Ipo kaate!"
          }else if(0 === i%5){
          	answer += "Ipo kaate!"
          }else if(0 === i%3){
          	answer += "Peche!"
          }else{
          	answer += i;
          }
          answer += " "
        }
    writeAnswer(answer);
}
*/

var denomination = [5, 10, 20, 50, 100, 500, 1000]
function countNotes() {
	console.log(arguments);
	console.log(arguments.length);
	var arr = Array.prototype.slice.call(arguments);
		arr.filter(function(value){
		     denomination.indexOf(value) !== -1
	});
	var answer = arr.reduce(function(pre, cur){
		return pre + cur;
	});

    writeAnswer(answer);
}


countNotes(10, 20, 100);
