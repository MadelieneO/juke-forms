import React from 'react'
import NewPlayList from '../components/NewPlayList'

class NewPlayListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      disabled: true,
      warnName: {display: 'none'},
      warnLength: {display: 'none'}
    }

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event) {
    const inputValue = event.target.value;
    let disabled = (inputValue.length === 0 || inputValue.length > 16) ? true : false;
    let warnName = {display: 'none'};
    let warnLength = {display: 'none'};

    if (disabled) {
      inputValue.length === 0 ? 
        warnName = {display: 'block'} : warnLength = {display: 'block'};
    }
    
    this.setState({
      inputValue,
      disabled,
      warnName,
      warnLength
    })
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.submitPlayList(this.state.inputValue);
    this.setState({
      inputValue: ''
    })
    // this.setState() - asynch so didn't see new value...
    // setTimeout(() => {
    //   console.log('updated value: ', this.state.inputValue)
    // }, 2000)
    
  }

  render () {
    return (
      <div>
        <NewPlayList handleChange={this.handleChange} 
                     onSubmit={this.onSubmit} 
                     inputValue={this.state.inputValue}
                     disabled={this.state.disabled}
                     warnName={this.state.warnName}
                     warnLength={this.state.warnLength} />
      </div>
    )
  }
}

export default NewPlayListContainer;