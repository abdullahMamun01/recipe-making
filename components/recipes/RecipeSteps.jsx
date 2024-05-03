import React from 'react'

export default function RecipeSteps({ steps }) {
    return (
        <section>
            <div class="container py-12">
                <h3 class="font-semibold text-xl py-6">How to Make it</h3>
                <div>
                    {
                        steps.map((step, i) => (
                            <div class="step" key={i}>
                                <h3>Step {i}</h3>
                                <p>
                                    {step}
                                </p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}
