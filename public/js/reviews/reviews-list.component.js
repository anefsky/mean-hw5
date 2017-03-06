angular.module('foodApp').component('reviewsList', {
	templateUrl: 'js/reviews/reviews-list.template.html',
	controller: function ReviewsListController(){
		this.reviews = [
		{
			name: 'review1309',
			title: 'Custard\'s',
			date: '2013-09-01',
			description: 'Sleek wood chairs look as if they’re fetched from the nearest Danish design store. Circular leather booths would fit in any Midtown steakhouse.',
			image: 'resto1.png'
		},
		{
			name: 'review1404',
			title: 'Grillenium',
			date: '2014-04-15',
			description: 'It is made from a special broth that simmers for several hours infused with exotic spices and served over rice noodles with fresh herbs.The most dramatic feature is a stadium-style bar terrace, where, from my upper-level perch one night, I almost dropped a chopstick on a waiter ten feet below.',
			image: 'resto2.png'
		},
		{
			name: 'review1210',
			title: 'Lebanese Scrooge',
			date: '2012-10-01',
			description: 'Refined riffs on classic hawker fare and eclectic fusion dishes come courtesy of Paul Donnelly, a native Scotsman who cooked for years in Sydney.',
			image: 'resto3.png'
		},
		{
			name: 'review1810',
			title: 'Bread Zeppelin',
			date: '2012-10-20',
			description: 'In a compelling Franco-Sino starter, the kitchen tames the bilious bite of chicken liver mousse with the warmth of five spice and fragrant maple syrup.',
			image: 'resto4.png'
		},
		{
			name: 'review1811x',
			title: 'Thai Tanic',
			date: '2012-10-20',
			description: 'Donnelly laces his batter with xantham gum and pipes it out of a whipped cream canister. The wizardry transforms the vegetable into the nightshade equivalent of a pommes souffle, except these ethereal batons pack the sugars of a sweet plantain.',
			image: 'resto5.png'
		}
		]
	}
})






















