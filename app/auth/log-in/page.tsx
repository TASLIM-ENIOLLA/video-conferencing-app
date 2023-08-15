"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const [ formData, setFormData ] = useState <FormDataType> ({
    matricNo: "",
    password: ""
  }); 

  function onSubmit (event: FormEvent): void {
    event.preventDefault();

    console.log(formData);
    router.push('../dashboard')
  }

  return (
    <section className="pt-40 pb-20 px-5 md:px-20">
      <div className="space-y-10 max-w-[450px]">
        <div className="pb-5">
          <div className="text-4xl capitalize">sign in</div>
        </div>
        <form
          onSubmit={onSubmit}
          className="space-y-10"
        >
          <div>
            <div className="text-blue-500 capitalize font-semibold mb-2">matric. no</div>
            <input
              type="text"
              autoFocus={true}
              value={formData.matricNo}
              onChange={({target: {value}}) => setFormData(n => ({...n, matricNo: value}))}
              className="text-gray-600 capitalize font-bold focus:outline-none bg-gray-200 border-b-2 border-b-blue-500 rounded-tl-lg rounded-tr-lg border-0 border block w-full p-4"
            />
          </div>
          <div>
            <div className="text-blue-500 capitalize font-semibold mb-2">password</div>
            <input
              type="password"
              value={formData.password}
              onChange={({target: {value}}) => setFormData(n => ({...n, password: value}))}
              className="text-gray-600 capitalize font-bold focus:outline-none bg-gray-200 border-b-2 border-b-blue-500 rounded-tl-lg rounded-tr-lg border-0 border block w-full p-4"
            />
          </div>
          <div className="pt-5">
            <input
              type="submit"
              value="sign in"
              className="bg-blue-500 px-10 py-4 cursor-pointer text-white font-bold rounded-lg uppercase block"
            />
          </div>
        </form>
      </div>
    </section>
  );
}

type FormDataType = {
  matricNo: string,
  password: string
}