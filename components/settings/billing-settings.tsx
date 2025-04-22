"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Plus, Trash2, CheckCircle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/hooks/use-toast"

export function BillingSettings() {
  const [isAddingCard, setIsAddingCard] = useState(false)

  const handleAddCard = (e: React.FormEvent) => {
    e.preventDefault()
    setIsAddingCard(false)
    toast({
      title: "Payment method added",
      description: "Your new payment method has been added successfully.",
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Billing Settings</h3>
        <p className="text-sm text-muted-foreground">Manage your subscription and payment methods</p>
      </div>
      <Separator />

      {/* Current Plan */}
      <Card>
        <CardHeader>
          <CardTitle>Current Plan</CardTitle>
          <CardDescription>You are currently on the Pro plan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-xl font-semibold">Pro Plan</h4>
                <Badge>Current</Badge>
              </div>
              <p className="text-muted-foreground mt-1">$19.99 per month</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Unlimited projects
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Advanced analytics
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Priority support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Custom branding
                </li>
              </ul>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Next billing date</p>
              <p className="font-medium">June 1, 2023</p>
              <div className="mt-4">
                <Button variant="outline">Change Plan</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <Card>
        <CardHeader>
          <CardTitle>Payment Methods</CardTitle>
          <CardDescription>Manage your payment methods</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-muted p-2">
                <CreditCard className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">•••• •••• •••• 4242</p>
                <p className="text-sm text-muted-foreground">Expires 12/24</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                Default
              </Badge>
              <Button variant="ghost" size="icon">
                <Trash2 className="h-4 w-4 text-muted-foreground" />
              </Button>
            </div>
          </div>

          <Dialog open={isAddingCard} onOpenChange={setIsAddingCard}>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Add Payment Method
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Payment Method</DialogTitle>
                <DialogDescription>Add a new credit or debit card to your account</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleAddCard}>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Cardholder Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="number">Card Number</Label>
                    <Input id="number" placeholder="•••• •••• •••• ••••" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="•••" required />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label>Card Type</Label>
                    <RadioGroup defaultValue="visa" className="flex">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="visa" id="visa" />
                        <Label htmlFor="visa">Visa</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="mastercard" id="mastercard" />
                        <Label htmlFor="mastercard">Mastercard</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="amex" id="amex" />
                        <Label htmlFor="amex">American Express</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="button" variant="outline" onClick={() => setIsAddingCard(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Add Card</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>

      {/* Billing History */}
      <Card>
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
          <CardDescription>View your recent invoices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-4 text-sm text-muted-foreground">
              <div>Date</div>
              <div>Description</div>
              <div>Amount</div>
              <div className="text-right">Status</div>
            </div>
            <Separator />
            <div className="grid grid-cols-4 text-sm">
              <div>May 1, 2023</div>
              <div>Pro Plan - Monthly</div>
              <div>$19.99</div>
              <div className="text-right">
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  Paid
                </Badge>
              </div>
            </div>
            <Separator />
            <div className="grid grid-cols-4 text-sm">
              <div>Apr 1, 2023</div>
              <div>Pro Plan - Monthly</div>
              <div>$19.99</div>
              <div className="text-right">
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  Paid
                </Badge>
              </div>
            </div>
            <Separator />
            <div className="grid grid-cols-4 text-sm">
              <div>Mar 1, 2023</div>
              <div>Pro Plan - Monthly</div>
              <div>$19.99</div>
              <div className="text-right">
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  Paid
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            View All Invoices
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
