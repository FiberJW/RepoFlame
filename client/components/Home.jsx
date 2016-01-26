Home = React.createClass({
  getInitialState(){
    return {
      data: []
    }
  },
  componentDidMount: function() {
      var repos,
      component = this,
      aboutAWeekAgo = moment().subtract(7, 'days').format('YYYY-MM-DD'),
      queryString = `https://api.github.com/search/repositories?q=created:>${aboutAWeekAgo}&sort=stars&order=desc&per_page=100`;
      $.ajax(queryString)
        .done(function(data) {
          repos = data.items.map(function(repo){
            return {
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
            }
          });
          repos.shuffle();
          if (component.isMounted()) {
            component.setState({
              data: repos
            });
            swingEm();
          }
        })
        .fail(function(xhr, status) {
          alert('Please refresh your page.');
      });
  },
  render() {
    return (
      <CardStack data={this.state.data} />
    );
  }
});