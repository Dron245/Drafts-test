// Подключение из node_modules
import * as noUiSlider from 'nouislider';
// Подключение стилей из scss/base/forms/range.scss 
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {
	const priceSlider = document.querySelector('#range');
	if (priceSlider) {
		let textFrom = priceSlider.getAttribute('data-from');
		let textTo = priceSlider.getAttribute('data-to');
		noUiSlider.create(priceSlider, {
			start:   [0,200],
			// connect: [true, false],
			tooltips: [
				false,
				wNumb({decimals: 0}), // tooltip with custom formatting
				// true 
		  ],
			range: {
				'min': [0],
				'max': [200]
			}
		});
		/*
		const priceStart = document.getElementById('price-start');
		const priceEnd = document.getElementById('price-end');
		priceStart.addEventListener('change', setPriceValues);
		priceEnd.addEventListener('change', setPriceValues);
		*/
		function setPriceValues() {
			let priceStartValue;
			let priceEndValue;
			if (priceStart.value != '') {
				priceStartValue = priceStart.value;
			}
			if (priceEnd.value != '') {
				priceEndValue = priceEnd.value;
			}
			priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
		}
		var rangeSliderValueElement = document.getElementById('slider-range-value');
		priceSlider.noUiSlider.on('update', function (values, handle) {
   	rangeSliderValueElement.innerHTML = values[handle];
});
	}
}
rangeInit();
