import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();
});

import Product from '../blocks/product/product';

$(() => new Product().render());
