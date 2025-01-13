
const Project = ()=>{
    const projects = [
        {
            "project.id": 1,
            "project.title": "Luxury Suite Renovation",
            "project.amount_spent": 250000
        },
        {
            "project.id": 2,
            "project.title": "Poolside Lounge Upgrade",
            "project.amount_spent": 150000
        },
        {
            "project.id": 3,
            "project.title": "Casino Lighting Redesign",
            "project.amount_spent": 100000
        },
        {
            "project.id": 4,
            "project.title": "Rooftop Bar Installation",
            "project.amount_spent": 300000
        },
        {
            "project.id": 5,
            "project.title": "Hotel Lobby Refurbishment",
            "project.amount_spent": 200000
        },
        {
            "project.id": 6,
            "project.title": "Conference Hall Sound System Upgrade",
            "project.amount_spent": 75000
        },
        {
            "project.id": 7,
            "project.title": "Club VIP Section Expansion",
            "project.amount_spent": 180000
        },
        {
            "project.id": 8,
            "project.title": "Kitchen Equipment Modernization",
            "project.amount_spent": 120000
        },
        {
            "project.id": 9,
            "project.title": "Spa and Wellness Center Revamp",
            "project.amount_spent": 220000
        },
        {
            "project.id": 10,
            "project.title": "Casino Security System Upgrade",
            "project.amount_spent": 90000
        }
    ]


    return <>
        <h1>Projects</h1>
        {projects.length>0?
            <table>
            <thead>
                <td>#</td>
                <td>Title</td>
                <td>Budget</td>
                <td>Amount Spent</td>
                <td>Action</td>                
            </thead>
            <tbody>
    {
        projects.map((project) => (
            <tr key={project.id}>
                <td>{project.id}</td>
                <td>{project.title}</td>
                <td>{project.amount_spent}</td>
                <td>
                    <button>📝</button>
                    <button>❌</button>
                </td>
            </tr>
        ))
    }
</tbody>
        </table>
        :
        <p>No Projects currently</p>
        }
    </>

}

export default Project