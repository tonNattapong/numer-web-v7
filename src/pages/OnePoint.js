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
class OnePoint extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {ErrorApox:'',func:''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)    
    }

    OnePointCalcFunction(ErrorApox,Funct)
    {
        const parser = new Parser();
        function fx(x)
        {
            let expr = parser.parse(Funct)
            console.log("fx = "+expr.evaluate({ x: (x) }))
            return expr.evaluate({ x: (x) })
        }

        var i= 0;
        var iter= 0;
        var fixpt;
        var xrold= 0;
        var xr= 0;
        var ErrorApox_Answer=10000000; //set as default
        var inputerrorapox = parseFloat(ErrorApox)
        if(Funct!=null && inputerrorapox!=null){
        while(ErrorApox_Answer>inputerrorapox)
            {   

               xrold = xr;
                xr= fx(xrold);
                iter = iter+1;
                if(xr!=0){
                  ErrorApox_Answer = Math.abs((xr-xrold)/xr)*100
                }
                fixpt=xr;
                
            i++
            console.log(" Result = "+fixpt)
            console.log("Errorapox = "+ErrorApox_Answer)
            render("Result = "+fixpt.toFixed(6)+" Errorapox = "+ErrorApox_Answer.toFixed(6)+" at iteration #"+i)//calc wont re-render so i stuck at this
        }
        return "Result ="+fixpt+" at Iteration = "+i; //calc wont re-render so i stuck at this
      }
      return "Input ErrorApox and Function first!!"
    }


    handleSubmit(event){
        const {ErrorApox,Funct} = this.state
       
        const fixpt = this.OnePointCalcFunction(ErrorApox,Funct)
        event.preventDefault()

        console.log("Function = "+Funct)
        console.log("Errorapox = "+ErrorApox)
        render(fixpt) //same here at line 53 i literally stuck at re-rendering
       

    }

    handleChange(event)
    {this.setState({
        [event.target.name] : event.target.value
        })
    }

    render(){
        return(
          <Bo onSubmit={this.handleSubmit}>
            <div>
            <Title>&emsp;OnePoint&emsp;</Title>
              <ERR htmlFor='ErrorApox'>&emsp;ErrorApox :&emsp;</ERR>
              <input
                name='ErrorApox'
                placeholder='ErrorApox'
                value={this.state.ErrorApox}
                onChange={this.handleChange}
                size='10'
              />
              </div>
              <p></p>
              <div>
              <FUNCT htmlFor='Funct'>&emsp;Funct :&emsp;</FUNCT>
              <input
                name='Funct'
                placeholder='Input function here!'
                value={this.state.Funct}
                onChange={this.handleChange}
                size='30'
              />
            </div>
            <p></p>
            <div>
            &emsp;<Calbutt>Calculate</Calbutt>
            </div>
          </Bo>
        )
      }
    }



export default OnePoint