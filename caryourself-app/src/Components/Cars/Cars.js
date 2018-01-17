import React from 'react'

class Cars extends React.Component {

    componentDidMount() {
        fetch(
            `${process.env.PUBLIC_URL}/data/MOCK_DATA.json`
        )
    }

    render() {
        return (
            <div>siema</div>
        )
    }
}

export default Cars