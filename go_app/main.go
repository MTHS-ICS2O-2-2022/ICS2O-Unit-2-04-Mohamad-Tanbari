// Created by: Mohamad
// Created on: Mar 2023
//
// This program finds the area and perimeter of a rectangle

package main

import "fmt"

/*
* This function calculates the area of a triangle
 */
func main() {
	// variables for calculation
	var base int
	var height int
	var area int

	// Recieve Base value from user
	fmt.Println("What is the base of the triangle? ")
	fmt.Scanln(&base)

	// Recieve Height value from user
	fmt.Println("What is the height of the triangle? ")
	fmt.Scanln(&height)

	// Calculate area
	area = (base * height) / 2

	// Output
	fmt.Println("The area of the triangle is: ", area, "cm²")

	fmt.Println("Done.")
}
