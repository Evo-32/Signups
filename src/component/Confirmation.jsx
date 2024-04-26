import React, { useState } from "react";

const Confirmation = () => {
    const [confirmationCode, setConfirmationCode] = useState('');
    const [error, setError] = useState('');

    const handleConfirmation = (e) => {
        e.preventDefault();

        // Simulate validation logic
        if (confirmationCode.trim() === '') {
            setError("Please enter the confirmation code.");
            return;
        }

        // Proceed with confirmation logic (e.g., API call to verify the code)

        // Clear error if validation passes
        setError("");
        // Proceed with confirmation logic
    };

    const handleConfirmationCodeChange = (e) => {
        setConfirmationCode(e.target.value);
        setError(""); // Clear error when user starts typing in the confirmation code field
    };

    return (
        <div className="bg-green-200 mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl text-blue-400 sm:text-2xl">
                    Confirmation Code
                </h1>
                <form
    onSubmit={handleConfirmation}
    action="#"
    className="bg-yellow-100 mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
>
    <p className="text-center text-red-500 text-lg font-medium">
        Enter Confirmation Code
    </p>

    <div className="grid grid-cols-4 gap-2 mt-4">
        {/* Create four input fields, each for one digit */}
        {[1, 2, 3, 4].map((index) => (
            <div key={index} className="relative">
                <input
                    type="text"
                    maxLength={1} // Limit the input to one character
                    className="bg-pink-100 w-full rounded-lg border-gray-200 p-4 text-blue-400 text-center text-sm shadow-sm"
                    placeholder=""
                    value={confirmationCode[index - 1] || ''}
                    onChange={(e) => handleConfirmationCodeChange(e, index - 1)}
                />
            </div>
        ))}
    </div>

    {error && <p className="text-red-500 text-center mt-4">{error}</p>}

    <button
        type="submit"
        className="block w-full rounded-lg bg-blue-300 px-5 py-3 text-sm font-medium text-white"
    >
        Confirm
    </button>
</form>

            </div>
        </div>
    );
};

export default Confirmation;
