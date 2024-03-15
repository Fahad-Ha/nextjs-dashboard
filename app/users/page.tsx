"use client";

import { DataTable } from "@/components/DataTable";
import PageTitle from "@/components/ui/PageTitle";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

type Props = {};

export type Payment = {
  name: string;
  // status: "pending" | "processing" | "success" | "failed";
  lastOrder: string;
  email: string;
  method: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <img
            className="h-10 w-10"
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue(
              "name"
            )}`}
            alt="user-image"
          />
          <p>{row.getValue("name")}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
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

export const data: Payment[] = [
  {
    name: "fahad",
    lastOrder: "2024-02-24",
    email: "m@example.com",
    method: "Credit Card",
  },
  {
    name: "Max",
    lastOrder: "2023-07-10",
    email: "ellisethan@brady.com",
    method: "Bank Transfer",
  },
  {
    name: "Tiffany",
    lastOrder: "2022-10-31",
    email: "william71@gmail.com",
    method: "Bank Transfer",
  },
  {
    name: "Gary",
    lastOrder: "2022-06-20",
    email: "kristyburton@gmail.com",
    method: "Credit Card",
  },
  {
    name: "Julian",
    lastOrder: "2022-04-21",
    email: "thomas73@hotmail.com",
    method: "Paypal",
  },
  {
    name: "Donna",
    lastOrder: "2022-09-10",
    email: "inash@davis.info",
    method: "Bitcoin",
  },
  {
    name: "Joseph",
    lastOrder: "2023-05-08",
    email: "sdiaz@marsh.com",
    method: "Paypal",
  },
  {
    name: "Dale",
    lastOrder: "2023-12-30",
    email: "barbara14@gmail.com",
    method: "Bitcoin",
  },
  {
    name: "Denise",
    lastOrder: "2023-01-28",
    email: "troydowns@hotmail.com",
    method: "Bank Transfer",
  },
  {
    name: "Matthew",
    lastOrder: "2023-10-15",
    email: "candace95@hotmail.com",
    method: "Bitcoin",
  },
  {
    name: "David",
    lastOrder: "2022-10-21",
    email: "ygreen@cochran.net",
    method: "Bank Transfer",
  },
  {
    name: "Julie",
    lastOrder: "2022-04-22",
    email: "robert82@brown.com",
    method: "Paypal",
  },
  {
    name: "Roger",
    lastOrder: "2022-05-21",
    email: "robinsondonald@callahan.com",
    method: "Paypal",
  },
  {
    name: "Thomas",
    lastOrder: "2024-02-10",
    email: "davisnicholas@riley.info",
    method: "Bitcoin",
  },
  {
    name: "Savannah",
    lastOrder: "2023-02-04",
    email: "twilliams@gmail.com",
    method: "Credit Card",
  },
  {
    name: "Michael",
    lastOrder: "2023-06-26",
    email: "amanda60@daniels.com",
    method: "Bitcoin",
  },
  // ...
];

const UsersPage = (props: Props) => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Users" />
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default UsersPage;
