
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-4 text-center">
            <h1 className="font-acme text-4xl font-bold text-gray-900">
                404 Page Not Found
            </h1>

            <p className="font-comfortaa text-gray-600">
                Please check the URL or try again later.
            </p>

            <button
                onClick={() => navigate('/')}
                className="rounded-xl bg-custom px-5 py-3 font-comfortaa font-bold text-gray-900 transition hover:bg-gray-200 active:scale-95"
            >
                Go to home
            </button>
        </div>
    )
}

export default NotFound
