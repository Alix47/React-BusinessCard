import React from "react"


export default function Content(){
    return(
            <div className="info">
                <div>
                    <p id="name">ALI KHAN</p>
                    <p id="profession">software developer</p>
                    <div className="buttons">
                        <button id="email">Email</button>
                        <button id="linkedin">LinkedIn</button>
                    </div>
                </div>
                <div className="content">
                    <h4>About</h4>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                    <h4 >Interests</h4>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>

            </div>
    )
}