import React, { useState } from 'react';

import { Tx } from '../../../types';

type AddTxFormProps = {
  closeForm: () => void;
};

const AddTxForm = ({ closeForm }: AddTxFormProps) => {
  const [txValues, setTxValues] = useState<Tx>({
    id: 0,
    type: '',
    description: '',
    date: '',
    amount: 0,
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>): void => {
    setTxValues({
      ...txValues,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  //   const addTx = () => {};

  return (
    <>
      {/* Form mask */}
      <div onClick={closeForm} className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-30"></div>
      <form
        onSubmit={onSubmit}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 pt-6 pb-12 w-4/5 flex flex-col bg-zinc-800 rounded-lg z-10 md:w-2/4 lg:w-2/6 xl:w-1/4"
      >
        {/* Type of TX selection */}
        <div className="mb-4 flex flex-col">
          <label className="text-zinc-200" htmlFor="">
            Type of Transaction:
          </label>
          <select onChange={handleChange} value={txValues.type} className="px-2 py-2 mt-2 w-full rounded-md outline-none" name="type" id="">
            <option hidden value="default">
              Select type
            </option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>

        {/* Date input */}
        <div className="mb-4 flex flex-col">
          <label className="text-zinc-200" htmlFor="">
            Date
          </label>
          <input
            onChange={handleChange}
            value={txValues.date}
            className="px-2 py-2 mt-2 w-full rounded-md outline-none"
            type="date"
            name="date"
          ></input>
        </div>

        {/* Description of TX input */}
        <div className="mb-4 flex flex-col">
          <label className="text-zinc-200" htmlFor="">
            Description
          </label>
          <input
            onChange={handleChange}
            value={txValues.description}
            placeholder="Enter description"
            className="pl-2 py-2 mt-2 w-full rounded-md outline-none"
            type="text"
            name="description"
          />
        </div>

        {/* Amount of TX */}
        <div className="mb-8 flex flex-col">
          <label className="text-zinc-200" htmlFor="">
            Amount
          </label>
          <input
            onChange={handleChange}
            value={txValues.amount}
            placeholder="Enter amount"
            className="pl-2 py-2 mt-2 w-full rounded-md outline-none"
            type="number"
            name="amount"
            id=""
          />
        </div>

        <button className="px-4 py-2 text-white bg-purple-600 rounded-2xl">Add transaction</button>
      </form>
    </>
  );
};

export default AddTxForm;
