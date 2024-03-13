import Card, { CardProps } from "@/components/Card";
import PageTitle from "@/components/ui/PageTitle";
import { DollarSign, LucideAArrowDown } from "lucide-react";
import Image from "next/image";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$45,430,000",
    description: "+20% from last month",
    icon: DollarSign,
  },
  {
    label: "Revenue",
    amount: "$430,000",
    description: "+10% from last month",
    icon: DollarSign,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((item, i) => (
          <Card
            key={i}
            label={item.label}
            amount={item.amount}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </section>
    </div>
  );
}
