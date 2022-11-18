import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import {AiOutlineCalculator} from 'react-icons/ai';
import {SiMatrix} from 'react-icons/si';

export const SidebarData = [

  {
    title: 'Root of Equations',
    path: '/RootOfEquation',
    icon: <AiOutlineCalculator />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Garphical Method',
        path: '/RootOfEquation/Garphical',
        cName: 'sub-nav'
      },
      {
        title: 'Bisection Method',
        path: '/RootOfEquation/Bisection',
        cName: 'sub-nav'
      },
      {
        title: 'False Position Method',
        path: '/RootOfEquation/FalsePosition',
        cName: 'sub-nav'
      },
      {
        title: 'One-Point Iteration Method',
        path: '/RootOfEquation/OnePoint',
        cName: 'sub-nav'
      },
      {
        title: 'Newton RaphsonMethod',
        path: '/RootOfEquation/NewtonRaphson',
        cName: 'sub-nav'
      }
    ]
  },
  
  {
    title: 'Linear Algeraic Equations',
    path: '/LinearAlgeraicEquations',
    icon: <SiMatrix />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Cramer's Rule",
        path: '/LinearAlgeraicEquations/Cramers Rule',
        cName: 'sub-nav'
      },
      {
        title: 'Gauss Eliminate Method',
        path: 'LinearAlgeraicEquations/GaussEliminate',
        cName: 'sub-nav'
      },
      {
        title: 'Guass Jordan Method',
        path: '/LinearAlgeraicEquations/GuassJordan',
        cName: 'sub-nav'
      },
      {
        title: "Jacobi Iteration Method",
        path: '/LinearAlgeraicEquations/Jacobi',
        cName: 'sub-nav'
      },
      {
        title: "Guass Seidel Iteration Method",
        path: '/LinearAlgeraicEquations/GuassSeidel',
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Lagrange Interpolation',
    path: '/Interpolation',
    icon: <SiMatrix />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Linear Lagrange Interpolation",
        path: '/Interpolation/LinearLagrange',
        cName: 'sub-nav'
      },
      {
        title: "Quardratic Lagrange Interpolation",
        path: '/Interpolation/QuardraticLagrange',
        cName: 'sub-nav'
      },
      {
        title: "Polynomial Lagrange Interpolation",
        path: '/Interpolation/PolynomialLagrange',
        cName: 'sub-nav'
      },
      
    ]
  },
  {
    title: "Newton's Interpolation",
    path: '/NewtonInterpolation',
    icon: <SiMatrix />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Linear Newton's Interpolation",
        path: '/NewtonInterpolation/LinearNewton',
        cName: 'sub-nav'
      },
      {
        title: "Quardratic Newton's Interpolation",
        path: '/NewtonInterpolation/QuardraticNewton',
        cName: 'sub-nav'
      },
      
    ]
  },

];
