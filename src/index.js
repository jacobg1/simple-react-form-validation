/* eslint-disable no-console */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Fancy extends Component {
    componentDidMount() {
        console.log('test')
    }

    render() {
        const { type, value } = this.props
        return (
            <div>
                <h1>{type}</h1>
                <p>{value}</p>
            </div>
        )
    }
}
export default Fancy

Fancy.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}
