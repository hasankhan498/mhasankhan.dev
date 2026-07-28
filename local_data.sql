-- -- this 
--         file 
--             is
--                 ONLY
--                     FOR 
--                         BACKUP







-- -- this 
--         file 
--             is
--                 ONLY
--                     FOR 
--                         BACKUP






-- -- this 
--         file 
--             is
--                 ONLY
--                     FOR 
--                         BACKUP












--
-- PostgreSQL database dump
--

\restrict pEhA3bdBOzKO3m7PtyCWfdhRwvOBP30unH2Qu1Tw1OJ8CyX56uyYRxFM7c9aXvp

-- Dumped from database version 18.2
-- Dumped by pg_dump version 18.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: About; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."About" VALUES (1, 'Who I am', 'M Hasan Khan', '18 Years', 'Pakistani', 'Available', 'Kot Lakhpat, Lahore , Pakistan', '+92 310 4278981', 'mhasankhan1069@mail.com', 'Urdu, English, Pushto', '2026-07-25 10:52:48.421');


--
-- Data for Name: AboutStat; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."AboutStat" VALUES (3, '2+', 'Years of Experience', '2026-07-25 17:09:22.792', '2026-07-25 17:09:22.792');
INSERT INTO public."AboutStat" VALUES (4, '15+', 'Completed Projects', '2026-07-25 17:10:06.472', '2026-07-25 17:10:06.472');
INSERT INTO public."AboutStat" VALUES (5, '10+', 'Happy Clients', '2026-07-25 17:10:06.472', '2026-07-25 17:10:06.472');
INSERT INTO public."AboutStat" VALUES (7, '100%', 'Client Satisfaction', '2026-07-25 13:05:52.668', '2026-07-25 13:05:52.668');


--
-- Data for Name: ContactMessage; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."ContactMessage" VALUES (2, 'Sarah Jenkins', 'sarah.j@example.com', 'Pricing Inquiry', 'Hi, I would like to get a quote for a team of 15 members on the enterprise tier.', false, false, '2026-07-11 16:46:55.127');
INSERT INTO public."ContactMessage" VALUES (3, 'Michael Chang', 'mchang@techcorp.io', 'Bug Report - Dashboard', 'The analytics chart is not rendering properly on Safari mobile. Can you check?', true, false, '2026-07-12 16:46:55.127');
INSERT INTO public."ContactMessage" VALUES (4, 'David Ross', 'd.ross@designstudio.co', NULL, 'Just reaching out to see if you have any open positions for UI/UX contractors.', true, true, '2026-07-13 16:46:55.127');
INSERT INTO public."ContactMessage" VALUES (5, 'Elena Rostova', 'elena.r@startuphub.com', 'Partnership Opportunity', 'We are hosting a dev conference next month and would love to discuss sponsorship.', true, false, '2026-07-14 16:46:55.127');
INSERT INTO public."ContactMessage" VALUES (6, 'Alex Rivera', 'arivera99@gmail.com', 'Account Access Issue', 'I forgot my password and the reset link emailed to me has expired.', false, false, '2026-07-16 16:46:55.127');
INSERT INTO public."ContactMessage" VALUES (7, 'Jessica Taylor', 'jess.taylor@workmail.net', 'Feedback on New Feature', 'The new dark mode toggle works great! Really appreciate the update.', true, true, '2026-07-17 16:46:55.127');
INSERT INTO public."ContactMessage" VALUES (8, 'Tom Harrison', 'tharrison@logistics.org', NULL, 'Where can I find the documentation for your REST API endpoints?', false, false, '2026-07-18 16:46:55.127');
INSERT INTO public."ContactMessage" VALUES (9, 'Priya Patel', 'priya.patel@innovate.in', 'Billing Clarification', 'I noticed a duplicate charge on my invoice for July. Could you please review?', true, false, '2026-07-19 16:46:55.127');
INSERT INTO public."ContactMessage" VALUES (10, 'Marcus Vance', 'marcus.v@freelance.dev', 'Feature Request', 'Is there any plan to add webhook support for incoming payload notifications?', true, true, '2026-07-20 16:46:55.127');
INSERT INTO public."ContactMessage" VALUES (11, 'Chloe Bennett', 'chloe.b@marketly.com', 'Sales Demo Request', 'Can we schedule a 20-minute product walk-through for our team next week?', false, false, '2026-07-21 16:46:55.127');
INSERT INTO public."ContactMessage" VALUES (12, 'Daniel Kim', 'dkim@fintech.io', 'Security Compliance', 'Does your platform adhere to SOC 2 Type II compliance standards?', true, false, '2026-07-22 16:46:55.127');
INSERT INTO public."ContactMessage" VALUES (13, 'Hannah Abbott', 'h.abbott@greenearth.org', NULL, 'Loved using the app during our field project. Thanks for building this!', true, true, '2026-07-23 16:46:55.127');
INSERT INTO public."ContactMessage" VALUES (14, 'Liam O''Connor', 'liam.oc@webagency.co.uk', 'Custom Integration', 'Do you offer custom API integrations for legacy enterprise ERPs?', false, false, '2026-07-24 16:46:55.127');
INSERT INTO public."ContactMessage" VALUES (15, 'Sofia Martinez', 'smartinez@university.edu', 'Educational License', 'Are there any discounts available for academic institutions or students?', true, false, '2026-07-25 16:46:55.127');
INSERT INTO public."ContactMessage" VALUES (16, 'James Wilson', 'jwilson@consulting.com', 'General Question', 'What are your support hours over the upcoming weekend?', false, false, '2026-07-26 16:46:55.127');


