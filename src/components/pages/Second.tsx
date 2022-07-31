import { useAppSelector } from "../../app/hooks";
import { getGridData } from "../../app/slices/gridSlice";
import { GridComponent } from "../grid/GridComponent";

export const Second = () => {
  const fetchData = useAppSelector(getGridData);

  return <GridComponent rowData={fetchData} pagination={20} />;
};
