let isMuted = false;

const iconSoundOn = `
    <svg class="icon-svg" viewBox="0 0 24 24">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>`;
    
const iconSoundOff = `
    <svg class="icon-svg" viewBox="0 0 24 24">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <line x1="23" y1="9" x2="17" y2="15" />
        <line x1="17" y1="9" x2="23" y2="15" />
    </svg>`;

function bootSystem() {
    const boot = document.getElementById('boot-screen');
    boot.style.opacity = '0';
    boot.style.pointerEvents = 'none';

    document.getElementById('sound-toggle').classList.add('visible');
    document.body.classList.add('booted');

    const alert = document.getElementById('sfx-alert');
    alert.volume = 0.5;
    alert.play().catch(e => console.log("Audio Error:", e));
}

function resetPage() {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0,0);

    document.body.classList.remove('booted');

    const toggle = document.getElementById('sound-toggle');
    toggle.style.opacity = '';
    toggle.style.pointerEvents = '';
    toggle.classList.remove('visible'); 

    document.getElementById('layer-1').className = "layer active";
    document.getElementById('layer-2').className = "layer waiting-down";
    document.getElementById('layer-3').className = "layer waiting-down";
    
    document.getElementById('floor').style.animation = 'none';
    document.getElementById('van').style.animation = 'none';
    document.getElementById('txt1').style.animation = 'none';
    document.getElementById('txt2').style.animation = 'none';
    document.getElementById('roleTag').style.animation = 'none';
    document.getElementById('cta2').style.animation = 'none';

    const sounds = ['sfx-alert', 'sfx-brakes', 'sfx-start'];
    sounds.forEach(id => {
        const el = document.getElementById(id);
        el.pause(); el.currentTime = 0;
    });

    const vid = document.querySelector('video');
    if(vid) { vid.pause(); vid.currentTime = 0; }

    const boot = document.getElementById('boot-screen');
    boot.style.opacity = '1';
    boot.style.pointerEvents = 'all';
}

function playHoverSound() {
    if(!isMuted) {
        const startSfx = document.getElementById('sfx-start');
        startSfx.volume = 0.3; 
        startSfx.currentTime = 0;
        startSfx.play().catch(()=>{});
    }
}

function stopHoverSound() {
    const startSfx = document.getElementById('sfx-start');
    startSfx.pause();
    startSfx.currentTime = 0;
}

function toggleSound() {
    isMuted = !isMuted;
    
    const btn = document.getElementById('sound-toggle');
    btn.innerHTML = isMuted ? iconSoundOff : iconSoundOn;
    
    const alert = document.getElementById('sfx-alert');
    
    if(isMuted) {
        const sounds = ['sfx-alert', 'sfx-brakes', 'sfx-start'];
        sounds.forEach(id => document.getElementById(id).pause());
    } else {
        if(document.getElementById('layer-1').classList.contains('active')) {
            alert.play();
        }
    }
}

function goLayer2() {
    const alert = document.getElementById('sfx-alert');
    const startSfx = document.getElementById('sfx-start');
    
    alert.pause(); alert.currentTime = 0;
    startSfx.pause(); startSfx.currentTime = 0;

    if(!isMuted) {
        const brakes = document.getElementById('sfx-brakes');
        brakes.volume = 1.0;
        brakes.play().catch(e => console.log("Audio error"));
    }

    document.getElementById('layer-1').classList.remove('active');
    document.getElementById('layer-1').classList.add('hidden-up');
    
    const l2 = document.getElementById('layer-2');
    l2.classList.remove('waiting-down');
    l2.classList.add('active');

    setTimeout(() => {
        document.getElementById('floor').style.animation = "floorRise 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards";
        document.getElementById('van').style.animation = "driveVanIn 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards 0.2s";

        setTimeout(() => {
            document.getElementById('txt1').style.animation = "textReveal 0.6s cubic-bezier(0.19, 1, 0.22, 1) forwards";
            document.getElementById('txt2').style.animation = "textReveal 0.6s cubic-bezier(0.19, 1, 0.22, 1) forwards 0.1s";
        }, 1000);

        setTimeout(() => {
            document.getElementById('roleTag').style.animation = "tagSlide 0.8s ease forwards";
            document.getElementById('cta2').style.animation = "btnPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards";
        }, 1600);
    }, 600);
}

function goLayer3() {
    document.getElementById('layer-2').classList.remove('active');
    document.getElementById('layer-2').classList.add('hidden-up');
    
    const l3 = document.getElementById('layer-3');
    l3.classList.remove('waiting-down');
    l3.classList.add('active');

    const toggle = document.getElementById('sound-toggle');
    toggle.style.opacity = '0';
    toggle.style.pointerEvents = 'none';
}

window.onload = resetPage;