"use client";
import React from "react";
import { Modal } from "./Modal";
import { useLoginContext } from "@/context/LoginContext";
const SignUpModal = () => {
  const { openSignUpModal, setOpenSignUpModal } = useLoginContext();

  return (
    <Modal open={openSignUpModal} setOpen={setOpenSignUpModal} title="REGISTRO">
      <div className="h-[500px] w-[350px] py-2">
        <form className="flex flex-col space-y-6 items-center">
          <div className="w-[320px] flex justify-between">
            <label htmlFor="name" className="w-[150px]">
              <span className="text-white  text-xl">Nombres:</span>
              <input
                className="w-[150px] mt-2 h-[30px] rounded-lg"
                type="text"
                name="name"
                id="name"
              />
            </label>
            <label htmlFor="surname" className="w-[150px]">
              <span className="text-white  text-xl">Apellidos:</span>
              <input
                className="w-[150px] mt-2 h-[30px] rounded-lg"
                type="text"
                name="surname"
                id="surname"
              />
            </label>
          </div>

          <label htmlFor="email" className="w-[320px]">
            <span className="text-white  text-xl">Correo electrónico:</span>
            <input
              className="w-[320px] mt-2 h-[30px] rounded-lg"
              type="text"
              name="LogIn"
              id="LogIn"
            />
          </label>
          <label htmlFor="telephone" className="w-[320px]">
            <span className="text-white  text-xl">Celular:</span>
            <input
              className="w-[320px] mt-2 h-[30px] rounded-lg"
              type="text"
              name="telephone"
              id="telephone"
            />
          </label>
          <label htmlFor="password" className="w-[320px]">
            <span className="text-white  text-xl">Contraseña:</span>
            <input
              className="w-[320px] mt-2 h-[30px] rounded-lg"
              type="text"
              name="password"
              id="password"
            />
          </label>
          <div className="w-[320px] flex justify-between">
            <label htmlFor="state" className="w-[150px]">
              <span className="text-white  text-xl">Departamento:</span>
              <input
                className="w-[150px] mt-2 h-[30px] rounded-lg"
                type="text"
                name="state"
                id="state"
              />
            </label>
            <label htmlFor="city" className="w-[150px]">
              <span className="text-white  text-xl">Ciudad:</span>
              <input
                className="w-[150px] mt-2 h-[30px] rounded-lg"
                type="text"
                name="city"
                id="city"
              />
            </label>
          </div>
          <button className="w-40 bg-yellow hover:bg-yellow-dark text-black hover:text-white font-bold py-2 px-4 rounded-3xl">
            Registrarse
          </button>
        </form>
      </div>
    </Modal>
  )
}

export { SignUpModal };
