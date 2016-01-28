Card = React.createClass({
  render() {
    return (
      <li>
        <div className="card large">
          <div className="card-image">
            <img height='150' className='blur-me' alt='Flame' src={this.props.repo.image}/>
            <a className='card-title' href={this.props.repo.repoUrl} target='_BLANK'>{this.props.repo.name || 'Classified.'}</a>
          </div>
          <div className="card-content">
            <p>{this.props.repo.description || 'Description: Classified.'}</p>
            <p>Author: <a href={"https://github.com/" + this.props.repo.owner} target="_BLANK">@{this.props.repo.owner || 'Classified.'}</a></p>
            <p>Language: {this.props.repo.language || 'Classified.'}</p>
            <p>{this.props.repo.stars}.</p>
            <div className="card-action">
              <iframe src={"https://ghbtns.com/github-btn.html?user=" + this.props.repo.owner + "&repo=" + this.props.repo.name + "&type=star&count=true&size=large"} frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
            </div>
          </div>
        </div>
      </li>
    );
  }
});
