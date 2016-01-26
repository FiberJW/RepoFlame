Card = React.createClass({
  ooo(e){
    e.preventDefault();
    var card = stack.getCard(ReactDOM.findDOMNode(this));
    card.throwOut(1);
    window.open(this.props.repo.repoUrl,'_blank');
  },
  render() {
    return (
      <li>
        <div className="card large">
          <div className="card-image">
            <img height='150' src={this.props.repo.ownerAvatarUrl}/>
            <a className='card-title' href={this.props.repo.repoUrl} target='_BLANK'>{this.props.repo.name || 'Classified.'}</a>
          </div>
          <div className="card-content">
            <p>{this.props.repo.description || 'Description: Classified.'}</p>
            <p>Author: <a href={this.props.repo.ownerUrl} target="_BLANK">@{this.props.repo.owner || 'Classified.'}</a></p>
            <p>Language: {this.props.repo.language || 'Classified.'}</p>
            <p>{this.props.repo.stars || '0'} <span className="octicon octicon-star"></span></p>
            <p>{this.props.repo.watchers || '0'} <span className="octicon octicon-eye"></span></p>
            <p>{this.props.repo.forks || '0'} <span className="octicon octicon-git-branch"></span></p>
            <p>{this.props.repo.openIssues || '0'} <span className="octicon octicon-issue-opened"></span></p>
            <div className='card-action'>
              <button className="green btn-large center-align ooo-button" onClick={this.ooo}>Take me there! <span className="octicon octicon-sign-in"></span></button>
            </div>
          </div>
        </div>
      </li>
    );
  }
});