import React, { Component } from 'react';

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spans: 0
    };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // Make sure img is loaded before we get its height
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    // Sets span value for CSS grid, based on each image card's height
    const height = this.imageRef.current.clientHeight;
    const rowHeight = 10;
    const spans = Math.ceil(height / rowHeight + 1);
    this.setState({ spans });
  };

  render() {
    const { urls, description } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description}></img>;
      </div>
    );
  }
}

export default ImageCard;
