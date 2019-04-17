exports.seed = function(knex, Promise) {
	// Inserts seed entries
	return knex('companies').insert([
		{
			id: 1,
			userId: 1,
			companyName: 'Microsoft',
			companyPicture:
				'https://www.zdnet.de/wp-content/uploads/2017/02/microsoft-logo.png',
			companyDescription:
				'At Microsoft, our mission is to empower every person and every organization on the planet to achieve more. Our mission is grounded in both the world in which we live and the future we strive to create. Today, we live in a mobile-first, cloud-first world, and the transformation we are driving across our businesses is designed to enable Microsoft and our customers to thrive in this world.',
			country: 'United States',
			state: 'Washington',
			city: 'Redmond',
			zipcode: 98052
		},
		{
			id: 2,
			userId: 2,
			companyName: 'Apple',
			companyPicture:
				'https://1000logos.net/wp-content/uploads/2016/10/apple-emblem.jpg',
			companyDescription:
				'We’re a diverse collection of thinkers and doers, continually reimagining what’s possible to help us all do what we love in new ways. The people who work here have reinvented entire industries with the Mac, iPhone, iPad, and Apple Watch, as well as with services, including iTunes, the App Store, Apple Music, and Apple Pay. And the same innovation that goes into our products also applies to our practices — strengthening our commitment to leave the world better than we found it.',
			country: 'United States',
			state: 'Cupertino',
			city: 'Calfornia',
			zipcode: 95014
		},
		{
			id: 3,
			userId: 3,
			companyName: 'Github',
			companyPicture:
				'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
			companyDescription:
				'GitHub is the best place to share code with friends, co-workers, classmates, and complete strangers. Over 31 million people use GitHub to build amazing things together across 97+ million repositories. With all the collaborative features of GitHub, it has never been easier for individuals and teams to write faster, better code.',
			country: 'United States',
			state: 'Calfornia',
			city: 'San Francisco',
			zipcode: 94107
		},
		{
			id: 4,
			userId: 4,
			companyName: 'Nexient',
			companyPicture:
				'https://www.si.umich.edu/sites/default/files/styles/landing_main/public/Nexient%20logo.jpg?itok=sVc_kx8a',
			companyDescription:
				'Nexient is America’s largest 100% US-based Agile software services firm.  As featured in The New York Times, Nexient’s teams of developers, designers and strategists use a product-minded approach to accelerate clients’ revenue, loyalty and growth. A Gartner Cool Vendor and HFS Hot Vendor, Nexient is the only US tech firm among IAOP’s Top 100 Outsourcers in the World for the last three years running.',
			country: 'United States',
			state: 'Michigan',
			city: 'Ann Arbor',
			zipcode: 48108
		},
		{
			id: 5,
			userId: 5,
			companyName: 'Netlfix',
			companyPicture:
				'https://blogs.commons.georgetown.edu/cctp-748-fall2014/files/2014/04/netflix-logo.jpg',
			companyDescription:
				'Netflix is the worlds leading internet entertainment service with 139 million paid memberships in over 190 countries enjoying TV series, documentaries and feature films across a wide variety of genres and languages. Members can watch as much as they want, anytime, anywhere, on any internet-connected screen. Members can play, pause and resume watching, all without commercials or commitments.',
			country: 'United States',
			state: 'Calfornia',
			city: 'Los Gatos',
			zipcode: 95032
		},
		{
			id: 6,
			userId: 6,
			companyName: 'Twitter',
			companyPicture:
				'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Twitter_bird_logo_2012.svg/1259px-Twitter_bird_logo_2012.svg.png',
			companyDescription:
				'Twitter is what’s happening in the world and what people are talking about right now. From breaking news and entertainment to sports, politics, and everyday interests, see every side of the story. Join the open conversation. Watch live streaming events. Available in more than 40 languages around the world, the service can be accessed via twitter.com, an array of mobile devices, and SMS.',
			country: 'United States',
			state: 'San Francisco',
			city: 'Calfornia',
			zipcode: 94103
		},
		{
			id: 7,
			userId: 7,
			companyName: 'Spotify',
			companyPicture:
				'https://musically.com/wp-content/uploads/2013/05/spotify-logo-primary-vertical-light-background-rgb.jpg',
			companyDescription:
				'Our mission is to unlock the potential of human creativity—by giving a million creative artists the opportunity to live off their art and billions of fans the opportunity to enjoy and be inspired by it. Spotify transformed music listening forever when it launched in Sweden in 2008. Discover, manage and share over 40m songs for free, or upgrade to Spotify Premium to access exclusive features including offline mode, improved sound quality, Spotify Connect and ad-free listening. Today, Spotify is the world’s most popular music streaming service with a community of 207m active users, including 96m subscribers across 78 markets. We are the largest driver of revenue to the music business today.',
			country: 'United States',
			state: 'New York',
			city: 'New York',
			zipcode: 10007
		},
		{
			id: 8,
			userId: 8,
			companyName: 'Facebook',
			companyPicture:
				'https://droid-life.com/wp-content/uploads/2016/08/facebook-logo.jpg',
			companyDescription:
				'Founded in 2004, Facebook’s mission is to give people the power to build community and bring the world closer together. People use Facebook to stay connected with friends and family, to discover what’s going on in the world, and to share and express what matters to them. Facebook is defined by our unique culture – one that rewards impact. We encourage people to be bold and solve the problems they care most about. We work in small teams and move fast to develop new products, constantly iterating. The phrase “this journey is 1% finished,” reminds us that we’ve only begun to fulfill our mission to bring the world closer together. ',
			country: 'United States',
			state: 'California',
			city: 'Menlo Park',
			zipcode: 94025
		},
		{
			id: 9,
			userId: 9,
			companyName: 'Reddit',
			companyPicture:
				'http://pluspng.com/img-png/reddit-png-objectcan-someone-give-me-a-round-cutout-of-the-reddit-logo-here-with-transparent-background-i-tried-all-i-can-buy-there-s-always-some-kind-of-black-720.png',
			companyDescription:
				'Founded by Steve Huffman and Alexis Ohanian in 2005, Reddit is an online community where users submit, vote, and comment on content, news, and discussions. Nicknamed "the front page of the internet,"​ Reddit is one of the top ten sites in the United States (source: Alexa), with hundreds of millions of users each month on desktop, mobile web, and our official Android/iOS apps.',
			country: 'United States',
			state: 'California',
			city: 'San Francisco',
			zipcode: 94107
		},
		{
			id: 10,
			userId: 10,
			companyName: 'Google',
			companyPicture:
				'https://blog.hubspot.com/hubfs/image8-2.jpg',
			companyDescription:
				'Google’s mission is to organize the world‘s information and make it universally accessible and useful. Since our founding in 1998, Google has grown by leaps and bounds. From offering search in a single language we now offer dozens of products and services—including various forms of advertising and web applications for all kinds of tasks—in scores of languages. And starting from two computer science students in a university dorm room, we now have thousands of employees and offices around the world. A lot has changed since the first Google search engine appeared. But some things haven’t changed: our dedication to our users and our belief in the possibilities of the Internet itself.',
			country: 'United States',
			state: 'California',
			city: 'Mountain View',
			zipcode: 94043
		}
	]);
};
