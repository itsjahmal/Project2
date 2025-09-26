
"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { submitQuoteForm } from "@/app/_actions/quote";
import { Loader2 } from "lucide-react";

const initialState = {
  type: null,
  errors: null,
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full animate-pulse transition-all duration-300 hover:scale-105 hover:animate-none" disabled={pending}>
      {pending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</> : 'Submit Quote Request'}
    </Button>
  );
}

export function QuoteForm() {
  const [state, formAction] = useActionState(submitQuoteForm, initialState);
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const defaultService = searchParams.get('service') === 'cleaning' ? 'Cleaning' : 'Moving';

  useEffect(() => {
    if (state.type === "success") {
      toast({
        title: "Request Received!",
        description: state.message,
      });
    } else if (state.type === "error") {
      const errorMessages = Object.values(state.errors || {}).flat().join(' ');
      toast({
        variant: "destructive",
        title: "Error submitting form.",
        description: errorMessages || "Please review the form for errors.",
      });
    }
  }, [state, toast]);

  return (
    <form action={formAction} className="space-y-6">
      <div className="space-y-2">
        <Label>Service Type</Label>
        <RadioGroup name="serviceType" defaultValue={defaultService} className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Moving" id="moving" />
            <Label htmlFor="moving">Moving</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Cleaning" id="cleaning" />
            <Label htmlFor="cleaning">Cleaning</Label>
          </div>
        </RadioGroup>
        {state?.errors?.serviceType && <p className="text-sm text-destructive">{state.errors.serviceType[0]}</p>}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" placeholder="John Doe" required />
          {state?.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required />
          {state?.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" required />
        {state?.errors?.phone && <p className="text-sm text-destructive">{state.errors.phone[0]}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Service Address (Origin for moves)</Label>
        <Input id="address" name="address" placeholder="123 Main St, Atlanta, GA 30303" required />
        {state?.errors?.address && <p className="text-sm text-destructive">{state.errors.address[0]}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="details">Project Details</Label>
        <Textarea id="details" name="details" placeholder="e.g., 'Moving from a 2-bedroom apartment to a house', 'Deep clean for a 1500 sq ft office', etc." rows={5} required />
        {state?.errors?.details && <p className="text-sm text-destructive">{state.errors.details[0]}</p>}
      </div>
      
      <div>
        <SubmitButton />
      </div>
    </form>
  );
}
