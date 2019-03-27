import React from "react"

function Joke(prop){
  console.log(prop)

    return (

      <div>
        <h1 style = {{display: prop.detail.Question==null ? "none" : "block"}}> Question : {prop.detail.Question} </h1>
        <h2> PunchLine : {prop.detail.PunchLine} </h2>
        <hr/>
      </div>

    )

    }

export default Joke
