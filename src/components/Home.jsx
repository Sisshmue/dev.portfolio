import './Home.css'

export function Home() {
    return (
        <div className='home-section-container'> 
            <h1 className="hero-text">{`SOFTWARE\nENGINEER`}</h1>
            <p className="sub-text">Building sleek, high-performance web experiences.</p>
            
            <div className='stats-grid'>
                <div className='stat-card'>
                    <h2 className='stat-value'>+3</h2>
                    <p className='stat-label'>{`YEARS OF\nExperience`}</p>
                </div>
                <div className='stat-card'>
                    <h2 className='stat-value'>3.92</h2>
                    <p className='stat-label'>{`UNIVERSITY\nGPA`}</p>
                </div>
                <div className='stat-card'>
                    <h2 className='stat-value'>+40</h2>
                    <p className='stat-label'>{`PERSONAL\nPROJECTS`}</p>
                </div>
            </div>
        </div>
    )
}