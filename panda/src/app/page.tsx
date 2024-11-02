import Image from "next/image";
import Search from "./components/search"
import Grid from "./components/grid"

export default function Home() {
  return (
    <div>
      <div>
        <Search/>
      </div>
      <div>
        <Grid />
      </div>
    </div>
  );
}
