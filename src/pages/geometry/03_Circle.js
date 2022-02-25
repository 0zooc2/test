import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default class Circle {
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
		camera.position.z = 2;
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
		// 파란색 정육면체 객체 Mesh를 생성
		const geometry = new THREE.CircleGeometry(0.9, 32, 0, Math.PI / 2, Math.PI); // 형상정의 (반지름크기(디폴트: 1), 원판을 구성하는 분할 개수(디폴트: 8 ... 이값이 클수록 원과 가깝게 만들어진다), 시작각도(디폴트: 0), 연장각도(단위 라디언, 디폴트: 2파이(360도)))
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
