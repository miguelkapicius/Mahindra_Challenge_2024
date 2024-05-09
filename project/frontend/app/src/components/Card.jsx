
export default function Card({ children, style }) {
    return (
        <div class={`block ${style} rounded-lg border bg-secoundary border-gray-900 duration-300`}>
            {children}
        </div>
    );
}
