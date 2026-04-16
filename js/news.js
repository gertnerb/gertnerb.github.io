let breakingSliderPosition = -75;
const breakingSliderStep = 0.09;
let isPaused = false;

function animateBreakingSlider() {
    if (!isPaused) {
        breakingSliderPosition += breakingSliderStep;

        if (breakingSliderPosition >= 0) {
            isPaused = true;

            setTimeout(() => {
                breakingSliderPosition = -75;
                isPaused = false;
            }, 4000);
        }

        divBreakingSliderTrack.style.transform =
            "translateX(" + breakingSliderPosition + "%)";
    }

    requestAnimationFrame(animateBreakingSlider);
}

animateBreakingSlider();