import {Component} from "react"

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Legend,
    ResponsiveContainer,
  } from "recharts"

import Headers from "../Headers"

import "./index.css"

class BarGraph extends Component{

    state={month:"4",values:""}

    statMonth=(e)=>{
        this.setState({
            month:e.target.value
        })
    }

   
    click=async()=>{
        this.api();
    }

    api=async()=>{

        const {month}=this.state;

        const url=`http://localhost:5000/bar/${month}`

        const fet =await fetch(url)

        const jsonData=await fet.json()

      console.log(jsonData[0])

        this.setState({
            values:jsonData[0]
        })


    }

    render(){

        const {values}=this.state

        console.log(values.second)

        const data=[{group_name:"0-100",no:values.first},{group_name:"101-200",no:values.second},{group_name:"201-300",no:values.third},{group_name:"301-400",no:values.four},
    
        {group_name:"401-500",no:values.five},{group_name:"501-600",no:values.six},{group_name:"601-700",no:values.seven},
      {group_name:"701-800",no:values.eight},{group_name:"801-900",no:values.none},{group_name:"901 above",no:values.ten}
    ]

        return(
            <div className="bar-main">
                    <Headers />

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

<                       hr   className="line" />       

                        <div>
                        <ResponsiveContainer width="100%" height={500}>

                            <BarChart data={data}>


                            <XAxis
          dataKey="group_name"
          tick={{
            stroke: "gray",
            strokeWidth: 1,
          }}
        />

<YAxis
            dataKey="no"
         
          tick={{
            stroke: "gray",
            strokeWidth: 0,
          }}
        />      

<Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar dataKey="no" name="sale" fill="#1f77b4" barSize="20%" />

                            </BarChart>

                            </ResponsiveContainer>
                        </div>

            </div>
        )
    }
}
export default BarGraph