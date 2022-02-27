# WebGL
```
npm i three
```

### Three.js
```
Three.js
└── Redenderer 
    ├── Scene
    │   ├── Light
    │   └── Mesh(Object3D) 
    │       ├── Geometry(형상정의)
    │       └── Material(색상,투명도)
    │
    └── Camera

```

### Geometry
```
BufferGeometry
├── 정점(Vertex) : x,y,z 좌표 
├── 정점 인덱스(Vertex Index) : 3차원 오브젝트의 면을 구성하는 정점에 대한 인덱스
├── 수직 벡터(Normal Vector) : 정점에 대한 수직벡터
├── 정점 색상(Vertex Color)
├── 덱스쳐 맵핑을 위한 UV 좌표
└── 사용자 정의 데이터

// 이러한 데이터들은 실행될때 GPU에 한번에 넘겨져 빠르게 처리된다.
```
Geometry는 3차원 오브젝트의 형상을 정의하는 것을 의미하며, 기본적으로 BufferGeometry를 상속받음
- `BoxGeometry` (육면체) : 가로(1), 세로(1), 깊이(1)
- `CircleGeometry` (원판) : 반지름 크기(1), 원판을 구성하는 분할 개수(8...이 값이 클수록 원과 가까워진다), 시작각도(0), 연장각도(2PI)
- `ConeGeometry` (원뿔) : 밑면반지름의크기(1), 원뿔의 높이(1), 원불 둘레의 분할개수(8), 원뿔 높이에 대한 분할 개수(1), 원뿔 밑면의 개방여부(false), 시작각(0), 연장각(2PI)
- `CylinderGeometry` (원통) : 윗면 반지름 크기(1), 아랫면 반지름 크기(1), 원통 둘레에 대한 분할 개수(8), 높이에 대한 분할 개수(1), 윗면과 아랫면의 개방여부(false), 시작각(0), 연장각(2PI)
- `TorusKnotGeometry` (엉킨 실타래 같음) : 전체 크기(1), 지렁이 같은거 반지름 크기(1), 분할수, 반복수
- `SphereGeometry` (구체) : 반지름 크기(1), 수평방향에 대한 분할 개수(32), 수직방향에 대한 분할 개수(16), 수평방향에 대한 시작각(0), 연장각(2PI), 수직방향에 대한 시작각(0), 연장각(1PI)
- `RingGeometry` (평면 반지) : 내부 반지름(0.5), 외부 반지름(1), 가장자리 둘레 분할 개수(8), 내부 방향에 대한 분할 개수(1), 시작각(0), 연장각(2PI)
- `TorusGeometry` (입체 반지) : 반지름 크기(1), 원기둥 형태로 말아놓은 띠의 반지름(0.4), 토러스의 방사방향에 대한 분할 수(8), 토러스를 표현할 각도(2PI)
<!--  -->
- `ExtrudeGeometry` (3차원 깊이값 설정) : shape, settings
```
settings = {
    steps: 깊이 방향으로의 분할 수(1),
    depth: 깊이 값(100),
    bevelEnabled: 가장자리 부분 경사지게 만들기 베벨속성(true),
    bevelThickness: 베벨 두께(6),
    bevelSize: shape의 외곽선으로부터 베벨을 얼마나 멀리할건지에 대한 사이즈(2),
    bevelSegments: 베벨의 단계 수? 분할 수(5)
}
```
- `LatheGeometry` (좌표배열 돌리기) : 회전 시킬 좌표 배열(points), 분할 개수(12), 시작각도(0), 연장각도(2PI)
```
points = [];
for(let i=0; i<10;++i){
    points.push(new Three.Vector2(Math.sin(i`0.2)`3+3,(i-5)`0.8))
}
```
- `TubeGeometry` : path, tube진행 방향에 대한 분할 개수(64), 원통에 대한 반지름 크기(1), 원통에 대한 분할 개수(8), 원통의 끝 개방여부(false) <-가운데 전체에 선이 생기는 에러 있음
- `ShapeGeometry` (2차원 평면도형 그리기) : moveTo(좌표 시작값 x,y), bezierCurveTo(좌표), lineTo(좌표), closePath()등의 메서드를 통해 도형 생성
- `TextGeometry` : 문자열을 입체형태로 만들어줌
- `ParametricGeometry` : 수학적함수식에 2개의 값을 입력하여 좌표값을 얻음
- `EdgesGeometry` : 형상을 구성하는 인접면의 각도에 따라 재구성
- `WireframeGeometry` : 골격 라인을 보여줌
<!--  -->
- `PolyhedronGeometry` : 다면체를 구성함 (이하는 상속관계)
    - `IcosahedronGeometry` : 20면체
    - `DodecahedronGeometry` : 12면체 
    - `OctahedronGeometry` : 8면체
    - `TetrahedronGeometry` : 4면체

