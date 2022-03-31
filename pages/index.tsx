import Counter from "../src/components/counter";
import Eip191 from "../src/components/eip191";

declare global {
  interface Window {
    ethereum: any;
  }
}

export default function Home() {
  return (
    <div>
      <div className="w-full text-center">
        <h1 className="text-3xl font-bold">EIP191 Demo</h1>
        <Counter />
        <Eip191 />
      </div>
    </div>
  );
}
