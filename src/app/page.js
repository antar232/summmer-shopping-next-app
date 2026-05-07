import HomePage from "@/components/HomePage";
import SummerTips from "@/components/SummerTips";
import TopBrands from "@/components/TopBrands";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HomePage/>
      <SummerTips/>
      <TopBrands/>
    </div>
  );
}
