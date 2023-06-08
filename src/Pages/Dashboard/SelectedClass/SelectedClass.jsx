import TableA from "../../../Components/TableA";
import useSelectedClass from "../../../Hooks/useSelectedClass";

const SelectedClass = () => {
  const [selectedClasses, refetch] = useSelectedClass();
  return (
    <>
      <TableA data={selectedClasses} refetch={refetch}></TableA>
    </>
  );
};

export default SelectedClass;
