	let inputTimer = document.getElementById('input_timer');
	let deadLineDef = '2020-02-17';
	
	function getTimeRemaning(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor((t/1000) % 60),
			minutes = Math.floor((t/1000/60) % 60),
			// hours = Math.floor((t/(1000*60*60)));
			hours = Math.floor(((t/1000/60/60) % 24)-3),
			days = Math.floor((t/(1000*60*60*24)));

		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			days = timer.querySelector('.days'),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds'),
			timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
			let t = getTimeRemaning(endtime);
			days.textContent = t.days;
			hours.textContent = t.hours;
			if ((t.minutes +'').length == 2) {
				minutes.textContent = t.minutes;
			} else {
				minutes.textContent = '0' + t.minutes;
			}
			seconds.textContent = t.seconds;
			
			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}

	setClock('timer', deadLineDef);
});
