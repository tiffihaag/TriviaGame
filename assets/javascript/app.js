//Variables & doc ready
$(document).ready(function(){
	$(".Option").hide();

	var questions = [
		"Who was Mulder's first secret informant?",
		"What is Mulder's computer password, that Scully easily cracks?",
		"A memorable bad guy from the first season was Eugene Tooms, who appeared in 2 episodes. When Mulder and Scully had their final confrontation with him, how did he die?",
		"What is the message that appears in the majority of the opening titles?",
		"What kind of seed is Mulder obsessed with?",
		"Ultimately, why did Mulder investigate the X Files?"
		];

	var option1 = [
		"Deep Throat",
		"Trustno1",
		"Shot to Death",
		"Trust No One",
		"Sunflower Seeds",
		"So he could waste the FBI's money"
		];

	var option2 = [
		"Alex Krycek",
		"TheTruthIsOutThere",
		"Crushed to death",
		"The Truth is Out There",
		"Grass Seeds",
		"To find his missing sister, Samantha"
		];

	var option3 = [
		"Mr. X",
		"ScullyIsaSpy",
		"Suffocated",
		"I Want To Believe",
		"Lotus Seeds",
		"To find his one, true love"
		];

	var option4 = [
		"Well-Manicured Man",
		"IBelieveNothing",
		"Rapid aging",
		"Fight for the Future",
		"Pistachios",
		"To find his mother"
		];

	var answer = [
		"Deep Throat",
		0,
		1,
		0,
		1,
		1
		];

	var count = 0;

	//Start button & Questions
	$("#start").click(function(){
        $("#start").hide();
        $(".Option").show();
        $(".questionField").show();
        $("#question").html(questions[count]);
  		$("#Option1").html(option1[count]);
  		$("#Option2").html(option2[count]);
  		$("#Option3").html(option3[count]);
  		$("#Option4").html(option4[count]);
    });

	//Check to see if correct
	$(".Option").click(function(){ 
		var selected = $(this).val();
		console.log (this);
		
		if (selected == answer[count]) {
			//put gif in here
			alert("Correct!");
			count++;
		}
		else {
			alert("Wrong Guess.");
			count++;
		}

		//Check to see it's the last question
			if(count == questions.length) {
				$(".Option").hide();
       			$(".questionField").hide();
       			$("#question").hide();
       			alert("Game Over");
       			window.location.reload(false);
			}
			else {
			$(".Option").show();
	        $(".questionField").show();
	        $("#question").html(questions[count]);
	  		$("#Option1").html(option1[count]);
	  		$("#Option2").html(option2[count]);
	  		$("#Option3").html(option3[count]);
	  		$("#Option4").html(option4[count]);
			}
	});



}); //goes to document ready
	
	