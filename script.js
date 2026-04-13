const musicPrompt = document.getElementById('music-prompt');
const musicBtn = document.getElementById('music-btn');

musicBtn.addEventListener('click', () => {
    musicPrompt.style.opacity = '0';
    musicPrompt.style.transition = 'opacity 0.5s';
    setTimeout(() => musicPrompt.style.display = 'none', 500);
    loadTrack(0);
    playTrack();
});

function glitchIcons() {
    document.querySelectorAll('.social-btn').forEach(icon => {
        icon.style.transform = `translate(${Math.random()*10-5}px, ${Math.random()*10-5}px)`;
        icon.style.filter = `drop-shadow(${Math.random()*6-3}px 0 #ff0000) drop-shadow(${Math.random()*-6+3}px 0 #00ffff)`;
        icon.style.opacity = Math.random() > 0.5 ? '1' : '0.3';
        setTimeout(() => { icon.style.transform='translate(0,0)'; icon.style.filter='none'; icon.style.opacity='0.7'; }, 100);
    });
}
setInterval(glitchIcons, 800);

function extremeGlitch() {
    if (Math.random() > 0.9) {
        document.body.style.transform = `translate(${Math.random()*4-2}px, ${Math.random()*4-2}px)`;
        setTimeout(() => { document.body.style.transform = 'translate(0,0)'; }, 50);
    }
}
setInterval(extremeGlitch, 1000);

function colorInvert() {
    if (Math.random() > 0.95) {
        document.body.style.filter = `hue-rotate(${Math.random()*360}deg)`;
        setTimeout(() => { document.body.style.filter = 'none'; }, 100);
    }
}
setInterval(colorInvert, 3000);

function rgbSplit() {
    if (Math.random() > 0.9) {
        const els = document.querySelectorAll('.glitch, .glitch-text');
        els.forEach(el => {
            el.style.textShadow = `${Math.random()*10-5}px ${Math.random()*10-5}px ${Math.random()*5}px #ff0000, ${Math.random()*10-5}px ${Math.random()*10-5}px ${Math.random()*5}px #0000ff`;
        });
        setTimeout(() => els.forEach(el => el.style.textShadow = ''), 100);
    }
}
setInterval(rgbSplit, 2000);

function corruptText() {
    const chars = '!@#$%^&*█▓▒░';
    document.querySelectorAll('.name').forEach(el => {
        if (Math.random() > 0.95) {
            const orig = el.getAttribute('data-original') || el.textContent;
            if (!el.getAttribute('data-original')) el.setAttribute('data-original', orig);
            el.textContent = orig.split('').map(c => Math.random() > 0.7 ? chars[Math.floor(Math.random()*chars.length)] : c).join('');
            setTimeout(() => { el.textContent = orig; }, 100);
        }
    });
}
setInterval(corruptText, 2000);

function displaceElements() {
    if (Math.random() > 0.9) {
        document.querySelectorAll('.avatar, .info').forEach(el => {
            el.style.transform = `translate(${Math.random()*10-5}px, ${Math.random()*10-5}px)`;
            setTimeout(() => { el.style.transform = 'translate(0,0)'; }, 100);
        });
    }
}
setInterval(displaceElements, 2000);

function createGlitchBlock() {
    if (Math.random() > 0.97) {
        const block = document.createElement('div');
        Object.assign(block.style, {
            position: 'fixed',
            top: Math.random()*100+'%', left: Math.random()*100+'%',
            width: Math.random()*100+30+'px', height: Math.random()*50+10+'px',
            background: `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},0.3)`,
            zIndex: '9995', pointerEvents: 'none', mixBlendMode: 'difference'
        });
        document.body.appendChild(block);
        setTimeout(() => block.remove(), 100);
    }
}
setInterval(createGlitchBlock, 1000);

function distortAvatar() {
    if (Math.random() > 0.9) {
        const a = document.querySelector('.avatar-inner');
        if (!a) return;
        a.style.borderRadius = `${40+Math.random()*20}% ${40+Math.random()*20}% ${40+Math.random()*20}% ${40+Math.random()*20}%`;
        setTimeout(() => { a.style.borderRadius = '50%'; }, 100);
    }
}
setInterval(distortAvatar, 2000);

