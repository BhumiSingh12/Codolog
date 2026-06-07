"use client";

import React, { useMemo, useState } from "react";
import { Plus, BookOpen, FileText, X, ExternalLink } from "lucide-react";

export default function AssignmentNotesPage() {

  type Item = {
    id: number;
    title: string;
    link: string;
    createdAt: string;
  };

  const [activeTab, setActiveTab] = useState<"assignments" | "notes">(
    "assignments"
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const [assignments, setAssignments] = useState<Item[]>([
    {
      id: 1,
      title: "Artificial Intelligence Practical",
      link: "https://example.com/ai-practical",
      createdAt: "20 May 2026",
    },
    {
      id: 2,
      title: "Android Programming Project",
      link: "https://example.com/android-project",
      createdAt: "18 May 2026",
    },
  ]);

  const [notes, setNotes] = useState<Item[]>([
    {
      id: 1,
      title: "Java EE Notes",
      link: "https://example.com/java-ee-notes",
      createdAt: "17 May 2026",
    },
  ]);

  const currentData = useMemo(() => {
    return activeTab === "assignments" ? assignments : notes;
  }, [activeTab, assignments, notes]);

  const openModal = () => {
    setTitle("");
    setLink("");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddItem = () => {
    if (!title.trim() || !link.trim()) {
      alert("Please fill all fields.");
      return;
    }

    const newItem: Item = {
      id: Date.now(),
      title,
      link,
      createdAt: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };

    if (activeTab === "assignments") {
      setAssignments((prev) => [newItem, ...prev]);
    } else {
      setNotes((prev) => [newItem, ...prev]);
    }

    closeModal();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 text-gray-900 p-6 md:p-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Study Dashboard
            </h1>
            <p className="text-pink-500 mt-2 text-base md:text-lg">
              Manage your assignments and notes in one place.
            </p>
          </div>

          <div className="bg-white/90 border border-pink-200 rounded-full p-2 flex items-center gap-2 shadow-2xl backdrop-blur-xl w-fit">
            <button
              onClick={() => setActiveTab("assignments")}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium flex items-center gap-2 ${
                activeTab === "assignments"
                  ? "bg-pink-500 text-gray-900 shadow-lg"
                  : "text-pink-500 hover:bg-pink-100"
              }`}
            >
              <FileText size={18} />
              Assignments
            </button>

            <button
              onClick={() => setActiveTab("notes")}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium flex items-center gap-2 ${
                activeTab === "notes"
                  ? "bg-pink-500 text-gray-900 shadow-lg"
                  : "text-pink-500 hover:bg-pink-100"
              }`}
            >
              <BookOpen size={18} />
              Notes
            </button>
          </div>
        </div>

        {/* Stats Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          <div className="bg-white/90 border border-pink-200 rounded-3xl p-6 shadow-xl">
            <p className="text-pink-500 text-sm uppercase tracking-wider">
              Total
            </p>
            <h2 className="text-4xl font-bold mt-2">
              {currentData.length}
            </h2>
            <p className="text-pink-400 mt-1 text-sm">
              {activeTab === "assignments"
                ? "Assignments added"
                : "Notes added"}
            </p>
          </div>

          <div className="bg-white/90 border border-pink-200 rounded-3xl p-6 shadow-xl md:col-span-2">
            <h3 className="text-xl font-semibold mb-2">
              {activeTab === "assignments"
                ? "Pending Academic Work"
                : "Saved Study Material"}
            </h3>
            <p className="text-pink-500 leading-relaxed">
              Keep your study resources organized. Add direct links to cloud
              drives, PDFs, GitHub repositories, classroom portals, or any
              online material.
            </p>
          </div>
        </div>

        {/* List Section */}
        <div className="bg-white/90 border border-pink-200 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl">
          <div className="border-b border-pink-200 px-6 py-5 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                {activeTab === "assignments"
                  ? "Assignment List"
                  : "Notes List"}
              </h2>
              <p className="text-pink-500 text-sm mt-1">
                {currentData.length} item
                {currentData.length !== 1 ? "s" : ""} available
              </p>
            </div>
          </div>

          <div className="p-6 space-y-4">
            {currentData.length === 0 ? (
              <div className="border border-dashed border-pink-300 rounded-3xl p-10 text-center">
                <p className="text-pink-500 text-lg">
                  No {activeTab} added yet.
                </p>
              </div>
            ) : (
              currentData.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-pink-100 rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-5 hover:border-pink-300 transition-all duration-300"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="text-pink-400 text-sm mt-2">
                      Added on {item.createdAt}
                    </p>
                  </div>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-500 text-white px-5 py-3 rounded-xl font-medium flex items-center gap-2 hover:scale-105 hover:bg-pink-600 transition-transform duration-300 w-fit"
                  >
                    Open Link
                    <ExternalLink size={16} />
                  </a>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Floating Add Button */}
        <button
          onClick={openModal}
          className="fixed bottom-8 right-8 h-16 w-16 rounded-full bg-pink-500 text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
        >
          <Plus size={30} />
        </button>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-pink-100/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="w-full max-w-lg bg-white border border-pink-200 rounded-3xl p-7 shadow-2xl relative animate-in fade-in zoom-in duration-300">
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 text-pink-500 hover:text-pink-600"
              >
                <X size={22} />
              </button>

              <h2 className="text-3xl font-bold mb-2">
                Add New {activeTab === "assignments" ? "Assignment" : "Note"}
              </h2>

              <p className="text-pink-500 mb-8">
                Enter the topic name and attach a direct resource link.
              </p>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Topic Name
                  </label>

                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter topic name"
                    className="w-full bg-pink-50 border border-pink-200 rounded-2xl px-5 py-4 outline-none focus:border-pink-500 transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Resource Link
                  </label>

                  <input
                    type="url"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="https://example.com"
                    className="w-full bg-pink-50 border border-pink-200 rounded-2xl px-5 py-4 outline-none focus:border-pink-500 transition-colors duration-300"
                  />
                </div>

                <button
                  onClick={handleAddItem}
                  className="w-full bg-pink-500 text-white py-4 rounded-2xl font-semibold hover:bg-pink-600 hover:scale-[1.02] transition-transform duration-300 shadow-lg"
                >
                  Add {activeTab === "assignments" ? "Assignment" : "Note"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
