import React from 'react'

class CarsView extends React.Component {

    // state = {
    //     cars: null
    // }
    render(){
        const { cars } = this.props

        return(
            <div>
                <h4>asd</h4>
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