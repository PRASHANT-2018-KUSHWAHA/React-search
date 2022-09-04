import './App.css';
import React,{ Component } from 'react';
import {data} from './const/data'

class SearchScrollBox extends Component {
// constructor(props) {
//     super(props)
// }
filterFun = () => {
    const filteredData = data.filter(item => {
        if(this.props.input == "") {
           return '';
        }else {
            return Object.keys(item).some(key => {
                console.log( item[key])
               return item[key].toLowerCase().includes(this.props.input.toLowerCase())
            });
        }
        
    })
    if(!this.props.input) {

    }else if(filteredData.length === 0 && this.props.input) {
        return (

            <div className='noDataFound'>
                <p>No Result Found</p>
            </div>
        )
    } else {
        return (
            <ul className="ul-list">
                {filteredData.map((item) => (
                    <li key={item.id} className="items" >
                        <p>{item.name}</p>
                        <p>{item.items}</p>
                        <p>{item.address}, {item.pincode}</p>
                    </li>
                ))}
            </ul>
        )
    }
   
    }
render() {
 
    return (
        <div className='search-scroll-view'>
            {this.filterFun()}
        </div>
    )
}
}


export default SearchScrollBox;