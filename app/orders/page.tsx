"use client";

import { DataTable } from "@/components/DataTable";
import PageTitle from "@/components/ui/PageTitle";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

type Props = {};

type Payment = {
  order: string;
  status: "Pending" | "Processing" | "Success" | "Failed";
  lastOrder: string;
  method: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "order",
    header: "Order",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div
          className={cn("font-medium min-w-10 w-fit px-6 py-2 rounded-lg", {
            "bg-red-200": row.getValue("status") === "Pending",
            "bg-orange-200": row.getValue("status") === "Processing",
            "bg-green-200": row.getValue("status") === "Success",
            "bg-gray-200": row.getValue("status") === "Failed",
          })}
        >
          <p>{row.getValue("status")}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order",
  },
  {
    accessorKey: "method",
    header: "Method",
  },
];

const data: Payment[] = [
  {
    order: "ORD001",
    status: "Pending",
    lastOrder: "2024-02-24",
    method: "Credit Card",
  },
  {
    order: "ORD002",
    status: "Pending",
    lastOrder: "2024-02-26",
    method: "Credit Card",
  },
  {
    order: "ORD003",
    status: "Pending",
    lastOrder: "2023-07-01",
    method: "Paypal",
  },
  {
    order: "ORD004",
    status: "Failed",
    lastOrder: "2023-05-29",
    method: "Paypal",
  },
  {
    order: "ORD005",
    status: "Processing",
    lastOrder: "2023-10-05",
    method: "Credit Card",
  },
  {
    order: "ORD006",
    status: "Failed",
    lastOrder: "2022-03-27",
    method: "Bitcoin",
  },
  {
    order: "ORD007",
    status: "Processing",
    lastOrder: "2023-12-14",
    method: "Credit Card",
  },
  {
    order: "ORD008",
    status: "Success",
    lastOrder: "2023-05-06",
    method: "Bank Transfer",
  },
  {
    order: "ORD009",
    status: "Pending",
    lastOrder: "2022-07-17",
    method: "Paypal",
  },
  {
    order: "ORD010",
    status: "Failed",
    lastOrder: "2023-09-27",
    method: "Credit Card",
  },
  {
    order: "ORD011",
    status: "Pending",
    lastOrder: "2022-07-17",
    method: "Paypal",
  },
  {
    order: "ORD012",
    status: "Failed",
    lastOrder: "2023-09-27",
    method: "Credit Card",
  },
];

const OrdersPage = (props: Props) => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Orders" />
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default OrdersPage;
