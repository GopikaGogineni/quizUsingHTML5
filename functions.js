
function rightAnswer(){

	var quantRightAnswer= 0;
	var listenRightAnswer = 0;
	
	var q1 = document.getElementsByName('qtn1');
	for(i = 0;  i < q1.length; i++){
		if(q1[i].checked){
			if(q1[i].value == 'optn4'){
			quantRightAnswer++;
			break;
			}
		}
	}
	
	document.writeln(quantRightAnswer);
	//window.location.href = 'page2.html';
	
	var q2 = document.getElementsByName('qtn2');
	for(i = 0;  i < q2.length; i++){
		if(q2[i].checked){
			if(q2[i].value == 'opt4'){
			quantRightAnswer++;
			break;
			}
		}
	}
	
	//window.location.href = 'page4.html';
	
	
	var q4 = document.getElementsByName('qtn4');
	for(i = 0;  i < q4.length; i++){
		if(q4[i].checked){
			if(q4[i].value == 'opt1'){
			listenRightAnswer++;
			break;
			}
		}
	}
		
	
}


