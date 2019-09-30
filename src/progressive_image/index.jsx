import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const cache = {};

class ProgressiveImage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isReady: cache[props.src],
    };
  }

  componentDidMount() {
    const { isReady } = this.state;
    if (!isReady) this.loadImage();
  }

  componentWillUnmount() {
    this.destroyImage();
  }

  loadImage() {
    this.destroyImage();

    const { src } = this.props;
    this.image = new global.Image();

    this.image.onload = () => {
      cache[src] = true;
      this.setState({ isReady: true });
    };

    this.image.src = src;
  }

  destroyImage() {
    if (!this.image) return;
    this.image.onload = () => {};
    delete this.image;
  }

  render() {
    const {
      src,
      preview,
      className: passedClassName,
      ...rest
    } = this.props;
    const { isReady } = this.state;

    const className = classNames('c-progressive_image', passedClassName, {
      'is-ready': isReady,
    });

    let previewNode;
    if (preview) {
      const style = { backgroundImage: `url('${preview}')` };
      previewNode = <span className="c-progressive_image-preview" style={style} />;
    }

    let imageStyle;
    if (isReady) imageStyle = { backgroundImage: `url('${src}')` };

    return (
      <span {...rest} className={className}>
        {previewNode}
        <span className="c-progressive_image-image" style={imageStyle} />
      </span>
    );
  }
}

ProgressiveImage.defaultProps = {
  className: null,
};

ProgressiveImage.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
};

export default ProgressiveImage;
