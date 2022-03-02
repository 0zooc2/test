import Home from './pages/Home';
import Box from './pages/geometry/01_Box';
import WireFrame from './pages/geometry/02_WireFrame';
import Circle from './pages/geometry/03_Circle';
import Cone from './pages/geometry/04_Cone';
import Cylinder from './pages/geometry/05_Cylinder';
import Sphere from './pages/geometry/06_Sphere';
import Ring from './pages/geometry/07_Ring';
import Plane from './pages/geometry/08_Plane';
import Torus from './pages/geometry/09_Torus';
import TorusKnot from './pages/geometry/09_TorusKnot';
import Shape from './pages/geometry/10_Shape';
import Curve from './pages/geometry/11_Curve';
import Tube from './pages/geometry/11_Tube';
import Lathe from './pages/geometry/12_Lathe';
import Extrude from './pages/geometry/13_Extrude';
import Text from './pages/geometry/14_Text';
import SceneGraph from './pages/graph/scenegraph';
import Points from './pages/material/01_Points';
import LineBasic from './pages/material/02_LineBasic';
import MeshBasic from './pages/material/02_MeshBasic';

class App {
	constructor(target) {
		this.target = target;
		this.pathname = window.location.pathname;
	}

	init() {
		// router
		switch (this.pathname) {
			case '/':
				new Home(this.target);
				break;
			case '/box':
				new Box(this.target);
				break;
			case '/wireframe':
				new WireFrame(this.target);
				break;
			case '/circle':
				new Circle(this.target);
				break;
			case '/cone':
				new Cone(this.target);
				break;
			case '/cylinder':
				new Cylinder(this.target);
				break;
			case '/sphere':
				new Sphere(this.target);
				break;
			case '/ring':
				new Ring(this.target);
				break;
			case '/plane':
				new Plane(this.target);
				break;
			case '/torus':
				new Torus(this.target);
				break;
			case '/torusknot':
				new TorusKnot(this.target);
				break;
			case '/shape':
				new Shape(this.target);
				break;
			case '/curve':
				new Curve(this.target);
				break;
			case '/tube':
				new Tube(this.target);
				break;
			case '/lathe':
				new Lathe(this.target);
				break;
			case '/extrude':
				new Extrude(this.target);
				break;
			case '/text':
				new Text(this.target);
				break;
			case '/scenegraph':
				new SceneGraph(this.target);
				break;
			case '/points':
				new Points(this.target);
				break;
			case '/linebasic':
				new LineBasic(this.target);
				break;
			case '/meshbasic':
				new MeshBasic(this.target);
				break;

			default:
				break;
		}
	}
}

export default App;
