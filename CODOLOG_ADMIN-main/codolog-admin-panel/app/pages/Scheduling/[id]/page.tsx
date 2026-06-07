"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

export default function SchedulingPage() {
  const params = useParams();

  const [date, setDate] = useState("");

  const tutors = [
    "Priya Singh",
    "Shivam Dubey",
    "Rahul Mishra",
    "Arman Verma",
    "Neha Sharma",
  ];

  const getDayFromDate = (dateString: string) => {
    if (!dateString) return "";

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[new Date(dateString).getDay()];
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="bg-white rounded-2xl shadow-md p-8">

        <p className="text-gray-500 font-medium">
          Course ID #{params.id}
        </p>

        <h1 className="text-4xl font-bold text-black mt-2">
          React Fundamentals
        </h1>

        <p className="text-gray-600 mt-2">
          Course Scheduling
        </p>

      </div>

      <div className="bg-white rounded-2xl shadow-md mt-6 p-8">

        <h2 className="text-2xl font-bold text-black mb-6">
          Module 1
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          <div>
            <label className="block text-black font-semibold mb-2">
              Topic Name
            </label>

            <input
              value="Introduction to CSS"
              readOnly
              className="w-full border rounded-lg p-3 text-black"
            />
          </div>

          <div>
            <label className="block text-black font-semibold mb-2">
              Tutor
            </label>

            <select className="w-full border rounded-lg p-3 text-black">
              {tutors.map((tutor) => (
                <option key={tutor}>
                  {tutor}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-black font-semibold mb-2">
              Date
            </label>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border rounded-lg p-3 text-black"
            />
          </div>

          <div>
            <label className="block text-black font-semibold mb-2">
              Day
            </label>

            <input
              value={getDayFromDate(date)}
              readOnly
              className="w-full border rounded-lg p-3 text-black"
            />
          </div>

          <div>
            <label className="block text-black font-semibold mb-2">
              Time
            </label>

            <input
              type="time"
              className="w-full border rounded-lg p-3 text-black"
            />
          </div>

          <div>
            <label className="block text-black font-semibold mb-2">
              Live Class Link
            </label>

            <input
              value="https://meet.google.com/abc-defg-hij"
              readOnly
              className="w-full border rounded-lg p-3 text-black"
            />
          </div>

        </div>

        <div className="flex gap-4 mt-8">

          <button
            className="
            bg-black
            text-white
            px-6
            py-3
            rounded-xl
            "
          >
            Save Schedule
          </button>

          <a
            href="https://meet.google.com/abc-defg-hij"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="
              bg-green-600
              text-white
              px-6
              py-3
              rounded-xl
              "
            >
              Join Live
            </button>
          </a>

        </div>

      </div>

    </div>
  );
}