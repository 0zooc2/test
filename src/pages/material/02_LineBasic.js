import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default class LineBasic {
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
		const vertices = [-1, 1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0];

		const geometry = new THREE.BufferGeometry();
		geometry.setAttribute(
			'position',
			new THREE.Float32BufferAttribute(vertices, 3),
		);

		// const material = new THREE.LineBasicMaterial({
		// 	color: 0xff0000,
		// });

		const material = new THREE.LineDashedMaterial({
			color: 0xffff00,
			dashSize: 0.2,
			gapSize: 0.1,
			scale: 1,
		});

		const line = new THREE.Line(geometry, material);
		// const line = new THREE.LineSegments(geometry, material);
		// const line = new THREE.LineLoop(geometry, material);

		/*
		 	Line : 모든 점을 이어 한 줄 긋기 (z꼴)
		 	LineSegments : 2개의 점이 짝지어 한씩 선을 이룸 (-꼴)
		 	LineLoop : 모든 점을 잇고 끝점에서 다시 처음 점으로 돌아가 루프를 형성 (무한대 꼴)
		*/

		line.computeLineDistances(); // LineDashed는 선의 길이를 참조하여 계산하여 dash를 그리므로 이 함수를 사용하여 길이를 계산해줘야한다.

		this._scene.add(line);
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
