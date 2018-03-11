import React, { Component } from "react"
import { connect } from "react-redux"
import { StackNavigator, addNavigationHelpers } from "react-navigation"
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers'
import DeckListContainer from "../containers/DeckListContainer"
import NewDeck from "./NewDeck/index"

export const AppNavigator = StackNavigator({
  Home: {screen: DeckListContainer, navigationOptions: { header: null } },
  // NewDeck: {screen: NewDeck, navigationOptions: { header: null }}
})

class AppWithNavigationState extends Component {

  render () {
    const addListener = createReduxBoundAddListener("root")
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
        addListener,
      })}/>
    )
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
})

export default connect(mapStateToProps)(AppWithNavigationState)



