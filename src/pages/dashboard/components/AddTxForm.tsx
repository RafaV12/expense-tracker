import React, { useState } from 'react';

import { Tx } from '../../../utils/types';

import { useAppContext } from '../../../context/AppContext';

type AddTxFormProps = {
  closeForm: () => void;
};

const AddTxForm = ({ closeForm }: AddTxFormProps) => {
  const { createTx, loading, error, successMsg } = useAppContext();

  const [txValues, setTxValues] = useState<Tx>({
    _id: '',
    type: '',
    date: '',
    description: '',
    amount: 0,
  });

  const onChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>): void => {
    setTxValues({
      ...txValues,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // Check if description contains any letter, so it's not empty.
    if (!txValues.description.match(/[a-zA-Z]/g)) {
      alert('You need to input a description!');
      return;
    } else if (txValues.amount === 0 || txValues.amount > 1000000000) {
      alert('Amount can not be 0 or bigger than 1 billion!');
      return;
    }

    createTx(txValues);

    setTxValues({
      _id: '',
      type: '',
      date: '',
      description: '',
      amount: 0,
    });
  };

  return (
    <>
      {/* Form mask */}
      <div onClick={closeForm} className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-30 z-20"></div>
      {/* Form submit error msg */}
      {error && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-7 border flex flex-col justify-center items-center text-center text-white bg-zinc-800 rounded-lg z-40">
          {error}
        </div>
      )}
      {/* Form submit success msg */}
      {successMsg && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-7 border flex flex-col justify-center items-center text-center text-white bg-zinc-800 rounded-lg z-40">
          Transaction added!
        </div>
      )}
      <form
        onSubmit={onSubmit}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 pt-6 pb-12 w-4/5 flex flex-col bg-zinc-800 rounded-lg z-30 md:w-2/4 lg:w-2/6 xl:w-1/4"
      >
        {/* Type of TX selection */}
        <div className="mb-4 flex flex-col">
          <label className="text-zinc-200" htmlFor="">
            Type of Transaction:
          </label>
          <select
            onChange={onChange}
            value={txValues.type}
            className="px-2 py-2 mt-2 w-full text-black rounded-md outline-none"
            name="type"
            id=""
            required
          >
            <option hidden value="">
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
            onChange={onChange}
            value={txValues.date}
            className="px-2 py-2 mt-2 w-full text-black rounded-md outline-none"
            type="date"
            name="date"
            max={new Date().getFullYear().toString() + '-12-31'}
            min={new Date().getFullYear().toString() + '-01-01'}
            required
          ></input>
        </div>

        {/* Description of TX input */}
        <div className="mb-4 flex flex-col">
          <label className="text-zinc-200" htmlFor="">
            Description
          </label>
          <input
            onChange={onChange}
            value={txValues.description}
            placeholder="Enter description"
            className="pl-2 py-2 mt-2 w-full text-black rounded-md outline-none"
            maxLength={34}
            minLength={1}
            type="text"
            name="description"
            required
          />
        </div>

        {/* Amount of TX */}
        <div className="mb-8 flex flex-col">
          <label className="text-zinc-200" htmlFor="">
            Amount
          </label>
          <input
            onChange={onChange}
            value={txValues.amount}
            placeholder="Enter amount"
            className="pl-2 py-2 mt-2 w-full text-black rounded-md outline-none"
            type="number"
            name="amount"
            id=""
            required
          />
        </div>

        <button disabled={loading ? true : false} className="px-4 py-2 text-white bg-purple-600 rounded-lg">
          {loading ? `Adding transaction...` : 'Add transaction'}
        </button>
      </form>
    </>
  );
};

export default AddTxForm;

