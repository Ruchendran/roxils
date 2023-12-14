import {Component} from "react"

import Headers from "../Headers"

import "./index.css"

class Stastics extends Component{

    state={month:"4",data:"",is:false ,str:"" }


    click=async()=>{


        const url1="http://localhost:5000/insert"

        const fets=await fetch(url1)


        console.log(fets.ok)
      

       
        const {month}=this.state

        console.log(month)

        const url=`http://localhost:5000/stas/${month}`

        const send=await fetch(url)

       const jsonData=await send.json();

       
       if(month==1){
       this.setState({
        str: "January"
       })
}
else if(month==2){
    this.setState({
        str:"Febraury"
    })
}

else if(month==3){
    this.setState({
        str:""
    })
}
else if(month==4){
    this.setState({
        str:"April"
    })
}
else if(month==5){
    this.setState({
        str:"May"
    })
}
else if(month==6){
    this.setState({
        str:"June"
    })
}
else if(month==7){
    this.setState({
        str:"July"
    })
}
else if(month==8){
    this.setState({
        str:"August"
    })
}
else if(month==9){
    this.setState({
        str:"September"
    })
}
else if(month==10){
    this.setState({
        str:"October"
    })
}
else if(month==11){
    this.setState({
        str:"November"
    })
}
else if(month==12){
    this.setState({
        str:"December"
    })
}

        this.setState({
            data:jsonData[0],
            is:true
        })
    }

    statMonth=(e)=>{
            this.setState({
                month:e.target.value
            })
    }
    render(){

        const {data,month,is,str}=this.state;

     


        return(
                  <div className="stas-main" >
  
                    <Headers  />

                    <div className="inpu-main" >


                    <select className="sele" onChange={this.statMonth}  >
                          <option>
                            1
                          </option>
                          <option  >
                            2
                          </option>

                          <option  >
                            3
                          </option>

                          <option selected >
                            4
                          </option>
                          <option>
                            5
                          </option>
                          <option>
                            6
                          </option>
                          <option>
                            7
                          </option>
                          <option>
                            8
                          </option>
                          <option>
                            9
                          </option>
                          <option>
                            10
                          </option>
                          <option>
                            11
                          </option>
                          <option>
                            12
                          </option>

                        </select>

                        <button className="stas-click" onClick={this.click}>Get</button>
                                
                    </div>

                    <hr   className="line" />

                { is?   <div className="result-main" >
                                <h1>
                                    Stastics of {str}
                                </h1>

                                <div>

                                       <p className="text" > Total Sale:{data.total}       </p>
                                       <p className="text" >Total sold:{data.soldNo}</p>

                                       <p className="text">
                                        Total unSold:{data.unSoldNo}
                                       </p>

                                </div>
                    </div>:""}

                  </div>
        )
    }
}

export default Stastics