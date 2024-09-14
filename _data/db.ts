const id = 1000;

export const data = {
    projects: [
        {
            id: id,
            slug: "wildforkfoods",
            title: "Wild Fork Launch",
            company: "Wild Fork",
            year: 2024,
            description: "Launch React upgrade of Wild Fork website",
            didactic: `Launched a React and next.js eCommerce site. The backend is headless
            CommerceTools with Adyen as the payment provider.

            I was the React and next.js lead for a large team of software engineers. We 
            extensively used modern React with hooks, redux and custom Java APIs.

            The backend was hosted in Azure with an advanced CI/CD system that enabled quick
            and reliable deploys.`,
            image: "wild_fork_logo.png",
            image_plp: "wildfork_unpacked.jpeg",
            carousel_image_1: "wf_website_1.jpg",
            carousel_image_2: "wildfork_products.webp",
            carousel_image_3: "wildfork_cart.jpg",
            carousel: [
                "wildfork_unpacked.jpeg",
                "wf_website_1.jpg",
                "wildfork_products.webp",
                "wildfork_cart.jpg",
            ],
            live: true
        },
        {
            id: id - 10,
            slug: "mvphealthcare",
            title: "MVP Healthcare Launch",
            company: "MVP Healthcare",
            year: 2022,
            description: "Launch React upgrade of MVP Healthcare website",
            didactic: `Launched a React and next.js health insurance site. The backend is Azure
            with an industrial payment provider.

            I was a React and next.js software engineer on a blended team of front end
            and fullstack engineers. We built the Employer Broker interface, that
            integrated with and leveraged a large pre-existing health care system that 
            serves New York state and Vermont.`,
            image: "mvp_health_care_logo.png",
            image_plp: "mvp_id_card.png",
            carousel_image_1: "mvp_emp_broker_enroll.jpg",
            carousel_image_2: "mvp_sail_photo.webp",
            carousel_image_3: "mvp_emp_brkr_list.jpg",
            carousel: [
                "mvp_emp_broker_enroll.jpg",
                "mvp_sail_photo.webp",
                "mvp_emp_brkr_list.jpg",
                ],
            live: true
        },
        {
            id: id - 10,
            slug: "porziohealthcare",
            title: "Porzio Healthcare Launch",
            company: "Porzio",
            year: 2021,
            description: "Launch React upgrade of Porzio Healthcare website",
            didactic: `Launched a React pharmaceutical monetary compliance site. The backend is Azure
            with a custom invoice based payment system.

            I was the initial React software engineer on a team that grew to half a dozen.
            The React port was instrumental in a subsequent acquisition by RLDatix.`,
            image: "porzio_logo_2.jpg",
            image_plp: "porzio_dashboard.webp",
            carousel_image_1: "porzio_dashboard.webp",
            carousel_image_2: "porzio_acquired_by_rldatix.jpg",
            carousel_image_3: "porzio_website_2.jpg",
            carousel: [
                "porzio_dashboard.webp",
                "porzio_acquired_by_rldatix.jpg",
                "porzio_website_2.jpg",
                    ],
            live: true
        },
        {
            id: id - 10,
            slug: "coachusa",
            title: "Coach USA Launch",
            company: "Coach USA",
            year: 2020,
            description: "Launch React upgrade of Coach USA website",
            didactic: `Launched a React eCommerce site to sell bus tickets online. The backend is AWS
            with Adyen as the payment provider.

            I coded in React and node.js for AWS Lambdas and DynamoDB.
            The site is live selling bus Tickets online at CoachUSA.com.`,
            image: "coach_usa_2.jpg",
            image_plp: "coachusa_home.jpg",
            carousel_image_1: "coachusa_schedule.jpg",
            carousel_image_2: "coach_usa_bus_downtown.jpeg",
            carousel_image_3: "coachusa_cart.jpg",
            carousel: [
                "coachusa_schedule.jpg",
                "coach_usa_bus_downtown.jpeg",
                "coachusa_cart.jpg",
                ],
            live: true
        },
        {
            id: id - 10,
            slug: "devacurl",
            title: "DevaCurl Launch",
            company: "DevaCurl",
            year: 2019,
            description: "Launch JavaScript upgrade of DevaCurl website",
            didactic: `This was a port from Shopify to a modern JavaScript architecture.
            I implemented Elastic search on an AWS instance to provide 
            the main search functionality for the site.`,
            image: "deva_curl_logo.png",
            image_plp: "devacurl_ladies_16x9.jpg",
            carousel_image_1: "devacurl_website_square.jpg",
            carousel_image_2: "deva_girl_gray.webp",
            carousel_image_3: "devacurl_search.jpg",
            carousel: [
                "devacurl_website_square.jpg",
                "deva_girl_gray.webp",
                "devacurl_search.jpg",
                ],
            live: true
        },
        {
            id: id - 10,
            slug: "volkswagen",
            title: "Volkswagen Diesel Rectification for SGS",
            company: "Volkswagen",
            year: 2017,
            description: "$30,000,000 Volkswagen project won National G photo of the year",
            didactic: `This project was awarded the National Geographic Photo of the year.
            
            SGS won a large contract to inspect 300,000 Volkswagen diesels that needed to be removed
            from the road and repurchased per the EPA.

            I was the software engineering manager in charge of the app used to monetize the
            return and get VW vehicle owners a premium price on an immediate buy back.
            
            This business unit of SGS was subsequently sold to private equity based on the sucess
            of this project.`,
            image: "sgs_logo_3.jpg",
            image_plp: "vw_tdi_airfield.jpeg",
            carousel_image_1: "vw_tdi_airfield.jpeg",
            carousel_image_2: "sgs_inspector.jpg",
            carousel_image_3: "sgs_asi_acquired_by_acv.jpg",
            carousel: [
                "vw_tdi_airfield.jpeg",
                "sgs_inspector.jpg",
                "sgs_asi_acquired_by_acv.jpg",
                ],
            live: true
        },
        {
            id: id - 10,
            slug: "bluestatedigital",
            title: "Blue State Digital",
            company: "Blue State",
            year: 2015,
            description: "Launch React upgrade of LearnVest website",
            didactic: `This was an agency design and refresh to a modern JavaScript UI with a CMS backend, 
            for a children’s health care provider. While working for this digital agency 
            I also deployed a React upgrade to a financial site called LearnVest, 
            that was acquired by Northwestern Mutual.`,
            image: "learnvest_logo.jpeg",
            image_plp: "learnvest_home_2.webp",
            carousel_image_1: "child_mind_website.jpg",
            carousel_image_2: "learnvest_home_2.webp",
            carousel_image_3: "child_mind_website.jpg",
            carousel: [
                "child_mind_website.jpg",
                "learnvest_home_2.webp",
                "child_mind_website.jpg",
                ],
            live: true
        },
        {
            id: id - 10,
            slug: "jaguarlandrover",
            title: "Jaguar Land Rover",
            company: "Jaguar Land Rover",
            year: 2010,
            description: "Jaguar Land Rover",
            didactic: `Implemented software to import several billion dollars worth of 
            Range Rovers and Jaguars from the UK and into US ports, through customs, 
            onto car carriers, and ultimately to their luxury dealership network.`,
            image: "jaguar_logo_2.jpg",
            //image_plp: "jlr_brands.jpg",
            image_plp: "jaguar_electric_xj.webp",
            carousel_image_1: "jlr_port_baltimore.jpg",
            carousel_image_2: "land_rover_city_scape.jpg",
            carousel_image_3: "range_rover_dealer.jpg",
            carousel: [
                "jlr_port_baltimore.jpg",
                "land_rover_city_scape.jpg",
                "range_rover_dealer.jpg",
                ],
            live: true
        },
        {
            id: id - 10,
            slug: "theglobe",
            title: "theglobe.com",
            company: "theglobe.com",
            year: 2000,
            description: "theglobe.com",
            didactic: `Director of Software Engineering for the 34th largest website in the world at the time. 
            theglobe was a vibrant precursor to Facebook, that was tragically ahead of its time.
            Managed 6 C++ and 12 web developers.`,
            image: "theglobe_logo.png",
            image_plp: "theglobe_logo.png",
            carousel_image_1: "theglobe_website_2.jpg",
            carousel_image_2: "theglobe_homepage_browse.jpg",
            carousel_image_3: "happy_puppy_website.jpg",
            carousel: [
                "theglobe_website_2.jpg",
                "theglobe_homepage_browse.jpg",
                "happy_puppy_website.jpg",
                ],
            live: true
        },
        {
            id: id - 10,
            slug: "oracle",
            title: "Oracle",
            company: "Oracle",
            year: 1998,
            description: "Oracle",
            didactic: `Worked on a pioneering bill payment system for Chase bank. 
            It was a tribute to how much could be done almost entirely with PL/SQL stored procedures.`,
            image: "oracle_logo.jpg",
            image_plp: "oracle_logo.jpg",
            carousel_image_1: "oracle_logo.jpg",
            carousel_image_2: "oracle_db_diagram.gif",
            carousel_image_3: "oracle_logo.jpg",
            carousel: [
                "oracle_logo.jpg",
                "oracle_db_diagram.gif",
                "oracle_logo.jpg",
                ],
            live: true
        },
        {
            id: id - 10,
            slug: "nickelodeon",
            title: "Nickelodeon",
            company: "Nickelodeon",
            year: 1997,
            description: "Nickelodeon",
            didactic: `Software Engineer writing C, Java, and SQL for 
            Nickelodeon’s www.nick.com June 1997 maiden launch. This site was heavily promoted on
            Nicolodeon's TV channel, and hence was crushed with traffic that was nimbly 
            round robinned by the Silicon Graphics workstations that ran the website.`,
            image: "nick-logo-2.jpg",
            image_plp: "nick-juicy-2.jpg",
            carousel_image_1: "nick-juicy-2.jpg",
            carousel_image_2: "nick_ive_got_a_problem.jpg",
            carousel_image_3: "nick-juicy-2.jpg",
            carousel: [
                "nick-juicy-2.jpg",
                "nick_ive_got_a_problem.jpg",
                "nick-juicy-2.jpg",
                ],
            live: true
        },
        {
            id: id - 10,
            slug: "sony",
            title: "Sony",
            company: "Sony",
            year: 1995,
            description: "Inventor on Sony Patent US5319722A",
            didactic: `Software Developer implementing neural networks in C for machine vision. 
            Co-inventor on several early machine learning patents.`,
            image: "sony_logo.jpg",
            image_plp: "paolella_patent.png",
            carousel_image_1: "paolella_patent.png",
            carousel_image_2: "sony_news_workstation.jpg",
            carousel_image_3: "paolella_patent.png",
            carousel: [
                "paolella_patent.png",
                "sony_news_workstation.jpg",
                "paolella_patent.png",
                ],
            live: true
        },
    ]
}

