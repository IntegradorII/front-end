"use client";
import { useLoginContext } from "@/context/LoginContext";
import React, { useState } from "react";
import { Modal } from "./Modal";
const ForgotPasswordModal = () => {
  const { openModalPassword, setOpenModalPassword } = useLoginContext();
  const { setOpenModalLogin } = useLoginContext();
  const [mostrarFormulario, setMostrarFormulario] = useState(true);
  

  const handleSendClick = () => {
    setMostrarFormulario(false);
  };

  const handleLoginClick = () => {
    setOpenModalPassword(false);
    setOpenModalLogin(true);
    setMostrarFormulario(true);
  }

  return (
    <Modal
      open={openModalPassword}
      setOpen={setOpenModalPassword}
      title="INICIO DE SESIÓN"
    >
      <div className="h-[200px] w-[350px] py-2">
        {mostrarFormulario ?
         <form className="flex flex-col space-y-6 items-center">
         <label htmlFor="email" className="w-[300px]">
           <span className="text-white  text-xl">Correo electrónico:</span>
           <input
             className="w-[300px] mt-2 h-[30px] rounded-lg"
             type="text"
             name="LogIn"
             id="LogIn"
           />
         </label>
         <button onClick={handleSendClick} className="w-40 bg-yellow hover:bg-yellow-dark text-black hover:text-white font-bold py-2 px-4 rounded-3xl">
           Enviar
         </button>
       </form>
       : <div className="flex flex-col space-y-6 items-center">
          <p className="text-white text-xl text-justify">Se ha enviado un correo electrónico a tu cuenta de correo electrónico con las instrucciones para restablecer tu contraseña.</p>
          <button className="w-40 bg-yellow hover:bg-yellow-dark text-black hover:text-white font-bold py-2 px-4 rounded-3xl" onClick={ handleLoginClick }>
            Iniciar Sesión
          </button>
       </div>
      }
       
      </div>
    </Modal>
  );
};

export { ForgotPasswordModal };
