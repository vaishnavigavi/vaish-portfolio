import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import dashboard from './dashboard.png';
import docker from './docker.png';
import grafana from './Grafana.png';
import vunet from './Vunet-Logo.png';
import idfy from './footer-logo.svg';
import development from './development.png';
import student from './classroom.png';
import dancepose from './girl.png';
import stock from './stock.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    docker,
    dashboard,
    grafana,
    vunet,
    idfy,
    development,
    stock,
    dancepose,
    student
};

export const workData = [
    {
        title: 'Dance Pose Detection And Correction',
        description: 'Real-time pose analysis and correction tool with instant feedback to improve dance form and accuracy.',
        icon: assets.dancepose,
        link:'https://github.com/vaishnavigavi/Dance-Pose-Detection-And-Correction'
       
    },
    {
        title: 'Student Management System',
        description: 'GUI-based app to manage student records and analyze academic performance.',
        icon:assets.student,
        link:'https://github.com/vaishnavigavi/student-management-system'
        
    },
    {
        title: 'Stock Prediction',
        description: 'ML-based model to forecast stock trends using historical data with clear visualizations.',
        icon:assets.stock,
        link:'https://github.com/vaishnavigavi/stock-prediction'
        
    },

]

export const serviceData = [
    { icon: assets.vunet, title: 'Vunet Systems',timeline:'Apr 2024 - Mar 2025', description: 'Optimized data pipelines and transaction intelligence at scale by automating onboarding, building predictive models, and leading AI-powered chatbot initiatives. Enhanced business impact through insightful dashboards and NLP-driven user feedback analysis.', link: '' },
    { icon: assets.idfy, title: 'IDfy',timeline:'Jan 2023 - Apr 2023', description: 'Built a robust, user-friendly dashboard using Elixir, React, and Node.js to streamline data insights. Delivered key frontend features and documentation to elevate user experience and internal collaboration.', link: '' },
    { icon: assets.development, title: 'SDG',timeline:' Jun 2021 – Aug 2021', description: 'Developed a responsive result management platform with secure login and visual performance tracking. Simplified academic workflows while delivering an intuitive UI for administrators and students.', link: '' },
    
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Technical skills', description: ' Python, C/C++, Java, SQL, JavaScript, HTML/CSS, React.js, Node.js, Next.js, PHP, PostgreSQL, MySQL, Clickhouse' },
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Soft skills', description: ' Problem-Solving, Critical Thinking, Creativity, Time Management, Teamwork, Communication, Adaptability' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.E. in Electronics Engineering\nCourses: Data Structures and Algorithms, Machine Learning, Networking, Databases, Data Science, Project Management' }
    
];

export const toolsData = [
    
    assets.vscode, assets.docker , assets.dashboard, assets.git, assets.grafana
];