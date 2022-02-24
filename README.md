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
- BoxGeometry
- CircleGeometry
- ConeGeometry
- CylinderGeometry
- TorusKnotGeometry
- SphereGeometry
- RingGeometry
- PlaneGeometry
- TorusGeometry
<!--  -->
- ExtrudeGeometry
- LatheGeometry
- TubeGeometry
- ShapeGeometry
- TextGeometry
- ParametricGeometry : 수학적함수식에 2개의 값을 입력하여 좌표값을 얻음
- EdgesGeometry : 형상을 구성하는 인접면의 각도에 따라 재구성
- WireframeGeometry
<!--  -->
- PolyhedronGeometry : 다면체를 구성함 (이하는 상속관계)
    - IcosahedronGeometry : 20면체
    - DodecahedronGeometry : 12면체 
    - OctahedronGeometry : 8면체
    - TetrahedronGeometry : 4면체

