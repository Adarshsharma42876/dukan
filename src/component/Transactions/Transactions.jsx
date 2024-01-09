import React from "react";
import {
  ArrowDownUp,
  CaretDownFill,
  ChevronLeft,
  ChevronRight,
  Download,
  InfoCircle,
  Search,
} from "react-bootstrap-icons";



const Transactions = () => {
  const blankArray = new Array(19).fill(undefined);

  return (
    <>
    <p className=" font-semibold text-xl my-10 px-10 ">
          Transactions | This Month
        </p>
      <div className="px-4 bg-white py-3 m-5 rounded-md ">
        

        <div className="container ">
          <div className="sec1 flex justify-between text-slate-600">
            <div className="px-3 w-72  py-2 border-solid border-2 flex items-center rounded-sm">
              <Search color="grey" />
              <p className=" text-slate-600 pl-2">Search by order ID... </p>
            </div>
            <div className="flex gap-3">
              <div className="px-3   border-solid border-2 flex items-center rounded-sm">
                <p className="pr-2">Sort</p> <ArrowDownUp />
              </div>
              <div className="px-3   border-solid border-2 flex items-center rounded-sm">
                <Download />
              </div>
            </div>
          </div>
        </div>

        <div className="table w-full mt-3 ">
          <div className="col bg-gray-100 flex justify-between  px-4 text-slate-600 font-semibold py-3 rounded-md">
            <p>Order ID</p>
            <p className="flex items-center gap-1 pl-10">
              Order date <CaretDownFill />{" "}
            </p>
            <p className="pl-10">Order amount</p>
            <p className="flex items-center gap-1 ">
              Transaction fees <InfoCircle />{" "}
            </p>
          </div>

          {blankArray.map(() => {
            return <Data />;
          })}

        <div className="bottom flex justify-center gap-10 my-10 ">
            <div className="px-3 py-1   border-solid border-2 flex items-center rounded-sm">
              <ChevronLeft /> <p className="pr-2">Previous</p>
            </div>

            <div className="flex gap-7 justify-center items-center">
              <p>1</p>
              <p>...</p>
              <p className="px-2 py-1 bg-[#0A66C2] text-white rounded-sm">10</p>
              <p>11</p>
              <p>12</p>
              <p>13</p>
              <p>14</p>
              <p>15</p>
              <p>16</p>
              <p>17</p>
              <p>18</p>
            </div>

            <div className="px-3   border-solid border-2 flex items-center rounded-sm">
               <p className="pr-2">Next</p>  <ChevronRight />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

function Data() {
  return (
    <>
      <div className=" flex    px-4 my-4  justify-between">
        <p className=" text-[#0A66C2] font-semibold">#281209</p>
        <p className="">7 July, 2023</p>
        <p className="  ">₹1,278.23</p>
        <p className=" pr-24 ">₹22</p>
      </div>
      <hr />
    </>
  );
}

export default Transactions;
