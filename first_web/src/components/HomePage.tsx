import HomeImage from "../assets/onlineCourses.jpeg";

const mainColor = '#090756ff';

function HomePage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '15%', marginRight: '15%' }}>
            <div style={{ textAlign: 'center', padding: '20px' }}>
                <h1 style={{ color: '#090756ff' }}>Grow your skills, define your future</h1>
                <p>Presenting Academy, the online school of the future. We teach you the right skills you need to succeed.</p>
                <button style={{ marginRight: "10px", padding: "0.375rem 0.75rem", fontSize: "1rem", fontWeight: 400, lineHeight: 1.5, color: "#fff", backgroundColor: mainColor, border: `1px solid ${mainColor}`, borderRadius: "0.375rem", cursor: "pointer" }}>Explore Courses</button>

                <button style={{ marginLeft: "10px", padding: "0.375rem 0.75rem", fontSize: "1rem", fontWeight: 400, lineHeight: 1.5, color: mainColor, backgroundColor: "transparent", border: `1px solid ${mainColor}`, borderRadius: "0.375rem", cursor: "pointer" }}>Learn More</button>



            </div>
            <img src={HomeImage} alt="Online Courses" style={{ width: '100%', height: 'auto', borderRadius: '10%', marginTop: '5%', marginBottom: '5%' }} />
        </div >
    )
}

export default HomePage;