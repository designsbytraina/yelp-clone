import React, { PropTypes as T } from 'react';
import classnames from 'classnames';
import Map, { Marker } from 'google-maps-react';

import styles from './styles.module.css';

export class MapComponent extends React.Component {
  renderChildren() {
    const {children} = this.props;
    // ...
  }
  renderMarkers() {
    if (!this.props.places) { return null; }
    return this.props.places.map(place =>{
      return <Marker key={place.id}
                name={place.id}
                place={place}
                onClick={this.props.onMarkerClick.bind(this)}
                position={place.geometry.location}
              />
    })
  }
  onMarkerClick(item) {
    const {place} = item; // place prop
    const {push} = this.context.router;
    push(`/map/detail/${place.place_id}`)
  }
  render() {
    return (
      <Map google={this.props.google}
            className={styles.map}>
        {this.renderChildren()}
      </Map>
    )
  }
}

Container.contextTypes = {
  router: React.PropTypes.object
}

export default MapComponent;