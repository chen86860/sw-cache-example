import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './sw-reg'

class App extends React.Component<any, any> {
  public render() {
    return <div className="App">Hello Service Worker</div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root') as HTMLElement)
