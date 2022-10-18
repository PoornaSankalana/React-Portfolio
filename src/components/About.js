/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

export default class About extends Component {
	render() {
		let resumeData = this.props.resumeData;

		return (
			<section id="about">
				<div className="row">
					<div className="three columns">
						<img
							className="profile-pic"
							src="images/profilepic.jpg"
							alt=""
						/>
					</div>
					<div className="nine columns main-col">
						<h2> About Me </h2> <p> {resumeData.aboutme} </p>
						<div className="row">
							<div className="columns contact-details">
								<h2> Contact Details </h2>{" "}
								<p className="address">
									<span> {resumeData.name} </span> <br />
									<span>
										{" "}
										{resumeData.address}{" "}
									</span>{" "}
									<br />
									<span> {resumeData.email} </span>{" "}
									<br />
									<span> {resumeData.mobile} </span>{" "}
									<br />
									<br />
									<span>
										{" "}
										<a
											id="link"
											className="cv"
											href="documents/CV.pdf"
										>
											Download CV
										</a>{" "}
									</span>{" "}
								</p>{" "}
							</div>{" "}
						</div>{" "}
					</div>{" "}
				</div>{" "}
			</section>
		);
	}
}
