let students = [
	{
	 	name: "Ryan",
	 	note1: 9,
	 	note2: 10
	},
	{
		name: "Juvêncio",
		note1: 5,
		note2: 3
	},
	{
		name: "Mayk",
	  	note1: 10,
	  	note2: 10
	}
]

function averageStudent (note1, note2){
	let calcAverage = (note1 + note2) /2
	return calcAverage
}

function messageResult(name, average){
	let resultMessage
	let approved = average > 7
	if(approved){
		resultMessage = `Parabéns, ${name}! voce foi aprovado(a) no concurso!`
	}else {
		resultMessage = `Não foi dessa vez ${name}, Tente novamente!`
	}
	
	return resultMessage
}

function printMessage(student){
	let resultAverage = averageStudent(student.note1, student.note2)
	let resultMessage = messageResult(student.name, resultAverage)
	
	return `A media do(a) aluno(a) é: ${resultAverage}
${resultMessage}`
}

for(let student of students){
	let messageStundet = printMessage(student)
	alert(messageStundet)
}

