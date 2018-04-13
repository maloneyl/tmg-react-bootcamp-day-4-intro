import React from 'react'
import {
  Link, // changes URL
  Route // used to render a component based on a path
} from 'react-router-dom'

function Topic({ match }) { // prop from React router
  return <h3>{match.params.topicId}</h3>
}

export default function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to='/topics/rendering'>Rendering with React</Link>
        </li>
        <li>
          <Link to='/topics/components'>Components</Link>
        </li>
        <li>
          <Link to='/topics/props-vs-state'>Props vs State</Link>
        </li>
      </ul>

      <hr />

      <Route path='/topics/:topicId' component={Topic}></Route>
    </div>
  )
}
