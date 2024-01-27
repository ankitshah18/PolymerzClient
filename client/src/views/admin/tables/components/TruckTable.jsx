import React, { useEffect, useState } from "react";
import Progress from "components/progress";
import axios from "axios";

import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
const TruckTable = ({ tableData, openUpdateModal }) => {
  const [trucks, setTrucks] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    // setLoading(true);
    axios
      .get("http://localhost:4000/trucks")
      .then((res) => {
        setTrucks(res.data.data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [trucks]);

  // console.log(trucks);

  return (
    <div class="h-full overflow-x-scroll xl:overflow-x-hidden">
      <table
        className="mt-8 h-max w-full"
        mb="30px"
        variant="simple"
        color="gray-500"
      >
        <thead>
          <tr>
            <th className="border-b border-gray-200 pr-24 pb-[10px] text-start dark:!border-navy-700 ">
              <div className="text-xs font-bold tracking-wide text-gray-600">
                Truck No
              </div>
            </th>
            <th className="border-b border-gray-200 pr-32 pb-[10px] text-start dark:!border-navy-700 ">
              <div className="text-xs font-bold tracking-wide text-gray-600">
                From
              </div>
            </th>
            <th className="border-b border-gray-200 pr-32 pb-[10px] text-start dark:!border-navy-700 ">
              <div className="text-xs font-bold tracking-wide text-gray-600">
                To
              </div>
            </th>
            <th className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700 ">
              <div className="text-xs font-bold tracking-wide text-gray-600">
                Grade
              </div>
            </th>
            <th className="border-b border-gray-200 pr-12 pb-[10px] text-start dark:!border-navy-700 ">
              <div className="text-xs font-bold tracking-wide text-gray-600">
                Step No
              </div>
            </th>
            <th className="border-b border-gray-200 pr-24 pb-[10px] text-start dark:!border-navy-700 ">
              <div className="text-xs font-bold tracking-wide text-gray-600">
                Step Name
              </div>
            </th>
            <th className="border-b border-gray-200 pr-14 pb-[10px] text-start dark:!border-navy-700 ">
              <div className="text-xs font-bold tracking-wide text-gray-600">
                Last Updated
              </div>
            </th>
            <th className="border-b border-gray-200 pr-32 pb-[10px] text-start dark:!border-navy-700 ">
              <div className="text-xs font-bold tracking-wide text-gray-600">
                Progress
              </div>
            </th>
            <th className="border-b border-gray-200 pr-32 pb-[10px] text-start dark:!border-navy-700 ">
              <div className="text-xs font-bold tracking-wide text-gray-600">
                Status
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {trucks.map((item, index) => (
            <tr key={index}>
              <td className="pt-[14px] pb-3 text-[14px]">
                <p className="text-sm font-bold text-navy-700 dark:text-white">
                  {item.truckNo}
                </p>
              </td>
              <td className="pt-[14px] pb-3 text-[14px]">
                <p className="text-sm font-bold text-navy-700 dark:text-white">
                  {item.from}
                </p>
              </td>
              <td className="pt-[14px] pb-3 text-[14px]">
                <p className="text-sm font-bold text-navy-700 dark:text-white">
                  {item.to}
                </p>
              </td>
              <td className="pt-[14px] pb-3 text-[14px]">
                <p className="text-sm font-bold text-navy-700 dark:text-white">
                  {item.grade}
                </p>
              </td>
              <td className="pt-[14px] pb-3 text-[14px]">
                <p className="text-sm font-bold text-navy-700 dark:text-white">
                  {item.stepNo}
                </p>
              </td>
              <td className="pt-[14px] pb-3 text-[14px]">
                <p className="text-sm font-bold text-navy-700 dark:text-white">
                  {item.stepName}
                </p>
              </td>
              <td className="pt-[14px] pb-3 text-[14px]">
                <p className="text-sm font-bold text-navy-700 dark:text-white">
                  {item.lastUpdated}
                </p>
              </td>

              <td className="pt-[14px] pb-3 text-[14px]">
                <p className="text-sm font-bold text-navy-700 dark:text-white">
                  {item.progress}
                </p>
                <Progress width="w-[68px]" value={item.progress} />
              </td>
              <td className="flex items-center pt-[14px] pb-3  text-[14px] ">
                <AiOutlineEdit
                  className="cursor-pointer text-2xl text-green-600"
                  onClick={openUpdateModal}
                />
                <span className="mx-2">/</span>
                <MdOutlineDelete className="cursor-pointer text-2xl text-red-600" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TruckTable;
