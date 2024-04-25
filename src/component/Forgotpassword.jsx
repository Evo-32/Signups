import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Forgotpassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleResetPassword = (e) => {
        e.preventDefault();

        if (!email.includes("@")) {
            setError("Please enter a valid email address.");
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
                    className="bg-yellow-100 mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                    <div className="relative">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-pink-100 w-full rounded-lg border-gray-200 p-4 text-blue-400 pe-12 text-sm shadow-sm"
                            placeholder="Email"
                        />
                    </div>

                    <button
                        type="submit"
                        className="block w-full rounded-lg bg-blue-300 px-5 py-3 text-sm font-medium text-white"
                    >
                        <Link to="/setnew" className="text-gray-700 underline">
                Next
              </Link>
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Forgotpassword;
