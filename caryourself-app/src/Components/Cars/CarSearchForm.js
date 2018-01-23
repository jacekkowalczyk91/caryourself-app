import React from 'react'
import {
    InputGroup,
    FormControl
} from 'react-bootstrap'

class CarSearchForm extends React.Component {

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
            </form>
        )
    }
}

export default CarSearchForm