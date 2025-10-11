function scroll(){
    const headerOffset = 75; // adjust to your header height (px)
    const duration = 2000; // ms
    
    // Ease-in-out cubic (smooth acceleration & deceleration)
    function easeInOutQuint(t){
        return t < 0.5 ? 16 * t * t * t * t
            : 1 - 16 * Math.pow(1 - t, 5);
    }

    function smoothScrollTo(targetY, durationMs){
        const startY = window.pageYOffset;
        const deltaY = targetY - startY;
        const startTime = performance.now();

        function step(now){
            const elapsed = now - startTime;
            const t = Math.min(1, elapsed / durationMs);
            const eased = easeInOutQuint(t);
            window.scrollTo({top: startY + deltaY * eased, behavior: 'auto'});
            if (t < 1){
                requestAnimationFrame(step);
            }
        }

        requestAnimationFrame(step);
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e){
        const href = this.getAttribute('href');
        const target = document.querySelector(href);
        if (target){
            e.preventDefault();
            const targetY = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
            smoothScrollTo(targetY, duration);
            
            window.scrollTo(0, targetY);
        }
        
    });
    
    });
    
};

scroll();