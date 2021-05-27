import React, { Component } from 'react'


export default class Home extends Component {
    render() {
        return (
            <div>
            <div id="preloader">
			<div className="spinner">
				<div className="double-bounce1"></div>
				<div className="double-bounce2"></div>
			</div>
		</div>

<header className="xs-header-height xs-menu-style-transparent xs-menu-style-border fundpress-header-main-version color-navy-blue">
	<div className="container">
		<nav className="xs-menus fundpress-menu">
			<div className="nav-header">
				<div className="nav-toggle"></div>
				<a className="nav-brand nav-logo" href="index.html">
					<img src="" alt=""/>
				</a>
			</div>
			<div className="nav-menus-wrapper">
				<div className="xs-logo-wraper">
					<a className="nav-brand xs-logo fundpress-logo-v1" href="index.html">
						<img src="" alt=""/>
					</a>
				</div>
				<ul className="nav-menu">
					<li><a href="">Home</a>
						<ul className="nav-dropdown">
							<li><a href="index.html">home version 1</a></li>
							<li><a href="index-v2.html">home version 2</a></li>
							<li><a href="index-v3.html">home version 3</a></li>
						</ul>
					</li>
					<li><a href="about.html">about</a></li>
					<li><a href="#">Blog</a>
						<ul className="nav-dropdown">
							<li><a href="news-feed.html ">blog version 1</a></li>
							<li><a href="news-feed-v2.html ">blog version 2</a></li>
							<li><a href="news-feed-v3.html">blog version 3</a></li>
							<li><a href="blog-single.html">blog details </a></li>
						</ul>
					</li>
					<li><a href="contact.html">contact</a></li>
					<li><a href="#">pages</a>
						<ul className="nav-dropdown">
							<li><a href="team-member-details.html ">team details</a></li>
							<li><a href="progress.html ">progress</a></li>
							<li><a href="progress-successful.html">progress successful</a></li>
							<li><a href="progress-explore.html">progress explore</a></li>
							<li><a href="events.html">events</a></li>
							<li><a href="faq.html">faq</a></li>
							<li><a href="fund-details.html ">fund-details</a></li>
							<li><a href="we-do.html">we do</a></li>
							<li><a href="portfolio.html">portfolio</a></li>
							<li><a href="shop.html">Shop</a></li>
							<li><a href="single-shop.html">single Shop</a></li>
						</ul>
					</li>
				</ul>
				<div className="xs-navs-button">
					<ul className="xs-icon-with-text fundpress-icon-menu">
						<li><a href="" data-toggle="modal" data-target=".bd-example-modal-lg"><i className="fa fa-unlock-alt color-green"></i>Log In</a></li>
						<li className="d-block d-lg-none d-xl-block"><a href="#" className="xs-btn round-btn green-btn">start a campaign</a></li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</header>




<div className="modal fade bd-example-modal-lg xs-modal" tabIndex="-1" role="dialog" aria-hidden="true">
	<div className="modal-dialog modal-lg">
		<div className="modal-content">
			<div className="fundpress-tab-nav-v5">
				<ul className="nav nav-tabs" role="tablist">
					<li className="nav-item">
						<a className="nav-link active" href="#login" role="tab" data-toggle="tab">
							Login
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#signup" role="tab" data-toggle="tab">
							Signup
						</a>
					</li>
				</ul>
			</div>
			
			<div className="tab-content">
				<div role="tabpanel" className="tab-pane fadeInRights show fade in active" id="login">
					<form action="#" method="POST" id="xs-login-form">
						<div className="xs-input-group-v2">
							<i className="icon icon-profile-male"></i>
							<input type="text" name="name" id="xs_user_login_name" className="xs-input-control" placeholder="Enter your username"/>
						</div>
						<div className="xs-input-group-v2">
							<i className="icon icon-key2"></i>
							<input type="password" name="name" id="xs_login_password" className="xs-input-control" placeholder="Enter your password"/>
						</div>
						<div className="xs-submit-wraper xs-mb-20">
							<input type="submit" name="submit" value="login now" id="xs_contact_get_action" className="btn btn-warning btn-block"/>
						</div>
						<p className="xs-mb-20">or</p>
						<div className="xs-submit-wraper xs-mb-20">
							<input type="submit" name="submit" value="Login with facebook account" id="xs_facebook" className="btn btn-info btn-block"/>
						</div>
						<div className="xs-submit-wraper">
							<input type="submit" name="submit" value="Login with twitter account" id="xs_twitter" className="btn btn-success btn-block"/>
						</div>
					</form>
				</div>
				<div role="tabpanel" className="tab-pane fadeInRights fade" id="signup">
					<form action="#" method="POST" id="xs-register-form">
						<div className="xs-input-group-v2">
							<i className="icon icon-profile-male"></i>
							<input type="text" name="name" id="xs_register_name" className="xs-input-control" placeholder="Enter your username"/>
						</div>
						<div className="xs-input-group-v2">
							<i className="icon icon-envelope2"></i>
							<input type="email" name="email" id="xs_register_email" className="xs-input-control" placeholder="Enter your email"/>
						</div>
						<div className="xs-input-group-v2">
							<i className="icon icon-key2"></i>
							<input type="password" name="name" id="xs_register_password" className="xs-input-control" placeholder="Enter your password"/>
						</div>
						<div className="xs-input-group-v2">
							<i className="icon icon-key2"></i>
							<input type="password" name="name" id="xs_register_repeat_pass" className="xs-input-control" placeholder="Enter your confirm password"/>
						</div>
						<div className="xs-submit-wraper xs-mb-20">
							<input type="submit" name="submit" value="login now" id="xs_register_get_action" className="btn btn-warning btn-block"/>
						</div>
						<p className="xs-mb-20">or</p>
						<div className="xs-submit-wraper xs-mb-20">
							<input type="submit" name="submit" value="Login with facebook account" id="xs_register_facebook" className="btn btn-info btn-block"/>
						</div>
						<div className="xs-submit-wraper">
							<input type="submit" name="submit" value="Login with twitter account" id="xs_register_twitter" className="btn btn-success btn-block"/>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>


<main className="xs-all-content-wrapper">
    
    <section className="xs-screen-height xs-welcome-section xs-bg fundpress-welcome-section" style={{backgroundImage: url(assets/images/welcome-bg-back-overlay.png)}}>
	<div className="container">
		<div className="row">
			<div className="col-lg-6">
				<div className="xs-welcome-content fundpress-welcome-content">
					<div className="xs-welcome-wraper fundpress-welcome-wraper">
						<div className="xs-welcome-title fundpress-welcome-title">
							<h2 className="color-navy-blue">Exclusive Bunny Cam</h2>
						</div>
						<div className="xs-skill-bar-v2" data-percent="65%">
							<div className="xs-skill-track">
								<p><span className="number-percentage-count">65</span>%</p>
							</div>
						</div>
						<ul className="xs-list-with-content fundpress-welcome-list-content">
							<li>US $45,280.00<span>Pledged</span></li>
							<li>US $87,000.00<span>Goal</span></li>
						</ul>
						<div className="xs-btn-wraper">
							<a href="#" className="xs-btn round-btn navy-blue-btn icon-btn"><i className="fa fa-heart"></i>invest Now</a>
							<a href="#" className="xs-btn round-btn blue-btn icon-btn"><i className="fa fa-facebook"></i>Share Now</a>
						</div>
					</div>
				</div>
			</div>
			<div className="col-lg-6">
				<div className="xs-welcome-content">
					<div className="fundpress-animate text-center">
						<img src="" alt=""/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>    

    
    <section id="cause-matters" className="waypoint-tigger xs-section-padding">
	<div className="container">
		<div className="xs-section-heading row xs-margin-0">
			<div className="fundpress-heading-title xs-padding-0 col-md-9 col-xl-9">
				<h2 className="color-navy-blue">Big of small your cause matters</h2>
				<span className="xs-separetor dashed-separetor fundpress-separetor"></span>
				<p>Fundpress site thoughtfully designed for real humans which means the best user experience for your entire community of donors, fundraisers, customers, and staff.</p>
			</div>
			<div className="xs-btn-wraper xs-padding-0 col-xl-3 col-md-3 d-flex-center-end">
				<a href="progress.html" className="xs-btn round-btn navy-blue-btn">all Projects</a>
			</div>
		</div>
		<div className="xs-tab-wraper fundpress-tab-wraper">
			<div className="fundpress-tab-nav xs-tab-nav">
				<ul className="nav nav-tabs" role="tablist">
					<li className="nav-item">
						<a className="nav-link active" href="#comics" role="tab" data-toggle="tab">Comics</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#crafts" role="tab" data-toggle="tab">Crafts</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#dance" role="tab" data-toggle="tab">Dance</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#design" role="tab" data-toggle="tab">Design</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#fashion" role="tab" data-toggle="tab">Fashion</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#food" role="tab" data-toggle="tab">Food</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#games" role="tab" data-toggle="tab">Games</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#film_and_video" role="tab" data-toggle="tab">Film And Video</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#journalism" role="tab" data-toggle="tab">Journalism</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#music" role="tab" data-toggle="tab">Music</a>
					</li>
				</ul>
			</div>
			<div className="tab-content">
				<div role="tabpanel" className="tab-pane fade in active show" id="comics">
					<div className="row">
						<div className="col-lg-4">
							<div className="fundpress-grid-item-content">
								<div className="fundpress-item-header xs-mb-30">
									<img src="" alt=""/>
									<div className="xs-item-header-content">
										<div className="xs-skill-bar-v3" data-percent="65%">
											<div className="xs-skill-track">
												<p>65%</p>
											</div>
										</div>
									</div>
								</div>
								<div className="fundpress-item-content">
									<ul className="xs-simple-tag fundpress-simple-tag">
										<li><a href="">Music</a></li>
										<li><a href="">Technology</a></li>
										<li><a href="">UI/UX</a></li>
									</ul>
									<a href="#" className="d-block color-navy-blue fundpress-post-title">Brilliant After All, A New Album by Rebecca: Help poor people</a>
									<ul className="xs-list-with-content fundpress-list-item-content">
										<li>$15,280<span>Pledged</span></li>
										<li><span className="number-percentage-count">65%</span><span>Funded</span></li>
										<li>50<span>Days to go</span></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="fundpress-grid-item-content">
								<div className="fundpress-item-header xs-mb-30">
									<img src="" alt=""/>
									<div className="xs-item-header-content">
										<div className="xs-skill-bar-v3" data-percent="32%">
											<div className="xs-skill-track">
												<p>32%</p>
											</div>
										</div>
									</div>
								</div>
								<div className="fundpress-item-content">
									<ul className="xs-simple-tag fundpress-simple-tag">
										<li><a href="">Craft</a></li>
										<li><a href="">Handmade</a></li>
										<li><a href="">Photography</a></li>
									</ul>
									<a href="#" className="d-block color-navy-blue fundpress-post-title">Water Colors: Kim Keever's First-Ever Monograph</a>
									<ul className="xs-list-with-content fundpress-list-item-content">
										<li>$45,280<span>Pledged</span></li>
										<li><span className="number-percentage-count">32%</span><span>Funded</span></li>
										<li>45<span>Days to go</span></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="fundpress-grid-item-content">
								<div className="fundpress-item-header xs-mb-30">
									<img src="" alt=""/>
									<div className="xs-item-header-content">
										<div className="xs-skill-bar-v3" data-percent="80%">
											<div className="xs-skill-track">
												<p>80%</p>
											</div>
										</div>
									</div>
								</div>
								<div className="fundpress-item-content">
									<ul className="xs-simple-tag fundpress-simple-tag">
										<li><a href="">Lifestyle</a></li>
										<li><a href="">Photography</a></li>
										<li><a href="">Games</a></li>
									</ul>
									<a href="#" className="d-block color-navy-blue fundpress-post-title">Dress up Box— Make-Believe inform Clothing for Girls</a>
									<ul className="xs-list-with-content fundpress-list-item-content">
										<li>$76,280<span>Pledged</span></li>
										<li><span className="number-percentage-count">80%</span><span>Funded</span></li>
										<li>79<span>Days to go</span></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div role="tabpanel" className="tab-pane fade" id="crafts">
					<div className="row">
						<div className="col-lg-4">
							<div className="fundpress-grid-item-content">
								<div className="fundpress-item-header xs-mb-30">
									<img src="" alt=""/>
									<div className="xs-item-header-content">
										<div className="xs-skill-bar-v3" data-percent="65%">
											<div className="xs-skill-track">
												<p>65%</p>
											</div>
										</div>
									</div>
								</div>
								<div className="fundpress-item-content">
									<ul className="xs-simple-tag fundpress-simple-tag">
										<li><a href="">Music</a></li>
										<li><a href="">Technology</a></li>
										<li><a href="">UI/UX</a></li>
									</ul>
									<a href="#" className="d-block color-navy-blue fundpress-post-title">Brilliant After All, A New Album by Rebecca: Help poor people</a>
									<ul className="xs-list-with-content fundpress-list-item-content">
										<li>$15,280<span>Pledged</span></li>
										<li><span className="number-percentage-count">65%</span><span>Funded</span></li>
										<li>50<span>Days to go</span></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="fundpress-grid-item-content">
								<div className="fundpress-item-header xs-mb-30">
									<img src="" alt=""/>
									<div className="xs-item-header-content">
										<div className="xs-skill-bar-v3" data-percent="32%">
											<div className="xs-skill-track">
												<p>32%</p>
											</div>
										</div>
									</div>
								</div>
								<div className="fundpress-item-content">
									<ul className="xs-simple-tag fundpress-simple-tag">
										<li><a href="">Craft</a></li>
										<li><a href="">Handmade</a></li>
										<li><a href="">Photography</a></li>
									</ul>
									<a href="#" className="d-block color-navy-blue fundpress-post-title">Water Colors: Kim Keever's First-Ever Monograph</a>
									<ul className="xs-list-with-content fundpress-list-item-content">
										<li>$45,280<span>Pledged</span></li>
										<li><span className="number-percentage-count">32%</span><span>Funded</span></li>
										<li>45<span>Days to go</span></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="fundpress-grid-item-content">
								<div className="fundpress-item-header xs-mb-30">
									<img src="" alt=""/>
									<div className="xs-item-header-content">
										<div className="xs-skill-bar-v3" data-percent="80%">
											<div className="xs-skill-track">
												<p>80%</p>
											</div>
										</div>
									</div>
								</div>
								<div className="fundpress-item-content">
									<ul className="xs-simple-tag fundpress-simple-tag">
										<li><a href="">Lifestyle</a></li>
										<li><a href="">Photography</a></li>
										<li><a href="">Games</a></li>
									</ul>
									<a href="#" className="d-block color-navy-blue fundpress-post-title">Dress up Box— Make-Believe inform Clothing for Girls</a>
									<ul className="xs-list-with-content fundpress-list-item-content">
										<li>$76,280<span>Pledged</span></li>
										<li><span className="number-percentage-count">80%</span><span>Funded</span></li>
										<li>79<span>Days to go</span></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div role="tabpanel" className="tab-pane fade" id="dance">
					<div className="row">
						<div className="col-lg-4">
							<div className="fundpress-grid-item-content">
								<div className="fundpress-item-header xs-mb-30">
									<img src="" alt=""/>
									<div className="xs-item-header-content">
										<div className="xs-skill-bar-v3" data-percent="65%">
											<div className="xs-skill-track">
												<p>65%</p>
											</div>
										</div>
									</div>
								</div>
								<div className="fundpress-item-content">
									<ul className="xs-simple-tag fundpress-simple-tag">
										<li><a href="">Music</a></li>
										<li><a href="">Technology</a></li>
										<li><a href="">UI/UX</a></li>
									</ul>
									<a href="#" className="d-block color-navy-blue fundpress-post-title">Brilliant After All, A New Album by Rebecca: Help poor people</a>
									<ul className="xs-list-with-content fundpress-list-item-content">
										<li>$15,280<span>Pledged</span></li>
										<li><span className="number-percentage-count">65%</span><span>Funded</span></li>
										<li>50<span>Days to go</span></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="fundpress-grid-item-content">
								<div className="fundpress-item-header xs-mb-30">
									<img src="" alt=""/>
									<div className="xs-item-header-content">
										<div className="xs-skill-bar-v3" data-percent="32%">
											<div className="xs-skill-track">
												<p>32%</p>
											</div>
										</div>
									</div>
								</div>
								<div className="fundpress-item-content">
									<ul className="xs-simple-tag fundpress-simple-tag">
										<li><a href="">Craft</a></li>
										<li><a href="">Handmade</a></li>
										<li><a href="">Photography</a></li>
									</ul>
									<a href="#" className="d-block color-navy-blue fundpress-post-title">Water Colors: Kim Keever's First-Ever Monograph</a>
									<ul className="xs-list-with-content fundpress-list-item-content">
										<li>$45,280<span>Pledged</span></li>
										<li><span className="number-percentage-count">32%</span><span>Funded</span></li>
										<li>45<span>Days to go</span></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="fundpress-grid-item-content">
								<div className="fundpress-item-header xs-mb-30">
									<img src="" alt=""/>
									<div className="xs-item-header-content">
										<div className="xs-skill-bar-v3" data-percent="80%">
											<div className="xs-skill-track">
												<p>80%</p>
											</div>
										</div>
									</div>
								</div>
								<div className="fundpress-item-content">
									<ul className="xs-simple-tag fundpress-simple-tag">
										<li><a href="">Lifestyle</a></li>
										<li><a href="">Photography</a></li>
										<li><a href="">Games</a></li>
									</ul>
									<a href="#" className="d-block color-navy-blue fundpress-post-title">Dress up Box— Make-Believe inform Clothing for Girls</a>
									<ul className="xs-list-with-content fundpress-list-item-content">
										<li>$76,280<span>Pledged</span></li>
										<li><span className="number-percentage-count">80%</span><span>Funded</span></li>
										<li>79<span>Days to go</span></li>
									</ul>
								</div>
							</div>
						</div>
					</div>	
				</div>
				<div role="tabpanel" className="tab-pane fade" id="design">
					<div className="row">
						<div className="col-lg-4">
							<div className="fundpress-grid-item-content">
								<div className="fundpress-item-header xs-mb-30">
									<img src="" alt=""/>
									<div className="xs-item-header-content">
										<div className="xs-skill-bar-v3" data-percent="65%">
											<div className="xs-skill-track">
												<p>65%</p>
											</div>
										</div>
									</div>
								</div>
								<div className="fundpress-item-content">
									<ul className="xs-simple-tag fundpress-simple-tag">
										<li><a href="">Music</a></li>
										<li><a href="">Technology</a></li>
										<li><a href="">UI/UX</a></li>
									</ul>
									<a href="#" className="d-block color-navy-blue fundpress-post-title">Brilliant After All, A New Album by Rebecca: Help poor people</a>
									<ul className="xs-list-with-content fundpress-list-item-content">
										<li>$15,280<span>Pledged</span></li>
										<li><span className="number-percentage-count">65%</span><span>Funded</span></li>
										<li>50<span>Days to go</span></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="fundpress-grid-item-content">
								<div className="fundpress-item-header xs-mb-30">
									<img src="" alt=""/>
									<div className="xs-item-header-content">
										<div className="xs-skill-bar-v3" data-percent="32%">
											<div className="xs-skill-track">
												<p>32%</p>
											</div>
										</div>
									</div>
								</div>
								<div className="fundpress-item-content">
									<ul className="xs-simple-tag fundpress-simple-tag">
										<li><a href="">Craft</a></li>
										<li><a href="">Handmade</a></li>
										<li><a href="">Photography</a></li>
									</ul>
									<a href="#" className="d-block color-navy-blue fundpress-post-title">Water Colors: Kim Keever's First-Ever Monograph</a>
									<ul className="xs-list-with-content fundpress-list-item-content">
										<li>$45,280<span>Pledged</span></li>
										<li><span className="number-percentage-count">32%</span><span>Funded</span></li>
										<li>45<span>Days to go</span></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="fundpress-grid-item-content">
								<div className="fundpress-item-header xs-mb-30">
									<img src="" alt=""/>
									<div className="xs-item-header-content">
										<div className="xs-skill-bar-v3" data-percent="80%">
											<div className="xs-skill-track">
												<p>80%</p>
											</div>
										</div>
									</div>
								</div>
								<div className="fundpress-item-content">
									<ul className="xs-simple-tag fundpress-simple-tag">
										<li><a href="">Lifestyle</a></li>
										<li><a href="">Photography</a></li>
										<li><a href="">Games</a></li>
									</ul>
									<a href="#" className="d-block color-navy-blue fundpress-post-title">Dress up Box— Make-Believe inform Clothing for Girls</a>
									<ul className="xs-list-with-content fundpress-list-item-content">
										<li>$76,280<span>Pledged</span></li>
										<li><span className="number-percentage-count">80%</span><span>Funded</span></li>
										<li>79<span>Days to go</span></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div role="tabpanel" className="tab-pane fade" id="fashion">
					<div className="row">
						<div className="col-lg-4">
							<div className="fundpress-grid-item-content">
								<div className="fundpress-item-header xs-mb-30">
									<img src="assets/images/product/products-1.jpg" alt=""/>
									<div className="xs-item-header-content">
										<div className="xs-skill-bar-v3" data-percent="65%">
											<div className="xs-skill-track">
												<p>65%</p>
											</div>
										</div>
									</div>
								</div>
								<div className="fundpress-item-content">
									<ul className="xs-simple-tag fundpress-simple-tag">
										<li><a href="">Music</a></li>
										<li><a href="">Technology</a></li>
										<li><a href="">UI/UX</a></li>
									</ul>
									<a href="#" className="d-block color-navy-blue fundpress-post-title">Brilliant After All, A New Album by Rebecca: Help poor people</a>
									<ul className="xs-list-with-content fundpress-list-item-content">
										<li>$15,280<span>Pledged</span></li>
										<li><span className="number-percentage-count">65%</span><span>Funded</span></li>
										<li>50<span>Days to go</span></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="fundpress-grid-item-content">
								<div className="fundpress-item-header xs-mb-30">
									<img src="assets/images/product/products-2.jpg" alt=""/>
									<div className="xs-item-header-content">
										<div className="xs-skill-bar-v3" data-percent="32%">
											<div className="xs-skill-track">
												<p>32%</p>
											</div>
										</div>
									</div>
								</div>
								<div className="fundpress-item-content">
									<ul className="xs-simple-tag fundpress-simple-tag">
										<li><a href="">Craft</a></li>
										<li><a href="">Handmade</a></li>
										<li><a href="">Photography</a></li>
									</ul>
									<a href="#" className="d-block color-navy-blue fundpress-post-title">Water Colors: Kim Keever's First-Ever Monograph</a>
									<ul className="xs-list-with-content fundpress-list-item-content">
										<li>$45,280<span>Pledged</span></li>
										<li><span className="number-percentage-count">32%</span><span>Funded</span></li>
										<li>45<span>Days to go</span></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="fundpress-grid-item-content">
								<div className="fundpress-item-header xs-mb-30">
									<img src="assets/images/product/products-3.jpg" alt=""/>
									<div className="xs-item-header-content">
										<div className="xs-skill-bar-v3" data-percent="80%">
											<div className="xs-skill-track">
												<p>80%</p>
											</div>
										</div>
									</div>
								</div>
								<div className="fundpress-item-content">
									<ul className="xs-simple-tag fundpress-simple-tag">
										<li><a href="">Lifestyle</a></li>
										<li><a href="">Photography</a></li>
										<li><a href="">Games</a></li>
									</ul>
									<a href="#" className="d-block color-navy-blue fundpress-post-title">Dress up Box— Make-Believe inform Clothing for Girls</a>
									<ul className="xs-list-with-content fundpress-list-item-content">
										<li>$76,280<span>Pledged</span></li>
										<li><span className="number-percentage-count">80%</span><span>Funded</span></li>
										<li>79<span>Days to go</span></li>
									</ul>
								</div>
							</div>
						</div>
					</div>	
				</div>
				<div role="tabpanel" className="tab-pane fade" id="food">
					<div className="row">
						<div className="col-lg-4">
							<div className="fundpress-grid-item-content">
								<div className="fundpress-item-header xs-mb-30">
									<img src="assets/images/product/products-1.jpg" alt=""/>
									<div className="xs-item-header-content">
										<div className="xs-skill-bar-v3" data-percent="65%">
											<div className="xs-skill-track">
												<p>65%</p>
											</div>
										</div>
									</div>
								</div>
								<div className="fundpress-item-content">
									<ul className="xs-simple-tag fundpress-simple-tag">
										<li><a href="">Music</a></li>
										<li><a href="">Technology</a></li>
										<li><a href="">UI/UX</a></li>
									</ul>
									<a href="#" className="d-block color-navy-blue fundpress-post-title">Brilliant After All, A New Album by Rebecca: Help poor people</a>
									<ul className="xs-list-with-content fundpress-list-item-content">
										<li>$15,280<span>Pledged</span></li>
										<li><span className="number-percentage-count">65%</span><span>Funded</span></li>
										<li>50<span>Days to go</span></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="fundpress-grid-item-content">
								<div className="fundpress-item-header xs-mb-30">
									<img src="assets/images/product/products-2.jpg" alt=""/>
									<div className="xs-item-header-content">
										<div className="xs-skill-bar-v3" data-percent="32%">
											<div className="xs-skill-track">
												<p>32%</p>
											</div>
										</div>
									</div>
								</div>
								<div className="fundpress-item-content">
									<ul className="xs-simple-tag fundpress-simple-tag">
										<li><a href="">Craft</a></li>
										<li><a href="">Handmade</a></li>
										<li><a href="">Photography</a></li>
									</ul>
									<a href="#" className="d-block color-navy-blue fundpress-post-title">Water Colors: Kim Keever's First-Ever Monograph</a>
									<ul className="xs-list-with-content fundpress-list-item-content">
										<li>$45,280<span>Pledged</span></li>
										<li><span className="number-percentage-count">32%</span><span>Funded</span></li>
										<li>45<span>Days to go</span></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="fundpress-grid-item-content">
								<div className="fundpress-item-header xs-mb-30">
									<img src="assets/images/product/products-3.jpg" alt=""/>
									<div className="xs-item-header-content">
										<div className="xs-skill-bar-v3" data-percent="80%">
											<div className="xs-skill-track">
												<p>80%</p>
											</div>
										</div>
									</div>
								</div>
								<div className="fundpress-item-content">
									<ul className="xs-simple-tag fundpress-simple-tag">
										<li><a href="">Lifestyle</a></li>
										<li><a href="">Photography</a></li>
										<li><a href="">Games</a></li>
									</ul>
									<a href="#" className="d-block color-navy-blue fundpress-post-title">Dress up Box— Make-Believe inform Clothing for Girls</a>
									<ul className="xs-list-with-content fundpress-list-item-content">
										<li>$76,280<span>Pledged</span></li>
										<li><span className="number-percentage-count">80%</span><span>Funded</span></li>
										<li>79<span>Days to go</span></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div role="tabpanel" className="tab-pane fade" id="games">
					<div className="row">
						<div className="col-lg-4">
							<div className="fundpress-grid-item-content">
								<div className="fundpress-item-header xs-mb-30">
									<img src="assets/images/product/products-1.jpg" alt=""/>
									<div className="xs-item-header-content">
										<div className="xs-skill-bar-v3" data-percent="65%">
											<div className="xs-skill-track">
												<p>65%</p>
											</div>
										</div>
									</div>
								</div>
								<div className="fundpress-item-content">
									<ul className="xs-simple-tag fundpress-simple-tag">
										<li><a href="">Music</a></li>
										<li><a href="">Technology</a></li>
										<li><a href="">UI/UX</a></li>
									</ul>
									<a href="#" className="d-block color-navy-blue fundpress-post-title">Brilliant After All, A New Album by Rebecca: Help poor people</a>
									<ul className="xs-list-with-content fundpress-list-item-content">
										<li>$15,280<span>Pledged</span></li>
										<li><span className="number-percentage-count">65%</span><span>Funded</span></li>
										<li>50<span>Days to go</span></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="fundpress-grid-item-content">
								<div className="fundpress-item-header xs-mb-30">
									<img src="assets/images/product/products-2.jpg" alt=""/>
									<div className="xs-item-header-content">
										<div className="xs-skill-bar-v3" data-percent="32%">
											<div className="xs-skill-track">
												<p>32%</p>
											</div>
										</div>
									</div>
								</div>
								<div className="fundpress-item-content">
									<ul className="xs-simple-tag fundpress-simple-tag">
										<li><a href="">Craft</a></li>
										<li><a href="">Handmade</a></li>
										<li><a href="">Photography</a></li>
									</ul>
									<a href="#" className="d-block color-navy-blue fundpress-post-title">Water Colors: Kim Keever's First-Ever Monograph</a>
									<ul className="xs-list-with-content fundpress-list-item-content">
										<li>$45,280<span>Pledged</span></li>
										<li><span className="number-percentage-count">32%</span><span>Funded</span></li>
										<li>45<span>Days to go</span></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="fundpress-grid-item-content">
								<div className="fundpress-item-header xs-mb-30">
									<img src="assets/images/product/products-3.jpg" alt=""/>
									<div className="xs-item-header-content">
										<div className="xs-skill-bar-v3" data-percent="80%">
											<div className="xs-skill-track">
												<p>80%</p>
											</div>
										</div>
									</div>
								</div>
								<div className="fundpress-item-content">
									<ul className="xs-simple-tag fundpress-simple-tag">
										<li><a href="">Lifestyle</a></li>
										<li><a href="">Photography</a></li>
										<li><a href="">Games</a></li>
									</ul>
									<a href="#" className="d-block color-navy-blue fundpress-post-title">Dress up Box— Make-Believe inform Clothing for Girls</a>
									<ul className="xs-list-with-content fundpress-list-item-content">
										<li>$76,280<span>Pledged</span></li>
										<li><span className="number-percentage-count">80%</span><span>Funded</span></li>
										<li>79<span>Days to go</span></li>
									</ul>
								</div>
							</div>
						</div>
					</div>	
				</div>
				<div role="tabpanel" className="tab-pane fade" id="film_and_video">
					<div className="row">
						<div className="col-lg-4">
							<div className="fundpress-grid-item-content">
								<div className="fundpress-item-header xs-mb-30">
									<img src="assets/images/product/products-1.jpg" alt=""/>
									<div className="xs-item-header-content">
										<div className="xs-skill-bar-v3" data-percent="65%">
											<div className="xs-skill-track">
												<p>65%</p>
											</div>
										</div>
									</div>
								</div>
								<div className="fundpress-item-content">
									<ul className="xs-simple-tag fundpress-simple-tag">
										<li><a href="">Music</a></li>
										<li><a href="">Technology</a></li>
										<li><a href="">UI/UX</a></li>
									</ul>
									<a href="#" className="d-block color-navy-blue fundpress-post-title">Brilliant After All, A New Album by Rebecca: Help poor people</a>
									<ul className="xs-list-with-content fundpress-list-item-content">
										<li>$15,280<span>Pledged</span></li>
										<li><span className="number-percentage-count">65%</span><span>Funded</span></li>
										<li>50<span>Days to go</span></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="fundpress-grid-item-content">
								<div className="fundpress-item-header xs-mb-30">
									<img src="assets/images/product/products-2.jpg" alt=""/>
									<div className="xs-item-header-content">
										<div className="xs-skill-bar-v3" data-percent="32%">
											<div className="xs-skill-track">
												<p>32%</p>
											</div>
										</div>
									</div>
								</div>
								<div className="fundpress-item-content">
									<ul className="xs-simple-tag fundpress-simple-tag">
										<li><a href="">Craft</a></li>
										<li><a href="">Handmade</a></li>
										<li><a href="">Photography</a></li>
									</ul>
									<a href="#" className="d-block color-navy-blue fundpress-post-title">Water Colors: Kim Keever's First-Ever Monograph</a>
									<ul className="xs-list-with-content fundpress-list-item-content">
										<li>$45,280<span>Pledged</span></li>
										<li><span className="number-percentage-count">32%</span><span>Funded</span></li>
										<li>45<span>Days to go</span></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="fundpress-grid-item-content">
								<div className="fundpress-item-header xs-mb-30">
									<img src="assets/images/product/products-3.jpg" alt=""/>
									<div className="xs-item-header-content">
										<div className="xs-skill-bar-v3" data-percent="80%">
											<div className="xs-skill-track">
												<p>80%</p>
											</div>
										</div>
									</div>
								</div>
								<div className="fundpress-item-content">
									<ul className="xs-simple-tag fundpress-simple-tag">
										<li><a href="">Lifestyle</a></li>
										<li><a href="">Photography</a></li>
										<li><a href="">Games</a></li>
									</ul>
									<a href="#" className="d-block color-navy-blue fundpress-post-title">Dress up Box— Make-Believe inform Clothing for Girls</a>
									<ul className="xs-list-with-content fundpress-list-item-content">
										<li>$76,280<span>Pledged</span></li>
										<li><span className="number-percentage-count">80%</span><span>Funded</span></li>
										<li>79<span>Days to go</span></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div role="tabpanel" className="tab-pane fade" id="journalism">
					<div className="row">
						<div className="col-lg-4">
							<div className="fundpress-grid-item-content">
								<div className="fundpress-item-header xs-mb-30">
									<img src="assets/images/product/products-1.jpg" alt=""/>
									<div className="xs-item-header-content">
										<div className="xs-skill-bar-v3" data-percent="65%">
											<div className="xs-skill-track">
												<p>65%</p>
											</div>
										</div>
									</div>
								</div>
								<div className="fundpress-item-content">
									<ul className="xs-simple-tag fundpress-simple-tag">
										<li><a href="">Music</a></li>
										<li><a href="">Technology</a></li>
										<li><a href="">UI/UX</a></li>
									</ul>
									<a href="#" className="d-block color-navy-blue fundpress-post-title">Brilliant After All, A New Album by Rebecca: Help poor people</a>
									<ul className="xs-list-with-content fundpress-list-item-content">
										<li>$15,280<span>Pledged</span></li>
										<li><span className="number-percentage-count">65%</span><span>Funded</span></li>
										<li>50<span>Days to go</span></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="fundpress-grid-item-content">
								<div className="fundpress-item-header xs-mb-30">
									<img src="assets/images/product/products-2.jpg" alt=""/>
									<div className="xs-item-header-content">
										<div className="xs-skill-bar-v3" data-percent="32%">
											<div className="xs-skill-track">
												<p>32%</p>
											</div>
										</div>
									</div>
								</div>
								<div className="fundpress-item-content">
									<ul className="xs-simple-tag fundpress-simple-tag">
										<li><a href="">Craft</a></li>
										<li><a href="">Handmade</a></li>
										<li><a href="">Photography</a></li>
									</ul>
									<a href="#" className="d-block color-navy-blue fundpress-post-title">Water Colors: Kim Keever's First-Ever Monograph</a>
									<ul className="xs-list-with-content fundpress-list-item-content">
										<li>$45,280<span>Pledged</span></li>
										<li><span className="number-percentage-count">32%</span><span>Funded</span></li>
										<li>45<span>Days to go</span></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="fundpress-grid-item-content">
								<div className="fundpress-item-header xs-mb-30">
									<img src="assets/images/product/products-3.jpg" alt=""/>
									<div className="xs-item-header-content">
										<div className="xs-skill-bar-v3" data-percent="80%">
											<div className="xs-skill-track">
												<p>80%</p>
											</div>
										</div>
									</div>
								</div>
								<div className="fundpress-item-content">
									<ul className="xs-simple-tag fundpress-simple-tag">
										<li><a href="">Lifestyle</a></li>
										<li><a href="">Photography</a></li>
										<li><a href="">Games</a></li>
									</ul>
									<a href="#" className="d-block color-navy-blue fundpress-post-title">Dress up Box— Make-Believe inform Clothing for Girls</a>
									<ul className="xs-list-with-content fundpress-list-item-content">
										<li>$76,280<span>Pledged</span></li>
										<li><span className="number-percentage-count">80%</span><span>Funded</span></li>
										<li>79<span>Days to go</span></li>
									</ul>
								</div>
							</div>
						</div>
					</div>	
				</div>
				<div role="tabpanel" className="tab-pane fade" id="music">
					<div className="row">
						<div className="col-lg-4">
							<div className="fundpress-grid-item-content">
								<div className="fundpress-item-header xs-mb-30">
									<img src="assets/images/product/products-1.jpg" alt=""/>
									<div className="xs-item-header-content">
										<div className="xs-skill-bar-v3" data-percent="65%">
											<div className="xs-skill-track">
												<p>65%</p>
											</div>
										</div>
									</div>
								</div>
								<div className="fundpress-item-content">
									<ul className="xs-simple-tag fundpress-simple-tag">
										<li><a href="">Music</a></li>
										<li><a href="">Technology</a></li>
										<li><a href="">UI/UX</a></li>
									</ul>
									<a href="#" className="d-block color-navy-blue fundpress-post-title">Brilliant After All, A New Album by Rebecca: Help poor people</a>
									<ul className="xs-list-with-content fundpress-list-item-content">
										<li>$15,280<span>Pledged</span></li>
										<li><span className="number-percentage-count">65%</span><span>Funded</span></li>
										<li>50<span>Days to go</span></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="fundpress-grid-item-content">
								<div className="fundpress-item-header xs-mb-30">
									<img src="assets/images/product/products-2.jpg" alt=""/>
									<div className="xs-item-header-content">
										<div className="xs-skill-bar-v3" data-percent="32%">
											<div className="xs-skill-track">
												<p>32%</p>
											</div>
										</div>
									</div>
								</div>
								<div className="fundpress-item-content">
									<ul className="xs-simple-tag fundpress-simple-tag">
										<li><a href="">Craft</a></li>
										<li><a href="">Handmade</a></li>
										<li><a href="">Photography</a></li>
									</ul>
									<a href="#" className="d-block color-navy-blue fundpress-post-title">Water Colors: Kim Keever's First-Ever Monograph</a>
									<ul className="xs-list-with-content fundpress-list-item-content">
										<li>$45,280<span>Pledged</span></li>
										<li><span className="number-percentage-count">32%</span><span>Funded</span></li>
										<li>45<span>Days to go</span></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="fundpress-grid-item-content">
								<div className="fundpress-item-header xs-mb-30">
									<img src="assets/images/product/products-3.jpg" alt=""/>
									<div className="xs-item-header-content">
										<div className="xs-skill-bar-v3" data-percent="80%">
											<div className="xs-skill-track">
												<p>80%</p>
											</div>
										</div>
									</div>
								</div>
								<div className="fundpress-item-content">
									<ul className="xs-simple-tag fundpress-simple-tag">
										<li><a href="">Lifestyle</a></li>
										<li><a href="">Photography</a></li>
										<li><a href="">Games</a></li>
									</ul>
									<a href="#" className="d-block color-navy-blue fundpress-post-title">Dress up Box— Make-Believe inform Clothing for Girls</a>
									<ul className="xs-list-with-content fundpress-list-item-content">
										<li>$76,280<span>Pledged</span></li>
										<li><span className="number-percentage-count">80%</span><span>Funded</span></li>
										<li>79<span>Days to go</span></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>    

    
    <section  className="xs-navy-blue-bg fundpress-square-service-section">
	<div className="container">
		<div className="fundpress-section-heading fundpress-heading-title fundpress-heading-title-v2 content-left">
			<h2 className="color-white">Asking for money is hard. FundPress makes it easier. </h2>
		</div>
		<div className="row">
			<div className="col-md-6 col-sm-12 col-lg-3">
				<div className="fundpress-icon-with-square-service">
					<img src="assets/images/icon-1.png" alt=""/>
					<a href="#" className="color-white">Free & Simple Setup. </a>
					<p>Start fundraising in minutes. No goal requirements, no deadlines.  </p>
				</div>
			</div>
			<div className="col-md-6 col-sm-12 col-lg-3">
				<div className="fundpress-icon-with-square-service">
					<img src="assets/images/icon-2.png" alt=""/>
					<a href="#" className="color-white">Most Money Raised.</a>
					<p>Join the millions who have raised more than $2 billion on FundPress.</p>
				</div>
			</div>
			<div className="col-md-6 col-sm-12 col-lg-3">
				<div className="fundpress-icon-with-square-service">
					<img src="assets/images/icon-3.png" alt=""/>
					<a href="#" className="color-white">Expert Advice, 24/7.</a>
					<p>Our campaign coaches will answer your questions in 5 minutes, day or night.</p>
				</div>
			</div>
			<div className="col-md-6 col-sm-12 col-lg-3">
				<div className="fundpress-icon-with-square-service">
					<img src="assets/images/icon-4.png" alt=""/>
					<a href="#" className="color-white">Safety. Guaranteed.</a>
					<p>The GoFundMe Guarantee protects your donations and supporters. </p>
				</div>
			</div>
		</div>
	</div>
	<div className="xs-shape-background">
		<div className="xs-waves">
			<div className="xs-wave xs-wave_1"></div>
			<div className="xs-wave xs-wave_2"></div>
			<div className="xs-wave xs-wave_3"></div>
			<div className="xs-wave xs-wave_4"></div>
			<div className="xs-wave xs-wave_5"></div>
		</div>
	</div>
</section>   

   
    <section id="popular-campaigns" className="xs-gray-bg waypoint-tigger xs-section-padding">
	<div className="container">
		<div className="xs-section-heading row xs-margin-0">
			<div className="fundpress-heading-title xs-padding-0 col-xl-9 col-md-9">
				<h2 className="color-navy-blue">Popular Campaigns</h2>
				<span className="xs-separetor dashed-separetor fundpress-separetor"></span>
				<p>FundPress has built a platform focused on aiding entrepreneurs, startups, and companies raise capital from anyone.</p>
			</div>
			<div className="xs-btn-wraper xs-padding-0 col-xl-3 col-md-3 d-flex-center-end">
				<a href="#" className="xs-btn round-btn navy-blue-btn">all Campaigns</a>
			</div>
		</div>
		<div className="row">
			<div className="col-lg-4">
				<div className="xs-box-shadow fundpress-popular-item xs-bg-white">
					<div className="fundpress-item-header">
						<img src="assets/images/campaigns/campaigns-1.jpg" alt=""/>
						<div className="xs-item-header-content">
							<div className="xs-skill-bar">
								<div className="xs-skill-track">
									<p><span className="number-percentage-count number-percentage" data-value="90" data-animation-duration="3500">0</span>%</p>
								</div>
							</div>
						</div>
					</div>
					<div className="fundpress-item-content xs-content-padding bg-color-white">
						<ul className="xs-simple-tag fundpress-simple-tag">
							<li><a href="">Technology</a></li>
						</ul>
						<a href="#" className="d-block color-navy-blue fundpress-post-title">Splash Drone 3 a Fully Waterproof Drone that floats</a>
						<ul className="xs-list-with-content fundpress-list-item-content">
							<li>$67,000<span>Pledged</span></li>
							<li><span className="number-percentage-count number-percentage" data-value="90" data-animation-duration="3500">0</span>% <span>Funded</span></li>
							<li>3<span>Days to go</span></li>
						</ul>
						<span className="xs-separetor border-separetor xs-separetor-v2 fundpress-separetor"></span>
						<div className="row xs-margin-0">
							<div className="full-round fundpress-avatar">
								<img src="assets/images/avatar/avatar_1.jpg" alt=""/>
							</div>
							<div className="xs-avatar-title">
								<a href="#"><span>By</span>Ema Watson</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-lg-4">
				<div className="xs-box-shadow fundpress-popular-item xs-bg-white">
					<div className="fundpress-item-header">
						<img src="assets/images/campaigns/campaigns-2.jpg" alt=""/>
						<div className="xs-item-header-content">
							<div className="xs-skill-bar">
								<div className="xs-skill-track">
									<p><span className="number-percentage-count number-percentage" data-value="59" data-animation-duration="3500">0</span>%</p>
								</div>
							</div>
						</div>
					</div>
					<div className="fundpress-item-content xs-content-padding bg-color-white">
						<ul className="xs-simple-tag fundpress-simple-tag">
							<li><a href="">Charity</a></li>
						</ul>
						<a href="#" className="d-block color-navy-blue fundpress-post-title">The Read Read: Braille Literacy Tool for the Blind</a>
						<ul className="xs-list-with-content fundpress-list-item-content">
							<li>$33,600<span>Pledged</span></li>
							<li><span className="number-percentage-count number-percentage" data-value="59" data-animation-duration="3500">0</span>% <span>Funded</span></li>
							<li>10<span>Days to go</span></li>
						</ul>
						<span className="xs-separetor border-separetor xs-separetor-v2 fundpress-separetor"></span>
						<div className="row xs-margin-0">
							<div className="full-round fundpress-avatar">
								<img src="assets/images/avatar/avatar_2.jpg" alt=""/>
							</div>
							<div className="xs-avatar-title">
								<a href="#"><span>By</span>Kene Williamson</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-lg-4">
				<div className="xs-box-shadow fundpress-popular-item xs-bg-white">
					<div className="fundpress-item-header">
						<img src="assets/images/campaigns/campaigns-3.jpg" alt=""/>
						<div className="xs-item-header-content">
							<div className="xs-skill-bar">
								<div className="xs-skill-track">
									<p><span className="number-percentage-count number-percentage" data-value="35" data-animation-duration="3500">0</span>%</p>
								</div>
							</div>
						</div>
					</div>
					<div className="fundpress-item-content xs-content-padding bg-color-white">
						<ul className="xs-simple-tag fundpress-simple-tag">
							<li><a href="">Funding</a></li>
							<li><a href="">Charity</a></li>
						</ul>
						<a href="#" className="d-block color-navy-blue fundpress-post-title">BuildOne: $99 3D Printer w/ WiFi and Auto Bed Leveling!</a>
						<ul className="xs-list-with-content fundpress-list-item-content">
							<li>$12,760<span>Pledged</span></li>
							<li><span className="number-percentage-count number-percentage" data-value="35" data-animation-duration="3500">0</span>% <span>Funded</span></li>
							<li>66<span>Days to go</span></li>
						</ul>
						<span className="xs-separetor border-separetor xs-separetor-v2 fundpress-separetor"></span>
						<div className="row xs-margin-0">
							<div className="full-round fundpress-avatar">
								<img src="assets/images/avatar/avatar_3.jpg" alt=""/>
							</div>
							<div className="xs-avatar-title">
								<a href="#"><span>By</span>Leo Baddabes</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-lg-4">
				<div className="xs-box-shadow fundpress-popular-item xs-bg-white">
					<div className="fundpress-item-header">
						<img src="assets/images/campaigns/campaigns-4.jpg" alt=""/>
						<div className="xs-item-header-content">
							<div className="xs-skill-bar">
								<div className="xs-skill-track">
									<p><span className="number-percentage-count number-percentage" data-value="85" data-animation-duration="3500">0</span>%</p>
								</div>
							</div>
						</div>
					</div>
					<div className="fundpress-item-content xs-content-padding bg-color-white">
						<ul className="xs-simple-tag fundpress-simple-tag">
							<li><a href="">Games</a></li>
							<li><a href="">Technology</a></li>
						</ul>
						<a href="#" className="d-block color-navy-blue fundpress-post-title">DACBerry PRO – Professional Soundcard for Raspberry Pi</a>
						<ul className="xs-list-with-content fundpress-list-item-content">
							<li>$99,980<span>Pledged</span></li>
							<li><span className="number-percentage-count number-percentage" data-value="85" data-animation-duration="3500">0</span>% <span>Funded</span></li>
							<li>2<span>Days to go</span></li>
						</ul>
						<span className="xs-separetor border-separetor xs-separetor-v2 fundpress-separetor"></span>
						<div className="row xs-margin-0">
							<div className="full-round fundpress-avatar">
								<img src="assets/images/avatar/avatar_4.jpg" alt=""/>
							</div>
							<div className="xs-avatar-title">
								<a href="#"><span>By</span>Jhung Li</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-lg-4">
				<div className="xs-box-shadow fundpress-popular-item xs-bg-white">
					<div className="fundpress-item-header">
						<img src="assets/images/campaigns/campaigns-5.jpg" alt=""/>
						<div className="xs-item-header-content">
							<div className="xs-skill-bar">
								<div className="xs-skill-track">
									<p><span className="number-percentage-count number-percentage" data-value="74" data-animation-duration="3500">0</span>%</p>
								</div>
							</div>
						</div>
					</div>
					<div className="fundpress-item-content xs-content-padding bg-color-white">
						<ul className="xs-simple-tag fundpress-simple-tag">
							<li><a href="">Charity</a></li>
						</ul>
						<a href="#" className="d-block color-navy-blue fundpress-post-title">BIKI: First Bionic Wireless Under water Fish Drone</a>
						<ul className="xs-list-with-content fundpress-list-item-content">
							<li>$40,000<span>Pledged</span></li>
							<li><span className="number-percentage-count number-percentage" data-value="74" data-animation-duration="3500">0</span>% <span>Funded</span></li>
							<li>70<span>Days to go</span></li>
						</ul>
						<span className="xs-separetor border-separetor xs-separetor-v2 fundpress-separetor"></span>
						<div className="row xs-margin-0">
							<div className="full-round fundpress-avatar">
								<img src="assets/images/avatar/avatar_5.jpg" alt=""/>
							</div>
							<div className="xs-avatar-title">
								<a href="#"><span>By</span>Chirstina Perry</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-lg-4">
				<div className="xs-box-shadow fundpress-popular-item xs-bg-white">
					<div className="fundpress-item-header">
						<img src="assets/images/campaigns/campaigns-6.jpg" alt=""/>
						<div className="xs-item-header-content">
							<div className="xs-skill-bar">
								<div className="xs-skill-track">
									<p><span className="number-percentage-count number-percentage" data-value="90" data-animation-duration="3500">0</span>%</p>
								</div>
							</div>
						</div>
					</div>
					<div className="fundpress-item-content xs-content-padding bg-color-white">
						<ul className="xs-simple-tag fundpress-simple-tag">
							<li><a href="">Charity</a></li>
						</ul>
						<a href="#" className="d-block color-navy-blue fundpress-post-title">Brilliant After All, A New Album by Rebecca: Help poor people</a>
						<ul className="xs-list-with-content fundpress-list-item-content">
							<li>$98,900<span>Pledged</span></li>
							<li><span className="number-percentage-count number-percentage" data-value="85" data-animation-duration="3500">0</span>% <span>Funded</span></li>
							<li>2<span>Days to go</span></li>
						</ul>
						<span className="xs-separetor border-separetor xs-separetor-v2 fundpress-separetor"></span>
						<div className="row xs-margin-0">
							<div className="full-round fundpress-avatar">
								<img src="assets/images/avatar/avatar_6.jpg" alt=""/>
							</div>
							<div className="xs-avatar-title">
								<a href="#"><span>By</span>Prekina William</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>    
    
    <section className="xs-full-width-section fundpress-full-width-section">
	<div className="container-fluid">
		<div className="row">
			<div className="col-md-12 col-lg-6 xs-padding-0">
				<div className="fundpress-full-width-wraper-v2" style={{backgroundImage: url(assets/images/back_other_bg.jpg)}}>
					<div className="fundpress-product-hover-content-v2">
						<div className="fundpress-sub-title">
							<h2>Back Others</h2>
						</div>
						<div className="fundpress-product-text-content">
							<p>We recently we discovered a major problem –  organizing accessories for these Apple devices while on the road or in our workspace was a major.</p>
						</div>
						<div className="xs-btn-wrapre">
							<a href="#" className="xs-btn btn xs-box-shadow btn-primary btn-lg round-btn">create a project</a>
						</div>
					</div>
					<div className="xs-solid-overlay xs-bg-black"></div>
				</div>
			</div>
			<div className="col-md-12 col-lg-6 xs-padding-0">
				<div className="fundpress-full-width-wraper-v2" style={{backgroundImage: url(assets/images/get_funded_bg.jpg)}}>
					<div className="fundpress-product-hover-content-v2">
						<div className="fundpress-sub-title">
							<h2>Get Funded</h2>
						</div>
						<div className="fundpress-product-text-content">
							<p>We recently we discovered a major problem –  organizing accessories for these Apple devices while on the road or in our workspace was a major.</p>
						</div>
						<div className="xs-btn-wrapre">
							<a href="#" className="xs-btn xs-box-shadow btn btn-primary btn-lg round-btn">create a project</a>
						</div>
					</div>
					<div className="xs-solid-overlay xs-bg-black"></div>
				</div>
			</div>
		</div>
	</div>
</section>   

    
    <section className="xs-bg fundpress-event-section xs-section-padding" style={{backgroundImage: url(assets/images/icons-background.png)}}>
	<div className="container">
		<div className="xs-section-heading row xs-margin-0">
			<div className="fundpress-heading-title xs-padding-0 col-md-9 col-xl-9">
				<h2 className="color-navy-blue">You can join in Special Events</h2>
				<span className="xs-separetor dashed-separetor fundpress-separetor"></span>
				<p>This equity FundPress platform allows businesses to sell shares in their company to accredited investors.</p>
			</div>
			<div className="xs-btn-wraper xs-padding-0 col-md-3 col-xl-3 d-flex-center-end">
				<a href="events.html" className="xs-btn round-btn navy-blue-btn">Events</a>
			</div>
		</div>
		<div className="fundpress-event-wraper">
			<div className="fundpress-single-event-wraper row">
				<div className="col-md-3">
					<div className="fundpress-event-image">
						<img src="assets/images/event/event-1.jpg" alt=""/>
					</div>
				</div>
				<div className="col-md-6 fundpress-event-details">
					<h3 className="color-white xs-post-title fundpress-post-title">Using HRV and CorSense to Otimize Training.</h3>
					<p>In a time of overwhelming emotions, sadness, and pain, the last thing the  families need to be worrying obligations associated with this tragic.</p>
					<div className="countdown-container xs-countdown-timer" data-countdown="2019/01/01"></div>
				</div>
				<div className="col-md-3">
					<div className="fundpress-btn-wraper">
						<a href="#" className="xs-btn round-btn green-btn">subscribe</a>
					</div>
				</div>
			</div>
			<div className="fundpress-single-event-wraper row">
				<div className="col-md-3">
					<div className="fundpress-event-image">
						<img src="assets/images/event/event-2.jpg" alt=""/>
					</div>
				</div>
				<div className="col-md-6 fundpress-event-details">
					<h3 className="color-white xs-post-title fundpress-post-title">Otimize Training & Recovery Using HRV</h3>
					<p>In a time of overwhelming emotions, sadness, and pain, the last thing the  families need to be worrying obligations associated with this tragic.</p>
					<div className="countdown-container xs-countdown-timer" data-countdown="2020/01/01"></div>
				</div>
				<div className="col-md-3">
					<div className="fundpress-btn-wraper">
						<a href="#" className="xs-btn round-btn green-btn">subscribe</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>    

    
    <section className="xs-gray-bg fundpress-journal-section xs-section-padding">
	<div className="container">
		<div className="xs-section-heading row xs-margin-0">
			<div className="fundpress-heading-title xs-padding-0 col-md-9 col-xl-9">
				<h2 className="color-navy-blue">From the Journal</h2>
				<span className="xs-separetor dashed-separetor fundpress-separetor"></span>
				<p>It allows you to gather monthly subscriptions from fans to help fund your creative projects. They also encourage their users to offer rewards to fans as a way to repay them for their support.</p>
			</div>
			<div className="xs-btn-wraper xs-padding-0 col-xl-3 col-md-3 d-flex-center-end">
				<a href="news-feed.html" className="xs-btn round-btn navy-blue-btn">Blog</a>
			</div>
		</div>
		<div className="row">
			<div className="col-md-6 col-sm-12 col-lg-4">
				<div className="fundpress-grid-item-content xs-box-shadow fundpress-from-journal">
					<div className="xs-item-header fundpress-item-header entry-thumbnail">
						<img src="assets/images/journal/journal-1.jpg" alt=""/>
						<div className="xs-item-header-content">
							<a href="#" className="full-round icon-identify-btn green-btn"><i className="fa fa-play"></i></a>
						</div>
					</div>
					<div className="fundpress-item-content xs-content-padding bg-color-white">
						<div className="entry-header xs-mb-30">
							<div className="post-author">
								<ul className="xs-simple-tag xs-simple-tag-v2 fundpress-simple-tag author-links">
									<li><span>By</span><a href="#" rel="author">Rose</a></li>
								</ul>
							</div>
							<h4 className="entry-title">
								<a href="#" className="xs-mb-0 xs-post-title color-navy-blue fundpress-post-title">Professional Soundcard</a>
							</h4>
							<p>Founded by berlin’s clubcommissioner alongside amsterdam’s with nightori mayor, the creative footprint.</p>
						</div>

						<span className="xs-separetor border-separetor xs-separetor-v2 fundpress-separetor xs-mb-20"></span>

						<div className="entry-content xs-spilit-container xs-footer-content">
							<div className="xs-col-6 text-left">
								<span className="date">
									<a href="" title="" rel="bookmark">
										<i className="fa fa-calendar" aria-hidden="true"></i>
										<span className="entry-date xs-entry-date">March 15, 2018</span>
									</a>
								</span>
							</div>
							<div className="xs-col-6 text-right">
								<span className="categories-links">
									<a href="#" className="xs-blog-meta-tag green-bg bold color-white xs-border-radius" rel="category tag">Project</a></span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-6 col-sm-12 col-lg-4">
				<div className="fundpress-grid-item-content xs-box-shadow fundpress-from-journal">
					<div className="xs-item-header fundpress-item-header entry-thumbnail">
						<img src="assets/images/journal/journal-2.jpg" alt=""/>
						<div className="xs-item-header-content">
							<a href="#" className="full-round icon-identify-btn green-btn"><i className="fa fa-image"></i></a>
						</div>
					</div>
					<div className="fundpress-item-content xs-content-padding bg-color-white">
						<div className="entry-header xs-mb-30">
							<div className="post-author">
								<ul className="xs-simple-tag xs-simple-tag-v2 fundpress-simple-tag author-links">
									<li><span>By</span><a href="#" rel="author">Rose</a></li>
								</ul>
							</div>
							<h4 className="entry-title">
								<a href="#" className="xs-mb-0 xs-post-title color-navy-blue fundpress-post-title">A New Album by Rebecca</a>
							</h4>
							<p>Founded by berlin’s clubcommissioner alongside amsterdam’s with nightori mayor, the creative footprint.</p>
						</div>

						<span className="xs-separetor border-separetor xs-separetor-v2 fundpress-separetor xs-mb-20"></span>

						<div className="entry-content xs-spilit-container xs-footer-content">
							<div className="xs-col-6 text-left">
								<span className="date">
									<a href="" title="" rel="bookmark">
										<i className="fa fa-calendar" aria-hidden="true"></i>
										<span className="entry-date xs-entry-date">March 15, 2018</span>
									</a>
								</span>
							</div>
							<div className="xs-col-6 text-right">
								<span className="categories-links">
									<a href="#" className="xs-blog-meta-tag green-bg bold color-white xs-border-radius" rel="category tag">Adoption</a></span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-6 col-sm-12 col-lg-4">
				<div className="fundpress-grid-item-content xs-box-shadow fundpress-from-journal">
					<div className="xs-item-header fundpress-item-header entry-thumbnail">
						<img src="assets/images/journal/journal-3.jpg" alt=""/>
						<div className="xs-item-header-content">
							<a href="#" className="full-round icon-identify-btn green-btn"><i className="fa fa-video-camera"></i></a>
						</div>
					</div>
					<div className="fundpress-item-content xs-content-padding bg-color-white">
						<div className="entry-header xs-mb-30">
							<div className="post-author">
								<ul className="xs-simple-tag xs-simple-tag-v2 fundpress-simple-tag author-links">
									<li><span>By</span><a href="#" rel="author">Rose</a></li>
								</ul>
							</div>
							<h4 className="entry-title">
								<a href="#" className="xs-mb-0 xs-post-title color-navy-blue fundpress-post-title">First Bionic Wireless</a>
							</h4>
							<p>Founded by berlin’s clubcommissioner alongside amsterdam’s with nightori mayor, the creative footprint.</p>
						</div>

						<span className="xs-separetor border-separetor xs-separetor-v2 fundpress-separetor xs-mb-20"></span>

						<div className="entry-content xs-spilit-container xs-footer-content">
							<div className="xs-col-6 text-left">
								<span className="date">
									<a href="" title="" rel="bookmark">
										<i className="fa fa-calendar" aria-hidden="true"></i>
										<span className="entry-date xs-entry-date">March 15, 2018</span>
									</a>
								</span>
							</div>
							<div className="xs-col-6 text-right">
								<span className="categories-links">
									<a href="#" className="xs-blog-meta-tag green-bg bold color-white xs-border-radius" rel="category tag">Film</a></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>    

   

    <section className="xs-bg xs-section-padding fundpress-sponsor-section" style={{backgroundImage: url(assets/images/background/sponsor_section_bg.jpg)}}>
	<div className="xs-solid-overlay xs-bg-white"></div>
	<div className="container fundpress-partners-wraper">
		<div className="fundpress-heading-title">
			<h2 className="color-navy-blue xs-mb-0">Trusted by the biggest nonprofits, companies in the world.</h2>
		</div>
		<div className="content-center">
			<ul className="fundpress-partners">
				<li><a href="#" className="full-round fundpress-single-partner"><img src="assets/images/partner/partner-1.png" alt=""/></a></li>
				<li><a href="#" className="full-round fundpress-single-partner"><img src="assets/images/partner/partner-2.png" alt=""/></a></li>
				<li><a href="#" className="full-round fundpress-single-partner"><img src="assets/images/partner/partner-3.png" alt=""/></a></li>
				<li><a href="#" className="full-round fundpress-single-partner"><img src="assets/images/partner/partner-4.png" alt=""/></a></li>
			</ul>
		</div>
		<div className="content-center">
			<ul className="fundpress-partners">
				<li><a href="#" className="full-round fundpress-single-partner"><img src="assets/images/partner/partner-5.png" alt=""/></a></li>
				<li><a href="#" className="full-round fundpress-single-partner"><img src="assets/images/partner/partner-6.png" alt=""/></a></li>
				<li><a href="#" className="full-round fundpress-single-partner"><img src="assets/images/partner/partner-7.png" alt=""/></a></li>
				<li><a href="#" className="full-round fundpress-single-partner"><img src="assets/images/partner/partner-8.png" alt=""/></a></li>
				<li><a href="#" className="full-round fundpress-single-partner"><img src="assets/images/partner/partner-9.png" alt=""/></a></li>
			</ul>
		</div>
	</div>
</section>    
</main>

</div>
        )
    }
}
