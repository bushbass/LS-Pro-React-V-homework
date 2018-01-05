import React from 'react';

export default ({ match }) => (
  <div>
    <h3>{match.params.productId}</h3>
  </div>
)