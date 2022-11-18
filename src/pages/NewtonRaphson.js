import { render } from "@testing-library/react";
import React,{ Component } from 'react'
import styled from 'styled-components';
// import {evaluate,derivative} from 'mathjs'


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

class NewtonRaphson extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {ErrorApox:'',func:''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)    
    }

    BisectionCalcFunction(tmp,ErrorApox,Funct)
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
        var xnew,tmp,temp;
        tmp = temp
        // var fxdiff =derivative(FUNCT, 'x').evaluate({x: temp}) ;
        // var xfunc =evaluate(FUNCT.replace("x",temp));
        var ErrorApox_Answer=10000000; //set as default
        var inputerrorapox = parseFloat(ErrorApox)
        if(xl!=null && xr!=null && Funct!=null && inputerrorapox!=null){
        while(ErrorApox_Answer>inputerrorapox)
            {
        
            //  newx = temp-(xfunc / fxdiff);
            // temp =newx

            //     ErrorApox_Answer = Math.abs(Math.abs((tmp-temp))/ newx)*100
            // i++
            // console.log("tmp = "+tmp)
            // console.log("Errorapox = "+ErrorApox_Answer)
            // render("tmp : "+tmp.toFixed(6)+" Error : "+ErrorApox_Answer.toFixed(6)+" ("+i+")")//calc wont re-render so i stuck at this
        }
        return" Result => "+ "tmp : "+tmp+" at Iteration : "+i; //calc wont re-render so i stuck at this
      }
      return "Input tmp ErrorApox and Function first!!"
    }


    handleSubmit(event){
        const {ErrorApox,Funct} = this.state
       
        const tmp= this.BisectionCalcFunction(ErrorApox,Funct)
        event.preventDefault()
        //console log for debugging
        console.log("tmp = "+tmp)
        console.log("Function = "+Funct)
        console.log("Errorapox = "+ErrorApox)
        render() //same here at line 53 i literally stuck at re-rendering
       

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
                <Title>&emsp;NewtonRaphson Method&emsp;</Title>
              <XL htmlFor='tmp'>&emsp;tmp :&emsp;</XL>
              <input
                name='tmp'
                placeholder='Starting tmp'
                value = {this.state.tmp}
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



export default NewtonRaphson