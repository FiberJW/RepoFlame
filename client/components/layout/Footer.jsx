Footer = React.createClass({
  render() {
    return (
      <footer className="page-footer grey darken-4">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text"><span className='lob'>RepoFlame</span>. Tinder for <a className="grey-text text-lighten-3" href="http://github.com" target='_BLANK'><span className="mega-octicon octicon-logo-github"></span></a></h5>
              <p className="grey-text text-lighten-4">Under active development.</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="http://twitter.com/datwheat" target='_BLANK'>Twitter</a></li>
                <li><a className="grey-text text-lighten-3" href="http://codepen.io/datwheat" target='_BLANK'>Codepen</a></li>
                <li><a className="grey-text text-lighten-3" href="http://github.com/datwheat" target='_BLANK'>GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          © 2016 <a href='http://github.com/datwheat' target='_BLANK'>@datwheat</a>
          </div>
        </div>
      </footer>
    );
  }
});
