
export default function Card({ children, style }) {
    return (
        <div class={`${style} bg-secoundary/40 rounded-lg duration-500 px-8 py-4`}>
            {children}
        </div>
    );
}
