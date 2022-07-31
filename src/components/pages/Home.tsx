import { useAppSelector } from "../../app/hooks";
import { getGridData } from "../../app/slices/gridSlice";
import { GridComponent } from "../grid/GridComponent";

export const Home = () => {
  const fetchData = useAppSelector(getGridData);

  return <GridComponent rowData={fetchData} pagination={10}/>;
};
