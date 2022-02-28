import * as THREE from 'three';

export default class SceneGraph {
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

		window.onresize = this.resize.bind(this); // 창크기가 변경되면 설정값을 재설정해야된다. this가 이벤트 객체가 아닌 App클래스를 가르키도록 bind메서드 사용
		this.resize();

		requestAnimationFrame(this.render.bind(this));
	}

	_setupCamera() {
		const width = this._divEl.clientWidth;
		const height = this._divEl.clientHeight;
		const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100); // 카메라 객체 생성

		camera.position.z = 15;
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

	_setupModel() {
		const solarSystem = new THREE.Object3D();
		this._scene.add(solarSystem);

		const radius = 1;
		const widthSegments = 12;
		const heightSegments = 12;
		const SphereGeometry = new THREE.SphereGeometry(
			radius,
			widthSegments,
			heightSegments,
		); // 구체 지오메트리

		// 태양
		const sunMaterial = new THREE.MeshPhongMaterial({
			emissive: 0xffff00,
			flatShading: true,
		});

		const sunMesh = new THREE.Mesh(SphereGeometry, sunMaterial);
		sunMesh.scale.set(3, 3, 3); // 원래 크기의 3배로 설정
		solarSystem.add(sunMesh);

		// 지구
		const earthOrbit = new THREE.Object3D();
		solarSystem.add(earthOrbit);

		const earthMaterial = new THREE.MeshPhongMaterial({
			color: 0x2233ff,
			emissive: 0x112244,
			flatShading: true,
		});

		const earthMesh = new THREE.Mesh(SphereGeometry, earthMaterial);
		earthOrbit.position.x = 10; // 태양에서 x축으로 10만큼 이동한 위치에 지구 배치
		earthOrbit.add(earthMesh);

		// 달
		const moonOrbit = new THREE.Object3D();
		moonOrbit.position.x = 2; // 지구로부터 거리 2만큼 이동한 위치에 달 배치
		earthOrbit.add(moonOrbit);

		const moonMaterial = new THREE.MeshPhongMaterial({
			color: 0x888888,
			emissive: 0x222222,
			flatShading: true,
		});
		const moonMesh = new THREE.Mesh(SphereGeometry, moonMaterial);
		moonMesh.scale.set(0.5, 0.5, 0.5);
		moonOrbit.add(moonMesh);

		this._solarSystem = solarSystem;
		this._earthOrbit = earthOrbit;
		this._moonOrbit = moonOrbit;
	}

	resize() {
		// 화면 크기 재정의
		const width = this._divEl.clientWidth;
		const height = this._divEl.clientHeight;

		this._camera.aspect = width / height; // 카메라 속성값 재설정
		this._camera.updateProjectionMatrix();

		this._renderer.setSize(width, height);
	}

	update(time) {
		time *= 0.001;

		this._solarSystem.rotation.y = time / 2; // 태양 자전 지구 달 공전
		this._earthOrbit.rotation.y = time * 2; // 지구 자전 달 공전
		this._moonOrbit.rotation.y = time * 5; // 달 자전
	}

	render(time) {
		this._renderer.render(this._scene, this._camera); // scene을 camera의 시점을 이용해서 렌더링하라는 내용?
		this.update(time);
		requestAnimationFrame(this.render.bind(this));
	}
}
