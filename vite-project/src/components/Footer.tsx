export function Footer() {
    
    const date = new Date().toDateString();
    return (
        <>
            <footer>
                <p>Készítette: Vida Margaréta</p>
                <p>{date}</p>
            </footer>
        </>
    )
}