import List from "@/Components/List";
import axios from "axios";

export default async function popular() {
  const data = await axios.get('https://eventia-api.vercel.app/api/events')
  return (
    <div>
      <List fullData={data.data} category="All" />
    </div>
  );
}
