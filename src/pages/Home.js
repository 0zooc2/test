export default class Home {
	constructor($target) {
		this.target = $target;
		this.style =
			'display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;';

		this.render();
	}

	render() {
		this.target.innerHTML = `
            <div style='${this.style}'>
                <h1>hello</h1>
            </div>
        `;
	}
}
