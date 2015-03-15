angular
	.module('board')

	.config(boardConfig);

function boardConfig($routeProvider){
	$routeProvider
		.when('/articles', {
			templateUrl: 'js/articles/table.html',
			controller: 'ArticleTableCtrl',
			controllerAs: 'table'
		})
		.when('/submit', {
			templateUrl: 'js/articles/form.html',
			controller: 'NewArticleCtrl',
			controllerAs: 'article'
		});
};