--
-- Data for Name: Education; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Education" VALUES (1, 'Matric', 'Bait Ul Noor', '2022-2024', 'Completed Matriculation at Bait-Ul-Noor with exceptional academic performance, achieving a 90% grade and establishing a strong foundation in core subjects and analytical thinking.', '2026-07-26 06:36:40.599', '2026-07-26 06:36:40.599');
INSERT INTO public."Education" VALUES (2, 'ICS', 'Al Hamd College', '2024-2026', 'Completed ICS (Intermediate in Computer Science) at Al Hamd College with exceptional academic performance, achieving a 90% grade and establishing a strong foundation in computer science principles and logical thinking.', '2026-07-26 06:39:13.701', '2026-07-26 06:39:13.701');
INSERT INTO public."Education" VALUES (3, 'ACCPI ( Software Engineering Diploma )', 'Aptech Computer Education', '2025 - Present', 'Currently pursuing a Diploma in Software Engineering at Aptech, focusing on full-stack web application development across frontend and backend technologies, alongside hands-on training in AI developments.', '2026-07-26 06:44:15.171', '2026-07-26 06:47:12.514');


--
-- Data for Name: Experience; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Experience" VALUES (1, 'Frontend Developer', 'Envato', '2023-2025', 'I was remotely hired at envato as a junior web developer. My work was to edit  and maintain animations of envato dashbaord pages regularly.', '2026-07-25 19:37:40.494', '2026-07-26 07:03:16.45');
INSERT INTO public."Experience" VALUES (2, 'Full Stack Developer', 'Freelance', '2025-2026', 'Worked as a Freelance Full-Stack Developer, designing, building, and deploying scalable web applications for diverse clients—delivering complete frontend interfaces, robust backend APIs, and seamless database integrations.', '2026-07-26 07:08:18.097', '2026-07-26 07:08:18.097');
INSERT INTO public."Experience" VALUES (3, 'Next Js Developer', 'WebGrook', '2026 - Present', 'Worked as a Next.js Developer at Webgrook, driving frontend innovation and building fast, SEO-optimized, and scalable web applications using React and Next.js in a dynamic startup environment.', '2026-07-26 07:17:32.199', '2026-07-26 07:18:41.379');


