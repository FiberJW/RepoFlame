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
    if (this.data.ready) {
      return (
        <div className="row">
          <div className="col s6 offset-s3">
            <div className="card">
              <div className="card-image">
                <img className='blur-me responsive-img' alt='Flame' src={"http://loremflickr.com/500/150/burning?random=" + Random.id()}/>
                <span className="card-title">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
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
