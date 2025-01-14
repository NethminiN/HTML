//2022
</style>
	<script>
		function validateForm(yourname, youremail, noOfEvents, incomeLevel) {
			//	check all inputs and if inputs are correct, the function will return true otherwise false.

			var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

			if (yourname.trim() === "") {
				alert("Name Should not be empty");
				return false;
			}
			if (youremail.trim() === "") {
				alert("email Should not be empty");
				return false;

			}else if (!youremail.match(emailPattern)) {

				alert("email Should be in correct format");
				return false;
			}

			if (incomeLevel !== "1" && incomeLevel !== "2") {
				alert("Please select a monthly income level.");
				return false;
			}

			if (noOfEvents < 1 || noOfEvents > 5) {

				alert("Number of events expected to attend should be between 1 and 5.");
				return false;

			}

			


			return true;


		}

		function calculateDiscountRate(noOfEvents, incomeLevel) {

			var discountRate = 0;

				if(incomeLevel == "1"){
					discountRate = discountRate + 0.2;
				}

				if(noOfEvents > 2){
					discountRate = discountRate + 0.1;
				}

			return discountRate;

					//incomeLevel = 1    --->  20 %
					//incomeLevel = 2    --->  0%

					//noOfEvents > 2     --->  10%
					//noOfEvents <= 2     --->  0%

					//Example : if incomeLevel = 1 and number of events =3 then the discount is 30%
				

		}

		function getAmount() {
			// Take inputs from the form.
			var yourname = document.forms["frmcostcalc"]["txtname"].value;
			var youremail = document.forms["frmcostcalc"]["txtemail"].value;
			var noOfEvents =parseInt(document.forms["frmcostcalc"]["numnoofevents"].value);
			var incomeLevel = document.forms["frmcostcalc"]["cmbincome"].value;





			//	Call validateForm function and if the result is true, continue the calculation otherwise stop the function with an alert message 

			if(validateForm(yourname, youremail, noOfEvents, incomeLevel)){
				//	Call calculateDiscountRate and calculate the discount rate
				var discountRate =  calculateDiscountRate(noOfEvents,incomeLevel)
				var costPerEvent = 5000;

				//	Calculate the total cost by ( costPerEvent x Discount Rate x number of events )
				var totalCost = costPerEvent * (1 - discountRate) * noOfEvents;

				/* Create the output as follows and show it in output div
			
				Dear [Your name],
				
				The total cost for your requirement is Rs. [cost]
			
			*/
				var outputDiv = document.getElementById("output");
                outputDiv.innerHTML = "Dear " + yourname + ",<br><br>The total cost for your requirement is Rs. " + totalCost;

				
			
			}

		}

	</script>