import React from "react";

const ModalForm = ({ formData, handleChange, handleSubmit, closeModal }) => {
  return (
    <div
      className="fixed inset-0 z-10 mt-16 h-full w-full overflow-y-auto bg-opacity-50"
      onClick={closeModal}
    >
      <div
        className="overflow-y-autobg-opacity-50 fixed inset-0 z-10 mt-16 h-full w-full  "
        onClick={closeModal}
      >
        <div
          className="relative top-20 mx-auto w-96 rounded-md border bg-white p-5 shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-lg font-bold text-gray-900">Add New Truck</h4>
            <button
              className="font-semibold text-gray-900 hover:text-gray-700"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="truckNo"
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                Truck No:
              </label>
              <input
                type="text"
                id="truckNo"
                name="truckNo"
                value={formData.truckNo}
                onChange={handleChange}
                className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="fromLocation"
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                From Location:
              </label>
              <input
                type="text"
                id="from"
                name="from"
                value={formData.from}
                onChange={handleChange}
                className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="toLocation"
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                To Location:
              </label>
              <input
                type="text"
                id="to"
                name="to"
                value={formData.to}
                onChange={handleChange}
                className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="grade"
                className="mb-2 block text-sm font-bold text-gray-700"
              >
                Grade
              </label>
              <input
                type="text"
                id="grade"
                name="grade"
                onChange={handleChange}
                className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
