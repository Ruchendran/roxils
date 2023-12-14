import {Component} from "react"

import Headers from "../Headers"

import "./index.css"


const List=(props)=>{

    const {qs}=props;

    const {id,description,price,title,Date,image,category,sold}=qs;

    return(
      <tr className="row" >
        <td className="table-id" >
          {id}
        </td>
        <td className="table-title" >
          {title}
        </td>
        <td className="table-des" >
          {description}
        </td>
        <td className="table-price">
          {price}
        </td>
        <td className="table-category" >
          {category}
        </td>
        <td className="table-sold" >
          {sold}
        </td>
        <td   className="table-image" >
          {image}
        </td>
       
      </tr>
    )
}

class Get extends Component{

  state={
    userInput:"",
    month:"4",
    error:"",
    list:[]
  }



  submit=(e)=>{
    e.preventDefault()
    this.api()
  }


  api=async()=>{

    
    
    const {month,userInput}=this.state;

    const s1=userInput.trim()

    console.log(s1.length)
    

    if(s1.length!==0){


    const options={
      method:"GET"
    }
    const s="hiii qt"
    
    const url=`http://localhost:5000/${userInput}/${month}`

    const send=await fetch(url)

    const jsonData=await send.json()

      this.setState({
        list:jsonData
      })

    }
  
  }

  input=(e)=>{
    this.setState({
      userInput:e.target.value
    })
  }

  userMonth=(e)=>{
    this.setState({
      month:e.target.value
    })
  }

  render(){

    const {userInput,month,list}=this.state



    return(
     <div className="main" >
            <Headers />

                    <div className="main1" > 
                          <h1 className="text" >
                            Transaction Dashboard
                            </h1>
                      </div>  

                      <form className="main2" onSubmit={this.submit} >

                        <input placeholder="search transaction" className="inpu" onChange={this.input} value={userInput} />

                        <select className="sele" onChange={this.userMonth}  >
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

                        <button type="submit" className="done" >get</button>
                        
                        </form>        


                        <div className="list" >
                            <table className="table" >
                              <th className="table-id" >
                                ID
                              </th>
                              <th className="table-title" >
                                Title
                              </th>
                              <th className="table-des">
                                Description
                              </th>
                              <th className="table-price" >
                                Price
                              </th>
                              <th className="table-category" >
                                  Category
                              </th>
                              <th className="table-sold">
                                Sold
                              </th>
                              <th className="table-image">
                                Image
                              </th>
                            
                            {list.map((s)=>(
                              <List key={s.id} qs={s} />
                            ))}

                            
                            </table>

                        </div>
     

     
     </div>
    )
  }
}


export default Get