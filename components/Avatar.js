import React from "react";
import styled from "styled-components";
import { connect } from "react-redux"
import { updateUser } from '../actionCreators'

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  updateUser
}

function Avatar(props) {


  return (
    <Image source={{ uri: props.user.image }} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  
`;