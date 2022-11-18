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

class LinearNewton extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {x:'',x0:'',x1:'',y0:'',y1:''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)    
    }
   
    Newton(x,x0,x1,y0,y1){
            var x  
            var x0 
            var x1 
            var y0 
            var y1 
             
            var c0 = ((y1-y0)/(x1-x0))*(x-x0)
            var result=c0+y0
                render("Result = "+result)
           
     
    }
       
   

    handleSubmit(event){
        const {x,x0,x1,y0,y1} = this.state
       
        const result = this.Newton(x,x0,x1,y0,y1)
        event.preventDefault()
        console.log("x0 = "+x0)   //console log for debugging
        console.log("x1 = "+x1)
        console.log("x = "+x)
        console.log("y0 = "+y0)
        console.log("y1 = "+y1)
        console.log("result = "+result)
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
                <Title>&emsp;Newton's Linear Interpolation&emsp;</Title>
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
              <XL htmlFor='x'>&emsp;x :&emsp;</XL>
              <input
                name='x'
                placeholder='Starting x'
                value = {this.state.x}
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



export default LinearNewton