import React, { useState } from 'react';
import ClipLoader from 'react-spinners/HashLoader';

function Spinner() {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState('#19A7CE');


  return (
    <div className="h-100 d-flex f-column justify-content-center align-items-center">
      <ClipLoader
        color={color}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;
