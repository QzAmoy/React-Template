import React, { PureComponent } from 'react';

interface IProps {}
interface IState {
  index: Number;
}
class Index extends PureComponent<IProps, IState> {
  timeout = null;

  constructor(props: IProps) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({ index: 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const { index } = this.state;
    return <div>UserInfo{index}</div>;
  }
}

export default Index;
