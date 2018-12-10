import React from 'react';
import { Carousel } from 'antd-mobile';

export default class Swiper extends React.PureComponent {
  defaultProps = {
    data: ['1', '2', '3'],
  }

  render() {
    const { data = [] } = this.props;
    return (
      <Carousel
          autoplay={true}
          infinite={true}
        >
          {data.map(item => (
            <div
              style={{ width: '100%', height: 190 }}
            >
              <img
                src={item.skyContent}
                alt={item.skyTitle}
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </div>
          ))}
        </Carousel>
    )
  }
}
