import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux"
import { updateUser } from '../actionCreators'

function mapStateToProps(state) {
  return {
    user: state.user,
    image: state.image
  }
}

const mapDispatchToProps = {
  updateUser
}

function Avatar(props) {
  const [image, setImage] = useState(props.image)

  useEffect(() => {
    setImage(props.image)
  }, [props.user])


  return (
    <Image source={{ uri: image }} />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  
`;