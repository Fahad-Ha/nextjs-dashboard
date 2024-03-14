import Barchart from "@/components/Barchart";
import Card, { CardContent, CardProps } from "@/components/Card";
import PageTitle from "@/components/ui/PageTitle";
import { CreditCard, DollarSign, Users } from "lucide-react";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$45,430,000",
    description: "+20% from last month",
    icon: DollarSign,
  },
  {
    label: "Subscriptions",
    amount: "+4,050",
    description: "+50% from last month",
    icon: Users,
  },
  {
    label: "Sales",
    amount: "+12,400",
    description: "+10% from last month",
    icon: CreditCard,
  },
  {
    label: "Active Now",
    amount: "+300",
    description: "+43 since last hour",
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
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <Barchart />
        </CardContent>
        <CardContent>
          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">
              You made 350 sales this month.
            </p>
          </section>
        </CardContent>
      </section>
    </div>
  );
}
