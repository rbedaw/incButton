class Button extends React.Component{  
  // handleClick = () => {
  // 	this.setState((prevState) => ({
  //     	counter: prevState.counter + 1
  //    }));
  // };
  
	render(){
  	return(
  		<button onClick ={this.props.onClickFunction}>
      	+{this.props.incrementValue}
      </button>
  	);
  }
}

const Result = (props) => {
	return(
  	<div>{props.counter}</div>
  );
};

class App extends React.Component{
	state = {counter: 0};

	incrementCounter = () => {
  	this.setState((prevState) => ({
     	counter: prevState.counter + 1
    }));
  };
	render(){
  	return(
    	<div>
      	<Button incrementValue={1} onClickFunction={this.incrementCounter} />
	<Button incrementValue={5} onClickFunction={this.incrementCounter} />
	<Button incrementValue={10} onClickFunction={this.incrementCounter} />
      	<Button incrementValue={100} onClickFunction={this.incrementCounter} />

      	<Result counter={this.state.counter} />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);


