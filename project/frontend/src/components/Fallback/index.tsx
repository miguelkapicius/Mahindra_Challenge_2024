"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";

export function Fallback() {
    const [progress, setProgress] = React.useState(13);

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="h-screen flex gap-6 flex-col justify-center items-center">
            <Progress value={progress} className="w-[60%] animate-pulse" />
            <p className="animate-pulse">Loading...</p>
        </section>
    );
}
