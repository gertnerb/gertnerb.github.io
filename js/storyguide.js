const divFeatureSliderTrack = document.getElementById("divFeatureSliderTrack");
        const allFeatureSlides = document.querySelectorAll(".article-feature-slide-item");
        const allFeatureDots = document.querySelectorAll(".button-feature-side-dot");

        let currentFeatureSlideIndex = 0;
        let featureSliderTimer;

        function clearFeatureAnimations() {
            document.querySelectorAll(".a-feature-cat").forEach(function (element) {
                element.classList.remove("div-feature-animate-cat");
            });

            document.querySelectorAll(".h2-feature-title").forEach(function (element) {
                element.classList.remove("div-feature-animate-title");
            });

            document.querySelectorAll(".p-feature-desc").forEach(function (element) {
                element.classList.remove("div-feature-animate-text");
            });

            document.querySelectorAll(".div-feature-image-box").forEach(function (element) {
                element.classList.remove("div-feature-animate-image");
            });
        }

        function runFeatureAnimations(slideIndex) {
            const activeSlide = allFeatureSlides[slideIndex];

            activeSlide.querySelector(".a-feature-cat")?.classList.add("div-feature-animate-cat");
            activeSlide.querySelector(".h2-feature-title")?.classList.add("div-feature-animate-title");
            activeSlide.querySelector(".p-feature-desc")?.classList.add("div-feature-animate-text");

            activeSlide.querySelectorAll(".div-feature-image-box").forEach(function (imageBox) {
                imageBox.classList.add("div-feature-animate-image");
            });
        }

        function showFeatureSlide(slideIndex) {
            currentFeatureSlideIndex = slideIndex;
            divFeatureSliderTrack.style.transform = "translateX(-" + (slideIndex * 100) + "%)";

            allFeatureDots.forEach(function (dot) {
                dot.classList.remove("button-feature-side-dot-active");
            });

            allFeatureDots[slideIndex].classList.add("button-feature-side-dot-active");

            clearFeatureAnimations();
            void divFeatureSliderTrack.offsetWidth;
            runFeatureAnimations(slideIndex);
        }

        function nextFeatureSlide() {
            currentFeatureSlideIndex++;

            if (currentFeatureSlideIndex >= allFeatureSlides.length) {
                currentFeatureSlideIndex = 0;
            }

            showFeatureSlide(currentFeatureSlideIndex);
        }

        function startFeatureAutoPlay() {
            featureSliderTimer = setInterval(function () {
                nextFeatureSlide();
            }, 6000);
        }

        function resetFeatureAutoPlay() {
            clearInterval(featureSliderTimer);
            startFeatureAutoPlay();
        }

        allFeatureDots.forEach(function (dot) {
            dot.addEventListener("click", function () {
                const selectedIndex = Number(dot.getAttribute("data-slide-index"));
                showFeatureSlide(selectedIndex);
                resetFeatureAutoPlay();
            });
        });

        showFeatureSlide(0);
        startFeatureAutoPlay();