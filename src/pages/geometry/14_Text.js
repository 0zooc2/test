import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

// 3차원 깊이값 설정하기
export default class Text {
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

		camera.position.x = 15;
		camera.position.z = 30; // 카메라 시점 위치 멀리 보내기
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
		const fontLoader = new FontLoader();
		async function loadFont(_this) {
			// const url = require('three/examples/fonts/helvetiker_regular.typeface.json');
			// const url = '/helvetiker_regular.typeface.json';
			// const font = await new Promise((resolve, reject) => {
			// 	fontLoader.load(url, resolve, undefined, reject);
			// });

			// load 함수는 url:string이 들어가지만
			// parse 함수는 json 객체를 넣어주면 된다.

			const font = fontLoader.parse(
				require('../../fonts/helvetiker_regular.typeface.json'),
			);

			const geometry = new TextGeometry('GIS', {
				// TextGeometry는 ExtrudeGeometry를 상속받고 있다.
				font,
				size: 9, // 100
				height: 1.5, // 깊이값: 50
				curveSegments: 5, // 하나의 커브를 구성하는 정점의 개수: 12
				bevelEnabled: true, // 가장자리 부분 경사지게 만들기 베벨속성: true
				bevelThickness: 1.5, // 베벨 두께: 6
				bevelSize: 0.7, // shape의 외관선으로 부터 베벨을 얼마나 멀리할건지에 대한 사이즈: 2
				bevelSegments: 2, // 베벨의 단계? 분할 수
			});

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

			_this._scene.add(group);
			_this._cube = group;
		}

		loadFont(this);
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
