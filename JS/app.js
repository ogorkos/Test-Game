let arrSort=[];
let numQuestion = 0;
let numTrueQuestions = 0;
let arrFalseQuestions = [];
let pause = {pause: false, min:0, sec:0, msec:0};
let imgQuest=[];
let audioCurrent = new Audio(); 
let audioPause = true;

//******************* Logic ************************

// Получаем массив в случ цифр по длине arrQuestions
function sortRandome(len) {
	let arr=[];
	let x=0;
	for (let i = 0; i < len; i++) {arr[i] = i};
	arr.sort(function(){return Math.random()-0.5});
	return arr;
}

function addTrueAnswers(arr) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = {question: arr[i].question, 
							ans1: arr[i].ans1 ,
							ans2: arr[i].ans2,
							ans3: arr[i].ans3,
							ans4: arr[i].ans4,
						ansTrue: arr[i].ans1,
							 why: arr[i].why
				};
	}
	return arr
}
arrQuestions = addTrueAnswers(arrQuestions);

// Сортируем массив по нумерации отсортированного массива
function sortArrQuestions(arr, arrSortNum) {		
	for (let i = 0; i < arrSortNum.length; i++) {
		arrSortNum[i] = arr[arrSortNum[i]];			
	}
	return arrSortNum;
}
// срртируем в случ порядке вопросы в массиве
function sortAnswers(arr) {
	let arrTemp = [];
	let arrTemp2 = [];
	for (let k = 0; k < arr.length; k++) {
		arrTemp[k] = [];
		arrTemp[k][0] = arr[k].ans1;
		arrTemp[k][1] = arr[k].ans2;
		arrTemp[k][2] = arr[k].ans3;
		arrTemp[k][3] = arr[k].ans4;
	}
	for (let m = 0; m < arr.length; m++) {
		arrTemp2.push(sortArrQuestions(arrTemp[m], sortRandome(4)));
	}
	for (let i = 0; i < arr.length; i++) {
		arr[i] = { question: arr[i].question, 
							ans1: arrTemp2[i][0],
							ans2: arrTemp2[i][1],
							ans3: arrTemp2[i][2],
							ans4: arrTemp2[i][3],
						ansTrue: arr[i].ansTrue,
							 why: arr[i].why
		};
	}
	return arr
}
//******************* Doing ************************

// Заполняем вопросы и ответы
function showQuestions(arr, numEl) {
	document.getElementById("question").innerHTML = arr[numEl].question;
	document.getElementById("ans1").innerHTML = arr[numEl].ans1;
	document.getElementById("ans2").innerHTML = arr[numEl].ans2;
	document.getElementById("ans3").innerHTML = arr[numEl].ans3;
	document.getElementById("ans4").innerHTML = arr[numEl].ans4;			
	if ( numQuestion == 0) {timer("timerTest")} 
		else   {timer("timerTest", pause.min, pause.sec, pause.msec)}
	showImg();
	document.getElementById("numTest").innerHTML = "שאלה: " + (numQuestion+1) + "/" + arrSort.length ;
	progres(numQuestion, arrSort.length);
}

function showImg() {
	let numImg = Math.floor(Math.random()*21)+1;//21 - number of files in Img/questions
	if (imgQuest == numImg){imgQuest = Math.floor(Math.random()*21)+1} 
	else {imgQuest = numImg};
	let x= "./Img/questions/question\ \("+(imgQuest)+").jpg";
	document.getElementById("testImg").src = x;
}

function go(arrQuestions, firstOrNot) {
	audioCurrent.pause(); 
	audioCurrent =  new Audio(); 	
	numQuestion = 0;
	numTrueQuestions=0;
	arrFalseQuestions=[];
	document.getElementById("intro").style.display = "none";
	document.getElementById("testWindow").style.display = "block";

	arrSort = sortArrQuestions(arrQuestions, sortRandome(arrQuestions.length));
	sortAnswers(arrSort);
	console.table(arrSort);
			
	showQuestions(arrSort, numQuestion);	
}

function resetColorBtn() {
	for (let i = 1; i <= 4; i++) {
		const btn = document.getElementById("ans"+i);
		btn.classList.remove("answer_true");
		btn.classList.remove("answer_false");
	}
}

function sound (params) {//true /false
	let x;
	if (params) {
		params = "Yes/true";
		x = 7;//7 files in folder Yes
	} else {
		params = "No/false";
		x = 6;//6 files in folder No
	} 
	let runNum = Math.floor(Math.random()*x)+1;
	audioPlay("./Sound/" + params + "\ \(" + runNum + "\).mp3");
}

function pressAnswer(btn){
	pause.pause = true;
	let ansTrue = arrSort[numQuestion].ansTrue;
	console.log("ansTrue="+ansTrue);
	progres(numQuestion+1, arrSort.length);
	if (ansTrue == btn.innerHTML) {
		btn.classList.add("answer_true");
		numTrueQuestions++;
		sound (true);
		// setTimeout(() => {nextQuestion()}, 2000);
		setTimeout(() => {
			yesNo(true);
		}, 2000);
	} else {
		sound (false);
		btn.classList.add("answer_false");
		const btnsAnswer =document.getElementsByClassName("question")
		for (let i = 0; i < btnsAnswer.length; i++) {
			if (btnsAnswer[i].innerHTML == ansTrue){
				setTimeout(() => {
				btnsAnswer[i].classList.add("answer_true")}, 500);
			}				
		}			
		arrFalseQuestions.push(arrSort[numQuestion]);
		// console.log(arrSort[numQuestion]);
		// setTimeout(() => {nextQuestion()}, 3000);
		setTimeout(() => {
			yesNo(false);
		}, 4000);
	};
}

