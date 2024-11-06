"use client"
export default function AnalyzerPrompt() {

    const handleSubmit = async (e) => {

    }

    return (
        <div className="m-3">
            <form onSubmit={handleSubmit}>
                <button className="bg-gray-900 text-white rounded-lg p-3 w-full">
                    Analyze Case
                </button>
            </form>
        </div>
    )
}