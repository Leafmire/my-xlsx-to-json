"use client";

import { useRef } from "react";
import * as XLSX from "xlsx";
import { convert } from "../convert/action";

const FileUpload: React.FC = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = async (e: ProgressEvent<FileReader>) => {
                const data = new Uint8Array(e.target?.result as ArrayBuffer);
                const workbook = XLSX.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const json = XLSX.utils.sheet_to_json(sheet);
                // TODO: Download JSON file
                try {
                    await convert(JSON.parse(JSON.stringify(json)));
                } catch (error) {
                    console.error(error);
                }
            };
            reader.readAsArrayBuffer(file);
        }
    };

    return (
        <div className="flex items-center justify-center">
            <label htmlFor="file-upload" className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
                Choose XLSX File
            </label>
            <input id="file-upload" type="file" accept=".xlsx" className="hidden" ref={fileInputRef} onChange={handleFileUpload} />
        </div>
    );
};

export default FileUpload;
