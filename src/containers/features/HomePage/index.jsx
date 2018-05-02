import React, { PureComponent } from 'react';

// import Main from '../../common/Main/index.jsx';
import Banner from '../../../components/common/Banner.jsx';
import Introduce from '../../../components/common/Introduce.jsx';

class HomePage extends PureComponent {

	render() {
		return (
			<React.Fragment>
		    <Banner />
				<Introduce />
			</React.Fragment>
		);
	}

}

export default HomePage;
