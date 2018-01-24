import React from 'react'
import {
    InputGroup,
    FormControl
} from 'react-bootstrap'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import './CarSearchForm.css'


class CarSearchForm extends React.Component {

    state = {
        valueCapacity: {
            min: 250,
            max: 800
        }
    }

    handleChange = event => {
        this.setState({
            inputValue: event.target.value
        })
    }

    render() {
        return (
            <form>
                <h3>Dobierz Auto</h3>
                <InputGroup>
                    <FormControl
                        onChange={this.props.handleChange}
                        type='text'
                    />
                </InputGroup>
                <InputRange
                    minValue={250}
                    maxValue={800}
                    value={this.props.valueCapacity}
                    onChange={valueCapacity => this.setState({valueCapacity})}
                />
            </form>
        )
    }
}

export default CarSearchForm