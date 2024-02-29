"use client";

import React from "react";
import {
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";
import { AiFillGold } from "react-icons/ai";
import { PiDiamondsFourBold } from "react-icons/pi";

const GraphSection = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      Gold: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      Gold: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      Gold: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      Gold: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      Gold: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      Gold: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      Gold: 4300,
      amt: 2100,
    },
  ];

  const silverData = [
    {
      name: "Page A",
      uv: 4000,
      Silver: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      Silver: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      Silver: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      Silver: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      Silver: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      Silver: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      Silver: 4300,
      amt: 2100,
    },
  ];

  return (
    <div>
      <div className='flex flex-col md:flex-row py-10 justify-center items-center gap-10 animate-fade-right animate-ease-in'>
        <div className='w-full md:w-[50%]'>
          <div className='flex justify-center items-center w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 bg-primary-btn-color'>
            <AiFillGold className='text-2xl' />
          </div>
          <h2 className='text-4xl font-semibold tracking-tight text-gray-900 dark:text-white py-[20px]'>
            Todays Gold Price
          </h2>
          <p className='sm:text-xl text-gray-500'>
            Words that Sparkle, Ideas that Shine: Each article is a gem,
            meticulously crafted to illuminate, educate, and inspire the world
            of jewelry.
          </p>
        </div>

        <div className='h-[400px] flex-1 w-full'>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart
              width={730}
              height={250}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                strokeWidth={4}
                type='monotone'
                dataKey='Gold'
                stroke='#204634'
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className='flex flex-col md:flex-row py-10 justify-center items-center gap-10'>
        <div className='w-full md:w-[50%]'>
          <div className='flex justify-center items-center w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 bg-primary-btn-color'>
            <PiDiamondsFourBold className='text-2xl' />
          </div>
          <h2 className='text-4xl font-semibold tracking-tight text-gray-900 dark:text-white py-[20px]'>
            Todays Silver Price
          </h2>
          <p className='sm:text-xl text-gray-500'>
            Words that Sparkle, Ideas that Shine: Each article is a gem,
            meticulously crafted to illuminate, educate, and inspire the world
            of jewelry.
          </p>
        </div>

        <div className='h-[400px] flex-1 w-full'>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart
              width={730}
              height={250}
              data={silverData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                strokeWidth={4}
                type='monotone'
                dataKey='Silver'
                stroke='#BD2729'
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default GraphSection;
