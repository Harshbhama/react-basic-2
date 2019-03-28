import React from "react"

function Joke(prop){
  console.log(prop)


    return (

      <div>
        <h1 style = {{display: prop.Question==null ? "none" : "block"}}> Question : {prop.Question} </h1>
        <h2 style = {{color: !prop.Question && "grey" }}> PunchLine : {prop.PunchLine} </h2>
        <hr/>
      </div>

    )

    }

export default Joke
