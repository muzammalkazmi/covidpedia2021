import React,{Component} from 'react'
import {Cards,Chart,CountryPicker} from './components'
import {fetchData} from './api'

class App extends Component{
    state={
        data:{}
    }
    async componentDidMount(){
        const newdata=await fetchData()
        this.setState({data:newdata})
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