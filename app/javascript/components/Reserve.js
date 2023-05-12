import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBoats } from '../Redux/Boats/boatsReducer';

const Reserve = () => {
  const dispatch = useDispatch();
  const { boats, status, error } = useSelector((state) => state.boats);

  useEffect(() => {
    dispatch(getBoats());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div>
      {boats.map((boat) => (
        <h1> {boat.name}</h1>
      ))}
    </div>
  )
}

export default Reserve;