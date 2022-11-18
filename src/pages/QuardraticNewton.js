import { render } from "@testing-library/react";
import React,{ Component } from 'react'
import { useState } from 'react'
import styled from 'styled-components';

const Bo = styled.form`
 text-align: center;
`;
const Bg = styled.div`
   
    text-align: center;
    font-size: 20px;
`;
const Title = styled.h1`
   
    font-size: 40px;
`;
const XL = styled.label`

    font-size: 20px;
`;
const XR = styled.label`
    font-size: 20px;
`;
const ERR = styled.label`
    font-size: 20px;
`;
const FUNCT = styled.label`
    font-size: 20px;
`;
const Calbutt= styled.button`
   
     height: 50px;
     width: 100px;
`;



const Parser = require('expr-eval').Parser;

class QuardraticLagrange extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {x:'',x0:'',x1:'',x2:'',y0:'',y1:'',y2:''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)    
    }
   
    newton(x,x0,x1,x2,y0,y1,y2){
            var x
            var x0
            var x1
            var x2
            var y0
            var y1
            var y2
            var result=(y0+(((y1-y0)/(x1-x0))*(x-x0)))+((((y2-y0)/(x2-x0))-((y1-y0)/(x1-x0))/(x2-x1))*(x-x0)*(x-x1))
            
            render("Result = "+result)
    }
       
   

    handleSubmit(event){
        const {x,x0,x1,x2,y0,y1,y2} = this.state
       
        const result = this.newton(x,x0,x1,x2,y0,y1,y2)
        event.preventDefault()
        console.log("x = "+x)
        console.log("x0 = "+x0)   //console log for debugging
        console.log("x1 = "+x1)
        console.log("x2 = "+x1)
        console.log("y0 = "+y0)
        console.log("y1 = "+y1)
        console.log("y2 = "+y2)
        render(<line data={result}/>,result) //same here at line 53 i literally stuck at re-rendering
       

        

    }

    handleChange(event)
    {this.setState({
        [event.target.name] : event.target.value
        })
    }

    render(){
        return(
          <Bo onSubmit={this.handleSubmit}>
            <Bg>
                <Title>&emsp;Quardratic Newton's Interpolation&emsp;</Title>
                <XL htmlFor='x'>&emsp;x :&emsp;</XL>
                <input
                  name='x'
                  placeholder='Starting x'
                  value = {this.state.x}
                  onChange={this.handleChange}
                  size='10'
                />
              <XL htmlFor='x0'>&emsp;x0 :&emsp;</XL>
              <input
                name='x0'
                placeholder='Starting x0'
                value = {this.state.x0}
                onChange={this.handleChange}
                size='10'
              />
              <XL htmlFor='x1'>&emsp;x1 :&emsp;</XL>
              <input
                name='x1'
                placeholder='Starting x1'
                value = {this.state.x1}
                onChange={this.handleChange}
                size='10'
              />
              <XL htmlFor='x2'>&emsp;x2 :&emsp;</XL>
              <input
                name='x2'
                placeholder='Starting x2'
                value = {this.state.x2}
                onChange={this.handleChange}
                size='10'
              />
              <XL htmlFor='y0'>&emsp;y0 :&emsp;</XL>
              <input
                name='y0'
                placeholder='Starting y0'
                value = {this.state.y0}
                onChange={this.handleChange}
                size='10'
              />
              <XL htmlFor='y1'>&emsp;y1 :&emsp;</XL>
              <input
                name='y1'
                placeholder='Starting y1'
                value = {this.state.y1}
                onChange={this.handleChange}
                size='10'
              />
              <XL htmlFor='y2'>&emsp;y2 :&emsp;</XL>
              <input
                name='y2'
                placeholder='Starting y2'
                value = {this.state.y2}
                onChange={this.handleChange}
                size='10'
              />
              </Bg>
              <p></p>
            
            <p></p>
            <div>
            &emsp;<Calbutt>Calculate</Calbutt>
            </div>
          </Bo>
        )
      }
    }



export default QuardraticLagrange