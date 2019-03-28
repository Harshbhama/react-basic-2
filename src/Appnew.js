import React from "react"

import Joke from "./Joke"

import jokesData from './jokesData'

function Appnew(){
  // const nums = [1,2,3,4,5]
  // const double =nums.map(function(num){
  //   return num*2
  // })
  //console.log(double)
  const jokeComponents = jokesData.map(function(joke){

      return(
        <Joke key = {joke.id} Question = {joke.Question} PunchLine = {joke.PunchLine} />
      )

  })

  console.log(jokeComponents)




  return(
    <div>
      {jokeComponents}
    </div>



  )
}

export default Appnew
