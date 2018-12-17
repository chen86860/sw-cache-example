import * as React from 'react'
import * as ReactDOM from 'react-dom'

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  public render() {
    return <div className="App">Hello Service Worker</div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root') as HTMLElement)