function chromaticAberration() {
    if (Math.random() > 0.9) {
        const c = document.querySelector('.main-container');
        c.style.filter = `drop-shadow(${Math.random()*5-2.5}px 0 red) drop-shadow(${Math.random()*-5+2.5}px 0 blue)`;
        setTimeout(() => { c.style.filter = 'none'; }, 100);
    }
}
setInterval(chromaticAberration, 2500);

function createScanline() {
    if (Math.random() > 0.95) {
        const line = document.createElement('div');
        Object.assign(line.style, {
            position: 'fixed', top: Math.random()*100+'%', left: '0',
            width: '100%', height: Math.random()*3+1+'px',
            background: `rgba(255,255,255,${Math.random()*0.3})`,
            zIndex: '9999', pointerEvents: 'none', mixBlendMode: 'overlay'
        });
        document.body.appendChild(line);
        setTimeout(() => line.remove(), 50);
    }
}
setInterval(createScanline, 500);

const horrorChars = '†‡⛧☠✝⚰☣▲▼◆◇○●□■';
function spawnChar() {
    if (Math.random() > 0.7) {
        const el = document.createElement('div');
        el.textContent = horrorChars[Math.floor(Math.random()*horrorChars.length)];
        Object.assign(el.style, {
            position: 'fixed', left: Math.random()*100+'%', top: Math.random()*100+'%',
            color: `rgba(${Math.random()>0.5?'180,0,0':'255,255,255'},${Math.random()*0.4+0.1})`,
            fontSize: Math.random()*40+10+'px', zIndex: '4', pointerEvents: 'none',
            fontFamily: 'serif', transition: 'opacity 1s'
        });
        document.body.appendChild(el);
        setTimeout(() => { el.style.opacity='0'; setTimeout(() => el.remove(), 1000); }, Math.random()*1500+500);
    }
}
setInterval(spawnChar, 300);

function glitchStripe() {
    if (Math.random() > 0.8) {
        const stripe = document.createElement('div');
        Object.assign(stripe.style, {
            position: 'fixed', top: Math.random()*100+'%', left: '0',
            width: '100%', height: Math.random()*30+5+'px',
            background: `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},0.15)`,
            zIndex: '6', pointerEvents: 'none', mixBlendMode: 'screen',
            transform: `translateX(${Math.random()*40-20}px)`
        });
        document.body.appendChild(stripe);
        setTimeout(() => stripe.remove(), 80);
    }
}
setInterval(glitchStripe, 200);

function redFlash() {
    if (Math.random() > 0.97) {
        document.body.style.boxShadow = 'inset 0 0 200px rgba(180,0,0,0.4)';
        setTimeout(() => { document.body.style.boxShadow = 'none'; }, 80);
    }
}
setInterval(redFlash, 500);

const creepyText = ['ERROR','VOID','DEAD','NULL','KILL','666','DIE','HELP','RUN'];
function spawnCreepyText() {
    if (Math.random() > 0.95) {
        const el = document.createElement('div');
        el.textContent = creepyText[Math.floor(Math.random()*creepyText.length)];
        Object.assign(el.style, {
            position: 'fixed', left: Math.random()*90+'%', top: Math.random()*90+'%',
            color: `rgba(180,0,0,${Math.random()*0.5+0.2})`,
            fontSize: Math.random()*20+8+'px', fontFamily: 'Courier New, monospace',
            letterSpacing: '4px', zIndex: '4', pointerEvents: 'none',
            transform: `rotate(${Math.random()*30-15}deg)`, transition: 'opacity 0.5s'
        });
        document.body.appendChild(el);
        setTimeout(() => { el.style.opacity='0'; setTimeout(() => el.remove(), 500); }, 600);
    }
}
setInterval(spawnCreepyText, 800);

function crackScreen() {
    if (Math.random() > 0.97) {
        const crack = document.createElement('canvas');
        crack.width = window.innerWidth;
        crack.height = window.innerHeight;
        Object.assign(crack.style, { position:'fixed', top:'0', left:'0', zIndex:'7', pointerEvents:'none', opacity:'0.4' });
        document.body.appendChild(crack);
        const ctx = crack.getContext('2d');
        ctx.strokeStyle = 'rgba(255,255,255,0.8)';
        ctx.lineWidth = 1;
        let x = Math.random()*window.innerWidth, y = Math.random()*window.innerHeight;
        for (let i = 0; i < 12; i++) {
            ctx.beginPath(); ctx.moveTo(x, y);
            x += Math.random()*120-60; y += Math.random()*120-60;
            ctx.lineTo(x, y); ctx.stroke();
        }
        setTimeout(() => crack.remove(), 300);
    }
}
setInterval(crackScreen, 1000);

