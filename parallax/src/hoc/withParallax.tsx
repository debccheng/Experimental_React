import { Component, ComponentType } from 'react';

type OffsetState = { offsetY: number };

const withParallax = <P extends Record<string, number>>(
  WrappedComponent: ComponentType<P>,
) => {
  return class extends Component<P, OffsetState> {
    constructor(props: any) {
      super(props);
      this.state = {
        offsetY: 0,
      };
      this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
      this.setState({
        offsetY: window.scrollY,
      });
    }

    render() {
      const { offsetY } = this.state;
      const props = { ...this.props, offsetY };
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <WrappedComponent {...props as P} />;
    }
  };
};

export default withParallax;
