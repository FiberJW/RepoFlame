Card = React.createClass({
  ooo(e){
    e.preventDefault();
    window.open(this.props.repo.repoUrl,'_blank');
  },
  render() {
    return (
      <li>
        <div className="card large">
          <div className="card-image">
            <img height='150' className='blur-me' alt='Flame' src={"http://loremflickr.com/500/150/burning?random=" + Random.id()}/>
            <a className='card-title' href={this.props.repo.repoUrl} target='_BLANK'>{this.props.repo.name || 'Classified.'}</a>
          </div>
          <div className="card-content">
            <p>{this.props.repo.description || 'Description: Classified.'}</p>
            <p>Author: <a href={"https://github.com/" + this.props.repo.owner} target="_BLANK">@{this.props.repo.owner || 'Classified.'}</a></p>
            <p>Language: {this.props.repo.language || 'Classified.'}</p>
            <p>{this.props.repo.stars}</p>
            <div className='card-action'>
              <button className="green btn-large center-align ooo-button" onClick={this.ooo}>Take me there! <span className="octicon octicon-sign-in"></span></button>
            </div>
          </div>
        </div>
      </li>
    );
  }
});
