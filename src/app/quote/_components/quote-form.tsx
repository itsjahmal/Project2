
"use client";

import { useState, useEffect, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

// Data contract for the API
interface QuotePayload {
  service_type: "courier" | "cleaning";
  name: string;
  phone: string;
  email: string;
  details: string;
  honeypot: string; // For spam protection
}

interface ApiResponse {
  success: boolean;
  message: string;
  quote_ref?: string;
}

export function QuoteForm() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const defaultService = searchParams.get('service') === 'cleaning' ? 'cleaning' : 'courier';

  const [serviceType, setServiceType] = useState<'courier' | 'cleaning'>(defaultService);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');
  const [address, setAddress] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    setServiceType(defaultService);
  }, [defaultService]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    // Basic client-side validation
    if (!name || !email || !phone || !details || !address) {
      setError("Please fill out all required fields.");
      setLoading(false);
      return;
    }

    const payload: QuotePayload = {
      service_type: serviceType,
      name,
      phone,
      email,
      details: `Address: ${address}\n\nDetails: ${details}`,
      honeypot,
    };

    try {
      const response = await fetch(
        `/api/quotes/create.php`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      const result: ApiResponse = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "An unknown error occurred.");
      }

      setSuccess(`Your quote request has been submitted! Your reference is: ${result.quote_ref}`);
      toast({
        title: "Request Received!",
        description: `Your quote reference is: ${result.quote_ref}`,
      });
      
      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setDetails('');
      setAddress('');
      setHoneypot('');

    } catch (err: any) {
      const errorMessage = err.message || "Failed to submit quote request. Please try again later.";
      setError(errorMessage);
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field for spam protection - should be hidden */}
      <div className="absolute w-0 h-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label>Service Type</Label>
        <RadioGroup
          name="serviceType"
          value={serviceType}
          onValueChange={(value: 'courier' | 'cleaning') => setServiceType(value)}
          className="flex space-x-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="courier" id="courier" />
            <Label htmlFor="courier">Courier/Moving</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="cleaning" id="cleaning" />
            <Label htmlFor="cleaning">Cleaning</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john.doe@example.com" required />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" name="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(555) 123-4567" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Service Address (Origin for moves)</Label>
        <Input id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="123 Main St, Atlanta, GA 30303" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="details">Project Details</Label>
        <Textarea id="details" name="details" value={details} onChange={(e) => setDetails(e.target.value)} placeholder="e.g., 'Moving from a 2-bedroom apartment to a house', 'Deep clean for a 1500 sq ft office', etc." rows={5} required />
      </div>
      
      <div>
        <Button type="submit" className="w-full transition-all duration-300 hover:scale-105" disabled={loading}>
          {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</> : 'Submit Quote Request'}
        </Button>
      </div>
    </form>
  );
}
