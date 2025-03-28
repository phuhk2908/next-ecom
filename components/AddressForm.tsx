"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";

import { useLocation } from "@/hooks/use-location";
import { LocationCombobox } from "./ui/location-combobox";

const AddressForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [vnpayMethod, setVnpayMethod] = useState<string | undefined>("VNPAYQR");

  const [selectedProvince, setSelectedProvince] = useState<number | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<number | null>(null);
  const [selectedWard, setSelectedWard] = useState<number | null>(null);

  const {
    provinces,
    districts,
    wards,
    loadingProvinces,
    loadingDistricts,
    loadingWards,
    provinceError,
    districtError,
    wardError,
  } = useLocation({
    provinceCode: selectedProvince || undefined,
    districtCode: selectedDistrict || undefined,
  });

  useEffect(() => {
    setSelectedDistrict(null);
    setSelectedWard(null);
  }, [selectedProvince]);

  useEffect(() => {
    setSelectedWard(null);
  }, [selectedDistrict]);

  useEffect(() => {
    if (paymentMethod === "vnpay") {
      setVnpayMethod(undefined);
    }
  }, [paymentMethod]);

  return (
    <form>
      <div className="space-y-6">
        <h3 className="text-xl font-medium">Shipping address</h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-gray-600">
              Full name <span className="text-red-500">*</span>
            </Label>
            <Input id="fullName" placeholder="Enter your full name" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-600">
              Phone number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              placeholder="Enter your phone number (only digits)"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-600">
            Email address <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email address"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="street" className="text-gray-600">
              Street name and house number{" "}
              <span className="text-red-500">*</span>
            </Label>
            <Input
              id="street"
              placeholder="Enter your street name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="province" className="text-gray-600">
              City/Province <span className="text-red-500">*</span>
            </Label>
            <LocationCombobox
              value={selectedProvince}
              onValueChange={setSelectedProvince}
              options={provinces}
              loading={loadingProvinces}
              error={provinceError}
              placeholder="Select city/province"
              searchPlaceholder="Search province..."
              disabled={loadingProvinces}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="district" className="text-gray-600">
              District <span className="text-red-500">*</span>
            </Label>
            <LocationCombobox
              value={selectedDistrict}
              onValueChange={setSelectedDistrict}
              options={districts}
              loading={loadingDistricts}
              error={districtError}
              placeholder="Select district"
              searchPlaceholder="Search district..."
              disabled={!selectedProvince || loadingDistricts}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ward" className="text-gray-600">
              Ward <span className="text-red-500">*</span>
            </Label>
            <LocationCombobox
              value={selectedWard}
              onValueChange={setSelectedWard}
              options={wards}
              loading={loadingWards}
              error={wardError}
              placeholder="Select ward"
              searchPlaceholder="Search ward..."
              disabled={!selectedDistrict || loadingWards}
            />
          </div>
        </div>

        <div className="space-y-4 pt-6">
          <h3 className="text-xl font-medium">Payment method</h3>

          <RadioGroup
            value={paymentMethod}
            onValueChange={setPaymentMethod}
            className="space-y-4"
          >
            <label
              htmlFor="cod"
              className="flex cursor-pointer items-start justify-between rounded-md border p-4 hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem value="cod" id="cod" />
                <div>
                  <span className="text-base font-medium">
                    Cash on Delivery (COD)
                  </span>
                  <p className="text-sm text-gray-500">
                    Pay when you receive the package
                  </p>
                </div>
              </div>
            </label>

            <label
              htmlFor="vnpay"
              className="flex cursor-pointer items-start justify-between rounded-md border p-4 hover:bg-gray-50"
            >
              <div className="flex w-full items-center gap-3">
                <RadioGroupItem value="vnpay" id="vnpay" />
                <div className="flex-grow">
                  <span className="text-base font-medium">VNPAY</span>
                  <p className="text-sm text-gray-500">Online payment</p>
                </div>
                {paymentMethod === "vnpay" && (
                  <Select value={vnpayMethod} onValueChange={setVnpayMethod}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select VNPAY method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="VNPAYQR">VNPAY QR</SelectItem>
                      <SelectItem value="VNBANK">VNPAY Bank</SelectItem>
                      <SelectItem value="INTCARD">
                        International Card
                      </SelectItem>
                    </SelectContent>
                  </Select>
                )}
              </div>
            </label>
          </RadioGroup>
        </div>
      </div>
    </form>
  );
};

export default AddressForm;
