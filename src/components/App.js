import React, { Component } from 'react'

// import logo from "./logo.svg";
import './App.css'
import StopWatch from './StopWatch'
import RandomJoke from './RandomJoke'
import Hello from './Hello'
import LoginHome from './LoginHome'
import PageTheme from './PageTheme'
import TabsExp from './TabsExp'
import Foo from './Foo'
// import CounterView from "./CounterView";
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

import RouterContent from '../components/RouterContent'
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <StopWatch />
        <RandomJoke />
        <Hello />
        <LoginHome />
        <PageTheme />
        <TabsExp />
        <Foo /> */}
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <RouterContent />
      </div>
    )
  }
}
export default App
