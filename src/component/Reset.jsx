import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Reset = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleResetPassword = (e) => {
        e.preventDefault();

        if (newPassword.length < 7) {
            setError("New password must be at least 7 characters long.");
            return;
        }
        if (newPassword !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        setError("");
    };

    return (
        <div className="bg-green-200 mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <form
                    onSubmit={handleResetPassword}
                    action="#"
                    className="bg-yellow-100 mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                >
                    <p className="text-center text-red-500 text-lg font-medium">
                        Reset password
                    </p>

                    <div className="relative">
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="bg-pink-100 w-full rounded-lg border-gray-200 p-4 pe-12 text-sm text-blue-400 shadow-sm"
                            placeholder="New Password"
                        />
                    </div>

                    <div className="relative">
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="bg-pink-100 w-full rounded-lg border-gray-200 p-4 pe-12 text-sm text-blue-400 shadow-sm"
                            placeholder="Confirm Password"
                        />
                    </div>

                    {error && <p className="text-red-500 text-center mt-4">{error}</p>}

                    <button
                        type="submit"
                        className="block w-full rounded-lg bg-blue-300 px-5 py-3 text-sm font-medium text-white"
                    >
                        Reset
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Reset;
