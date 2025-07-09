import { useState } from "react";

export function TwitterFollowCard({ children, userName, initialisFollowing}) {
    const [isFollowing, setIsFollowing]= useState(initialisFollowing);


    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClasName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (<article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar'
                alt="Avatar Midu"
                src={`https://unavatar.io/x/${userName}`} />
            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                <span className='tw-followCard-infoUsername'>@{userName}</span>
            </div>
        </header>

        <aside>
            <button className={buttonClasName} onClick={handleClick}>
                <span className="tw-followCard-text">{text}</span>
                <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button> {/* Children */}
        </aside>
    </article>)
}