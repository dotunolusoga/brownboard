angular
	.module('board')


	.controller('NewArticleCtrl', NewArticleCtrl);

function NewArticleCtrl ($http, $location) {
	var vm	 = this,
			BASE_URL = new Firebase('https://brown-board.firebaseio.com');

	vm.newArticle = {};


	vm.submit = function () {

    vm.newArticle.postDate = (new Date()).toJSON();
    vm.newArticle.submittedBy = 'Anonymous';
    vm.newArticle.votes = {up: 0, down: 0};

		$http
		.post(BASE_URL + '/articles.json', vm.newArticle)
		.success(function () {
			$location.path('/articles')
	  })
	}

};