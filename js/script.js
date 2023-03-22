// Copyright (c) 2023 Mohamad All rights reserved
//
// Created by: Mohamad
// Created on: Sep 2023
// This file contains the JS functions for index.html

"use strict"

/*
* This function calculates the area of a triangle
*/
function calculate () {

  // Debugging statements
  console.log("The button was clicked")

  // Assign the user input to a variable
  const triangleHeight = parseInt(document.getElementById("height-of-triangle").value)


  const triangleBase = parseInt(
    document.getElementById("base-of-triangle").value
  )

  // Calculate the area of the triangle
  const area = (triangleBase * triangleHeight) / 2

  // Display the area of the triangle
  document.getElementById("answer").innerHTML =
    "The area of the triangle is " + area + " cm²"
}
