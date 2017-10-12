import * as React from 'react';

// See this example working in a non-TS environment: https://codesandbox.io/s/ppl3wopo8j
class Hello extends React.Component {
	render() {
		return <div>
        <Foo />
        <Bar /> {/* Error: 'JSX element type 'Element[]' is not a constructor function for JSX elements. */}
      </div>;
	}
}

class Foo extends React.Component {
	render() {
		return [<div>foo</div>, <div>fooz</div>];
	}
}

function Bar() {
	// Cannot render an array from a SFC
	return [<div>bar</div>, <div>baz</div>];
}