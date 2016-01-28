Meteor.publish('repoSearch', function() {
  var self = this;
  var trending = Meteor.npmRequire('github-trending');

  trending(function (err, repositories) {
    if (err) {
      console.log(err);
    } else {
      repositories.shuffle();
      repositories.forEach(function(repo) {
        var doc = {
          name: repo.title,
          id: Random.id(),
          language: repo.language,
          description: repo.description,
          repoUrl: repo.url,
          owner: repo.owner,
          stars: repo.star
        };
        self.added('repos', Random.id(), doc);
      });
      self.ready();
    }
  });
});