function yesNo(params) {
	if (params == true){
		params = "נכון";
		document.getElementById("whyYesNo").style.backgroundColor = "rgb(11, 224, 22)";
		document.getElementById("whyYesNo").style.color = "rgb(255, 38, 0)";
		document.getElementById("whyBtnOk").innerHTML = "שאלה הבאה";
	} else {
		params = "לא נכון";
		document.getElementById("whyYesNo").style.backgroundColor = "rgb(175, 6, 6)";
		document.getElementById("whyYesNo").style.color = "rgb(255, 238, 0)";
		document.getElementById("whyBtnOk").innerHTML = "הבנתי";
	} 
	document.getElementById("whyBlock").style.display = "flex";
	document.getElementById("whyYesNo").innerHTML = params;
	document.getElementById("whyText").innerHTML = arrSort[numQuestion].why;
	document.getElementById("testWindow").style.filter = "blur(7px)";
}

// function nextQuesBtn() {
// 	document.getElementById("nextWhy").style.display = "none";
// 	nextQuestion();
// }

// function whyBtn() {
// document.getElementById("nextWhy").style.display = "none";
// 	document.getElementById("whyBlock").style.display = "flex";
// 	document.getElementById("whyText").innerHTML = arrSort[numQuestion].why;
// 	console.log(arrSort[numQuestion].why);
	
// }

function whyBtnOk() {
	document.getElementById("whyBlock").style.display = "none";
	nextQuestion();	
}

function nextQuestion() {
	document.getElementById("testWindow").style.filter = "blur(0px)";
	if (numQuestion < arrSort.length-1){
			pause.pause = false;
			numQuestion++;
			resetColorBtn();
			showQuestions(arrSort, numQuestion);
	}else {theEnd()};
}

function theEnd(){
	console.log("THE END");
	console.table(arrFalseQuestions);
	document.getElementById("testWindow").style.display = "none";
	document.getElementById("finish").style.display = "block";
	document.getElementById("statisticTrue").innerHTML = "תשובות נכונות <br>"+ numTrueQuestions + " מ- " + arrSort.length;
	document.getElementById("statisticTime").innerHTML = 
	"הזמן שלך: " + showTime(pause.min, pause.sec, pause.msec);
	if (numTrueQuestions/arrSort.length>=0.7){
		audioPlay("./Sound/salut.mp3");
		for (let i = 1; i <= 4; i++) {
			let z = "salute"+i;
			setTimeout(() => {
				document.getElementById(z).style.display = "none";
			}, 10000);
			document.getElementById(z).style.display = "block";				
		}
	} else {audioPlay("./Sound/EndGameLosing/"+Math.floor(Math.random()*2+1)+".mp3");	}
	let btnMistakes = document.getElementById("mistakes");
	if (arrFalseQuestions.length>0){
			btnMistakes.style.display = "block";
		} else {btnMistakes.style.display = "none";}
}

function again() {
	document.getElementById("finish").style.display = "none";
	pause.pause = false;
	resetColorBtn();
	go(arrQuestions);
}
// Запускать  и показывать если есть массив arrFalseQuestions
function mistakes() {
	document.getElementById("finish").style.display = "none";
	pause.pause = false;
	resetColorBtn();
	go(arrFalseQuestions);
}

function timer(id, min=0, sec=0, msec=0) {
	setTimeout(()=>{
		msec++;
		if (msec == 10){
			msec = 0;
			sec++;	
		}
		if (sec == 60){
			sec = 0;
			min++;
		}
		document.getElementById(id).innerHTML = showTime(min, sec, msec)
		if (pause.pause){
				pause.min = min; 
				pause.sec = sec;
				pause.msec = msec;					
		} else{timer(id, min, sec, msec);};
	},100);			
};

function showTime(min, sec, msec){
	let mm;
	let ss;
	if (min<10){mm = "0"+min} else {mm = min};
	if (sec<10){ss = "0"+sec} else {ss = sec};
	return mm+":"+ss+"."+msec;		
}

function audioPlay(mySourse) {
	let audio = new Audio(); 
	audio.src = mySourse; 
	if (audioPause == false){audio.autoplay = true; }
	audioCurrent = audio;
}

function soundOmOff() {
	if (audioPause == false){
		audioCurrent.pause();
		audioPause = true;
		document.getElementById("soundIcon").classList.remove("fa-volume-mute");
		document.getElementById("soundIcon").classList.add("fa-volume-up");

	} 	else {
		audioCurrent.play();
		audioPause = false;
		document.getElementById("soundIcon").classList.add("fa-volume-mute");
		document.getElementById("soundIcon").classList.remove("fa-volume-up");

	}
}

function progres(qNow, qTotal) {
	let prog = qNow/qTotal;
	let line = document.getElementById("progres");
	if (prog == 0) {prog = 0.01}
	line.style.height = prog*80 + "vh";
	if (prog < 0.33){
		line.style.backgroundColor = "rgb(252, 80, 0)";
		line.style.boxShadow = "0px 0px 0px gold";		
	} else if (prog >= 0.33 && prog < 0.66){
		line.style.backgroundColor = "rgb(33, 201, 252)";
	} else {
		line.style.backgroundColor = "rgb(92, 252, 0)";		
	}
	if (prog ==1){
		setTimeout(() => {
			line.style.transform = "scaleX(2)";
			line.style.backgroundColor = "gold";		
			line.style.boxShadow = "0px 0px 20px gold";		
		}, 500)
		setTimeout(() => {
			line.style.transform = "scaleX(1)";
			line.style.boxShadow = "0px 0px 80px gold";		
		}, 1000);
}
}