import Modal from "../../Modal";
import useLocalStorage from "../../hooks";

const RequirementOne = () => {
  const [auth] = useLocalStorage("@auth", []);

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
