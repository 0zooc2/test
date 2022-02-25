import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// 2차원 평면을 위한 클래스
export default class Shape {
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
		this._setupControls(); // 마우스로 컨트롤하는 메서드

		window.onresize = this.resize.bind(this); // 창크기가 변경되면 설정값을 재설정해야된다. this가 이벤트 객체가 아닌 App클래스를 가르키도록 bind메서드 사용
		this.resize();

		requestAnimationFrame(this.render.bind(this));
	}

	_setupControls() {
		new OrbitControls(this._camera, this._divEl); // control객체는 camera객체와 dom요소를 인자로 받는다.
	}

	_setupCamera() {
		const width = this._divEl.clientWidth;
		const height = this._divEl.clientHeight;
		const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100); // 카메라 객체 생성
		camera.position.z = 15; // 카메라 시점 위치 멀리 보내기
		this._camera = camera;
	}

	_setupLight() {
		// 광원 생성
		const color = 0xffffff;
		const intensity = 1;
		const light = new THREE.DirectionalLight(color, intensity);
		light.position.set(-1, 2, 4);
		this._scene.add(light);
	}

	// _setupModel() {
	// 	const shape = new THREE.Shape();
	// 	/*
	// 	사각형 그리기
	// 	shape.moveTo(1, 1); // 시작점으로 이동
	// 	shape.lineTo(1, -1); // 선긋기
	// 	shape.lineTo(-1, -1);
	// 	shape.lineTo(-1, 1);
	// 	shape.closePath(); // 도형그리기 종료
	// 	*/

	// 	const x = -2.5;
	// 	const y = -5;

	// 	shape.moveTo(x + 2.5, y + 2.5);
	// 	shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
	// 	shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
	// 	shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
	// 	shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
	// 	shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
	// 	shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);

	// 	const geometry = new THREE.BufferGeometry();
	// 	const points = shape.getPoints();
	// 	geometry.setFromPoints(points);

	// 	const material = new THREE.LineBasicMaterial({ color: 0xffff00 });
	// 	const line = new THREE.Line(geometry, material);

	// 	this._scene.add(line);
	// }

	_setupModel() {
		const shape = new THREE.Shape();

		const x = -2.5;
		const y = -5;

		shape.moveTo(x + 2.5, y + 2.5);
		shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
		shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
		shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
		shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
		shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
		shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);

		const geometry = new THREE.ShapeGeometry(shape);
		const fillMaterial = new THREE.MeshPhongMaterial({ color: 0x515151 });
		const cube = new THREE.Mesh(geometry, fillMaterial);

		const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffff00 });
		const line = new THREE.LineSegments( // WireframeGeometry 골격 꼭지점을 알게 해주는듯?
			new THREE.WireframeGeometry(geometry),
			lineMaterial,
		);

		const group = new THREE.Group();
		group.add(cube);
		group.add(line);

		this._scene.add(group);
		this._cube = group;
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
