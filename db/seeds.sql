USE MapBook;

-- Insert Sample data
INSERT INTO Courses (title, date, location, description, target_audience, duration) VALUES ("Apprentice Development Programme", '2018-12-01 09:00:00', "Belfast", "Targeted at our EAYL intake, this 4-week programme helps new EAYL students integrate into Kainos and the world of work in general.  It’s a mixture of technical skilling up and enhancing your awareness and understanding of the skills, knowledge, and level of professionalism required to succeed at Kainos. The ADP is a precursor to the rotations undertaken by the EAYL students – each EAYL student will undertake 3 x 18 week rotations across various areas of the business.", 
"New Earn as you Learn (EAYL) intake", "4 Weeks");
INSERT INTO Courses (title, date, location, description, target_audience, duration) VALUES ("Engineering Academy", '2018-12-18 09:00:00', "Belfast", "This programme prepares you, through an intensive & interactive programme, for life at Kainos. It addresses your technical competence through classroom training and enhances technical, communication and commercial skills through simulations and BU-sponsored work-based learning. This programme has a strong focus on integrating and socialising new talent with a heavy involvement from many people in the business.", 
"New grads and placements", "7 Weeks");
INSERT INTO Courses (title, date, location, description, target_audience, duration) VALUES ("Consultant Development Programme", '2018-12-02 09:00:00', "Castleward", "This programme focusses on 'you'. It aims to help you understand yourself, your behaviours, your personal effectiveness, how you operate within the business.  It helps you understand how you can grow into the consultant-level role and communicate better to maximise the value you can bring to the business as well as the value of those around you.", 
"New Consultant level & those close to promotion to Consultant level", "4 Days");
INSERT INTO Courses (title, date, location, description, target_audience, duration) VALUES ("Management Development Programme", '2019-01-10 09:00:00', "Belfast", "The areas covered range across developing your own self-awareness, understanding the manager’s role, through to strategies and skills which underpin best practice people management and development. Through a process of practical application and review, you will feedback on your ongoing learning and actions. You will be asked to focus on development planning to ensure a continuing link with the organisation and your manager to help affirm your strengths and continuously improve as a manager in line with the Kainos values and behaviours.", 
"New Manager level staff & those close to promotion to Manager level", "6 Months");
INSERT INTO Courses (title, date, location, description, target_audience, duration) VALUES ("Kainos Principals Programme", '2018-12-05 09:00:00', "Belfast", "This programme focuses on the responsibilities and expectations of a Principal level manager.  Through interactive and experiential learning, it aims to deepen understanding of stakeholder management, Kainos as a business, how you, as a Principal, can influence and manage customers, how Kainos sells to customers (existing & new), how Kainos enters new markets.",
"Principal Level staff", "Ongoing");
INSERT INTO Courses (title, date, location, description, target_audience, duration) VALUES ("Sales Development Programme", '2018-12-15 09:00:00', "Belfast", "The newest of the MAP programmes, the Sales Development Programme will be comprised of a number of standalone modules focused on making Kainos a professional sales organisation. It will focus on the Kainos story, the Kainos methodology, developing and embedding a common framework and language for sales and processes across the BUs, developing sales skills including consultative selling, relationship building, value selling, negotiation etc. Its envisaged that this will be an ongoing programme used for on-boarding new sales staff as well sharpening skills of our existing sales community.",
"Sales Staff", "Ongoing");
INSERT INTO Courses (title, date, location, description, target_audience, duration) VALUES ("Kimble Training", '2019-06-21 09:00:00', "Belfast", "Kimble upskilling",
"PMs, EMs, DMs, CSMs and those who are regular users of Kimble", "5.5 Hours");
INSERT INTO Courses (title, date, location, description, target_audience, duration) VALUES ("Introduction to Serverless", '2019-07-25 09:00:00', "Gdansk", "Serverless Architecture is one of the hottest topics of 2018. This hands-on workshop will show you how to build highly available, scalable and cost-effective applications without thinking capacity limitations of servers. Run by Marcin Duszynski from our Engineering Capability, this promises to be an excellent learning opportunity for those interested in building serverless applications.",
"Engineering Capability (Developers, Architects)", "1 Day");
INSERT INTO Courses (title, date, location, description, target_audience, duration) VALUES ("Crucial Conversations", '2019-02-11 09:00:00', "London", "The workshop will give you practical tools to enable you to. Resolve disagreements—accurately address concerns by talking respectfully, candidly and skillfully with someone in a safe way.", 
"People Managers", "1 Day");
INSERT INTO Courses (title, date, location, description, target_audience, duration) VALUES ("Presales Orientation", '2018-12-01 09:00:00', "Online", "This course is aimed at digital services delivery staff who have never worked on a presales opportunity before. The purpose is to provide you with onboarding information prior to working on your first presales engagement and to ease the transition to working on bids.",
"Digital Services Sales and Delivery Staff Band 3+", "1 Hour");

INSERT INTO Course_Trainer (course_id, trainer_name) VALUES (1, "Shaun Ganley");
INSERT INTO Course_Trainer (course_id, trainer_name) VALUES (2, "Shaun Ganley");
INSERT INTO Course_Trainer (course_id, trainer_name) VALUES (3, "Shaun Ganley");
INSERT INTO Course_Trainer (course_id, trainer_name) VALUES (4, "Shaun Ganley");
INSERT INTO Course_Trainer (course_id, trainer_name) VALUES (5, "Shaun Ganley");
INSERT INTO Course_Trainer (course_id, trainer_name) VALUES (6, "Shaun Ganley");
INSERT INTO Course_Trainer (course_id, trainer_name) VALUES (7, "Jorge Jimenez-Sayan");
INSERT INTO Course_Trainer (course_id, trainer_name) VALUES (8, "Marcin Duszynski");
INSERT INTO Course_Trainer (course_id, trainer_name) VALUES (9, "Donna Russell");
INSERT INTO Course_Trainer (course_id, trainer_name) VALUES (9, "Jane Askin");