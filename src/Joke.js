import React from "react"

function Joke(prop){
  console.log(prop)


    return (

      <div>
        <h1 style = {{display: prop.prod.Question==null ? "none" : "block"}}> Question : {prop.prod.Question} </h1>
        <h2 style = {{color: !prop.prod.Question && "grey" }}> PunchLine : {prop.prod.PunchLine} </h2>
        <hr/>
      </div>

    )

    }

export default Joke
