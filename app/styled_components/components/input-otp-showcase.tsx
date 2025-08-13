"use client";
import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

export function InputOTPShowcase() {
  const [value, setValue] = React.useState("");
  const [digitValue, setDigitValue] = React.useState("");
  const [patternValue, setPatternValue] = React.useState("");

  return (
    <div className="flex flex-col gap-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Default</CardTitle>
          <CopyButton text="Default" />
        </CardHeader>
        <CardContent>
          <InputOTP
            maxLength={6}
            value={value}
            onChange={(value) => setValue(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <div className="text-center text-sm mt-2">
            {value === "" ? (
              <>Enter your one-time password.</>
            ) : (
              <>You entered: {value}</>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Digits Only</CardTitle>
          <CopyButton text="Digits Only" />
        </CardHeader>
        <CardContent>
          <InputOTP
            maxLength={4}
            pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
            value={digitValue}
            onChange={(value) => setDigitValue(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
          <div className="text-center text-sm mt-2">
            {digitValue === "" ? (
              <>Enter 4-digit code.</>
            ) : (
              <>You entered: {digitValue}</>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Custom Pattern</CardTitle>
          <CopyButton text="Custom Pattern" />
        </CardHeader>
        <CardContent>
          <InputOTP
            maxLength={6}
            pattern="^[a-zA-Z0-9]*$"
            value={patternValue}
            onChange={(value) => setPatternValue(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <div className="text-center text-sm mt-2">
            {patternValue === "" ? (
              <>Enter alphanumeric code.</>
            ) : (
              <>You entered: {patternValue}</>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
