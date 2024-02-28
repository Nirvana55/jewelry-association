// "use client";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeadCell,
//   TableRow,
// } from "flowbite-react";

// const tableHeaders = ["Name", "Email", "Address", "Phone Number", "Store Name"];

// const TableAssociates = () => {
//   return (
//     <Table hoverable>
//       <TableHead>
//         {tableHeaders.map((item, index) => (
//           <TableHeadCell key={index} className='bg-primary-text text-white'>
//             {item}
//           </TableHeadCell>
//         ))}
//       </TableHead>
//       <TableBody className='divide-y'>
//         {data.length > 0 ? (
//           data.map((item: any, index: number) => (
//             <TableRow
//               key={index}
//               className='bg-white dark:border-gray-700 dark:bg-gray-800'
//             >
//               <TableCell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
//                 {item.name}
//               </TableCell>
//               <TableCell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
//                 {item.email}
//               </TableCell>
//               <TableCell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
//                 {item.address}
//               </TableCell>
//               <TableCell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
//                 {item.phoneNumber}
//               </TableCell>
//               <TableCell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
//                 {item.storeName}
//               </TableCell>
//             </TableRow>
//           ))
//         ) : (
//           <TableRow className='bg-white dark:border-gray-700 dark:bg-gray-800'>
//             <TableCell colSpan={5} style={{ textAlign: "center" }}>
//               No Data
//             </TableCell>
//           </TableRow>
//         )}
//       </TableBody>
//     </Table>
//   );
// };

// export default TableAssociates;
