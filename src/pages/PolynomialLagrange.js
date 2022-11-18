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

class PolynomialLagrange extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {x:'',x0:'',x1:'',x2:'',x3:'',x4:'',y0:'',y1:'',y2:'',y3:'',y4:''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)    
    }
   
    Lagrange(x,x0,x1,x2,x3,x4,y0,y1,y2,y3,y4){
            var x
            var x0
            var x1
            var x2
            var x3
            var x4
            var y0
            var y1
            var y2
            var y3
            var y4
           
            var result=((((x1-x)*(x2-x)*(x3-x)*(x4-x))/((x1-x0)*(x2-x0)*(x3-x0)*(x4-x0))*y0)+
            (((x0-x)*(x2-x)*(x3-x)*(x4-x))/((x0-x1)*(x2-x1)*(x3-x1)*(x4-x1))*y1)+
            (((x0-x)*(x1-x)*(x3-x)*(x4-x))/((x0-x2)*(x1-x2)*(x3-x2)*(x4-x2))*y2)+
            (((x0-x)*(x1-x)*(x2-x)*(x4-x))/((x0-x3)*(x1-x3)*(x2-x3)*(x4-x3))*y3)+
            (((x0-x)*(x1-x)*(x2-x)*(x3-x))/((x0-x4)*(x1-x4)*(x2-x4)*(x3-x4))*y4))
                render("Result = "+result.toFixed(6))
        
       
    }
       
   

    handleSubmit(event){
        const {x,x0,x1,x2,x3,x4,y0,y1,y2,y3,y4} = this.state
       
        const result = this.Lagrange(x,x0,x1,x2,x3,x4,y0,y1,y2,y3,y4)
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
                <Title>&emsp; Polynomial Lagrange Interpolation&emsp;</Title>
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
              <XL htmlFor='x3'>&emsp;x3 :&emsp;</XL>
              <input
                name='x3'
                placeholder='Starting x3'
                value = {this.state.x3}
                onChange={this.handleChange}
                size='10'
              />
              <XL htmlFor='x4'>&emsp;x4 :&emsp;</XL>
              <input
                name='x4'
                placeholder='Starting x4'
                value = {this.state.x4}
                onChange={this.handleChange}
                size='10'
              />
              <p></p>
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
              <XL htmlFor='y3'>&emsp;y3 :&emsp;</XL>
              <input
                name='y3'
                placeholder='Starting y3'
                value = {this.state.y3}
                onChange={this.handleChange}
                size='10'
              />
              <XL htmlFor='y4'>&emsp;y4 :&emsp;</XL>
              <input
                name='y4'
                placeholder='Starting y4'
                value = {this.state.y4}
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



export default PolynomialLagrange