--
-- Data for Name: Hero; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Hero" VALUES (1, 'M Hasan Khan', 'Full Stack Web Developer', 'I''m a passionate Full Stack Web Developer specializing in Next.js, React, Laravel, TypeScript and Tailwind CSS. I build fast, modern and scalable web applications with clean UI, responsive layouts and exceptional user experiences.', 'https://res.cloudinary.com/cej1n4ok/image/upload/v1784973072/portfolio/hero/g6laxzgvg9uza1yelbfg.png', 'portfolio/hero/g6laxzgvg9uza1yelbfg', 'More About Me', '/about', '2026-07-25 09:51:13.67');


--
-- Data for Name: Project; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Project" VALUES (1, 'Frontend Developer Portfolio', 'Frontend Designing', 'https://res.cloudinary.com/cej1n4ok/image/upload/v1785084603/portfolio/hero/cqrotbhus8slpdqztuqu.png', 'portfolio/hero/cqrotbhus8slpdqztuqu', 'https://portfolio-nine-theta-61.vercel.app/', '2026-07-26 16:24:55.199', '2026-07-26 16:58:02.498');
INSERT INTO public."Project" VALUES (2, 'Clothing Store Landing Page', 'Landing Page', 'https://res.cloudinary.com/cej1n4ok/image/upload/v1785085292/portfolio/projects/qs0gyh4eddq9v6ovdtgx.png', 'portfolio/projects/qs0gyh4eddq9v6ovdtgx', 'https://maison-zeta-eight.vercel.app/', '2026-07-26 17:01:33.608', '2026-07-26 17:01:33.608');
INSERT INTO public."Project" VALUES (3, 'Flight Booking Site Landing Page', 'Landing Page', 'https://res.cloudinary.com/cej1n4ok/image/upload/v1785085628/portfolio/projects/u5g4uypuvgtqjdbhei0s.png', 'portfolio/projects/u5g4uypuvgtqjdbhei0s', 'https://airplane-demo-site.vercel.app/', '2026-07-26 17:07:10.04', '2026-07-26 17:07:10.04');
INSERT INTO public."Project" VALUES (4, 'Sarab Hotel Reserving Platform', 'Web App', 'https://res.cloudinary.com/cej1n4ok/image/upload/v1785085791/portfolio/projects/dnktdf9qakeyw4vyvwn6.png', 'portfolio/projects/dnktdf9qakeyw4vyvwn6', 'https://sarab-phi.vercel.app/', '2026-07-26 17:09:52.48', '2026-07-26 17:09:52.48');
INSERT INTO public."Project" VALUES (5, 'Buisness Startup Portfolio', 'Frontend Designing', 'https://res.cloudinary.com/cej1n4ok/image/upload/v1785086192/portfolio/projects/x7u3jp5bnpumhjuxulew.png', 'portfolio/projects/x7u3jp5bnpumhjuxulew', 'https://webgrook.com/', '2026-07-26 17:16:33.187', '2026-07-26 17:16:33.187');


