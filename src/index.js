
import React from 'react'
import PropTypes from 'prop-types'

const Fancy = (props) => {
    const { type } = props
    return (
        <div>{ type }</div>
    )
}
export default Fancy

Fancy.propTypes = {
    type: PropTypes.string.isRequired,
}
