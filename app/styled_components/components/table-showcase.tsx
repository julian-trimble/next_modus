import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export function TableShowcase() {
  return (
    <div className="flex flex-col gap-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Basic Table</CardTitle>
          <CopyButton text="Basic Table" />
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-right">
                    {invoice.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>With Footer</CardTitle>
          <CopyButton text="With Footer" />
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.slice(0, 5).map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-right">
                    {invoice.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>With Status Badges</CardTitle>
          <CopyButton text="With Status Badges" />
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.slice(0, 5).map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        invoice.paymentStatus === "Paid"
                          ? "default"
                          : invoice.paymentStatus === "Pending"
                          ? "secondary"
                          : "destructive"
                      }
                    >
                      {invoice.paymentStatus}
                    </Badge>
                  </TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-right">
                    {invoice.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Compact Table</CardTitle>
          <CopyButton text="Compact Table" />
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="h-10">Name</TableHead>
                  <TableHead className="h-10">Email</TableHead>
                  <TableHead className="h-10">Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="h-10">
                  <TableCell className="py-2">John Doe</TableCell>
                  <TableCell className="py-2">john@example.com</TableCell>
                  <TableCell className="py-2">Admin</TableCell>
                </TableRow>
                <TableRow className="h-10">
                  <TableCell className="py-2">Jane Smith</TableCell>
                  <TableCell className="py-2">jane@example.com</TableCell>
                  <TableCell className="py-2">User</TableCell>
                </TableRow>
                <TableRow className="h-10">
                  <TableCell className="py-2">Bob Johnson</TableCell>
                  <TableCell className="py-2">bob@example.com</TableCell>
                  <TableCell className="py-2">Editor</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Striped Table</CardTitle>
          <CopyButton text="Striped Table" />
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="bg-muted/50">
                <TableCell>Laptop</TableCell>
                <TableCell>Electronics</TableCell>
                <TableCell>$999.00</TableCell>
                <TableCell>15</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Mouse</TableCell>
                <TableCell>Electronics</TableCell>
                <TableCell>$29.99</TableCell>
                <TableCell>50</TableCell>
              </TableRow>
              <TableRow className="bg-muted/50">
                <TableCell>Keyboard</TableCell>
                <TableCell>Electronics</TableCell>
                <TableCell>$79.99</TableCell>
                <TableCell>25</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Monitor</TableCell>
                <TableCell>Electronics</TableCell>
                <TableCell>$299.99</TableCell>
                <TableCell>8</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