--
-- Data for Name: Skill; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Skill" VALUES (1, 'HTML5', 80, '2026-07-25 18:25:25.342', '2026-07-25 18:44:27.673');
INSERT INTO public."Skill" VALUES (4, 'Java Script', 70, '2026-07-25 18:46:52.742', '2026-07-25 18:46:52.742');
INSERT INTO public."Skill" VALUES (5, 'React Js', 80, '2026-07-25 18:47:21.814', '2026-07-25 18:47:21.814');
INSERT INTO public."Skill" VALUES (6, 'Next JS', 85, '2026-07-25 18:47:37.479', '2026-07-25 18:47:37.479');
INSERT INTO public."Skill" VALUES (7, 'php', 70, '2026-07-25 18:47:45.191', '2026-07-25 18:47:45.191');
INSERT INTO public."Skill" VALUES (8, 'Laravel', 70, '2026-07-25 18:48:13.569', '2026-07-25 18:48:13.569');
INSERT INTO public."Skill" VALUES (9, 'Tailwind Css', 80, '2026-07-25 18:48:35.702', '2026-07-25 18:48:35.702');
INSERT INTO public."Skill" VALUES (10, 'Type Script', 75, '2026-07-25 18:48:52.177', '2026-07-25 18:48:52.177');
INSERT INTO public."Skill" VALUES (11, 'Bootstrap', 75, '2026-07-25 18:49:38.977', '2026-07-25 18:49:38.977');
INSERT INTO public."Skill" VALUES (12, 'Express', 40, '2026-07-25 18:49:58.53', '2026-07-25 18:49:58.53');
INSERT INTO public."Skill" VALUES (13, 'Figma', 50, '2026-07-25 18:50:27.054', '2026-07-25 18:50:27.054');
INSERT INTO public."Skill" VALUES (3, 'CSS3', 85, '2026-07-25 18:46:02.85', '2026-07-25 18:52:05.738');


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."User" VALUES ('550e8400-e29b-41d4-a716-446655440000', 'M Hasan Khan', 'mhasan@gmail.com', '$2b$10$7zaCzcru/3j/M7EiAeETv.J4jPhigEECxdqALQerP4dyvIJgqbg3e', 'ADMIN', '2026-07-23 19:10:11.133', '2026-07-23 19:10:11.133');


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public._prisma_migrations VALUES ('11231654-812e-486c-81d0-c4374bd5d4c0', '6864246ac6b737dde6943c9e4aabc61eb31285794a9ab9180f1c018b58da0557', '2026-07-23 18:44:41.065686+05', '20260723134441_init', NULL, NULL, '2026-07-23 18:44:41.051448+05', 1);
INSERT INTO public._prisma_migrations VALUES ('4b2f08f9-c0da-4aee-927f-d0554850e1d0', '223795671d0e42df6849e628dbccc7bcafc2cd8aa998b8a08b0b6431808e32e3', '2026-07-24 18:35:46.977489+05', '20260724133546_add_hero', NULL, NULL, '2026-07-24 18:35:46.848541+05', 1);
INSERT INTO public._prisma_migrations VALUES ('ffc4f90a-f039-414b-877b-8d5f35f2e9aa', 'ef9d2fbf64a23c0e9832580d0d78573a39d6a9fd1aef0a7054e92747aac99054', '2026-07-25 14:28:28.055144+05', '20260725092827_add_about_module', NULL, NULL, '2026-07-25 14:28:27.908106+05', 1);
INSERT INTO public._prisma_migrations VALUES ('8b0c8d49-c84a-468f-8495-161315e341d7', 'f720e94b2016d6274159937a458effe9bba7dd37b1f2848af70eef6fd1be8f30', '2026-07-26 13:01:28.878066+05', '20260726080128_add_contact_module', NULL, NULL, '2026-07-26 13:01:28.754591+05', 1);
INSERT INTO public._prisma_migrations VALUES ('5f3c643a-26f0-4c9b-9008-0d8b5e6f9527', '4e128e01fe3455246dacc7c98b84528494729f8a2309ee7f3079437ec80d2384', '2026-07-26 20:33:46.23269+05', '20260726153346_add_project_module', NULL, NULL, '2026-07-26 20:33:46.103862+05', 1);


--
-- Name: AboutStat_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."AboutStat_id_seq"', 7, true);


--
-- Name: About_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."About_id_seq"', 1, true);


--
-- Name: ContactMessage_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."ContactMessage_id_seq"', 16, true);


--
-- Name: Education_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Education_id_seq"', 3, true);


--
-- Name: Experience_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Experience_id_seq"', 3, true);


--
-- Name: Hero_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Hero_id_seq"', 1, false);


--
-- Name: Project_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Project_id_seq"', 5, true);


--
-- Name: Skill_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Skill_id_seq"', 13, true);


--
-- PostgreSQL database dump complete
--

\unrestrict pEhA3bdBOzKO3m7PtyCWfdhRwvOBP30unH2Qu1Tw1OJ8CyX56uyYRxFM7c9aXvp

