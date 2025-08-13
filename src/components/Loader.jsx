import { useState, useEffect } from "react"

export default function Loader({isLoading, children}) {
    if (isLoading) {
        return (
             <div className="d-flex justify-content-center align-items-center" style={{minHeight: "200px"}}>
                <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-2">Caricamento...</p>
                </div>
            </div>
        )

    }
    return children;
}