import React from 'react'

class CarsView extends React.Component {

    state = {
        cars: null
    }
    render(){
        const { cars } = this.state

        return(
            <div>
                <h1>asd</h1>
                <ul>
                    {
                        cars && cars.map(
                            ({id, name, fuel_consumption, capacity, max_speed}) => (
                                <li key={id}>{name} {fuel_consumption} {capacity} {max_speed}</li>
                            )
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default CarsView