import List from "@/Components/List";
import data from "../../../public/dummydata.json";

export default function popular() {
  return (
    <div>
      <List fullData={data} category="All" />
    </div>
  );
}
