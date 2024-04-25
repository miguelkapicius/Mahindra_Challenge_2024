
export default function Card({ children, style }) {
    return (
        <div class={`block ${style} p-6 rounded-lg border bg-slate-900/40 border-gray-900 hover:bg-slate-900/40 duration-300 hover:scale-105`}>
            {children}
        </div>
    );
}
