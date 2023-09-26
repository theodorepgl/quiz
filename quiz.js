const questions = [
	{
		question: "What is the colour of apple?",
		options: ['red', 'blue', 'pink', 'yellow'],
		correctAnswer: 'red'
	},
	{
		question: "What is the colour of elephant?",
		options: ['black', 'green', 'grey', 'white'],
		correctAnswer: 'grey'
	}
];

let questionNumber = 0

const questionElement = document.getElementById('question')
const optionsElements = document.querySelectorAll('.option')
const feedbackElement = document.getElementById('feedback')
const nextElement = document.getElementById('next')

function displayQuestion(){
	questionElement.textContent = questions[questionNumber].question;
	optionsElements.forEach((option, index) => {
		option.textContent = questions[questionNumber].options[index];
		option.addEventListener('click', checkAnswer);
	})
}

function checkAnswer(event){
	const selectedOption = event.target.textContent;
	if (selectedOption === questions[questionNumber].correctAnswer) {
		feedbackElement.textContent = 'Correct!';
	}
	else {
		feedbackElement.textContent = 'Wrong!';
	}
}

nextElement.addEventListener('click', () => {
	questionNumber += 1;
	if (questionNumber < questions.length) {
		displayQuestion();
		feedbackElement.textContent = '';
	}
})
displayQuestion();