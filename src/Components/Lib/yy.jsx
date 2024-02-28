import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

export const yy = (props) => {
  return (
    <div>yy</div>
  )
}

yy.propTypes = {
  second: PropTypes.third
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(yy)
