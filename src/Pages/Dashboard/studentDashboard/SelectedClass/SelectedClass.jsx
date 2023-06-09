import useSelectedClass from "../../../../Hooks/useSelectedClass";
import TableA from "../../../../Components/TableA";

const SelectedClass = () => {
  const [selectedClasses, refetch] = useSelectedClass();
  return (
    <>
      <TableA data={selectedClasses} refetch={refetch}></TableA>
    </>
  );
};

export default SelectedClass;
