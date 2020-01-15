import React from "react";
import styled from "styled-components";
import { connect } from "react-redux"

function mapStateToProps(state) {
  return {
    name: state.name
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateName: name => dispatch({
      type: "UPDATE_NAME",
      name: name
    })
  }
}

class Avatar extends React.Component {
  state = {
    photo: "https://cl.ly/55da82beb939/download/avatar-default.jpg"
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/users")
      .then(response => response.json())
      .then(response => {
        this.setState({
          photo: response[0].image
        });

        this.props.updateName(response[0].name)
      });
  }

  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  margin-right: 20px;
`;