import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InputOTP, InputOTPSlot } from "@/components/ui/input-otp";

export function VerifyForm({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <Card>
        <CardHeader className="border-b text-center">
          <CardTitle>Verify your account</CardTitle>
          <CardDescription>Enter the code sent to [customer email]</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6 items-center justify-center">
              <InputOTP maxLength={6}>
                <InputOTPSlot
                  index={0}
                  spaced={false}
                />
                <InputOTPSlot
                  index={1}
                  spaced={false}
                />
                <InputOTPSlot
                  index={2}
                  spaced={false}
                />
                <InputOTPSlot
                  index={3}
                  spaced={false}
                />
                <InputOTPSlot
                  index={4}
                  spaced={false}
                />
                <InputOTPSlot
                  index={5}
                  spaced={false}
                />
              </InputOTP>
              <p className="text-center text-sm text-muted-foreground">
                Code expires in <span className="font-semibold">1 hour</span>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
