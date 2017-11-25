import $ from 'jquery';

export default class {
	constructor(options) {
		const defaults = {
			el: '.js-product',
			dom: {
				input: '.js-product-input',
				label: '.js-product-label'
			},
			classes: {
				checkedHover: 'product_checked-hover'
			}
		};

		this.options = $.extend(true, {}, defaults, options);
		this.$el = (this.options.el instanceof $) ? this.options.el : $(this.options.el);
		return this;
	}

	getDom() {
		const {input, label} = this.options.dom;
		this.$input = this.$el.find(input);
		this.$label = this.$el.find(label);

		return this;
	}

	onChange = e => {
		const $target = $(e.currentTarget);
		const $parent = $target.closest(this.$el);
		const $input = $parent.find(this.$input);
		$parent.removeClass(this.options.classes.checkedHover);
		$input.blur();
	}

	onClick = e => {
		const $target = $(e.currentTarget);
		const $parent = $target.closest(this.$el);
		const $input = $parent.find(this.$input);
		$parent.toggleClass(this.options.classes.checkedHover, !$input.prop('checked'));
	}

	init() {
		this.$label.on('mouseleave', this.onChange);
		this.$label.on('click', this.onClick);
	}

	render() {
		if (this.$el.length) {
			this
				.getDom()
				.init();
		}
		return this;
	}
}
