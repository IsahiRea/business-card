function Header() {
    return (
        <header>
            <img src="/src/assets/profile.jpg" alt="Header image of Cesar Rea" />
            <div className="profile-details">
                <h1>Cesar Rea</h1>
                <h2>Frontend Developer</h2>
                <p>cesarrea.website</p>
            </div>
            <div className="btn-container">
                <a href="mailto:Isahi.rea@live.com" className="email-btn" target="_blank" rel="noopener noreferrer">
                    <i className="fa-solid fa-envelope"></i>
                    <span>Email</span>
                </a>
                <a href="https://www.linkedin.com/in/cesar-rea-705143320/" className="linkedIn-btn" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin"></i>
                    <span>LinkedIn</span>
                </a>
            </div>
        </header>

    )
}

export default Header