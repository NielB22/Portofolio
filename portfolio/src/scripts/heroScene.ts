// Latar 3D hero: medan kontur bergelombang dari garis-garis tipis.
// Ketinggian dihitung di GPU (vertex shader), jadi CPU hampir tidak bekerja.

const ROWS = 46;
const COLS = 120;
const WIDTH = 44;
const DEPTH = 34;

const vertexShader = /* glsl */ `
	uniform float uTime;
	varying float vHeight;
	varying float vFade;

	float terrain(vec2 p) {
		return sin(p.x * 0.22 + uTime * 0.35) * cos(p.y * 0.28 - uTime * 0.25) * 1.4
			+ sin((p.x + p.y) * 0.11 + uTime * 0.2) * 1.1
			+ sin(p.x * 0.6 - p.y * 0.4 + uTime * 0.5) * 0.22;
	}

	void main() {
		vec3 pos = position;
		pos.y = terrain(pos.xz);
		vHeight = pos.y;

		vec4 mv = modelViewMatrix * vec4(pos, 1.0);
		// Memudar di kejauhan dan di tepi kiri/kanan
		vFade = smoothstep(-44.0, -14.0, mv.z) * (1.0 - smoothstep(15.0, 22.0, abs(pos.x)));
		gl_Position = projectionMatrix * mv;
	}
`;

const fragmentShader = /* glsl */ `
	uniform vec3 uColor;
	uniform vec3 uPeak;
	varying float vHeight;
	varying float vFade;

	void main() {
		vec3 color = mix(uColor, uPeak, smoothstep(1.2, 2.4, vHeight));
		gl_FragColor = vec4(color, vFade * 0.6);
	}
`;

export async function initHeroScene(canvas: HTMLCanvasElement): Promise<boolean> {
	const THREE = await import('three');

	let renderer: InstanceType<typeof THREE.WebGLRenderer>;
	try {
		renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' });
	} catch {
		return false; // WebGL tidak tersedia: kontur SVG tetap jadi latar
	}
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));

	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);

	// Garis per baris (sejajar sumbu X), disimpan sebagai pasangan titik untuk LineSegments
	const positions: number[] = [];
	for (let r = 0; r < ROWS; r++) {
		// Dari jauh (-20) sampai dekat kamera (+14) agar medan mengisi sampai tepi bawah layar
		const z = 14 - DEPTH + (r / (ROWS - 1)) * DEPTH;
		for (let c = 0; c < COLS - 1; c++) {
			const x0 = -WIDTH / 2 + (c / (COLS - 1)) * WIDTH;
			const x1 = -WIDTH / 2 + ((c + 1) / (COLS - 1)) * WIDTH;
			positions.push(x0, 0, z, x1, 0, z);
		}
	}
	const geometry = new THREE.BufferGeometry();
	geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

	const material = new THREE.ShaderMaterial({
		vertexShader,
		fragmentShader,
		transparent: true,
		depthWrite: false,
		uniforms: {
			uTime: { value: 0 },
			uColor: { value: new THREE.Color('#5d6150') },
			uPeak: { value: new THREE.Color('#8fae00') },
		},
	});

	scene.add(new THREE.LineSegments(geometry, material));

	const resize = () => {
		const { clientWidth: w, clientHeight: h } = canvas.parentElement!;
		renderer.setSize(w, h, false);
		camera.aspect = w / h;
		// Layar sempit: mundurkan kamera agar medan tetap terlihat lebar
		camera.position.z = w < 768 ? 18 : 13;
		camera.updateProjectionMatrix();
	};
	new ResizeObserver(resize).observe(canvas.parentElement!);
	resize();

	const pointer = { x: 0, y: 0 };
	const look = { x: 0, y: 0 };
	window.addEventListener('pointermove', (e) => {
		pointer.x = e.clientX / window.innerWidth - 0.5;
		pointer.y = e.clientY / window.innerHeight - 0.5;
	});

	const render = (t: number) => {
		material.uniforms.uTime.value = t;
		// Paralaks halus mengikuti kursor
		look.x += (pointer.x - look.x) * 0.04;
		look.y += (pointer.y - look.y) * 0.04;
		camera.position.x = look.x * 3;
		camera.position.y = 5.5 - look.y * 1.5;
		camera.lookAt(0, -0.5, -6);
		renderer.render(scene, camera);
	};

	const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (reduceMotion) {
		render(4);
		return true;
	}

	// Render hanya saat hero terlihat dan tab aktif
	let visible = true;
	new IntersectionObserver(([entry]) => (visible = entry.isIntersecting)).observe(canvas);

	let elapsed = 4;
	let last = performance.now();
	renderer.setAnimationLoop((now: number) => {
		const dt = Math.min((now - last) / 1000, 0.1);
		last = now;
		if (!visible || document.hidden) return;
		elapsed += dt;
		render(elapsed);
	});

	return true;
}
