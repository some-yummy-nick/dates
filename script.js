function randomDate(date1, date2) {
	var options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timezone: 'UTC'
	};

	var day = {
		weekday: 'long'
	};

	function getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min;
	}

	var date1 = new Date(date1).getTime();
	var date2 = new Date(date2).getTime();

	var date3 = new Date(getRandomArbitrary(date2, date1));
	var day = date3.toLocaleString("ru", day);
	var dateFormat = date3.toLocaleString("ru", options);

	var dateObject = {
		dateFormat: dateFormat,
		day: day
	};

	return dateObject;

}

randomDate('01/01/1900', '12/31/2020');

function dayOutput(dateObject) {
	var day = dateObject.day;
	var dateFormat = dateObject.dateFormat;
	var dateHtml = document.querySelector(".js-date");
	var dateItem = document.createElement('div');
	dateItem.className = "date__item";
	var dayHtml = document.createElement('div');
	dayHtml.className = "date__day";
	dayHtml.innerHTML = day;
	var propHtml = document.createElement('div');
	propHtml.className = "date__prop";
	propHtml.innerHTML = dateFormat;
	dateItem.appendChild(propHtml);
	dateItem.appendChild(dayHtml);
	dateHtml.appendChild(dateItem);
	propHtml.addEventListener("click", function () {
		var dayOther = document.querySelectorAll(".date__day");
		for (let i = 0; i < dayOther.length; i++) {
			dayOther[i].classList.remove("active");
		}
		this.nextElementSibling.classList.add("active");
	})
}

dayOutput(randomDate('01/01/1900', '12/31/2020'));

for (let i = 0; i < 10; i++) {
	dayOutput(randomDate('01/01/1900', '12/31/2020'));
}