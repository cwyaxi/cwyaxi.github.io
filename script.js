const audio = document.getElementById('audio');
const playIcon = document.getElementById('play-icon');
const volIcon = document.getElementById('vol-icon');
const progress = document.getElementById('progress');
const vol = document.getElementById('vol');
const tCur = document.getElementById('t-cur');
const tDur = document.getElementById('t-dur');
const npBars = document.getElementById('np-bars');

audio.volume = 0.8;

function fmt(s) {
    return `${Math.floor(s/60)}:${Math.floor(s%60).toString().padStart(2,'0')}`;
}

document.getElementById('enter-btn').addEventListener('click', () => {
    const screen = document.getElementById('enter-screen');
    screen.classList.add('hidden');
    audio.play();
    playIcon.className = 'fa-solid fa-pause';
    npBars.classList.remove('paused');
});

document.getElementById('btn-play').addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playIcon.className = 'fa-solid fa-pause';
        npBars.classList.remove('paused');
    } else {
        audio.pause();
        playIcon.className = 'fa-solid fa-play';
        npBars.classList.add('paused');
    }
});

document.getElementById('btn-mute').addEventListener('click', () => {
    audio.muted = !audio.muted;
    volIcon.className = audio.muted ? 'fa-solid fa-volume-xmark' : 'fa-solid fa-volume-high';
});

vol.addEventListener('input', () => {
    audio.volume = vol.value / 100;
    audio.muted = false;
    volIcon.className = vol.value == 0 ? 'fa-solid fa-volume-xmark' : 'fa-solid fa-volume-high';
});

audio.addEventListener('timeupdate', () => {
    if (!audio.duration) return;
    progress.value = (audio.currentTime / audio.duration) * 100;
    tCur.textContent = fmt(audio.currentTime);
    tDur.textContent = fmt(audio.duration);
});

progress.addEventListener('input', () => {
    if (audio.duration) audio.currentTime = (progress.value / 100) * audio.duration;
});

audio.addEventListener('ended', () => { audio.currentTime = 0; audio.play(); });

function initCanvas() {
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const fishes = Array.from({ length: 12 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 3 + 1,
        hue: 180 + Math.random() * 60,
        alpha: Math.random() * 0.4 + 0.1,
    }));

    const waves = Array.from({ length: 5 }, (_, i) => ({
        y: 0.4 + i * 0.12,
        amp: 15 + Math.random() * 25,
        freq: 0.005 + Math.random() * 0.004,
        speed: 0.2 + Math.random() * 0.3,
        phase: Math.random() * Math.PI * 2,
        alpha: 0.04 + i * 0.015,
    }));

    let t = 0;

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
        grad.addColorStop(0, '#010a14');
        grad.addColorStop(0.4, '#031525');
        grad.addColorStop(0.7, '#041e38');
        grad.addColorStop(1, '#062a50');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        waves.forEach(w => {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(56,189,248,${w.alpha})`;
            ctx.lineWidth = 1.5;
            for (let x = 0; x <= canvas.width; x += 3) {
                const y = canvas.height * w.y + Math.sin(x * w.freq + t * w.speed + w.phase) * w.amp;
                x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
            }
            ctx.stroke();
        });

        fishes.forEach(f => {
            f.x += f.vx;
            f.y += f.vy;
            if (f.x < -10) f.x = canvas.width + 10;
            if (f.x > canvas.width + 10) f.x = -10;
            if (f.y < 0) f.y = canvas.height;
            if (f.y > canvas.height) f.y = 0;

            const rg = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.size * 4);
            rg.addColorStop(0, `hsla(${f.hue},100%,70%,${f.alpha})`);
            rg.addColorStop(1, `hsla(${f.hue},100%,70%,0)`);
            ctx.beginPath();
            ctx.arc(f.x, f.y, f.size * 4, 0, Math.PI * 2);
            ctx.fillStyle = rg;
            ctx.fill();
        });

        t += 0.016;
        requestAnimationFrame(draw);
    }
    draw();
}

function spawnParticles() {
    const c = document.getElementById('particles');
    for (let i = 0; i < 40; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 4 + 1;
        const hue = 180 + Math.random() * 60;
        Object.assign(p.style, {
            width: size + 'px', height: size + 'px',
            left: Math.random() * 100 + '%',
            bottom: '-10px',
            background: `hsla(${hue},100%,70%,0.7)`,
            boxShadow: `0 0 ${size * 3}px hsla(${hue},100%,70%,0.5)`,
            '--dur': (Math.random() * 15 + 8) + 's',
            '--delay': -(Math.random() * 20) + 's',
            '--dx': (Math.random() * 80 - 40) + 'px',
        });
        c.appendChild(p);
    }
}

function spawnAvatarBubbles() {
    const c = document.getElementById('avatar-bubbles');
    for (let i = 0; i < 8; i++) {
        const b = document.createElement('div');
        b.className = 'ab';
        const size = Math.random() * 5 + 2;
        Object.assign(b.style, {
            width: size + 'px', height: size + 'px',
            left: (20 + Math.random() * 60) + '%',
            bottom: '10%',
            '--d': (Math.random() * 2 + 1.5) + 's',
            '--dl': -(Math.random() * 3) + 's',
            '--dx': (Math.random() * 20 - 10) + 'px',
        });
        c.appendChild(b);
    }
}

document.addEventListener('click', (e) => {
    if (document.getElementById('enter-screen').style.visibility === 'hidden' ||
        document.getElementById('enter-screen').classList.contains('hidden')) {
        const layer = document.getElementById('ripple-layer');
        const colors = ['rgba(56,189,248,', 'rgba(14,165,233,', 'rgba(125,211,252,'];
        for (let i = 0; i < 4; i++) {
            setTimeout(() => {
                const r = document.createElement('div');
                r.className = 'ripple';
                const size = 60 + i * 70;
                const col = colors[i % colors.length];
                Object.assign(r.style, {
                    left: e.clientX + 'px',
                    top: e.clientY + 'px',
                    width: size + 'px',
                    height: size + 'px',
                    border: `1.5px solid ${col}${0.7 - i * 0.15})`,
                    '--dur': (0.9 + i * 0.25) + 's',
                });
                layer.appendChild(r);
                setTimeout(() => r.remove(), 2000);
            }, i * 60);
        }
    }
});

initCanvas();
spawnParticles();
spawnAvatarBubbles();
npBars.classList.add('paused');
