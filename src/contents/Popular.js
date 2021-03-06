import "@babel/polyfill";
import React from 'react';

import Header from './Header';
import Photos from './Photos';
import String from './String';
import Battle from './Battle';

  
class Popular extends React.Component{
    constructor(props){
        super(props)
        this.state={
           LtUrl:"https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories",
          //  isflag:true
        };
      }  
      clickList=(API)=>{
          this.setState({
                  LtUrl:API
              })
      }
      handleChange(isPopular){
              this.setState({isflag:isPopular})
          }
      render(){
        const style={display:'flex',width:'1200px',margin:'0 auto'}
          return(
            //   <div>
            //   <div><Header handleChange={this.handleChange.bind(this)}/></div>
            // {
            //     this.state.isflag?<div>
            //       <div><List clickList={this.clickList.bind(this)}/></div>
            //       <div><Cards API={this.state.LtUrl}/></div>
            //       <div><Footer/></div>
            //       </div>:<div><BattleContent/></div>                
            // }
            //   </div>
          <div>
            <div><Header handleChange={this.handleChange.bind(this)}/></div>
            <div><String clickList={this.clickList.bind(this)}/></div>
            <div><Photos API={this.state.LtUrl}/></div>
          </div>
            
          )
      }
  }
export default Popular;
