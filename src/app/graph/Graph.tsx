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
import { useGetRates } from "../../../api/associates/queries";
import { Spinner } from "flowbite-react";

const GraphSection = () => {
  const getRateData = useGetRates();

  if (getRateData.isLoading) {
    return (
      <div className='py-11'>
        <Spinner />
        <p className='mt-5'>Loading</p>
      </div>
    );
  }

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
          <ResponsiveContainer width='100%' height={400}>
            <LineChart
              width={730}
              height={250}
              data={getRateData.data || []}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='date' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type='monotone'
                strokeWidth={4}
                dataKey='goldPrice'
                stroke='#82ca9d'
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
          <ResponsiveContainer width='100%' className='h-[300px] sm:h-[400px]'>
            <LineChart
              width={730}
              height={250}
              data={getRateData.data || []}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='date' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                strokeWidth={4}
                type='monotone'
                dataKey='silverPrice'
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
