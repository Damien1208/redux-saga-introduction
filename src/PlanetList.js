import React from 'react';
import { connect } from 'react-redux';

function PlanetList(props) {
  // If we don't have any planets, get some 🚀
  if (props.planets.length === 0) {
    return (
      // ... by clicking here 💁‍
      <button onClick={() => props.dispatch({ type: 'FETCH_PLANETS_START' })}>Fetch 🌍s</button>
    );
  }

  // Otherwise, show list of planets
  return (
    <div>
      {props.planets.map(planet => (
        <div key={planet.url}>
          <h3>{planet.name}</h3>
          <p>Weather: {planet.climate}</p>
        </div>
      ))}
      <button onClick={() => props.dispatch({ type: 'FETCH_MORE_PLANETS' })}>Fetch more</button>
    </div>
  );
}

// The mapping of this function determines to what data
// our component have access to
// `state` is the data in the redux store
function mapStateToProps(state) {
  // Puts the complete redux store state on the prop `planets`
  return {
    planets: state
  };
}

export default connect(mapStateToProps)(PlanetList);
