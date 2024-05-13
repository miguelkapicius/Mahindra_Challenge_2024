export default function CoinsValue({ children }) {
    return (
        <span className="flex items-center gap-4 pr-6 pl-2 py-1 rounded-lg bg-primary/15 ring-2 ring-primary/30 duration-200 cursor-default">
            {children}
        </span>
    );
}
