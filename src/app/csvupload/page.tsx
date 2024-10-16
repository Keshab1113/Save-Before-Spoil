"use client";
import React, { useState } from 'react';
import Papa from 'papaparse';
import axios from 'axios';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

interface CsvRow {
    [key: string]: string;
}

const CsvUploader: React.FC = () => {
    const [csvData, setCsvData] = useState<CsvRow[]>([]);
    const [file, setFile] = useState<File | null>(null);
    

    // Handle file change
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = e.target.files?.[0] || null;
        setFile(uploadedFile);
    };

    // Parse CSV file
    const handleUpload = () => {
        if (file) {
            Papa.parse(file, {
                header: true,
                skipEmptyLines: true,
                complete: (result) => {
                    setCsvData(result.data as CsvRow[]); // Set parsed CSV data
                },
                error: (error) => {
                    console.error('Error parsing CSV file:', error);
                },
            });
        }
    };

    // Save parsed data to the database
    const handleSave = async () => {
        try {
            const response = await axios.post('/api/csv', { data: csvData });
            if (response.status === 200) {
                alert('Data saved successfully!');
            }
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    return (
        <div className=' w-full'>
            <Header/>
        <div className=" w-full h-full mx-auto p-6 bg-slate-900 text-white">
                <h1 className="text-2xl font-bold mb-4">CSV Upload System</h1>
            <div className="mb-4">
                <input
                    type="file"
                    accept=".csv"
                    onChange={handleFileChange}
                    className="block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                />
            </div>
            <button
                onClick={handleUpload}
                className="px-4 py-2 bg-orange-600 text-white rounded-md"
            >
                Upload
            </button>

            {csvData.length > 0 && (
                <>
                    <h2 className="text-xl font-semibold mt-6">Parsed CSV Data:</h2>
                    <table className="min-w-full table-auto mt-4">
                        <thead>
                            <tr>
                                {Object.keys(csvData[0]).map((key) => (
                                    <th key={key} className="px-4 py-2 text-left bg-gray-500">
                                        {key}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {csvData.map((row, index) => (
                                <tr key={index}>
                                    {Object.values(row).map((value, i) => (
                                        <td key={i} className="border px-4 py-2">
                                            {value}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-green-600 text-white rounded-md my-4"
                    >
                        Save
                    </button>
                </>
            )}
            </div>
            <Footer/>
        </div>
    );
};

export default CsvUploader;
