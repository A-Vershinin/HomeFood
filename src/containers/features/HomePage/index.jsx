import React, { PureComponent } from 'react';

// import Main from '../../common/Main/index.jsx';
import Banner from '../../../components/common/Banner.jsx';
import Introduce from '../../../components/common/Introduce.jsx';
import Categories from '../../../components/common/Categories.jsx';

class HomePage extends PureComponent {

	render() {
		return (
			<React.Fragment>
		    <Banner />
				<Introduce />
				<Categories />
			</React.Fragment>
		);
	}

}

export default HomePage;
