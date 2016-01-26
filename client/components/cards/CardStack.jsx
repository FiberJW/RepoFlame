CardStack = React.createClass({
  render() {
    return (
      <div className="row">
        <div className="col s6 offset-s3">
          <ul className='stack'>
            {
              this.props.data.map(function(repo){
                return (<Card repo={repo} key={repo.id}/>);
              })
            }
          </ul>
        </div>
      </div>
    );
  }
});