import React from "react"

function Joke(prop){
  console.log(prop)
  if(prop.detail.Question == null)
  {
  return (

    <div>

      <h2> PunchLine : {prop.detail.PunchLine} </h2>
      <hr/>
    </div>

  )
  }
  else{
    return (

      <div>
        <h1> Question : {prop.detail.Question} </h1>
        <h2> PunchLine : {prop.detail.PunchLine} </h2>
        <hr/>
      </div>

    )

    }
}

export default Joke
