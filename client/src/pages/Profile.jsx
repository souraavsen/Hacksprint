import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../components/Navbar/DashNav";
import Footer from "../components/Footer/Footer";
import { getProfile } from "../actions/profileAction";
import ProfileCard from "../components/Profile/ProfileCard";
import Work from "../components/Profile/Work";
import Education from "../components/Profile/Education";

class Profile extends Component {
	state = {
		user: this.props.user,
	};

	constructor(props) {
		super(props);
		this.props.getProfile(this.props.token);
	}

	render() {
		let { user, work, education } = this.props.profile;
		let info = {
			contact: this.props.profile.contact,
			website: this.props.profile.website,
			location: this.props.profile.location,
			works_at: this.props.profile.works_at,
		};

		return (
			<div>
				<Navbar />
				<div className="pt-4 pb-5 bg-color">
					<div className="container">
						<div className="ui two column grid">
							<div className="four wide column">
								<ProfileCard user={user} info={info} />
							</div>
							<div className="twelve wide column">
								<Work works={work} />
								<Education educations={education} />
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		profile: state.profileReducer.profile,
		token: state.authReducer.token,
	};
};

export default connect(mapStateToProps, { getProfile })(Profile);
