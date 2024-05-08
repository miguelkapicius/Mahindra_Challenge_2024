
export default function Card({ children, style }) {
    return (
        <div class={`block ${style} rounded-lg border border-gray-900 duration-300`}>
            {children}
        </div>
    );
}
