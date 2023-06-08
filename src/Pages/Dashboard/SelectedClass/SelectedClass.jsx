import TableA from "../../../Components/TableA";
import useSelectedClass from "../../../Hooks/useSelectedClass";

const SelectedClass = () => {
  const [selectedClasses] = useSelectedClass();
  return (
    <>
      <TableA data={selectedClasses}></TableA>
    </>
  );
};

export default SelectedClass;
