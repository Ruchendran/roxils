import {Component} from "react"

import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts"

import Headers from "../Headers"

import "./index.css"


class PieGraph extends Component{

    state={month:"4",list:""}

    statMonth=(e)=>{
        this.setState({
            month:e.target.value
        })
    }

    click=async()=>{
                    const {month}=this.state;

                    const url=`http://localhost:5000/cata/${month}`

                    const fet=await fetch(url)

                    const jsonData=await fet.json()

                    console.log(jsonData[0])

                    this.setState({
                        list:jsonData[0]
                    })
    }

    render(){
        const {list}=this.state;

        const data=[{category:"electronics",no:list.first},{category:"women's clothing",no:list.second},{category:"jewelery",no:list.third}]
        return(
            <div className="pie-main" >

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

            <hr   className="line" />

            <div className="design" >
            <ResponsiveContainer width="80%" height={300}>

                    <PieChart>
                    <Pie
          cx="70%"
          cy="40%"
          data={data}
          startAngle={0}
          endAngle={360}
          innerRadius="0%"
          outerRadius="70%"
          dataKey="no"
        >
          <Cell name="electronics" fill="#fecba6" />
          <Cell name="women's clothing" fill="#b3d23f" />
          <Cell name="jewelery" fill="#a44c9e" />
        </Pie>

        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
                    </PieChart>
                
                </ResponsiveContainer>
            </div>
                


            
            
            </div>


        )
    }
}

export default PieGraph