

export default function Card({children, styles}) {
    return (
        <div className={`${styles}`}>
            {children}
        </div>
    );
}


