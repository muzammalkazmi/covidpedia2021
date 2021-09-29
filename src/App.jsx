import React,{Component} from 'react'
import {Cards,Chart,CountryPicker} from './components'
import {fetchData} from './api'

class App extends Component{
    state={
        data:{}
    }
    async componentDidMount(){
        const data=await fetchData()
        this.setState({data})
        console.log(data)
    }
    render(){
        return ( 
            <div className = "App" >
                <Cards value={this.state.data}/>
                <CountryPicker/>
                <Chart/>
                
                </div>
            );
    }
}
    
   


export default App;