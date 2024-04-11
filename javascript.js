document.addEventListener("DOMContentLoaded", function () {
  const judges = document.querySelectorAll(".judges_card");
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("close");
  const popupImage = document.getElementById("popup-image");
  const popupDescription = document.getElementById("popup-description");
  const popupDesignation = document.getElementById("popup-designation");
  const popupName = document.getElementById("popup-name");
  // Object containing descriptions for each judge
  const judgeDesignation = {
    "Aravind Anantharamakrishnan": "Co-Founder of Infinite Engineers",
    "Gopala Krishnan B": "Independent Director",
    "Dr. Chithra Lekha P":
      "CEO Karotimam Innovations Pvt Ltd, Senior Research Scientist at Virginia Tech, India",
    "Dr. Sheela Sasikumar C": "Managing Partner - SS Clini Research LLP",
    "Er. RaviKanth K": "Assistant Professor, AURORA Deemed to be University",
    "Tamil Pandiyan Karunanidhi": "Chemical Engineer and Techie",
    "Deepak Rajmohan": "CEO & Founder of GreenPod Labs",
    "Babu R": "Management Professional and Entrepreneur",
    "Dr. Sathis Kumar G": "Public policy Professional",
    "Dr. Francis Somerwell":
      "Founder & Director, Access to Education & Employment & Med-Tech SME",
    "Santosh Kumar J": "Founder of Li- Circle",
    "Chandrasekaran Jayaraman": "Founder of Watsan Enviro Private Limited",
    "Dr. Geetha Premkumar": "Entrepreneur & Life coach",
    "Inderan Kannan": "Founder & CEO Climec Labs",
    "Arasi Arul": "Serial Entrepreneur & Founder of 60Plus India",
    "Joel Andrews": "Director & Co- Founder, Jesso Edutech",
    "Dakshnamoorthy Durairaj": "Founder of SANAL",
    "Dr. Sathyanarayan K": "Technical Lead IINVTY",

    // Add designations for other judges
  };

  const judgeDescriptions = {
    "Aravind Anantharamakrishnan":
      "Aravind Anantharamakrishnan is the Co-Founder of Infinite Engineers, a social enterprise that revolutionizes education through STEAM (Science, Technology, Engineering, Arts, and Mathematics). With over a decade of experience, Aravind has been instrumental in shaping the company's vision and strategy. His background in Aeronautical Engineering coupled with a fervent passion for experiential learning drives him to design and deliver innovative STEAM programs across India. Aravind's notable achievements include creating a curriculum-aligned Dexter Box and securing partnerships and grants for ATAL Tinkering Labs. Proficient in project Coordination, Customer experience, and Team management, Aravind is committed to fostering collaboration and inspiring the next generation of learners and innovators with the skills and mindsets necessary for success in the 21st century. He is judging for SDG goal 4.",
    "Gopala Krishnan B":
      "Gopala Krishnan B has a successful 37-year career that spans a variety of industries, including K–12 Education, Office Automation, Information Technology, Agriculture Innovation, Entrepreneurship, and Ecosystem building. He has held key positions in both corporate and non-profit organizations and has a track record of starting, growing, and managing profitable ventures. Gopala Krishnan is well known for his skill in promoting teamwork among people in different roles and fields and achieving achievements. Along with a strong emphasis on problem-solving and relationship management, his areas of competence also include operations, sales & marketing, and strategic planning. He is deeply engaged in providing long-term business consultancy to Deeptech, Agritech, Edtech, and SaaS startups. Furthermore, he holds the position of Founder & Principal Consultant at Startup Ascendia, where his unwavering commitment to cultivating good change in the entrepreneurial landscape is demonstrated by his efforts to scale firms, mentor entrepreneurs, and provide strategic board leadership. He is judging for SDG goal 2.",
    "Dr. Chithra Lekha P":
      "Dr. Chithra Lekha is a Senior Research Scientist and Coordinator of the Healthcare Technologies Division at Virginia Tech, India and Chief Executive Officer of Karotimam Innovations Pvt Ltd. She is a highly accomplished Scientist specializing in wearable IoT sensors and advanced materials science. With a Ph.D. in Physics and extensive research experience, she has contributed significantly in her field. She was also a DST-WoS A Scientist at the Department of Biotechnology, Indian Institute of Technology Madras, where she led groundbreaking research in sensor development and materials science. Her work has been recognized through numerous awards, fellowships, and international publications, demonstrating her dedication to advancing sensor technologies for real-world applications. She now has taken up the entrepreneurial path to expand her research on a commercial front, with her startup focused on green electronics gearing to build a sustainable future for all. Her impactful partnerships between academia, industry, and policy realms, coupled with engagement in science diplomacy, have fostered global cooperation and collaboration, promoting international partnerships for sustainable development. She is judging for SDG goal 9.",
    "Dr. Sheela Sasikumar C":
      "With more than 30 years of Research and Academic Expertise, Dr. C. Sheela Sasikumar is a renowned Scientist and Educator. She is currently in leadership roles at SS Clini Research LLP, a business that translates research into useful solutions for clinical trials. As a prominent figure in her industry, she is a member of advisory boards for reputable organizations like ‘The National Foundation of Liver Research’ and ‘The Golden Jubilee Women Biotech Park’. Her areas of specialization include Clinical Research, Nanotechnology, Biotechnology, and Diabetic Foot Care. She mentors and empowers women in science through her educational projects and activities. In addition to being a very inspirational speaker, her works have an impact on the next generation of scholars. She has won numerous awards for her efforts, including the Gold Medal for Professor E. P. Odum Gold Medal Award, which demonstrates her unrelenting dedication to the progress of science. Her ambition is to judge for SDG goal 3.",
    "Er. RaviKanth K":
      "Er. K. RaviKanth is an Assistant Professor, Department of Computer Science and Engineering at AURORA Deemed to be University, Hyderabad, India. With over 18 years of experience in Teaching, Research, and Administration, he specializes in Machine Learning, Data Mining, Deep Learning, and Artificial Intelligence. He is a member of professional bodies such as CSTA, IAENG, IFERP, and IAO and serves as a review member for numerous international journals and conferences. He has received several awards, including the ‘Kalpa Acharya Award’ and ‘Yuva Acharya Award’, for his contributions to the field. He is also actively involved in mentoring students and has published extensively in international conferences and journals. Additionally, he has organized various workshops, webinars, and conferences to promote the latest tools and technologies in the field. He is judging for SDG goal 4 and 9.",
    "Tamil Pandiyan Karunanidhi":
      "Tamil Pandiyan, a Chemical Engineer by education, embarked on a diverse career journey fueled by a passion for exploration and entrepreneurship. His aspirations were etched into civil services and he dedicated years to pursuing the same. Yet life took a turn and provided him another track that he was born to do. Becoming a Serial Entrepreneur, he started off by venturing into the Salon Industry, owning franchisees of two Naturals Salon outlets. His love for startups led him to explore new projects where technology and politics intersect, aiming to drive meaningful change within the political landscape. Alongside his entrepreneurial endeavors, Tamil also contributes his expertise as a Techie in a renowned IT company, showcasing his versatility and commitment to making a positive impact through innovation and leadership. He is judging for SDG goal 4 & 9.",
    "Deepak Rajmohan":
      "Deepak Rajmohan is a dynamic entrepreneur and problem-solver with a passion for innovation. As the Founder and CEO of GreenPod Labs, an Agri-tech company, he spearheads the development of cost-effective post-harvest solutions using Nanotechnology to minimize losses in fruits and vegetables worldwide. Deepak's career started with a background in food science, where he worked with well-known companies like Happy Family Brands to refine his abilities in product creation and quality control. Armed with a Master's degree in Food Science from Oklahoma State University, he delved into various research projects focused on food processing and packaging. Since, he actively supports causes linked to economic empowerment, environmental sustainability, and education, Deepak's expertise goes beyond entrepreneurship. With a blend of technical proficiency and entrepreneurial spirit, Deepak continues to drive impactful initiatives that bridge the gap between technology and societal needs. He is judging for SDG goal 12.",
    "Babu R":
      "Babu R is a seasoned Management professional and Entrepreneur with a wealth of leadership experience in the Automotive and Railways sectors. With a strong focus on business excellence and innovation, he has successfully managed multi-project programs for Indian and Global markets. As an entrepreneur, he is dedicated to driving sustainability initiatives and fostering circular economy practices through Industry 4.0 solutions. He is known for his problem-solving skills and innovative approach, constantly seeking insights and inspiration from diverse sources. He holds a degree in Mechanical Engineering from NIT Calicut and a Post-Graduate diploma in Business Administration from Loyola Institute of Business Administration, Chennai. With his expertise and passion for innovation, he is committed to making a positive impact on businesses and society alike. He is judging for SDG goal 13.",
    "Dr. Sathis Kumar G":
      'Dr. G. Sathis Kumar, affectionately known as Professor GSK, is a Public Policy Professional based in Chennai. With a focus on evidence-based policy research, he is dedicated to facilitating informed decision-making in public policy. Professor GSK is committed to fostering research collaborations with national and international policy institutes and think tanks. His guiding philosophy, "Be the Cause of Changes", underscores his mission to effect transformative societal change across generations. With over 15 years of experience in economics, strategy, and public policy, he offers valuable insights into the developmental progress of businesses, economies, governments, and societies. Through his expertise and dedication, Professor GSK endeavors to contribute to sustainability in social, economic, and philosophical realms through knowledge sharing, research, teaching, and outreach activities. He is judging for SDG goal 4 & 16.',
    "Dr. Francis Somerwell":
      "Dr. Francis Somerwell is a dedicated Med-Tech SME with over 18 years of experience in Healthcare, IT, Risk management, and Health insurance. He has worked extensively in over 40 countries, focusing on uplifting low-income populations through innovative healthcare solutions. Currently consulting for UNICEF and other development agencies, he specializes in reducing infant and maternal mortality rates and managing healthcare programs for tribal populations in India. With a PhD in Iris Biometric Technology and Master's degrees in Health Economics and Project Management, he has developed numerous projects for international organizations, integrating biometrics and IT to improve healthcare delivery. His passion for providing quality, affordable healthcare to underserved communities drives his work as Director of the Access to Education and Employment project. Dr.Somerwell's expertise in strategy building, product development, and program management has made him a valuable asset in the field of global health. He is judging for SDG goals 3,5 & 16.",
    "Santosh Kumar J":
      "Santosh Kumar J is a passionate industrialist with a deep-seated environmental concern, dedicated to integrating the parts and wholes of the lithium-ion battery's circular economy. As the Founder of Li-Circle, he is committed to supporting the Indian lithium-ion battery supply chain by focusing on reverse logistics and urban mining of rare earth metals. With a background in civil engineering and extensive experience in project management, Santosh has also ventured into the electric vehicle revolution as the Founder of EV VEL, supporting the development of Electric Vehicle Charging Infrastructure. He has led cutting-edge research projects in the healthcare and electronics sectors, driving innovation and technological advancement. Santosh's commitment to sustainability extends to his initiatives in education and community engagement, making significant strides towards a greener and more eco-friendly world. Through his relentless efforts, he continues to champion the cause of sustainable development and environmental stewardship. He is judging for SDG goals 11 & 12.",
    "Chandrasekaran Jayaraman":
      "With about thirty years of industrial experience, Chandrasekaran Jayaraman is a National level topper in Plastics Technology from Central Institute of Plastics & Engineering Technology (CIPET). Dedicated to promoting innovation and sustainability across multiple industries, Chandrasekaran founded four startups: Watsan Envirotech Private Limited, Custom Parts Online, Ancient Heritage Conservation Private Limited, and Cureall Medicare OPC Pvt Ltd. Numerous honors and medals throughout his entrepreneurial career have recognized his significant contributions to environmental conservation and social entrepreneurship. With a team led by women, Chandrasekaran's company produces natural water purifiers for rural residents without the need for power, showcasing his expertise and real-time impact in both technical and commercial sectors. He is committed to leveraging his skills and experience to create positive change and make a lasting impact on communities and ecosystems worldwide. He is judging for SDG goal 6.",
    "Dr. Geetha Premkumar":
      "Bio  Dr. Geetha Premkumar is a renowned youth counselor, published author, life coach, and entrepreneur, with a plethora of accolades to her name. As a first-generation businesswoman, she has been honored with prestigious awards such as the ‘State-level Best Woman Entrepreneur Award’ and the ‘Business Achievement Award’. She is recognized for her financial integrity and professionalism, leading Vector Indojanix Pvt. Ltd, a well-established MSME specializing in Power Electronic Products. Beyond her entrepreneurial ventures, she is a certified psychologist, providing counseling services to individuals facing challenges in various spheres of life. Actively involved in charitable endeavors, she is the founder of H-KRAFT FOUNDATION, dedicated to promoting mental wellness in society. Her unwavering passion and commitment continue to inspire and uplift countless individuals, making her a true beacon of empowerment and change. She is judging for SDG goals 5, 8 and 16.",
    "Inderan Kannan":
      "Inderan is a Motivated and Driven Leader with exceptional communication and people management skills. During his undergraduate studies, he successfully developed a variety of projects, including IoT projects and drone path followers. He has also conducted research in Swarm Robotics with a focus on Consensus protocol. With 18 months of experience as a business analyst for the North American region at LeadSquared, a recent Unicorn company, he has proven his expertise in analyzing and strategizing for business successes. Currently, he is dedicated to building a Carbon Capture Solution, showcasing his commitment to environmental sustainability and innovation. He is judging for SDG goal 13.",
    "Arasi Arul":
      "As a Serial Entrepreneur, Arasi Arul champions Social Concerns. After running her father's clinic and lab chain for a while, she opened Zha Cafe, the first coffee shop in the world with an ethnic theme. Because she is passionate about empowering women, she founded Chisel Factor, a training company that teaches soft skills to girls and women. Apart from endorsing and bolstering female-driven businesses, Arasi is a director of TN W.O.M.E.N, a fund devoted to women. An entrepreneur and member of the Indian government's Human Rights Commission who has addressed thousands of schoolchildren. Recognizing the challenges older people face, she launched 60Plus India, an AI-powered platform that helps older people live active, independent lives. For her dedication to social justice, she has received acclaim. The government and business associations of India have acknowledged her for her commitment to social justice. She is judging for SDG goals 5 and 8.",
    "Joel Andrews":
      "Joel Andrews is a Co-founder and Startup Activist with a proven track record in the Edtech industry. With expertise in innovation, management, startup incubation, mentoring, and business communication, Joel is dedicated to driving entrepreneurial success. Armed with a Masters in Business Administration, focused on Innovation Entrepreneurship and Venture Development from Dr. MGR Educational and Research Institute, he brings a wealth of knowledge and experience to the table. Joel is passionate about fostering innovation and supporting startups in realizing their full potential. His strong leadership skills and commitment to customer service makes him a valuable asset in the business development landscape. With a keen eye for opportunities and a passion for driving growth, Joel is instrumental in driving positive change and creating impactful ventures in the startup ecosystem. He is judging for SDG goal 4, 8 & 9.",
    "Dakshnamoorthy Durairaj":
      "Dakshnamoorthy Durairaj, M.E., M.Sc., is the founder of SANAL, a venture dedicated to promoting sustainable living practices and reducing plastic usage. With a background in Civil Engineering and a Master's degree in Structural Engineering, his passion for creative design led him to establish SANAL as his 24th startup. Starting with the sale of premium quality cotton bags to curb plastic usage, SANAL evolved into a plastic-free international showroom named சநல் - சமுதாய நலனில் in 2017. Over time, he expanded his research areas to explore eco-friendly alternatives for daily essentials. In 2021, his commitment to environmental conservation led to the transformation of SANAL into an acronym for  Sustainable Alternative for Non-polluting Acclimate Living. He has organized eco-awareness expos and launched SANAL Ecopod, an electric three-wheeler that promotes sustainability. His dedication to spreading awareness about climate change and eco-friendly living continues to inspire positive change in communities nationwide. He is judging for SDG goal 8, 12 and 13.",
    "Dr. Sathyanarayan K":
      "Dr. Sathyanarayanan is a Senior Trainer in Learning and Development at IINVTY, at the forefront of shaping the future of education. He is also a QMS Lead Auditor at SARVAM SAFETY EQUIPMENT PVT LIMITED, with a commitment to ensuring safety standards and engaging training sessions. Drawing from a decade of diverse experience spanning both Education and Industrial sectors, his expertise in areas such as Emotional Intelligence, Health and Safety protocols, disruptive Technologies, and Quality Assurance has paved the way for his dedication to Educational Technology. His life's mission is rooted in impacting the lives of 1,00,00,000 young minds across the nation through a multifaceted approach encompassing training activities, podcasting, and spearheading the Quality Education For All movement, aligned with UNESCO's 2030 sustainable goals for Quality Education. Through meticulously designed training sessions and engaging in social initiatives, Satyanarayanan catalyzes positive transformations among educators, industrialists, and students, with his steadfast belief in the mantra, \"Champion Mindset, Champion Yourself”. He is judging for SDG 12.",

    // Add descriptions for other judges
  };

  function hellooo() {
    judges.forEach((judge) => {
      let judgeName = judge.querySelector(".judge_name").innerText;
      console.log(judgeName);
    });
  }

  judges.forEach((judge) => {
    judge.addEventListener("click", function () {
      hellooo();
      const judgeImage = judge.querySelector("img").src;
      const judgeName = judge.querySelector(".judge_name").innerText;
      const judgeDescription =
        judgeDescriptions[judgeName] || "No description available";
      const judgeDesignationtext =
        judgeDesignation[judgeName] || "No designation available";

      popupImage.src = judgeImage;
      popupDescription.innerText = judgeDescription;
      popupDesignation.innerHTML = "<i>" + judgeDesignationtext + "</i>";
      popupName.innerHTML = "<h4>" + judgeName + "</h4>";

      popup.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  });
});
