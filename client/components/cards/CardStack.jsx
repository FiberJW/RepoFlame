CardStack = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var data = {}
    var handle = Meteor.subscribe('repoSearch');
    data.ready = ! handle.ready();
    data.repos = Repos.find({}).fetch().shuffle();
    return data
  },
  componentDidMount() {
    swingEm();
  },
  componentDidUpdate() {
    swingEm();
  },
  render() {
    return (
      <div className="row">
        <div className="col s6 offset-s3">
          <ul className='stack'>
            {
              this.data.repos.map(function(repo){
                return (<Card repo={repo} key={repo.id}/>);
              })
            }
          </ul>
        </div>
      </div>
    );
  }
});