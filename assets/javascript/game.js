
			var targetNumber = 33;
			var totalScore = 0;
			var value1 = 1;
			var value2 = 2;
			var value3 = 4;
			var value4 = 5;
			var wins = 0;
			var losses = 0;

			function initializeGame() {
				targetNumber = Math.floor((Math.random()*101)+19);
				totalScore = 0;
				value1 = Math.floor((Math.random()*12)+1);
				value2 = Math.floor((Math.random()*12)+1);
				value3 = Math.floor((Math.random()*12)+1);
				value4 = Math.floor((Math.random()*12)+1);

				$("#crystal1").attr("data-value", value1);
				$("#crystal2").attr("data-value", value2);
				$("#crystal3").attr("data-value", value3);
				$("#crystal4").attr("data-value", value4);
			}

			function updateHtml(){
				var html =
					"<p class='indent1'>Click monsters to score points" + "</p>" +
					"<p class='indent2'>target score: " + targetNumber + "</p>" +
					"<p class='indent2'>your current score: " + totalScore + "</p>" +
					"<p class='indent2'>wins: " + wins + "</p>" +
					"<p class='indent2'>losses: " + losses + "</p>" ;

				$("#html").html(html);
			}

			initializeGame();
			updateHtml();

			$(".crystal").on("click", function(){

				var crystalValue = ($(this).attr("data-value"));
				crystalValue = parseInt(crystalValue);

				totalScore += crystalValue;
				console.log(totalScore);

				if (totalScore < targetNumber){
					updateHtml();
				}
				if (totalScore > targetNumber){
					losses++;
					initializeGame();
					updateHtml();
				}
				if (totalScore === targetNumber){
					wins++;
					initializeGame();
					updateHtml();

				}


			});


