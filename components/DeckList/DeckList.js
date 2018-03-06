import React, { Component } from "react"
import { View } from "react-native"
import { Avatar, Text, Card, Button, List, ListItem, Badge, Input } from "react-native-elements"
import { connect } from "react-redux"
import styles from "./styles"
import { receiveDecks } from "../../actions"

export class DeckList extends Component {
  componentDidMount () {
    console.log(this.props)
  }
  onPress = () => {
    this.props.navigation.navigate("NewDeckView")
  }

  render () {
    console.log(this.props)
    const {list} = this.props.list || []
    return (
      <View style={styles.container}>
        <View>
          <Avatar
            medium
            rounded
            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
          />
          <Text h4>Sujin Lee</Text>
          <Button
            onPress={this.onPress}
            text="Create a new deck"
          />

          {list &&
          <Decks
            list={list}
          />}
        </View>
      </View>
    )
  }
}

const Decks = ({list}) =>
  <List>
    {
      Object.keys(list).map((k, i) =>
        <Deck
          key={i}
          title={list[k].title}
          quizNum={0}
        />
      )
    }
  </List>

const Deck = ({title, quizNum = 0}) =>
  <Card
    title={title}
  >
    <Badge
      value={quizNum}
      textStyle={{color: "orange"}}
    />
  </Card>



const mapStateToProps = state => {
  return {
    list: state.decks
  }
}


const mapDispatchToProps = dispatch => {
  return {
    receiveDecks : () => dispatch(receiveDecks())
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(DeckList)
