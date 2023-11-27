/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Arthur's Portfolio",
  description:
    "Data engineer & DevOps at Leboncoin",
  og: {
    title: "Arthur Volant's Portfolio",
    type: "website",
    url: "http://avolant.fr",
  },
};

//Home Page
const greeting = {
  title: "Arthur Volant",
  logo_name: "ArthurVolant",
  // nickname: "layman_brother",
  subTitle:
    "I enjoy working on complex projects, discovering optimal solutions tailored for each situation.",
    resumeLink:
    "https://drive.google.com/file/d/18lSyF57UgsW8hZ1WEl0KF3wsFY-otUJm/view?usp=sharing",
  portfolio_repository: "https://github.com/V0lantis/avolant.fr",
  githubProfile: "https://github.com/V0lantis",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/V0lantis",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/arthur-volant/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:arthurvolant@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Engineering",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building data pipelines with Apache Airflow & Apache Spark",
        "⚡ Developing streaming application with Kafka & Spring Cloud Streams",
        "⚡ Creating highly scalable applications with Python and FastAPI",
        "⚡ Deploying ML models with FastAPI",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Apache Spark",
          fontAwesomeClassname: "simple-icons:apachespark",
          style: {
            color: "#E25A1C",
          },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "simple-icons:terraform",
          style: {
            color: "#844FBA",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#2088FF",
          },
        },
        {
          skillName: "Spring Cloud",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009688",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture - DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Strong experience working AWS cloud platforms",
        "⚡ Hosting and maintaining applications on EKS (AWS Kubernetes service) on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud using helm templates",
        "⚡ Setting up streaming jobs from Kafka to any type of sinks (S3, DynamoDB, Kafka)",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Amazon S3",
          fontAwesomeClassname: "simple-icons:amazons3",
          style: {
            color: "#569A31",
          },
        },
        {
          skillName: "DynamoDb",
          fontAwesomeClassname: "simple-icons:amazondynamodb",
          style: {
            color: "#4053D6",
          },
        },
        {
          skillName: "Amazon EC2",
          fontAwesomeClassname: "simple-icons:amazonec2",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "#DC382D",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Kafka",
          fontAwesomeClassname: "simple-icons:apachekafka",
          style: {
            color: "#231F20",
          },
        },
        {
          skillName: "Grafana",
          fontAwesomeClassname: "simple-icons:grafana",
          style: {
            color: "#F46800",
          },
        },
      ],
    },
        {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing models for various (mainly personal) statistical use cases",
        "⚡ Experience working huge amount of data",
      ],
      softwareSkills: [
        {
          skillName: "Scipy",
          fontAwesomeClassname: "simple-icons:scipy",
          style: {
            color: "#8CAAE6",
          },
        },
        {
          skillName: "scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            color: "#F7931E",
          },
        },
        {
          skillName: "Plotly",
          fontAwesomeClassname: "simple-icons:plotly",
          style: {
            color: "#3F4F75",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Technology of Compiègne, France",
      subtitle: "M.S. in Computer Science - Major: Data mining",
      logo_path: "sigle_UTC-300x231.png",
      alt_name: "UTC",
      duration: "2016 - 2021",
      descriptions: [
        "⚡ Advanced statistics: Tests of hypotheses, Analysis of variance, Goodness-of-fit tests.",
        "⚡ Linear algebra: Euclidean space, Differential equation & Linear map.",
        "⚡ Comptuer science & General algorithms: Complexity and NP-completeness.",
        "⚡ Data mining & Big data tools",
      ],
      website_link: "https://www.utc.fr/",
    },
    {
      title: "Czech Technical University",
      subtitle: "Erasmus in Computer Science",
      logo_path: "cvut-logo.png",
      alt_name: "Czech Technical University",
      duration: "2020 - 2021",
      descriptions: [
        "⚡ Network Security",
        "⚡ Modern Internet Technologies",
        "⚡ Web Services and Middleware",
        "⚡ Advanced Database Systems",
      ],
      website_link: "https://www.cvut.cz/en",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "vitemadose-logo.jpg",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "vitemadose-logo.jpg",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "vitemadose-logo.jpg",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "vitemadose-logo.jpg",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "vitemadose-logo.jpg",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "vitemadose-logo.jpg",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "vitemadose-logo.jpg",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "vitemadose-logo.jpg",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "vitemadose-logo.jpg",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "vitemadose-logo.jpg",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "vitemadose-logo.jpg",
    //   logo_path: "vitemadose-logo.jpg",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "vitemadose-logo.jpg",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked as a Data Engineer for more thn 3 years now. My last experience is Leboncoin, France biggest marketplace. I have also worked for the french army ministry. I love optimizing exisiting infrastructure and understanding deeply how things work. I am also involved in the opensource community.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Data Engineer",
          company: "Leboncoin",
          company_url: "https://www.leboncoin.fr",
          logo_path: "leboncoin-logo.png",
          duration: "Octoboer 2021 - Present",
          location: "Paris, France",
          description:
            "I joined the data platform team at Leboncoin as Data Engineer & DevOps. I have been working on various projects such as a Feature Store API, handling over 1000req/s, with FastAPI. I am also responsible of managing our Kubernetes Cluster. I have helped data-scientist deploying and maintaining their ML models. I have worked on our data pipelines either with batch processing through Airflow and Spark, or in streaming applications with Spring Boot and Kafka.",
          color: "#0879bf",
        },
        {
          title: "Data Engineer - Data Scientist",
          company: "French Army ministry",
          company_url: "https://www.defense.gouv.fr/",
          logo_path: "army-ministry-logo.png",
          duration: "February 2021 - September 2021",
          location: "Paris, France",
          description:
            "During my graduation project at the Ministry of Defense, I worked as a Data Engineer and Data Scientist, implementing and using a Spark cluster on a JanusGraph database with ScyllaDB as a backend database, and other various Big Data tools. I handled over 1 Terabyte of data, developing a Python script to efficiently ingest Open Street Map data into our database. Additionally, I conducted meaningful machine learning studies using JanusGraph tools, providing valuable insights from these analyses.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Developer Engineer",
          company: "VINCI",
          company_url: "https://www.vinci.com/vinci.nsf/en/index.htm",
          logo_path: "vinci-logo.png",
          duration: "September 2018 - February 2019",
          location: "Paris, France",
          description:
          "I completed a 6-month internship at VINCI, France's biggest construction company. The aim of my internship was to build a 3D internet application for structural engineers to help them compute building feasibility.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Covid19 - Vitemadose.fr contributor",
          company: "ViteMaDose",
          company_url: "https://vitemadose.covidtracker.fr",
          logo_path: "vitemadose-logo.jpg",
          duration: "April 2022",
          location: "Paris, France",
          description:
            "During Covid19, I tried to help France and its citizen finding available slots for vaccines by scrapping different healthcare website and grouping informations into one. This project is called `ViteMaDose` and was one of the most visited website in France during the pandemic.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I love open-source projects for sharing ideas and thoughts with great people around code and more. I am trying to contribute in my spare time when I can help the community.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profil-picture.png",
    description:
    "I am more responsive with emails, so don't hesitate if you have any questions.",
  },
  blogSection: {
    title: "",
    subtitle:
      "",
    link: "https://blogs.avolant.fr/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Paris - France",
    locality: "Kanodar",
    country: "FR",
    region: "Île-de-France",
    postalCode: "75001",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/CTr6F3TqbwS1i5Jx6",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
