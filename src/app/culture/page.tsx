import List from "@/Components/List";
// import data from "../../../public/dummydata.json";
import Axios from "@/utils/Axios";
import axios from "axios";

export default async  function popular() {
  const data = await axios.get('https://eventia-api.vercel.app/api/events')
  return (
    <div>
      <List fullData={data.data} category="All" />
    </div>
  );
}
