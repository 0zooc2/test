import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default class Points {
	constructor($target) {
		this._divEl = $target;

		const renderer = new THREE.WebGLRenderer({ antialias: true }); // 안티엘리어싱 true
		renderer.setPixelRatio(window.devicePixelRatio); // 픽셀비율 설정
		this._divEl.appendChild(renderer.domElement); // 위에서 세팅해서 생성한 domElement를 자식으로 추가

		this._renderer = renderer;

		const scene = new THREE.Scene();
		this._scene = scene;

		this._setupCamera();
		this._setupLight();
		this._setupModel();
		this._setupControls();

		window.onresize = this.resize.bind(this); // 창크기가 변경되면 설정값을 재설정해야된다. this가 이벤트 객체가 아닌 App클래스를 가르키도록 bind메서드 사용
		this.resize();

		requestAnimationFrame(this.render.bind(this));
	}

	_setupCamera() {
		const width = this._divEl.clientWidth;
		const height = this._divEl.clientHeight;
		const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100); // 카메라 객체 생성
		camera.position.z = 2;
		this._camera = camera;
	}

	_setupControls() {
		new OrbitControls(this._camera, this._divEl); // control객체는 camera객체와 dom요소를 인자로 받는다.
	}

	_setupLight() {
		// 광원 생성
		const color = 0xffffff;
		const intensity = 1;
		const light = new THREE.DirectionalLight(color, intensity);
		light.position.set(-1, 2, 4);
		this._scene.add(light);
	}

	_setupModel() {
		// 1만개의 점의 좌표배열
		const vertices = [];
		for (let i = 0; i < 10000; i++) {
			const x = THREE.MathUtils.randFloatSpread(5);
			const y = THREE.MathUtils.randFloatSpread(5);
			const z = THREE.MathUtils.randFloatSpread(5);

			vertices.push(x, y, z);
		}

		const geometry = new THREE.BufferGeometry();
		geometry.setAttribute(
			'position',
			new THREE.Float32BufferAttribute(vertices, 3),
		);

		const material = new THREE.PointsMaterial({
			// color: 0xff0000,
			color: 'green',
			size: 0.01,
			sizeAttenuation: true, // 화면의 거리에 따라 포인트 크기 설정(원근감)
		});

		const points = new THREE.Points(geometry, material);
		this._scene.add(points);
	}

	resize() {
		// 화면 크기 재정의
		const width = this._divEl.clientWidth;
		const height = this._divEl.clientHeight;

		this._camera.aspect = width / height; // 카메라 속성값 재설정
		this._camera.updateProjectionMatrix();

		this._renderer.setSize(width, height);
	}

	render() {
		this._renderer.render(this._scene, this._camera); // scene을 camera의 시점을 이용해서 렌더링하라는 내용?
		requestAnimationFrame(this.render.bind(this));
	}
}
