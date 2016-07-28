//Variables & doc ready
$(document).ready(function(){
	$(".Option").hide();
	$(".giffy").hide();

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
		0,
		0,
		1,
		1,
		0,
		1
		];

	var count = 0;

	var prettyPic = [
		"assets/images/theory.gif",
		"assets/images/engrossed.gif",
		"assets/images/essentially.gif",
		"assets/images/internetnotgoodforyou.gif",
		"assets/images/amonster.gif",
		"assets/images/elvischip.gif"
		];

	//Start button & Questions
	$("#start").click(function(){
        $("#start").hide();
        $(".Option").show();
        $(".questionField").show();
        $("#question").html(questions[count]);
  		$("#0").html(option1[count]);
  		$("#1").html(option2[count]);
  		$("#2").html(option3[count]);
  		$("#3").html(option4[count]);
    });

	//Check to see if correct
	$(".Option").click(function(){ 
		var selected = $(this).attr("id");
		console.log (this);
		console.log (selected);
		
		$(".giffy").show();
		$(".giffy").html('<img src="'+ prettyPic[count] + '" height= "200"; width= "230">');

		if (selected == answer[count]) {
			//put gif in here
			$("<h3> Correct </h3>").prependTo(".giffy");
			//var prettyPic = ".GIF" + count;
			//$(prettyPic).appendTo(".giffy");
			//put pause here
			count++;
		}
		else {
			$("<h3> Wrong </h3>").prependTo(".giffy");
			count++;
		}

		//Check to see it's the last question
	});	

	$(".giffy").click(function(){ 
		$(".giffy").hide();
		$(".giffy").empty();
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
	  		$("#0").html(option1[count]);
	  		$("#1").html(option2[count]);
	  		$("#2").html(option3[count]);
	  		$("#3").html(option4[count]);
			}
	});


}); //goes to document ready
	
	