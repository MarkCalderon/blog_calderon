import React from 'react'

export default class SamplePost extends React.Component {
    render() {
        return (
            <article className="postItem">
                <hgroup className="postTitle">
                    <h2>LOG#01</h2>
                    <h3>DEVELOPER'S LOG</h3>
                    <span>16.05.2020</span>
                </hgroup>
                <div className="postBody">
                    <p>Its been a year since i started my professional career as a front-end developer.</p>
                    <p>Technology has changed alot compared to my time back in 2014 as as undergraduate. I still remember making web applications using C# ASP.NET MVC, MSSQL as the stack of my FYP project, and JAVA for my Advanced Algorithms and Data Structures course.</p>
                    <p>My first class on algorithm, left me lost for the first 2-3 weeks. it was overwhelming at first, but illustrates how it is in applications that we use everyday. It also gives importance to basic arithmetics and logical processing. I am not that good in mathematics, but you get to understand them overtime as you get to analyze and confront real world problems. Programming basically involves alot of problem solving. All this means is that, its not all about what you know. It's all about having the essential skills and from there build up your foundation through consistent learning and grit. Like any problem, it takes time and effort to solve it, and in certain times, you do not have the time. You might be surprise how pressure can build up a person in a short time.</p>
                    <p>Now, It does not mean you have to take up multiple tasks and responsibilities to be a better person. But just enough to motivate you towards your goal. Besides what good will it do when you encounter a problem that requires focus. </p>

                    <h4 class="mt-15">Back to the future...</h4>
                    <p>As we are moving towards Artificial Intellegence(AI). The uncertainly is certainly scary and you should be. This leave us plenty of room or areas to improve on so unless we continue learning we will only get left behind. Technology changes so fast its scary. And yet it excites us when new cellphones, 4k HD cameras and televisions. 
                    </p>

                    <small>Mark AC.</small>
                </div>
            </article>
        )
    }
}