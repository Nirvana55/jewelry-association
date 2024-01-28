"use client";

import { Button } from "flowbite-react";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  ResponsiveContainer,
  Rectangle,
} from "recharts";

const GraphSection = () => {
  const data = [
    {
      name: "Page A",
      silver: 4000,
      gold: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      silver: 3000,
      gold: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      silver: 2000,
      gold: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      silver: 2780,
      gold: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      silver: 1890,
      gold: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      silver: 2390,
      gold: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      silver: 3490,
      gold: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className='container m-auto py-16 h-[600px]'>
      <h5 className='titleFont text-center font-semibold tracking-tight text-gray-900 dark:text-white'>
        Todays Chart
      </h5>
      <div className='flex flex-row py-20 justify-center items-center gap-10'>
        <div className='self-start w-[50%]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sequi
          dignissimos aspernatur facere vero voluptatibus minima blanditiis
          expedita harum doloribus distinctio quaerat culpa, quos perferendis
          officia libero doloremque odit corporis.
        </div>
        <div className='h-[400px] flex-1'>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart
              width={400}
              height={400}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey='gold'
                fill='#8884d8'
                activeBar={<Rectangle fill='pink' stroke='blue' />}
              />
              <Bar
                dataKey='silver'
                fill='#82ca9d'
                activeBar={<Rectangle fill='gold' stroke='purple' />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default GraphSection;
