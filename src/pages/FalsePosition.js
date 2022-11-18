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
class FalsePosition extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {XL:'',XR:'',ErrorApox:'',func:''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)    
    }

    FalsePositionCalcFunction(XL,XR,ErrorApox,Funct)
    {
        const parser = new Parser();
        function fx(x)
        {
            let expr = parser.parse(Funct)
            console.log("fx = "+expr.evaluate({ x: (x) }))
            return expr.evaluate({ x: (x) })
        }

        var i = 0;
        var xl = parseFloat(XL);
        var xr = parseFloat(XR);
        var xm,xold;
        var ErrorApox_Answer=10000000; //set as default
        var inputerrorapox = parseFloat(ErrorApox)
        if(xl!=null && xr!=null && Funct!=null && inputerrorapox!=null){
        while(ErrorApox_Answer>inputerrorapox)
            {
                xm=((xl*fx(xr))-(xr*fx(xl)))/(fx(xr)-fx(xl));
                if(fx(xm)*fx(xr)<0)
                {
                    xold=xl
                    xl=xm
                }
                if(fx(xm)*fx(xr)>0)
                {
                    xold=xr
                    xr=xm
                }
                ErrorApox_Answer = Math.abs((xm-xold)/xm)*100
            i++
            console.log("XL = "+xl)   //console log for debugging
            console.log("XM = "+xm)
            console.log("XR = "+xr)
            console.log("Errorapox = "+ErrorApox_Answer)
            render("XM = "+xm.toFixed(6)+" Errorapox = "+ErrorApox_Answer.toFixed(6)+" at iteration #"+i)//calc wont re-render so i stuck at this
        }
        return "XM="+xm+" at Iteration = "+i; //calc wont re-render so i stuck at this
      }
      return "Input XL,XR,ErrorApox and Function first!!"
    }


    handleSubmit(event){
        const {XL,XR,ErrorApox,Funct} = this.state
       
        const xm = this.FalsePositionCalcFunction(XL,XR,ErrorApox,Funct)
        event.preventDefault()
        console.log("XL = "+XL)   //console log for debugging
        console.log("XR = "+XR)
        console.log("Function = "+Funct)
        console.log("Errorapox = "+ErrorApox)
        render(xm) //same here at line 53 i literally stuck at re-rendering
       

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
                <Title>&emsp;FalsePosition Method&emsp;</Title>
              <XL htmlFor='XL'>&emsp;XL :&emsp;</XL>
              <input
                name='XL'
                placeholder='Starting XL'
                value = {this.state.XL}
                onChange={this.handleChange}
                size='10'
              />
              <XR htmlFor='XR'>&emsp;XR :&emsp;</XR>
              <input
                name='XR'
                placeholder='Starting XR'
                value={this.state.XR}
                onChange={this.handleChange}
                size='10'
              />
              <ERR htmlFor='ErrorApox'>&emsp;ErrorApox :&emsp;</ERR>
              <input
                name='ErrorApox'
                placeholder='ErrorApox'
                value={this.state.ErrorApox}
                onChange={this.handleChange}
                size='10'
              />
              </Bg>
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



export default FalsePosition