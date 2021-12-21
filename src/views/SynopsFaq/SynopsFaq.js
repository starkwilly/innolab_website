import React   from "react";
//import Accordion from 'react-bootstrap/Accordion'
//import Button from 'react-bootstrap/Button'  
import video from '../../_assets/fonts/Synops.mp4'
//import Card from 'react-bootstrap/Card';
//import PropTypes from 'prop-types';
//import SynopsAccordionCard from '../SynopsFaq/SynopsAccordion'

import { getSynopsSectionParent } from "../../_services/strapiService";
import Container from 'react-bootstrap/Container'
import SynopsAcordion from '../SynopsAccordion/SynopsAcordion'
import SynopsFaqForm from '../SynopsFaqForm/SynopsFaqForm'
//import Spinner from 'react-bootstrap/Spinner'
////import Card from 'react-bootstrap/Card';
//import AccordionContext from 'react-bootstrap/AccordionContext';
//import CardMediaContainer from '../CardMediaContainer/CardMediaContainer';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./SynopsFaq.css"
import { Link } from 'react-router-dom';
//import ScrollAnimation from 'react-animate-on-scroll';

// eslint-disable-next-line no-unused-vars



const list = 
[
    {
        "id": 1,
        "SectionTitle": "A present for your future",
        "Key": null,
        "published_at": "2021-11-24T17:19:52.330Z",
        "created_at": "2021-11-23T22:27:57.323Z",
        "updated_at": "2021-11-24T17:19:52.338Z",
        "synops_section_children": [
            {
                "id": 2,
                "Title": "The focus",
                "SectionBody": "With this new version, we made sure that all the main info you might need is presented at a high level in the home page, with the dashboard. But also, that you can get all the details of whatever you require, if you need to. In that way, you will be able to:\n\n● Understand faster the status of your work\n\n● Find easier the details of your specific requests\n\n● Keep clearer track of the pending actions for you to solve\n\nFor more details on what will be released soon, check our section **The future**",
                "synops_section_parent": 1,
                "Position": 1,
                "published_at": "2021-11-24T17:19:57.269Z",
                "created_at": "2021-11-23T22:52:00.945Z",
                "updated_at": "2021-11-24T17:19:57.278Z"
            },
            {
                "id": 3,
                "Title": "A brand-new Dashboard",
                "SectionBody": "With a revamped interface, now we have made it easier for you to:\n\n● Get a high-level status of all **pending work**\n\n● **Dig deeper** on the requests that have been placed\n\n● **Get up to date** with the recent updates on specific tasks\n\n● Be clear on your **pending actions**\n\n![image003.png](https://innolab-stage.accenture.com/innolab-dev-api/uploads/image003_f9e294ac3a.png)\n",
                "synops_section_parent": 1,
                "Position": 2,
                "published_at": "2021-11-24T17:20:02.684Z",
                "created_at": "2021-11-23T22:53:25.163Z",
                "updated_at": "2021-11-30T15:22:24.264Z"
            },
            {
                "id": 4,
                "Title": "Know Faster",
                "SectionBody": "The dashboard view will be your home page for your CXL experience, and it allows you to have a quick overview of all that is happening in your operation. There is a main menu that allows you to have a deeper vision of the requests, classified by category status: Ongoing, Archived and Draft.\n\nYou can also review the latest requests created, check your pending approvals, and see the latest comments available.\n",
                "synops_section_parent": 1,
                "Position": 3,
                "published_at": "2021-11-24T17:20:07.147Z",
                "created_at": "2021-11-23T22:56:38.656Z",
                "updated_at": "2021-11-24T17:20:07.154Z"
            },
            {
                "id": 5,
                "Title": "Find Easier",
                "SectionBody": "You were familiar with the search bar already, which is effective. We have improved and extended the functions of **group by** and **filter**, making the information easier to locate (learn more on how to use them in the **How to section**).",
                "synops_section_parent": 1,
                "Position": 4,
                "published_at": "2021-11-24T17:20:11.461Z",
                "created_at": "2021-11-23T22:57:23.622Z",
                "updated_at": "2021-11-24T17:20:11.468Z"
            },
            {
                "id": 6,
                "Title": "Don’t miss a thing",
                "SectionBody": "We don’t want you to miss any approval that is pending in your queue. In Synops 2.0 you should be able to review the approvals chronologically: from the oldest to the newest. This can help you identify approvals that need your immediate action, so you should be able to prioritize your work, and don’t miss out on anything.",
                "synops_section_parent": 1,
                "Position": 5,
                "published_at": "2021-11-24T17:20:18.367Z",
                "created_at": "2021-11-23T22:58:14.237Z",
                "updated_at": "2021-11-24T17:20:18.375Z"
            },
            {
                "id": 7,
                "Title": "What about the assistant?",
                "SectionBody": "We wanted to add the valuable feedback from all the users and focus on the human experience. Our research that included testing, interviews and more, pointed out that we can find better ways to use space. Removing the assistant brought a simpler and more practical way to use our layout and to display even more insights for our users.",
                "synops_section_parent": 1,
                "Position": 6,
                "published_at": "2021-11-24T17:20:23.556Z",
                "created_at": "2021-11-23T22:58:48.839Z",
                "updated_at": "2021-11-24T17:20:23.563Z"
            },
            {
                "id": 8,
                "Title": "And the reports?",
                "SectionBody": "Will the reporting features be available in Synops 2.0?  Yes, If you had reporting enabled in your previous version, you will find it on this one too. They will be displayed under thhe CXL Tools (**see image**).\n![image006.jpg](https://innolab-stage.accenture.com/innolab-dev-api/uploads/image006_b27bbdc9b9.jpg)\n",
                "synops_section_parent": 1,
                "Position": 7,
                "published_at": "2021-11-24T17:20:29.792Z",
                "created_at": "2021-11-23T22:59:34.530Z",
                "updated_at": "2021-11-30T15:23:48.862Z"
            }
        ]
    },
    {
        "id": 2,
        "SectionTitle": "How to",
        "Key": null,
        "published_at": "2021-11-24T17:20:42.746Z",
        "created_at": "2021-11-23T22:28:47.223Z",
        "updated_at": "2021-11-24T17:20:42.754Z",
        "synops_section_children": [
            {
                "id": 9,
                "Title": "All about your requests",
                "SectionBody": "# The Dashboard menu\n\nYou will be able to find in the Dashboard a high level of all that is going on with your requests. However, you can dig deeper. In the upper left menu, you will be able to check the info under three categories: **Ongoing** (active requests), **Archive** (completed requests), and **Drafts** (unfinished requests, saved automatically in case that you need to continue working on them later). When you select any of them, you will be presented with a full list, but also with some useful **tools that can help you find your information** with more precision.\n![image007.png](https://innolab-stage.accenture.com/innolab-dev-api/uploads/image007_5111589e7e.png)\n\n\n# The Ongoing tab\n\nWhen you select the ongoing tab from the menu, you will receive a list of all tickets that are ongoing, from newest to oldest. However, you can change the order of the info with the table titles. You can see which of the requests you are following, and also perform some additional actions with the requests displayed. To learn more on the actions you can take, you can review here.\n\nThe columns and data displayed are set based on common practices, but if required, they can be tailored for the specific needs of your operation. If you want to consider this, contact your support team to find out more.\n![image009.png](https://innolab-stage.accenture.com/innolab-dev-api/uploads/image009_f33b8c191a.png)\n",
                "synops_section_parent": 2,
                "Position": 1,
                "published_at": "2021-11-24T17:20:47.652Z",
                "created_at": "2021-11-23T23:04:00.992Z",
                "updated_at": "2021-11-30T15:26:47.762Z"
            },
            {
                "id": 10,
                "Title": "Managing user preferences",
                "SectionBody": "You can customize the new Synops CXL 2.0 experience according to your specific needs and organize the information in case that you are not using the tool. For example, if you need to keep traveling, or are out of the office. For these situations, it is helpful to receive an email that brings you the updates. You can set the email notifications for status changes, pending approval, comments, or new requests in the user preferences section.\n\nPD.: Stay tuned and expect even more personalized functions in upcoming releases.\n![image011.png](https://innolab-stage.accenture.com/innolab-dev-api/uploads/image011_545d67791d.png)\n",
                "synops_section_parent": 2,
                "Position": 2,
                "published_at": "2021-11-24T17:20:53.107Z",
                "created_at": "2021-11-23T23:06:57.596Z",
                "updated_at": "2021-11-30T15:27:43.997Z"
            },
            {
                "id": 11,
                "Title": "Requesting your work",
                "SectionBody": "Since every operation has a different set of needs and processes, all the request forms are tailormade. The process of creating a request is essentially filling a form that has custom made questions for your own processes. However, the following information might apply to all cases:\n\n1) Select the **+New Request** purple button that appears in the upper right corner of your screen to place your new solicitation.\n\n2) When needed, you could be prompted to add a description, a specific URL, and drop any attachment or document for the follow-up.\n\n3) Fill the different fields that appear, requesting specific information to redirect your request to the correct team. Mandatory fields have **(*)**.\n\n4) Once all info is entered, click on the **Place request** green button. You can edit the request later; in case you want to add more details or change the dates.\n\n5) You will be offered to clone the current request if you need to or create a brand new one.\n\n6) Once the request is placed, it should appear in the main dashboard, listed in the lower left side of your screen, under latest requests. Here, you can track its progress and all the whereabouts.",
                "synops_section_parent": 2,
                "Position": 3,
                "published_at": "2021-11-24T17:20:57.745Z",
                "created_at": "2021-11-23T23:08:23.528Z",
                "updated_at": "2021-11-24T17:20:57.752Z"
            },
            {
                "id": 12,
                "Title": "Filters: an easier way to get up to date with your own work",
                "SectionBody": "We understand that in every operation, locating your work and pending actions can be a challenge. That is why, with the new experience of Synops 2.0, you can easily locate the information that you need to see. Filters appear when you select from the **dashboard** any of the tabs for Ongoing, or Archive. \n\nWith the activation of the filter options, you can organize your work under two categories: \n\n**1)** the assignments that belong to you, and \n**2)** your pending actions.\n![image013.png](https://innolab-stage.accenture.com/innolab-dev-api/uploads/image013_65d977e45f.png)\n",
                "synops_section_parent": 2,
                "Position": 4,
                "published_at": "2021-11-24T17:21:02.463Z",
                "created_at": "2021-11-23T23:22:07.571Z",
                "updated_at": "2021-11-30T15:28:48.024Z"
            },
            {
                "id": 13,
                "Title": "Search: find by name or keywords",
                "SectionBody": "We have a search bar enabled that can help you fetch the information based on ticket name or data input that was used at the moment of creating the request. As you type the work you want to search, the results will appear immediately.\n![image015.png](https://innolab-stage.accenture.com/innolab-dev-api/uploads/image015_0b3d4489b3.png)\n",
                "synops_section_parent": 2,
                "Position": 5,
                "published_at": "2021-11-24T17:21:07.728Z",
                "created_at": "2021-11-23T23:22:43.768Z",
                "updated_at": "2021-11-30T15:30:03.894Z"
            },
            {
                "id": 14,
                "Title": "Group by: showing information split by data type",
                "SectionBody": "You can be surprised about the many ways in which you will be able to review the requests! For example, if you need to fetch information for an ongoing request. Say for instance, you don’t know what the name was, but you know who placed this request. Or maybe, the date when it was requested. The group by feature (available only when viewing Ongoing requests), allows you to use those facts to discover the information. You will find some specific criteria to group by like status, primary contact, among others. The truth is that you can ask and customize the data on whatever types of group by your business needs. Let's see how the group by function works:\n\n1. In the **Group by** dropdown, select the data criteria that you need\n\n2. The group by information will be presented in tabs (say, tickets owned by John Doe and the rest of the team)\n\n3. Select the data criteria that you are looking for, and it will display requests created under that domain.\n\n![image017.png](https://innolab-stage.accenture.com/innolab-dev-api/uploads/image017_1bc58c5f40.png)\n",
                "synops_section_parent": 2,
                "Position": 6,
                "published_at": "2021-11-24T17:21:18.200Z",
                "created_at": "2021-11-23T23:23:39.153Z",
                "updated_at": "2021-11-30T15:31:27.575Z"
            },
            {
                "id": 15,
                "Title": "Stay in the loop: notifications",
                "SectionBody": "Notifications allow you, as in the social media apps, to understand what is new regarding any of your requests. Just click on the little bell icon located in the upper right corner, and find all the pending updates for your work, organized chronologically from new to old.\n\nWith every update you are presented, you have the option to **view more details** if you need to act, or **mark as read**, to dismiss from your notifications list.",
                "synops_section_parent": 2,
                "Position": 7,
                "published_at": "2021-11-24T17:21:25.483Z",
                "created_at": "2021-11-23T23:25:36.741Z",
                "updated_at": "2021-11-24T17:21:25.490Z"
            },
            {
                "id": 16,
                "Title": "Tips for getting the best out of comments",
                "SectionBody": "![image019.png](https://innolab-stage.accenture.com/innolab-dev-api/uploads/image019_71911c6f1c.png)\n\n**Comments** can be useful to share insights and provide feedback. With Synops 2.0 you can create **nested comments** that allow you to continue a conversation on a particular topic that might not be in the line of the other comments. Also, to make sure that nothing falls under the cracks for you or someone in your team, you can notify people (this feature works similar to tags in social media, where the person you mention is notified about it).\n\nTo use comments:\n\n1. **Find **the request you need to work on and open it.\n\n2. In the left section, make sure the comments button is activated (it should appear as default).\n\n3. Submit your comment. Remember, you have the option of using rich text, which brings you the possibilities of adding some effects on the types, and hypertext.\n\n4. The lower section of the box that pops up allows you to drop a file or browse in your computer if you need to **attach** a file.\n\n5. If you want to notify someone, click below the textbox on the option **@notify**. It will prompt a box where you can type names of your peers. As you type, you will see a list of the peers that align to the characters you are typing. Select the one you are looking for. You can repeat the process if you need to notify more than one person.\n\n6. Once your comment is complete, hit **“Add Reply”**.",
                "synops_section_parent": 2,
                "Position": 8,
                "published_at": "2021-11-24T17:21:31.696Z",
                "created_at": "2021-11-23T23:33:53.366Z",
                "updated_at": "2021-11-30T15:32:33.812Z"
            },
            {
                "id": 17,
                "Title": "Reviewing your work (approvals)",
                "SectionBody": "![image021.png](https://innolab-stage.accenture.com/innolab-dev-api/uploads/image021_b30119ef2e.png)\n\nThere are many ways to do it, but the easiest one is probably going to the main dashboard and locate in the lower area of the screen the option **Pending Approvals**. To help you keep track of your pending work, items are listed from oldest to newest, so that you keep visibility of whatever could fall under the cracks.\n\nAnother way to do it is using the Filters. The easiest way to review the requests that need your approval is using the **Show my assignments filter**.\n\nA confirmation screen will appear every time you approve or reject a request. This will make it easier for you to make sure that the action was taken correctly.",
                "synops_section_parent": 2,
                "Position": 9,
                "published_at": "2021-11-24T17:21:38.129Z",
                "created_at": "2021-11-23T23:35:00.766Z",
                "updated_at": "2021-11-30T15:33:17.890Z"
            }
        ]
    },
    {
        "id": 3,
        "SectionTitle": "Grounders",
        "Key": null,
        "published_at": "2021-11-24T17:22:00.848Z",
        "created_at": "2021-11-23T22:29:48.581Z",
        "updated_at": "2021-11-24T17:22:00.855Z",
        "synops_section_children": [
            {
                "id": 18,
                "Title": "Requests: basic anatomy",
                "SectionBody": "Every time you check on a request, you will be presented with detailed information. At the top of the screen, you will note the percentage of progress, status, primary contact, and info related to when it was created, the planned start and end dates.\n\nYou can also have the possibility to review more about your project in the **Sections** and **Actions** options that appear on the menu at the left.\n\n![image024.jpg](https://innolab-stage.accenture.com/innolab-dev-api/uploads/image024_4ed4264757.jpg)\n",
                "synops_section_parent": 3,
                "Position": 1,
                "published_at": "2021-11-24T17:22:04.037Z",
                "created_at": "2021-11-23T23:37:50.793Z",
                "updated_at": "2021-11-30T15:41:44.326Z"
            },
            {
                "id": 19,
                "Title": "Sections: how your request is organized",
                "SectionBody": "Sections are basically split views of your project in separate categories that allow you to see the components of your request. You can find basically 4:\n\n![image025.png](https://innolab-stage.accenture.com/innolab-dev-api/uploads/image025_4cae790f3e.png)\n\n\n● **Comments:** where you can provide feedback and updates on the progress of your request. Learn some of the best practices on how to do this better in **Tips for getting the best out of comments**.\n\n● **Attachments:** An easy way to find a log of all the documents attached to the ticket. Please note, this section should not be confused with the ability to attach you can find in **actions**.\n\n● **Approvals:** The pending actions regarding the work you have to review and approve / reject appear in this section. Learn more on how to review your requests, **here**. Please note that Approvals will not appear if your request does not imply having that review done.\n\n● **Milestones:** When your operation was onboarded, our team tried to map out the processes implied on each of your regular tasks. Some of them have phases that we call milestones. You can get a status report of how each one of those work in this section, shown **under a color code**. Please note: Milestones are a project-only feature, so you may not always find the milestone section.",
                "synops_section_parent": 3,
                "Position": 2,
                "published_at": "2021-11-24T17:22:11.044Z",
                "created_at": "2021-11-23T23:40:04.567Z",
                "updated_at": "2021-11-30T15:42:44.412Z"
            },
            {
                "id": 20,
                "Title": "Actions: things you can do with your request",
                "SectionBody": "In every request, you are allowed to perform some actions that appear in the mid-left section of your page, listed under the menu. The actions you will see are:\n\n![image027.png](https://innolab-stage.accenture.com/innolab-dev-api/uploads/image027_a5c71a50ef.png)\n\n\n● **Comment: **You can add reviews, notify, and attach documents to enrich the progress of your note. You can also notify others (just as you tag people on social media). Learn more on how to do it well,** here.**\n\n● **Attach:** By selecting this option, you are allowed to drop a file or add from your computer a file that you need to attach to the request. Please note, you can also **attach files in the comments section** if you need to.\n\n● **Replicate:** It could be very practical that if you have to do a\n\ndelivery that has similar characteristics on the regular basis, to be able to do it exactly like a previous one, with a tweak or two. That’s when this option comes available. You can clone a request, go over a similar process, but with options pre-filled with the settings of the request you are cloning, and then change only what you need to update.\n\n● **Original request:** If you used the replicate option to create a request based on a previous one, this one allows you to view how the original request was made, and even download a file with all the data contained in the first request.\n\n● **Follow: **There could be many reasons why you need to keep your eyes on the progress of one request. If you want to do so, the follow option allows you to “subscribe” to the ticket that was placed and receive notifications about the development of the task. When you follow a request, it shows you that you are following it at the top of it.\n\n● **Share: **You could also need to delegate the oversight of a request to one or more team members. To do that, use this option. Similar to Follow, the people you share your request with will be able to receive notifications that help ease out the oversight. When you activate it, simply add the names of those you need to keep in the loop, and you can create a custom message that will be delivered to them. This action will notify them that they are included on updates regarding a particular request.",
                "synops_section_parent": 3,
                "Position": 3,
                "published_at": "2021-11-24T17:22:14.687Z",
                "created_at": "2021-11-23T23:42:18.754Z",
                "updated_at": "2021-11-30T15:43:31.700Z"
            },
            {
                "id": 21,
                "Title": "Visual language: a code to make it even faster",
                "SectionBody": "We have worked on creating an interface that is both intuitive and informative. But we also created a couple of bonuses. To make things faster to grasp, we came up with visual clues that rely on iconography and colors so that you can review (even faster) the status of your work.\n\n![Screenshot 2021-11-30 094428.jpg](https://innolab-stage.accenture.com/innolab-dev-api/uploads/Screenshot_2021_11_30_094428_d45af7d4d1.jpg)\n",
                "synops_section_parent": 3,
                "Position": 4,
                "published_at": "2021-11-24T17:22:20.271Z",
                "created_at": "2021-11-23T23:43:50.180Z",
                "updated_at": "2021-11-30T15:45:59.942Z"
            },
            {
                "id": 22,
                "Title": "Colors to measure your project’s health",
                "SectionBody": "The health of a project is a reference that allows us to understand the criticality of a project in terms of how much progress and time left we have to complete it. It basically provides a value that measures the complexity and time estimated against the due date that has been requested. When you place a request and the issue has not been assigned a value, it should appear in gray.\n\nAfter that and depending on how the request has been classified (whether it's a project, task, or issue), the colors used may vary, but the message conveys a consistent level of awareness, as you can see in the information below.\n\n● **Green:** Could mean on target, on time, or going smoothly.\n\n● **Yellow:** At risk, behind, or some concerns.\n\n● **Red:** stands by in trouble, late or major roadblocks.",
                "synops_section_parent": 3,
                "Position": 5,
                "published_at": "2021-11-24T17:22:24.718Z",
                "created_at": "2021-11-23T23:44:58.533Z",
                "updated_at": "2021-11-24T17:22:24.726Z"
            }
        ]
    },
    {
        "id": 4,
        "SectionTitle": "The future",
        "Key": null,
        "published_at": "2021-11-24T17:22:35.869Z",
        "created_at": "2021-11-23T22:30:07.921Z",
        "updated_at": "2021-11-24T17:22:35.880Z",
        "synops_section_children": [
            {
                "id": 23,
                "Title": "What can we expect to see in the next updates of Synops?",
                "SectionBody": "The latest update of Synops goes beyond just the user experience. We did important updates on architecture and structure to pave the way for more. In the incoming releases, we are about to introduce improvements in many fields. Our main focuses will be on accessibility, personalization, responsive design for a wider set of devices, and a wider range of languages.",
                "synops_section_parent": 4,
                "Position": 1,
                "published_at": "2021-11-24T17:22:38.722Z",
                "created_at": "2021-11-23T23:45:46.548Z",
                "updated_at": "2021-11-24T17:22:38.732Z"
            },
            {
                "id": 24,
                "Title": "Is there a Synops app in the works?",
                "SectionBody": "Not for now. Our focus for now is a responsive approach. You will be able to access through your web browser, to make sure you can use Synops for Marketing CXL with both your desktop and your mobile devices.",
                "synops_section_parent": 4,
                "Position": 2,
                "published_at": "2021-11-24T17:22:44.029Z",
                "created_at": "2021-11-23T23:46:20.107Z",
                "updated_at": "2021-11-24T17:22:44.040Z"
            }
        ]
    },
    {
        "id": 5,
        "SectionTitle": "Troubleshooting",
        "Key": null,
        "published_at": "2021-11-24T17:23:32.415Z",
        "created_at": "2021-11-23T22:30:41.542Z",
        "updated_at": "2021-11-24T17:23:32.425Z",
        "synops_section_children": [
            {
                "id": 25,
                "Title": "Where can you find support in case you have more questions?",
                "SectionBody": "You can channel your concerns, questions or report any issues using one of the listed options below:\n\n1) Reach the Synops support team, using the **Contact Us** form, available in the footer of the platform. 2) Write to us: at synopsfmsupport@accenture.com and we will be happy to reply to all your questions.\n\n3) Watch the launch session Demo. Feel free to review and share the recording of the session with your team: **Synops for Marketing CXL 2.0 | Launch Webinar - Accenture - Media Exchange**",
                "synops_section_parent": 5,
                "Position": 1,
                "published_at": "2021-11-24T17:23:35.629Z",
                "created_at": "2021-11-23T23:47:26.589Z",
                "updated_at": "2021-11-24T17:23:35.638Z"
            }
        ]
    },
    {
        "id": 6,
        "SectionTitle": "Foreword",
        "Key": null,
        "published_at": "2021-11-24T17:19:31.627Z",
        "created_at": "2021-11-23T22:39:15.202Z",
        "updated_at": "2021-11-24T17:19:31.638Z",
        "synops_section_children": [
            {
                "id": 1,
                "Title": null,
                "SectionBody": "On a regular basis, people's ingenuity and technology grow in a separate journey, but it is a gamechanger when you try to make them happen in conjunction. And that is what we aim to create with the Synops project.\n\nOur vision is to shape a fusion between human and machine, that brings out the best of both worlds. It has the accuracy, speed and efficiency of machines, but incorporates the human skills that are not replicable by artificial intelligence. This approach takes innovation to the next level, and create a natural evolution on how things should be done. We envision a world where machines and people coexist and unleash the best for each other.\n\nWith this version, we are making sure that in terms of infrastructure we are including important improvements that will allow us to have a safer, more scalable and efficient platform. And we have also dedicated a lot of time to ensure we are incorporating how human needs do change and evolve.\n\nBehind this upgrade to 2.0, we have lots of research, interviews, meaningful insights and feedback that allow us to make this experience a human centric one. And we truly believe that with the new layout and user experience, you will be able to experience a simple, intuitive and friendly interface. We also have expanded the experience beyond the regular laptop to other devices, and there is more to come.\n\nIn this document, we try to cover a glimpse of what you will find:\n\n· The **new things** you will find in this experience\n\n· **How to** get the best out of it\n\n· We are also **revisiting some of the things** you could have found in the previous version, but we share with you how the new experience has improved its use\n\n· And we give you a little hint on **what we can expect** to see in the short, and mid-term future.\n\nThe responsibility of keeping up with innovation in both the human experience and the technology front is not an easy one, but it is fascinating. And we thank you because with your support, we are taking it to unexpected levels.\n\n**The Synops Team**",
                "synops_section_parent": 6,
                "Position": null,
                "published_at": "2021-11-24T17:19:35.200Z",
                "created_at": "2021-11-23T22:47:28.113Z",
                "updated_at": "2021-11-24T17:19:35.208Z"
            }
        ]
    }
]