function pixelNoise() {
    if (Math.random() > 0.9) {
        const canvas = document.createElement('canvas');
        canvas.width = window.innerWidth; canvas.height = window.innerHeight;
        Object.assign(canvas.style, { position:'fixed', top:'0', left:'0', zIndex:'5', pointerEvents:'none' });
        document.body.appendChild(canvas);
        const ctx = canvas.getContext('2d');
        for (let i = 0; i < 300; i++) {
            ctx.fillStyle = Math.random() > 0.5
                ? `rgba(255,0,0,${Math.random()*0.6})`
                : `rgba(255,255,255,${Math.random()*0.4})`;
            ctx.fillRect(Math.random()*window.innerWidth, Math.random()*window.innerHeight, Math.random()*6+2, Math.random()*6+2);
        }
        setTimeout(() => canvas.remove(), 80);
    }
}
setInterval(pixelNoise, 400);

function shadowCreep() {
    if (Math.random() > 0.92) {
        const el = document.createElement('div');
        const side = Math.random() > 0.5 ? '0' : 'auto';
        Object.assign(el.style, {
            position: 'fixed', top: Math.random()*80+'%',
            left: side, right: side==='auto' ? '0' : 'auto',
            width: Math.random()*150+50+'px', height: Math.random()*150+50+'px',
            background: 'radial-gradient(ellipse, rgba(100,0,0,0.5) 0%, transparent 70%)',
            zIndex: '4', pointerEvents: 'none', transition: 'opacity 1s', borderRadius: '50%'
        });
        document.body.appendChild(el);
        setTimeout(() => { el.style.opacity='0'; setTimeout(() => el.remove(), 1000); }, 800);
    }
}
setInterval(shadowCreep, 600);

function spawnEye() {
    if (Math.random() > 0.96) {
        const el = document.createElement('div');
        el.textContent = '👁';
        Object.assign(el.style, {
            position: 'fixed', left: Math.random()*95+'%', top: Math.random()*95+'%',
            fontSize: Math.random()*30+10+'px', zIndex: '4', pointerEvents: 'none',
            opacity: '0', transition: 'opacity 0.3s', filter: 'drop-shadow(0 0 8px red)'
        });
        document.body.appendChild(el);
        setTimeout(() => el.style.opacity = String(Math.random()*0.6+0.2), 50);
        setTimeout(() => { el.style.opacity='0'; setTimeout(() => el.remove(), 300); }, 1000);
    }
}
setInterval(spawnEye, 700);

function screenTear() {
    if (Math.random() > 0.93) {
        const el = document.createElement('div');
        Object.assign(el.style, {
            position: 'fixed', top: Math.random()*100+'%', left: '0', width: '100%', height: '3px',
            background: 'rgba(255,255,255,0.9)', zIndex: '8', pointerEvents: 'none',
            transform: `translateX(${Math.random()*60-30}px)`
        });
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 60);
    }
}
setInterval(screenTear, 350);

function vhsGlitch() {
    if (Math.random() > 0.88) {
        for (let i = 0; i < Math.floor(Math.random()*4)+1; i++) {
            const el = document.createElement('div');
            Object.assign(el.style, {
                position: 'fixed', top: Math.random()*100+'%', left: '0',
                width: Math.random()*60+20+'%', height: Math.random()*8+2+'px',
                background: `rgba(${Math.random()*255},${Math.random()*100},${Math.random()*255},0.4)`,
                zIndex: '6', pointerEvents: 'none', mixBlendMode: 'screen',
                transform: `translateX(${Math.random()*100}px)`
            });
            document.body.appendChild(el);
            setTimeout(() => el.remove(), 60);
        }
    }
}
setInterval(vhsGlitch, 150);

