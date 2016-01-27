Meteor.publish('repoSearch', function() {
  var self = this;
  var aboutAWeekAgo = moment().subtract(7, 'days').format('YYYY-MM-DD'),
    queryString = `https://api.github.com/search/repositories?q=created:>${aboutAWeekAgo}&sort=stars&order=desc&per_page=100`;
    HTTP.get(queryString, {
      headers: {
        "User-Agent": "datwheat"
      }
    }, function(err, res) {
        if (err) {
          console.log(err);
        } else {
        res.data.items.forEach(function(repo) {
          var doc = {
            name: repo.name,
            language: repo.language,
            id: repo.id,
            description: repo.description,
            repoUrl: repo.html_url,
            owner: repo.owner.login,
            ownerAvatarUrl: repo.owner.avatar_url,
            ownerUrl: repo.owner.html_url,
            stars: repo.stargazers_count,
            watchers: repo.watchers,
            forks: repo.forks,
            openIssues: repo.open_issues
          };
          self.added('repos', Random.id(), doc);
        });
        self.ready();
      }
    });
});
