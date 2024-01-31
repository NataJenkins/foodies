"use client";

import React from "react";
import { useFormStatus } from "react-dom";

export default function MealsFormSubmmit() {
    const { pending } = useFormStatus();
    return (
        <button disabled={pending}>
            {pending ? "Submitting..." : "Share Meal"}
        </button>
    );
}
