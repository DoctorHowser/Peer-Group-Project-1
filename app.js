var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var bonusAtticus =[];
var bonusJem = [];
var bonusBoo = [];
var bonusScout = [];

function findPerson(name){
	bonus("array"+name, "bonus"+name);
}

findPerson("Atticus");
console.log(bonusAtticus);
//bonus(arrayAtticus, bonusAtticus);
//console.log(bonusAtticus);

function bonus (arrayName, arrayTarget) {
	arrayTarget[0]= arrayName[0];

	var sti = 0
	switch (arrayName[3]) {
		case 2:
			sti = 0;
			break;
		case 3:
			sti = .04;
			break;
		case 4:
			sti = .06;
			break;
		case 5:
			sti = .10;
			break;
	}
	if (arrayName[1].length =4) {
		sti += .05;
	}
	if (arrayName[2] >65000) {
		sti -= .01;
	}
	if (sti > .13){
		sti = .13;
	}
	arrayTarget[1] = sti;

	var stiDollar;
	var finalIncome;

	function getStiDollar() {
		 stiDollar = sti * parseInt(arrayName[2]);
		 return;
	};

	getStiDollar();

	function getFinalIncome() {
		 finalIncome = stiDollar + parseInt(arrayName[2]);
		 return;
	};

	getFinalIncome();

	arrayTarget[2]=finalIncome;

	arrayTarget[3] = stiDollar;

	return arrayTarget;
}












