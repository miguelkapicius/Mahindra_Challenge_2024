
export default function Card({ children, style }) {
    return (
        <div class={`${style} bg-secoundary/40 rounded-lg duration-500 p-4 py-2`}>
            {children}
        </div>
    );
}
