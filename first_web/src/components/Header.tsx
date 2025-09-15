function Header() {
    const mainColor = '#090756ff';

    return (
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #000000', color: mainColor }}>
            <h1 style={{ margin: 0, padding: 20 }}> <a href="#home" style={{ textDecoration: 'none', color: 'inherit', fontSize: '50px' }}>Quest</a></h1>

            <nav>
                <ul style={{ display: 'flex', gap: '15px', listStyle: 'none', paddingRight: 50, fontSize: '20px', margin: 0 }}>
                    <li><a href="#home" style={{ textDecoration: 'none', color: 'inherit' }}>Home</a></li>
                    <li><a href="#about" style={{ textDecoration: 'none', color: 'inherit' }}>About</a></li>
                    <li><a href="#courses" style={{ textDecoration: 'none', color: 'inherit' }}>Courses</a></li>
                    <li><a href="#pages" style={{ textDecoration: 'none', color: 'inherit' }}>Pages</a></li>
                    <li><a href="#blog" style={{ textDecoration: 'none', color: 'inherit' }}>Blog</a></li>
                </ul>
            </nav>
        </ header>
    )
}

export default Header