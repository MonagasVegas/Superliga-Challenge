import React from "react";
import Modal from "../../Modal";
import useLocalStorage from "../../hooks";

const RequirementOne = () => {
  const [auth] = useLocalStorage("@auth", []);
  console.log("🐉 ~ RequirementOne ~ auth:", auth)

  console.log('AQUI ES ', auth.length)

  return (
    <div>
      <Modal
        title={auth.length}
        subtitle="Es la cantidad de personas registradas"
      />
    </div>
  );
};

export default RequirementOne;
