import React from 'react'
import PropsTypes from 'prop-types'
export default function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.tittle}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              {props.search ? <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li> : "Babu mosaye"}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
Header.propsTypes = {
  tittle: PropsTypes.string
}
Header.defaultProps = {
  tittle: "Your Tittle Here"
}