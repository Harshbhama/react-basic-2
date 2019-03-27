import React from "react"

import Joke from "./Joke"

function Appnew(){
  return(
    <div>
      <Joke
      detail = {{Question: "What is your name", PunchLine: "You don't know even that !!!!!"}}
      />
      <Joke
      detail = {{PunchLine: "I don't have a question !!!!!"}}
      />
    </div>



  )
}

export default Appnew
