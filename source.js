(function () {
	document.addEventListener('DOMContentLoaded', function () {
		var redBtn = document.querySelector('button.red');
		var yellowBtn = document.querySelector('button.yellow');
		var contents = document.querySelectorAll('div.content');

		function setBgColor(color) {
			contents.forEach(function (el) {
				el.style.backgroundColor = color;
			});
		}

		if (redBtn) {
			redBtn.addEventListener('click', function () { setBgColor('red'); });
		}

		if (yellowBtn) {
			yellowBtn.addEventListener('click', function () { setBgColor('yellow'); });
		}
	});
})();

