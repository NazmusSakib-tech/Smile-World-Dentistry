import React from 'react';
import "./TeethSuggestion.css"

const TeethSuggestion = () => {
    return (
        <>
            <div className="container">
                <div className="teeth-suggestion">
                    <h1 className="text-warning">11 Ways to Keep Your Teeth Healthy</h1>
                    <div class="row row-cols-1 row-cols-md-3 g-4 p-4 opacity-75">
                        <div class="col">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">1. Don’t go to bed without brushing your teeth</h5>
                                    <p class="card-text">It’s no secret that the general recommendation is to brush at least twice a day. Still, many of us continue to neglect brushing our teeth at night. But brushing before bed gets rid of the germs and plaque that accumulate throughout the day.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">2. Brush properly</h5>
                                    <p class="card-text">The way you brush is equally important — in fact, doing a poor job of brushing your teeth is almost as bad as not brushing at all. Take your time, moving the toothbrush in gentle, circular motions to remove plaque. Unremoved plaque can harden, leading to calculus buildup and gingivitis (early gum disease).</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">3. Don’t neglect your tongue</h5>
                                    <p class="card-text">Plaque can also build up on your tongue. Not only can this lead to bad mouth odor, but it can lead to other oral health problems. Gently brush your tongue every time you brush your teeth.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">4. Use a fluoride toothpaste</h5>
                                    <p class="card-text">When it comes to toothpaste, there are more important elements to look for than whitening power and flavors. No matter which version you choose, make sure it contains fluoride.
                                        While fluoride has come under scrutiny by those worried about how it impacts other areas of health, this substance remains a mainstay in oral health. This is because fluoride is a leading defense against tooth decay. It works by fighting germs that can lead to decay, as well as providing a protective barrier for your teeth..</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">5. Treat flossing as important as brushing</h5>
                                    <p class="card-text">Many who brush regularly neglect to floss. Flossing is not just for getting little pieces of food or broccoli that may be getting stuck in between your teeth, as Jonathan Schwartz, DDS. points out. “It’s really a way to stimulate the gums, reduce plaque, and help lower inflammation in the area.”</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">6. Don’t let flossing difficulties stop you</h5>
                                    <p class="card-text">Flossing can be difficult, especially for young children and older adults with arthritis. Rather than give up, look for tools that can help you floss your teeth. Ready-to-use dental flossers from the drugstore can make a difference.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default TeethSuggestion;