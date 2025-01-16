'use client';

import React,{useState} from "react";

import {Card} from "@/components/ui/card";
import {useEffect} from "react";

export function Timer({date}: { date: Date }) {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const remaining = date.getTime() - new Date().getTime();
            setDays(Math.floor(remaining / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutes(Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((remaining % (1000 * 60)) / 1000));
        }, 1000);
        return () => clearInterval(interval);
    }, [date]);

    return (
        <Card className="flex items-center gap-2 p-2 md:text-lg text-xs">
            <div className="flex items-center gap-2">
                <span>{days}</span>
                <span>days</span>
            </div>
            <div className="flex items-center gap-2">
                <span>{hours}</span>
                <span>hours</span>
            </div>
            <div className="flex items-center gap-2">
                <span>{minutes}</span>
                <span>minutes</span>
            </div>
            <div className="flex items-center gap-2">
                <span>{seconds}</span>
                <span>seconds</span>
            </div>
        </Card>
    )
}