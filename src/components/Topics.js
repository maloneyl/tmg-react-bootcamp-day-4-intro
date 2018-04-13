import React from 'react'
import {
  Link, // changes URL
  Route // used to render a component based on a path
} from 'react-router-dom'

function Topic({ match }) { // prop from React router
  return <h3>{match.params.topicId}</h3>
}

export default function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-vs-state`}>Props vs State</Link>
        </li>
      </ul>

      <hr />

      <Route path={`${match.path}/:topicId`} component={Topic}></Route>
    </div>
  )
}