function SynopsFaqHeroVideo() {
    return (
        <Container fluid>
        <video autoPlay muted loop id="SynopsVideo">
           <source src={video} type="video/mp4"></source>
        </video>
        </Container>
    )
}

// eslint-disable-next-line no-unused-vars
function SynopsList() {
      
    return (
        <>
        <div></div>
        <SynopsAcordion list={{list}}> </SynopsAcordion>
       </>
    );
  }


function SynopsFaq() {
  
// eslint-disable-next-line no-unused-vars

var cardInfo =[];



    React.useEffect(() => {  
       
        getInitialData();
}, []);



    const getInitialData = async () => {
      const ret = await getSynopsSectionParent()
       if (ret) {
        // eslint-disable-next-line no-unused-vars
         cardInfo = ret.data
        
       }else{
        console.log('Error');
       }
    }


    return (
      <Container fluid  >
        <Row>
            <Col xs={12} md={12} lg={12} >
                <SynopsFaqHeroVideo clas></SynopsFaqHeroVideo>
            </Col>
        </Row>
        <Row>
            <section className="SectionLinks">
            {list.map((cardInfo) => (
                 <>     
                   <Col xs={12} md={12} lg={12}>   
                      <Row>  
                      
                      <Link to={"#" + cardInfo.SectionTitle} className="text-white text-uppercase"><h3>{cardInfo.SectionTitle}</h3></Link>
 
                      </Row>
                  </Col>
                 </>
            ))}
            </section>
        </Row>
        <Row>
            <Col xs={12} md={12} lg={12}  className="cardBg" key={cardInfo.id} >  
                    {list.map((cardInfo) => (
                    <>
                    <Container className="SynopsCard">
                        <h3 id={cardInfo.SectionTitle} className="SectionTitle w-100 mt-2 text-white text-uppercase">{cardInfo.id + " " + "-" + " "}{cardInfo.SectionTitle}</h3>
                        <SynopsAcordion  key={cardInfo.Position} cardInfo={cardInfo.synops_section_children}></SynopsAcordion>
                    </Container>
                    </>
                    ))}
            </Col>
        </Row>
        <Row className="SectionSynopsFaqForm">
           
                <Col xs={12} md={12} lg={12}>
                    <SynopsFaqForm></SynopsFaqForm>
                </Col>
          
        </Row>
      </Container>
    );
  }

 
  export default SynopsFaq;



  