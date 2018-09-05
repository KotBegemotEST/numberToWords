window.onload = function () {


        var last;
        var first;
        var second;
        var beforeLast;
        var digit;
        var output = document.getElementById("output");

		var button = document.getElementById("toWords");
    	button.onclick = addValue;

    function addValue(){
        var inputValue = document.getElementById("number").value;
        var numberSplit = String(inputValue).split("");
    	var numberSplitLength = numberSplit.length


    	console.log("numberSplit - " + numberSplit);
        console.log("numberSplitLength - " + numberSplitLength);

        if (numberSplitLength<=3) {
        	three(inputValue);
        }
        else{
        	toWords(inputValue);
        }
    }

	function three(dig,razrjad,ukazatel){

		var razrjad = razrjad;

		console.log("razrjad" + razrjad);

		var numberSplit = String(dig).split("");
    	var numberSplitLength = numberSplit.length
    	var number;
    	console.log("numberSplit сотни- " + numberSplit);
        console.log("numberSplitLength сотни - " + numberSplitLength);

		var zero = ["Ноль"]
  		var units = ["один","два","три","четыре","пять","шесть","семь","восемь","девять"];
  		var eleven = ["одинадцать","двенадцать","тринадцать"," четырнадцать","пятьнадцать","шестнадцать"," семнадцать","восемнадцать","девятнадцать"]
    	var decade = ["десять","двадцать","тридцать","сорок","пятьдесят","шестьдесят","семьдесят","восемьдесят","девяносто"];
    	var hundred = ["сто","двести","триста","четыреста","пятьсот","шестьсот","семьсот","восемьсот","девятьсот"];

		first = parseInt(numberSplit[0]);
		last = parseInt(numberSplit[numberSplit.length-1]);
 		beforeLast= parseInt(numberSplit[numberSplit.length-2]);
 		second = parseInt(numberSplit[1]);
    	/*------------0-----------------*/
         if(numberSplit[0]=="0"){
         	number = zero[0];
         }
/*------------1-9-----------------*/
        if(numberSplit.length-1 < 1 && dig > 0){
        	number = units[dig-1];
        }
/*------------11-19-----------------*/
        if (numberSplit.length <= 2 && numberSplit.length > 1 && dig%10 !=0 && dig < 20) {
        	number = eleven[last-1];
        }  
 /*------------10,20,30,40,50,60,70,80,90,-----------------*/ 
 		if (numberSplit.length == 2 && numberSplit[numberSplitLength-1] == "0") {
 			number = decade[first-1];
 		}
/*------------21-29,31-39,41-49 и тп -----------------*/
 		if (numberSplit.length == 2 && dig%10 !=0 && dig > 20) {
 			number = decade[first-1] +" " + units[second-1];
 		}
/*------------ 100,200,300,400,500,600,700,800,900 -----------------*/
		if (numberSplit.length == 3 && numberSplit[numberSplitLength-2]==0 && numberSplit[numberSplitLength-1]==0 ) {
			number = hundred[first-1];
		}
/*------------111,919 и тп -----------------*/
		if (numberSplit.length == 3 && dig%10 !=0  ) {
			if (numberSplit[1]==1){
				number = hundred[first-1] + " "+ eleven[last-1];
        	}  
		}
/*------------121-129,231-239,341-349 и тп -----------------*/
		if (numberSplit.length == 3 && numberSplit[numberSplitLength-2]!=0 ) {
			if (numberSplit[1]!=1 && numberSplit[2]!=0) {
				number = hundred[first-1] + " "+ decade[beforeLast-1] + " "+ units[last-1] ;
			}
			if (numberSplit[2]==0) {
				number = hundred[first-1] + " "+ decade[beforeLast-1];
			}	
 		}

/*------------ output -----------------*/
console.log(" 1 atribut " + dig)
console.log(" 2 atribut " + razrjad)
console.log(" 3 atribut " + ukazatel)

 		if (razrjad == null) {
 			output.innerHTML = number;

 		}
 		if(razrjad != null && dig>1){
 			var digit = {
 			firstNum : razrjad,
 			secondNum : number
 			};
 			console.log(digit.firstNum, digit.secondNum)
 			output.innerHTML = units[ukazatel-1] + " " +  digit.firstNum +" " + digit.secondNum;

 		}if (razrjad != null && dig<1){
 			var digit = {
 			firstNum : razrjad,
 			secondNum : number
 			};
 			console.log(digit.firstNum, digit.secondNum)
 			console.log(" pam " + units[ukazatel-1])
 			output.innerHTML = units[ukazatel-1] + " "  + digit.firstNum;
 		}

	}

function toWords (dig){

		var tousend = ["тысяч",'тысяча','тысячи'];
    	var million = ["Миллион",'Миллионов','Миллиона'];
    	var billion = ["Миллиард",'Миллиардов','Миллиарда'];
    	var trillion = ["Триллион",'Триллионов','Триллиона'];


		var numberSplit = String(dig).split("");
    	var numberSplitLength = numberSplit.length

    	var arr = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

    	 for (var i = 10 - numberSplitLength, j = 0; i < 10; i++, j++) {
            arr[i] = numberSplit[j];
        }
        console.log("последние цифры- " + arr);
        
/*------------ 1000-9999 -----------------*/

				var loop = 3;
				var digits = numberSplit.length-1 ;

		if (numberSplit.length == 4  ) {
			var numberSplit2 = arr[6];
			var lastThree = new Array();
			if (arr[10-numberSplitLength] == "1"||arr[10-numberSplitLength] == "2"||arr[10-numberSplitLength] == "3"||arr[10-numberSplitLength] == "4"||arr[10-numberSplitLength] == "5"||arr[10-numberSplitLength] == "6"||arr[10-numberSplitLength] == "7"||arr[10-numberSplitLength] == "8"||arr[10-numberSplitLength] == "9")  {

				console.log(" numberSplit разряды " + numberSplit);
				
				number = tousend[2];
						console.log("number2" + number)
				for(var i = 0, j=digits; i<loop; i++,j--){
					lastThree[i] = numberSplit[j] ;
					console.log("j - " + j );
					document.getElementById("output").innerHTML += " " + numberSplit[j] ;
				}

				lastThree.reverse();
				console.log("lastThree - " + lastThree);
				var troika = parseInt(lastThree.join(""));
				console.log("troika - " + troika);
				console.log("number" + number)
				three(troika, number,numberSplit2)
				/*return troika	*/				
			}
		}
		/*------------ 10000-99999 -----------------*/
		if (numberSplit.length == 5  ) {
			var numberSplit2 = arr[7];
		}
	}


}
