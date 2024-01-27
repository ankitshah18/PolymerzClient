// import CardMenu from "components/card/CardMenu";
import Card from "components/card";
import { useState, useEffect } from "react";
// import { DiApple } from "react-icons/di";
// import { DiAndroid } from "react-icons/di";
// import { DiWindows } from "react-icons/di";
// import Progress from "components/progress";
import ModalForm from "./ModalForm";
import TruckTable from "./TruckTable";
import UpdateModal from "./UpdateModal";

// import React, { useMemo } from "react";

// import {
//   useGlobalFilter,
//   usePagination,
//   useSortBy,
//   useTable,
// } from "react-table";

const DevelopmentTable = () => {
  // const { columnsData, tableData } = props;

  // const columns = useMemo(() => columnsData, [columnsData]);
  // const data = useMemo(() => tableData, [tableData]);

  // const tableInstance = useTable(
  //   {
  //     columns,
  //     data,
  //   },
  //   useGlobalFilter,
  //   useSortBy,
  //   usePagination
  // );

  // const {
  //   getTableProps,
  //   getTableBodyProps,
  //   headerGroups,
  //   page,
  //   prepareRow,
  //   initialState,
  // } = tableInstance;
  // initialState.pageSize = 11;

  // const stepMap = [
  //   "Inquiry From Buyer",
  //   "Confirmation form the seller",
  //   "Payment form the buyer",
  //   "Truck Placed at seller location",
  //   "Truck Ready for Loading",
  //   "Loading Started",
  //   "Loading Complete",
  //   "Invoices Received from Seller",
  //   "Our Invoice Created",
  //   "Waybill Issued",
  //   "Insurance Issued",
  //   "Truck Left or Transit",
  //   "Truck Received at Customer End",
  //   "Truck Unloaded",
  //   "Issue Reported (Customer Feedback)",
  //   "Order Completed",
  // ];

  // const URL = "https://localhost:4000/addTruck";

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateFormData, setUpdateFormData] = useState({
    stepNo: Number,
    stepName: "",
    isChecked: false,
    dateTime: "",
    remarks: "",
  });

  const openUpdateModal = () => {
    setShowUpdateModal(true);
  };

  const closeUpdateModal = () => {
    setShowUpdateModal(false);
  };

  // const handleUpdateChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   setUpdateFormData((prevState) => ({
  //     ...prevState,
  //     [name]: type === "checkbox" ? checked : value,
  //   }));
  // };

  const handleUpdateClick = (item) => {
    setUpdateFormData({ ...item });
    openUpdateModal();
  };

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    truckNo: "",
    from: "",
    to: "",
    grade: "",
    stepNo: Number,
    stepName: "",
    lastUpdated: "",
    progress: "",
  });

  const [tableData, setTableData] = useState([]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // const handleRemoveRow = (indexToRemove) => {
  //   setTableData(tableData.filter((_, index) => index !== indexToRemove));
  // };

  //Adding trucks to the database
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/addTruck", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log(response);

      if (!response.ok) {
        throw new Error(`Http error! status: ${response.status}`);
      }

      setTableData([...tableData, formData]);
      setFormData({
        truckNo: "",
        from: "",
        to: "",
        grade: "",
        stepNo: "",
        stepName: "",
        lastUpdated: "",
        progress: "",
      });
      closeModal();
    } catch (error) {}
  };

  return (
    <Card extra={"w-full  h-full p-4"}>
      <div className="relative flex items-center justify-between">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          Add New Truck
        </div>
        <button
          className="linear flex items-center justify-center rounded-lg text-xl font-bold transition duration-200 hover:cursor-pointer"
          onClick={openModal}
        >
          ADD
        </button>

        {showModal && (
          <ModalForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            closeModal={closeModal}
          />
        )}
      </div>

      <TruckTable tableData={tableData} openUpdateModal={openUpdateModal} />
      <UpdateModal
        isShown={showUpdateModal}
        closeModal={closeUpdateModal}
        // handleUpdateChange={handleUpdateChange}
        handleUpdateClick={handleUpdateClick}
      />
    </Card>
  );
};

export default DevelopmentTable;

// {/* <CardMenu /> */}

