export default function loading() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 via-white to-indigo-50 px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center">
                <div className="mb-4 text-2xl font-bold text-indigo-700">Loading...</div>
                <p className="text-slate-500">Please wait while we load the content.</p>
            </div>
        </div>
    );
}