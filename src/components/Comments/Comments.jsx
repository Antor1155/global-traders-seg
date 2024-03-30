import React from 'react'
import "./Comments.css"

const Comments = () => {
    return (
        <section className='comments'>
            <h3>CLIENT <span>SATISFACTION</span></h3>

            <div id='comments-container'>
                <div>
                    <img  className='avatar' src="/logos/avatar.png" alt="avatar" />
                    <p className='name'>Tawhid Rifat</p>
                    <small>03/05/2023</small>
                    <p className='stars'>
                        <img src="/logos/starWhite.svg" alt="review" />
                        <img src="/logos/starWhite.svg" alt="review" />
                        <img src="/logos/starWhite.svg" alt="review" />
                        <img src="/logos/starWhite.svg" alt="review" />
                        <img src="/logos/starAsh.svg" alt="review" />
                    </p>
                    <p>I got one phone, and then decided that I wanted a different one so - I have ordered, returned, gotten refunded and ordered anew with these people. And I have to say it was all seamless. I love the goal of creating less electronica waste by reusing it, and the phone that I have now works great.</p>
                </div>

                <div>
                    <img className='avatar' src="/logos/avatar.png" alt="avatar" />
                    <p className='name'>Pat OBrien</p>
                    <small>03/05/2023</small>
                    <p className='stars'>
                        <img src="/logos/starWhite.svg" alt="review" />
                        <img src="/logos/starWhite.svg" alt="review" />
                        <img src="/logos/starWhite.svg" alt="review" />
                        <img src="/logos/starWhite.svg" alt="review" />
                        <img src="/logos/starAsh.svg" alt="review" />
                    </p>
                    <p>This was my second phone that I got from trade. The phone was described accurate and arrived quickly. No issues at all.</p>
                </div>

                <div>
                    <img className='avatar' src="/logos/avatar.png" alt="avatar" />
                    <p className='name'>Antik</p>
                    <small>03/05/2023</small>
                    <p className='stars'>
                        <img src="/logos/starWhite.svg" alt="review" />
                        <img src="/logos/starWhite.svg" alt="review" />
                        <img src="/logos/starWhite.svg" alt="review" />
                        <img src="/logos/starWhite.svg" alt="review" />
                        <img src="/logos/starAsh.svg" alt="review" />
                    </p>
                    <p>As always the iphone does not disappoint. It is a bit expensive, but the user experience is really to notch. It feels very well made, and I have enjoyed using it so far. Battery life is excellent, the screen is beautiful, and while I haven&apos;t taken many photos yet, the cameras seem great, especially the selfie camera.</p>
                </div>

                <div>
                    <img className='avatar' src="/logos/avatar.png" alt="avatar" />
                    <p className='name'>Shayekh</p>
                    <small>03/05/2023</small>
                    <p className='stars'>
                        <img src="/logos/starWhite.svg" alt="review" />
                        <img src="/logos/starWhite.svg" alt="review" />
                        <img src="/logos/starWhite.svg" alt="review" />
                        <img src="/logos/starWhite.svg" alt="review" />
                        <img src="/logos/starAsh.svg" alt="review" />
                    </p>
                    <p>Loving my phone! At the moment I&apos;m needing to take photos and videos for a project and the quality is superb. It looks as if I&apos;m still standing in the scene. Battery can sometimes last me two days even if I&apos;ve been steaming video.</p>
                </div>
            </div>
        </section>
    )
}

export default Comments