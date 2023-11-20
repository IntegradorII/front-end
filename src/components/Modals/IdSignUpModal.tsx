"use client";
import React from "react";
import { Modal } from "./Modal";
import { useLoginContext } from "@/context/LoginContext";
const IdSignUpModal = () => {
  const { openIdSignUpModal, setOpenIdSignUpModal } = useLoginContext();
  const { setOpenSignUpModal } = useLoginContext();

  const handleContinueClick = () => {
    setOpenIdSignUpModal(false);
    setOpenSignUpModal(true);
  };

  return (
    <Modal
      open={openIdSignUpModal}
      setOpen={setOpenIdSignUpModal}
      title="REGISTRO"
    >
      <div className="h-[250px] w-[350px] py-2">
        <form className="flex flex-col space-y-6 items-center">
          <label htmlFor="IDType" className="w-[300px]">
            <span className="text-white  text-xl">Tipo de documento:</span>
            <select
              className="w-[300px] mt-2 h-[30px] rounded-lg"
              name="IDType"
              id="IDType"
              defaultValue={0}
            >
              <option disabled value={0}>
                Seleccione un tipo de documento
              </option>
              <option value="CC">Cédula de ciudadanía</option>
              <option value="CE">Cédula de extranjería</option>
              <option value="PA">Pasaporte</option>
            </select>
          </label>
          <label htmlFor="ID" className="w-[300px]">
            <span className="text-white  text-xl">Número de documento:</span>
            <input
              className="w-[300px] mt-2 h-[30px] rounded-lg"
              type="text"
              name="id"
            />
          </label>
          <div
            onClick={handleContinueClick}
            className="w-40 flex flex-col justify-center items-center bg-yellow hover:bg-yellow-dark text-black hover:text-white font-bold py-2 px-4 rounded-3xl"
          >
            Siguiente
          </div>
        </form>
      </div>
    </Modal>
  );
};

export { IdSignUpModal };
