import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateModal = ({
  isShown,
  closeModal,

  // handleUpdateClick,
}) => {
  // var newDate = new Date();
  // var datetime = "LastSync: " + newDate.today() + " @ " + newDate.timeNow();

  const stepMap = [
    "Inquiry From Buyer",
    "Confirmation form the seller",
    "Payment form the buyer",
    "Truck Placed at seller location",
    "Truck Ready for Loading",
    "Loading Started",
    "Loading Complete",
    "Invoices Received from Seller",
    "Our Invoice Created",
    "Waybill Issued",
    "Insurance Issued",
    "Truck Left or Transit",
    "Truck Received at Customer End",
    "Truck Unloaded",
    "Issue Reported (Customer Feedback)",
    "Order Completed",
  ];

  const [trucks, setTrucks] = useState([]);

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateFormData, setUpdateFormData] = useState({
    stepNo: Number,
    stepName: "",
    isChecked: false,
    dateTime: "",
  });

  const handleUpdateChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUpdateFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleUpdateClick = (item) => {
    setUpdateFormData({ ...item });
    openUpdateModal();
  };

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    axios.get(`http://localhost:4000/trucks/${id}`).then((res) => {
      setTrucks(res.data);
    });
  }, [id]);

  const openUpdateModal = () => {
    setShowUpdateModal(true);
  };

  if (!isShown) return null;
  return (
    <div
      className="overflow-y-autobg-opacity-50 fixed inset-0 z-10 mt-16 h-full w-full"
      onClick={closeModal}
    >
      <div
        className="relative top-20 mx-auto w-96 rounded-md border bg-white p-5 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h4 className="text-lg font-bold text-gray-900">Update</h4>
          <button
            className="font-semibold text-gray-900 hover:text-gray-700"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
        <form onSubmit={handleUpdateClick}>
          <div className="mb-4">
            <label
              htmlFor="stepNo"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              Step No:
            </label>
            <input
              type="number"
              id="stepNo"
              name="stepNo"
              value={updateFormData.stepNo}
              onChange={handleUpdateChange}
              placeholder={updateFormData.stepNo}
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="stepName"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              Step Name
            </label>
            <input
              type="text"
              id="stepName"
              name="stepName"
              value={updateFormData.stepName}
              onChange={handleUpdateChange}
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="lastUpdated"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              Last Updated
            </label>
            <input
              type="text"
              id="to"
              name="to"
              value={updateFormData.dateTime}
              onChange={handleUpdateChange}
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              UPDATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
