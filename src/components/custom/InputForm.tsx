"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {id} from "postcss-selector-parser";

const formSchema = z.object({
    sales: z.string({
        invalid_type_error: "Must be a string",
        required_error: "You must enter a value"
    })
        .refine((val) => !isNaN(Number(val)), "Must be a number")
        .transform(Number),

    atv: z.string({
        invalid_type_error: "Must be a string",
        required_error: "You must enter a value"
    })
        .refine((val) => !isNaN(Number(val)), "Must be a number")
        .transform(Number),

    ipt: z.string({
        invalid_type_error: "Must be a string",
        required_error: "You must enter a value"
    })
        .refine((val) => !isNaN(Number(val)), "Must be a number")
        .transform(Number),

    futureRenew: z.string({
        invalid_type_error: "Must be a string",
        required_error: "You must enter a value"
    })
        .refine((val) => !isNaN(Number(val)), "Must be a number")
        .transform(Number),

    pds: z.string({
        invalid_type_error: "Must be a string",
        required_error: "You must enter a value"
    })
        .refine((val) => !isNaN(Number(val)), "Must be a number")
        .transform(Number)
});

const defaultValues = {
    pds: 0,
    ipt: 0,
    futureRenew: 0,
    atv: 0,
    sales: 0
}

interface props {
    employeeId: number
}

export default function InputForm({employeeId}: props) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(employeeId)
        console.log(values);
        form.reset(defaultValues); // Reset the form after submission
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 w-1/3 mx-auto">
                <FormField
                    control={form.control}
                    name="sales"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Sales</FormLabel>
                            <FormControl>
                                <Input placeholder="Sales" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="atv"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>ATV</FormLabel>
                            <FormControl>
                                <Input placeholder="Average transaction value" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="ipt"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>IPT</FormLabel>
                            <FormControl>
                                <Input placeholder="Items per transaction" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="pds"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>PDS</FormLabel>
                            <FormControl>
                                <Input placeholder="Pro derm scan" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="futureRenew"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Future Renew</FormLabel>
                            <FormControl>
                                <Input placeholder="Future Renews" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
