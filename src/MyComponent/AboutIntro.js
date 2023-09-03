import React from "react";
import '../App.css';
import AboutIntroImg from './image/AboutIntro.png'
export default function AboutIntro(params) {
    return(
        <div className="container">
            <div className="text">
                <p>
                I am Randhir, a final-year student of Information Technology at Delhi Technological University. My academic journey has set the stage for an exciting career.

                I take pride in being an avid learner with a knack for problem-solving. My skill set spans a range of modern technologies, including C++, HTML, CSS, JavaScript, Bootstrap, React.js, and MySQL. These are not just tools; they're the colors I've used to paint numerous web development projects.

                Beyond coding, I've honed my problem-solving skills by tackling over a thousand coding challenges on platforms like GeeksforGeeks, LeetCode, Codeforces, and CodeChef. It's not just about mastering code; it's about mastering the art of elegant algorithms.

                Life, however, is more than code. Off-screen, I'm an active individual. Whether it's badminton, cricket, or chess, I relish every moment. When the day winds down, you might find me on a serene walk, immersed in music, or engaged in profound conversations.

                At work, I abide by unwavering dedication and a relentless pursuit of perfection. My journey includes ranking in the top 1 percentile in the JEE Main Exam—a testament to my tenacity and passion for success.

                Now, I'm eagerly exploring opportunities to further refine my skills, collaborate with industry experts, and contribute to transformative projects. Challenges excite me, and I'm ready to embrace them with zeal, apply my knowledge, and continue growing.
                </p>
            </div>
            <div className="image">
                <img src={AboutIntroImg} style={{ borderRadius: '50%' }} alt="Image Description"/>
            </div>
        </div>
    )
};

