import React from 'react'
import { connect } from 'react-redux';
import { fetchPlayer } from '../actions'

const PlayerStats = (props) => {
  return (
    <div className="item">
      <button onClick={props.fetchPlayer} className="ui red google button">Fetch Player</button>
    </div>
  )
};

export default connect(null, { fetchPlayer })(PlayerStats);
