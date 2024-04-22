
export default function Card({ children, style }) {
    return (
        <div class={`block ${style} p-6 rounded-lg border bg-indigo-900 border-gray-700 hover:bg-opacity-70 duration-500`}>
            {children}
        </div>
    );
}
