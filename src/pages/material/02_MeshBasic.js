import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default class MeshBasic {
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
		camera.position.z = 3;
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
		const material = new THREE.MeshBasicMaterial({
			// color: 0xffffff,
			color: 'yellow',
			wireframe: false, // false는 면 형태, true는 와이어프레임, 골격, 뼈대 구조? 형태
			// ~~Material개체들은 모두 Material클래스를 상속받기 때문에 다음과 같은 Material 속성을 사용할 수 있다.
			// 이하는 기본값이다.
			visible: true, // 랜더링시에 메쉬가 보일지 안보일지를 지정한다.
			transparent: false, // opacity를 사용할 것인지에 대한 여부
			opacity: 1, // transparent를 true로 설정했을 때만 작동한다.
			depthTest: true, // 랜더링 되고 있는 메쉬의 픽셀 위치의 z값을 Depth Buffer값을 이용해서 검사할것인지에 대한 여부
			depthWrite: true, // Depth Buffer에 기록할 것인지에 대한 여부
			side: THREE.FrontSide, // 랜더링할 화면 제한
		});

		/*
			Depth Buffer는 깊이 버퍼이고, z버퍼로 3차원 객체를 카메라를 통해 좌표를 변환시켜 화면상에 랜더링 될 때 
			해당 3차원 객체를 구성하는 각 픽셀에 대한 z값 좌표값을 0 ~ 1로 정규화시킨다.
			이 정규화된 z값이 저장된 버퍼가 z버퍼이다.
			이 값은 작을수록 카메라에서 가까운 3차원 객체의 픽셀이다.

			원근감을 계산하는것인듯?
		*/

		const box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);
		box.position.set(-1, 0, 0);
		this._scene.add(box);

		const sphere = new THREE.Mesh(
			new THREE.SphereGeometry(0.7, 32, 32),
			material,
		);
		sphere.position.set(1, 0, 0);
		this._scene.add(sphere);
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
