import {Subject} from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        code: "CS101",
        name: "Introduction to Computer Science",
        department: "CS",
        description: "An introduction course covering the fundamental concept of computer science and programing.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 2,
        code: "MATH201",
        name: "Calculus II",
        department: "Math",
        description: "Advanced study of integration, sequences, series, and power series.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 3,
        code: "ENG102",
        name: "Literature and composition",
        department: "English",
        description: "A course focused on critical reading and writing through the study of various literary genres.",
        createdAt: new Date().toISOString(),
    },
]
