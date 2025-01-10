import React, { useEffect, useState } from 'react'

const GithubActivity = () => {
    const username = 'kiran-pande-30';
    const [activity, setActivity] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGithubActivity = async() => {
            try{
                const response = await fetch(`https://api.github.com/users/${username}/events`);
                const data = await response.json();
                setActivity(data);
                setLoading(false);
            }
            catch(error){
                setError("Failed to fetch activity");
                setLoading(false);
            }
        };
        fetchGithubActivity();
    }, [username]);

    if(loading) return <p>Loading Github Activity..</p>
    if(error) return <p>Error Ocuured</p>
  return (
    <div className='github-activity'>
        <h2>Recent Github Activity</h2>
        <ul>
            {
                activity.slice(0, 5).map((event, index) => (
                    <li key={index}>
                        <p>
                            <stong>{event.repo.name}</stong> - {event.type}
                        </p>
                        <p>{event.created_at}</p>
                        {event.payload && event.payload.commits && event.payload.commits.length > 0 && (
                            <p>
                                <strong>Commits:</strong> {event.payload.commits[0].message}
                            </p>
                        )}
                    </li>
                ))
            }
        </ul>
        <a href='{`https://github.com/${username}`}' target='_blank' rel='nooperner noreferrer'>
            View more on Github
        </a>
    </div>

  )
}

export default GithubActivity;