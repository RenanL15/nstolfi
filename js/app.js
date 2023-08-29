function List() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Stolfi</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="index.html">Sobre</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="resolver.html">Resolver n-Stolfi</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

ReactDOM.render(<List />, document.querySelector(".main-navbar"));