//       {/* <div class="h-full overflow-x-scroll xl:overflow-x-hidden">
//         <table
//           {...getTableProps()}
//           className="mt-8 h-max w-full"
//           variant="simple"
//           color="gray-500"
//           mb="24px"
//         >
//           <thead>
//             {headerGroups.map((headerGroup, index) => (
//               <tr {...headerGroup.getHeaderGroupProps()} key={index}>
//                 {headerGroup.headers.map((column, index) => (
//                   <th
//                     {...column.getHeaderProps(column.getSortByToggleProps())}
//                     className="border-b border-gray-200 pr-32 pb-[10px] text-start dark:!border-navy-700 "
//                     key={index}
//                   >
//                     <div className="text-xs font-bold tracking-wide text-gray-600">
//                       {column.render("Header")}
//                     </div>
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>
//           <tbody {...getTableBodyProps()}>
//             {page.map((row, index) => {
//               prepareRow(row);
//               return (
//                 <tr {...row.getRowProps()} key={index}>
//                   {row.cells.map((cell, index) => {
//                     let data = "";
//                     if (cell.column.Header === "NAME") {
//                       data = (
//                         <p className="text-sm font-bold text-navy-700 dark:text-white">
//                           {cell.value}
//                         </p>
//                       );
//                     } else if (cell.column.Header === "FROM") {
//                       data = (
//                         <p className="text-sm font-bold text-navy-700 dark:text-white">
//                           {cell.value}
//                         </p>
//                       );
//                     } else if (cell.column.Header === "TO") {
//                       data = (
//                         <p className="text-sm font-bold text-navy-700 dark:text-white">
//                           {cell.value}
//                         </p>
//                       );
//                     } else if (cell.column.Header === "PROGRESS") {
//                       data = (
//                         <div className="flex items-center gap-3">
//                           <p className="text-sm font-bold text-navy-700 dark:text-white">
//                             {cell.value}%
//                           </p>
//                           <Progress width="w-[68px]" value={cell.value} />
//                         </div>
//                       );
//                     } else if (cell.column.Header === "UPDATEDTIME") {
//                       data = (
//                         <p className="text-sm font-bold text-navy-700 dark:text-white">
//                           {cell.value}
//                         </p>
//                       );
//                     } else if (cell.column.Header === "STATUS") {
//                       data = (
//                         <p className="text-sm font-bold text-navy-700 dark:text-white">
//                           {cell.value}
//                         </p>
//                       );
//                     }
//                     return (
//                       <td
//                         {...cell.getCellProps()}
//                         key={index}
//                         className="pt-[14px] pb-3 text-[14px]"
//                       >
//                         {data}
//                       </td>
//                     );
//                   })}
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div> */}

// else if (cell.column.Header === "DATE") {
//   data = (
//     <p className="text-sm font-bold text-navy-700 dark:text-white">
//       {cell.value}
//     </p>
//   );
// }

// else if (cell.column.Header === "TECH") {
//   data = (
//     <div className="flex items-center gap-2">
//       {cell.value.map((item, key) => {
//         if (item === "apple") {
//           return (
//             <div
//               key={key}
//               className="text-[22px] text-gray-600 dark:text-white"
//             >
//               <DiApple />
//             </div>
//           );
//         } else if (item === "android") {
//           return (
//             <div
//               key={key}
//               className="text-[21px] text-gray-600 dark:text-white"
//             >
//               <DiAndroid />
//             </div>
//           );
//         } else if (item === "windows") {
//           return (
//             <div
//               key={key}
//               className="text-xl text-gray-600 dark:text-white"
//             >
//               <DiWindows />
//             </div>
//           );
//         } else return null;
//       })}
//     </div>
//   );
// }

// {
//   "name": "Venus DS",
//   "tech": ["apple", "windows"],
//   "date": "13.Mar.2021",
//   "progress": 30
// },
// {
//   "name": "Venus 3D Asset",
//   "tech": ["apple", "android", "windows"],
//   "date": "24.Jan.2021",
//   "progress": 30
// },
// {
//   "name": "Marketplace",
//   "tech": ["apple", "windows"],
//   "date": "Oct 24, 2022",
//   "progress": 30
// },
// {
//   "name": "Marketplace",
//   "tech": ["apple", "android", "windows"],
//   "date": "Oct 24, 2022",
//   "progress": 30
// },
// {
//   "name": "Marketplace",
//   "tech": ["apple", "android", "windows"],
//   "date": "12.Jan.2021",
//   "progress": 30
// },
// {
//   "name": "Venus DB PRO",
//   "tech": ["apple"],
//   "date": "21.Feb.2021",
//   "progress": 30
// },
// {
//   "name": "Venus DS",
//   "tech": ["apple", "windows"],
//   "date": "13.Mar.2021",
//   "progress": 30
// },
// {
//   "name": "Venus 3D Asset",
//   "tech": ["apple", "android", "windows"],
//   "date": "24.Jan.2021",
//   "progress": 30
// },
// {
//   "name": "Marketplace",
//   "tech": ["apple", "windows"],
//   "date": "Oct 24, 2022",
//   "progress": 30
// },
// {
//   "name": "Marketplace",
//   "tech": ["apple", "android", "windows"],
//   "date": "Oct 24, 2022",
//   "progress": 30
// },
// {
//   "name": "Marketplace",
//   "tech": ["apple", "android", "windows"],
//   "date": "Oct 24, 2022",
//   "progress": 30
// }
