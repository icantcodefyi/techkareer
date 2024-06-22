import React from 'react';
import { candidates } from '@/constants/candidates';

const Page = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Candidates List</h2>
            <div className="overflow-x-auto">
                <table className="table-auto border-collapse border border-gray-300 w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">ID</th>
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Email</th>
                            <th className="border border-gray-300 px-4 py-2">Pitch</th>
                            <th className="border border-gray-300 px-4 py-2">LinkedIn</th>
                            <th className="border border-gray-300 px-4 py-2">GitHub</th>
                            <th className="border border-gray-300 px-4 py-2">Twitter</th>
                            <th className="border border-gray-300 px-4 py-2">Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {candidates.map((user, index) => (
                            <tr key={index} className="text-gray-100">
                                <td className="border border-gray-300 px-4 py-2">{user.ID}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.Name}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.Email}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.Introduction.Pitch}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.LinkedIn}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.GitHub}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.Twitter}</td>
                                <td className="border border-gray-300 px-4 py-2">{user['Created At']}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Page;
