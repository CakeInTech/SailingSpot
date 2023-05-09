import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import { fetchBoatData } from '../actions/boat';


const Homepage = () => {
    console.log('Homepage rendered')
    const dispatch = useDispatch();
    const { boats } = useSelector((state) => state.boat);
    console.log(boats)

    useEffect(() => {
        dispatch(fetchBoatData());
    }, [dispatch]);

    return (
      <section>
        <div>
            <h1>Welcome to Sailing Spot</h1>
            <p>Please choose a boat</p>
        </div>

        <main>
            {boats.map((boat) => {
                return (
                    <div key={boat.id}>
                        <div>
                            <img src={boat.photo} alt="boat" />
                        </div>
                        <h3>{boat.name}</h3>

                    </div>
                )
            })}
        </main>
      </section>
    )
}

export default Homepage;
