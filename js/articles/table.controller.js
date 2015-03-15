angular
	.module('board')


	.controller('ArticleTableCtrl', ArticleTableCtrl)

function ArticleTableCtrl($http) {
		var vm 	 = this,
				user = 'Anonymous',
				BASE_URL = new Firebase('https://brown-board.firebaseio.com');

		$http
			.get(BASE_URL + '/articles.json')
			.success(function(data){
				vm.articles = data;
		  })

		$http
	    .get(BASE_URL + '/votes/' + user + '.json')
	    .success(function (data) {
	      vm.usersVotes = data || {};
    });

		  vm.votes = function (direction, uuid) {
		  	var article = vm.articles[uuid];
		  	var vote = {};

		  	vote[uuid] = direction;

		  	if (!vm.usersVotes[uuid]) {
			  	if (direction === 'up') {
			  		article.votes.up++
			  	} else if (direction === 'down') {
			  		article.votes.down++
			  	}

			  	vm.usersVotes[uuid] = vote;

			  	$http
			  		.put(BASE_URL + '/articles/' + uuid + '.json', article)

			  	$http
			  		.patch(BASE_URL + '/votes/' + user + '.json', vote)

				};
		  };
};