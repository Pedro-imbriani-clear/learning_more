import React, { Component } from 'react'
import { View, Text, StyleSheet,Switch} from 'react-native'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      status: false
    }
  }

  render(){

    return(
      <View style={styles.container}>
        <Switch value={this.state.status} thumbColor={'red'} onValueChange={e => this.setState({status: e})}/>
        <Text style={{textAlign:'center',fontSize:30}}>{this.state.status ? "Ativo" : "Inativo"}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 20
  },

})

export default App;