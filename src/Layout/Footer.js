import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="xs-footer-section xs-fixed-footer fundpress-footer-section">
			<div className="fundpress-footer-top-layer">
				<div className="container">
					<div className="row">
						<div className="col-md-5">
							<div className="fundpress-single-footer">
								<div className="xs-footer-logo">
									<a href="index.html">
										<img src="assets/images/footer_logo.png" alt=""/>
									</a>
								</div>
								<div className="fundpress-footer-content">
									<p>FundPress online and raise money for charity and causes you’re passionate about. FundPress is an innovative, cost-effective online fundraising website for personal fundraising pages.</p>
								</div>
								<ul className="xs-social-list fundpress-social-list">
									<li><a href="#" className="color-facebook full-round"><i className="fa fa-facebook"></i></a></li>
									<li><a href="#" className="color-twitter full-round"><i className="fa fa-twitter"></i></a></li>
									<li><a href="#" className="color-dribbble full-round"><i className="fa fa-dribbble"></i></a></li>
									<li><a href="#" className="color-pinterest full-round"><i className="fa fa-pinterest"></i></a></li>
									<li><a href="#" className="color-instagram full-round"><i className="fa fa-instagram"></i></a></li>
								</ul>
							</div>
						</div>
						<div className="col-md-3">
							<div className="fundpress-single-footer">
								<div className="xs-footer-title">
									<h4 className="color-white">Explore Campaigns</h4>
								</div>
								<nav className="xs-footer-menu">
									<ul>
										<li><a href="index.html">Home</a></li>
										<li><a href="#">Gadgets</a></li>
										<li><a href="#">Monuments</a></li>
										<li><a href="#">Travels</a></li>
										<li><a href="#">Accessoriers</a></li>
										<li><a href="#">Books</a></li>
										<li><a href="#">Community Programs</a></li>
										<li><a href="#">Design</a></li>
									</ul>
								</nav>
							</div>
						</div>
						<div className="col-md-2">
							<div className="fundpress-single-footer">
								<div className="xs-footer-title">
									<h4 className="color-white">About</h4>
								</div>
								<nav className="xs-footer-menu">
									<ul>
										<li><a href="about.html">About Us</a></li>
										<li><a href="#">How It Works</a></li>
										<li><a href="#">Careers</a></li>
										<li><a href="#">Press</a></li>
										<li><a href="news-feed.html">Blog</a></li>
										<li><a href="contact.html">Contact</a></li>
									</ul>
								</nav>
							</div>
						</div>
						<div className="col-md-2">
							<div className="fundpress-single-footer">
								<div className="xs-footer-title">
									<h4 className="color-white">Help</h4>
								</div>
								<nav className="xs-footer-menu">
									<ul>
										<li><a href="faq.html">FAQ</a></li>
										<li><a href="#">Our Rules</a></li>
										<li><a href="#">Trust & Safety</a></li>
										<li><a href="#">Support</a></li>
										<li><a href="#">Terms of Use</a></li>
										<li><a href="#">Privacy Policy</a></li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="xs-footer-bottom-layer fundpress-footer-bottom">
				<div className="container">
					<div className="xs-footer-bottom-wraper">
						<div className="xs-copyright-text fundpress-copyright-text">
							<p>Built with <i className="fa fa-heart"></i> by <a href="https://xpeedstudio.com/">XpeedStudio</a></p>
						</div>
						<div className="xs-back-to-top-wraper">
							<a href="#" className="xs-back-to-top full-round green-btn xs-back-to-top-btn show-last-pos">
								<i className="fa fa-angle-up"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
        );
    }
}

export default Footer;