const sym = ',.?/|\\-_~*#@!%^&+=<>[]{}';
setInterval(() => {
    document.title = Array.from({length: 6}, () => sym[Math.floor(Math.random()*sym.length)]).join('');
}, 1000);

function glitchPlayer() {
    const bar = document.querySelector('.border-bar');
    if (!bar) return;
    if (Math.random() > 0.85) {
        bar.style.opacity = Math.random() > 0.5 ? '0.6' : '1';
        setTimeout(() => { bar.style.opacity = '1'; }, 60);
    }
    if (Math.random() > 0.92) {
        const chars = '!@#$%█▓';
        const orig = playerTitle.textContent;
        playerTitle.textContent = orig.split('').map(c => Math.random() > 0.6 ? chars[Math.floor(Math.random()*chars.length)] : c).join('');
        setTimeout(() => { playerTitle.textContent = orig; }, 80);
    }
}
setInterval(glitchPlayer, 300);const tracks = [
    { src: '1.mp3', title: 'Больше не буду', cover: '1.jpg' },
    { src: '2.mp3', title: 'Doin Time',       cover: '2.jpg' },
    { src: '3.mp3', title: 'С тобой',         cover: '3.jpg' },
    { src: '4.mp3', title: 'Lonely Day',      cover: '4.jpg' },
    { src: '5.mp3', title: 'Пена изо рта',    cover: '5.jpg' },
    { src: '6.mp3', title: 'Колготки',        cover: '6.jpg' },
    { src: '7.mp3', title: 'Metropolis',      cover: '7.jpg' },
    { src: '8.mp3', title: 'Хочу',            cover: '8.jpg' },
];

let currentTrack = 0;
const playerAudio = document.getElementById('player-audio');
const playerTitle = document.getElementById('player-title');
const playerCover = document.getElementById('player-cover');
const playerProgress = document.getElementById('player-progress');
const playerCurrent = document.getElementById('player-current');
const playerDuration = document.getElementById('player-duration');
const playIcon = document.getElementById('play-icon');
const muteIcon = document.getElementById('mute-icon');
const volumeSlider = document.getElementById('volume-slider');

function formatTime(s) {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2,'0')}`;
}

function loadTrack(index) {
    const t = tracks[index];
    playerAudio.src = t.src;
    playerTitle.textContent = t.title;
    playerCover.src = t.cover;
    playerProgress.value = 0;
    playerCurrent.textContent = '0:00';
    playerDuration.textContent = '0:00';
}

function playTrack() {
    playerAudio.play();
    playIcon.className = 'fa-solid fa-pause';
}

function pauseTrack() {
    playerAudio.pause();
    playIcon.className = 'fa-solid fa-play';
}

document.getElementById('btn-play').addEventListener('click', () => {
    if (playerAudio.paused) playTrack(); else pauseTrack();
});

document.getElementById('btn-prev').addEventListener('click', () => {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrack);
    playTrack();
});

document.getElementById('btn-next').addEventListener('click', () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
    playTrack();
});

document.getElementById('btn-mute').addEventListener('click', () => {
    playerAudio.muted = !playerAudio.muted;
    muteIcon.className = playerAudio.muted ? 'fa-solid fa-volume-xmark' : 'fa-solid fa-volume-high';
    if (!playerAudio.muted) volumeSlider.value = playerAudio.volume * 100;
});

volumeSlider.addEventListener('input', () => {
    playerAudio.volume = volumeSlider.value / 100;
    playerAudio.muted = false;
    muteIcon.className = volumeSlider.value == 0 ? 'fa-solid fa-volume-xmark' : 'fa-solid fa-volume-high';
});

playerAudio.addEventListener('timeupdate', () => {
    if (!playerAudio.duration) return;
    playerProgress.value = (playerAudio.currentTime / playerAudio.duration) * 100;
    playerCurrent.textContent = formatTime(playerAudio.currentTime);
    playerDuration.textContent = formatTime(playerAudio.duration);
});

playerProgress.addEventListener('input', () => {
    if (!playerAudio.duration) return;
    playerAudio.currentTime = (playerProgress.value / 100) * playerAudio.duration;
});

playerAudio.addEventListener('ended', () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
    playTrack();
});

playerAudio.src = tracks[0].src;
playerTitle.textContent = tracks[0].title;
playerCover.src = tracks[0].cover;
