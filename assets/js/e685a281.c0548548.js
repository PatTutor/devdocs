"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[44434],{83845:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return u}});var o=a(83117),r=a(80102),i=(a(67294),a(3905)),s=a(13904),n=["components"],l={title:"Moodle 1.9.3",tags:["Release notes","Moodle 1.9"],sidebar_position:3,moodleVersion:"1.9.3"},d=void 0,m={unversionedId:"releases/1.9/1.9.3",id:"releases/1.9/1.9.3",title:"Moodle 1.9.3",description:"Release date: 15th October 2008",source:"@site/general/releases/1.9/1.9.3.md",sourceDirName:"releases/1.9",slug:"/releases/1.9/1.9.3",permalink:"/devdocs/general/releases/1.9/1.9.3",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/1.9/1.9.3.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 1.9",permalink:"/devdocs/general/tags/moodle-1-9"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1654768990,formattedLastUpdatedAt:"09/06/2022",sidebarPosition:3,frontMatter:{title:"Moodle 1.9.3",tags:["Release notes","Moodle 1.9"],sidebar_position:3,moodleVersion:"1.9.3"},sidebar:"releaseNotes",previous:{title:"Moodle 1.9.2",permalink:"/devdocs/general/releases/1.9/1.9.2"},next:{title:"Moodle 1.9.4",permalink:"/devdocs/general/releases/1.9/1.9.4"}},p={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"New language pack",id:"new-language-pack",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function h(e){var t=e.components,a=(0,r.Z)(e,n);return(0,i.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s.Z,(0,o.Z)({frontMatter:l},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,i.kt)("p",null,"Release date: 15th October 2008"),(0,i.kt)("p",null,"Here is ",(0,i.kt)("a",{parentName:"p",href:"http://tracker.moodle.org/secure/BrowseVersion.jspa?id=10011&versionId=10290&showOpenIssuesOnly=false"},"the full list of fixed issues in 1.9.3"),"."),(0,i.kt)("h2",{id:"highlights"},"Highlights"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Major ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/SCORM_module"},"SCORM module")," improvements",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Passes all SCORM 1.2 Conformance tests"),(0,i.kt)("li",{parentName:"ul"},"Improved Visualisation of SCORM objects"),(0,i.kt)("li",{parentName:"ul"},"New Debug tool"),(0,i.kt)("li",{parentName:"ul"},"Improved handling of AICC objects"),(0,i.kt)("li",{parentName:"ul"},"Better cross-platform compatible JavaScript"),(0,i.kt)("li",{parentName:"ul"},"Improved the interaction of SCO completion and Gradebook interaction"),(0,i.kt)("li",{parentName:"ul"},"TOC fixes - structure, expand/collapse, and prerequisites"),(0,i.kt)("li",{parentName:"ul"},"Corrected element behaviour for cmi.objectives, cmi.comments_from_learner, cmi.interactions,  cmi.launch_data"))),(0,i.kt)("li",{parentName:"ul"},"New capabilities: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/Capabilities/moodle/role/safeoverride"},"moodle/role:safeoverride"),", ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/Capabilities/moodle/course/changefullname"},"moodle/course:changefullname"),", ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/Capabilities/moodle/course/changeidnumber"},"moodle/course:changeidnumber")," and ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/Capabilities/moodle/course/changeshortname"},"moodle/course:changeshortname")),(0,i.kt)("li",{parentName:"ul"},"New option in ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/HTML_settings"},"HTML settings")," to allow HTML tags in activity and resource names"),(0,i.kt)("li",{parentName:"ul"},"Improved detection of misconfigured dataroot directory"),(0,i.kt)("li",{parentName:"ul"},"New ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Manage_authentication"},"Manage authentication")," setting for relaxing email domain restrictions when changing email"),(0,i.kt)("li",{parentName:"ul"},"New ",(0,i.kt)("a",{parentName:"li",href:"/docs/apis/plugintypes/enrol"},"Enrolments")," setting for disabling the email welcome message which users receive when they self-enrol in a course"),(0,i.kt)("li",{parentName:"ul"},"New ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Internal_enrolment"},"Internal enrolment")," setting for disabling the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Enrolment_key"},"enrolment key")," hint"),(0,i.kt)("li",{parentName:"ul"},"New ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Gradebook_report_settings"},"Gradebook report setting")," to show/hide percentages in the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/User_report"},"user report")),(0,i.kt)("li",{parentName:"ul"},"New ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Statistics"},"statistics setting")," for specifying the maximum number of days processed in each stats execution"),(0,i.kt)("li",{parentName:"ul"},"Checkbox ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/User_profile_fields"},"user profile field")),(0,i.kt)("li",{parentName:"ul"},"Indication for administrators when a site is in ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Maintenance_mode"},"Maintenance mode")),(0,i.kt)("li",{parentName:"ul"},"Fix for major ",(0,i.kt)("a",{parentName:"li",href:"/docs/apis/subsystems/groups"},"groups")," upgrade problem"),(0,i.kt)("li",{parentName:"ul"},"Fix for Firefox password manager problem"),(0,i.kt)("li",{parentName:"ul"},"Fixes for course category edit and add capabilities problems"),(0,i.kt)("li",{parentName:"ul"},"Multiple choice questions in quizzes. Following feedback, we have reversed the change in Moodle 1.9 that showed students feedback to all option, not just the ones they had selected. (",(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-14643"},"MDL-14643"),")"),(0,i.kt)("li",{parentName:"ul"},"The regression in 1.9.2 that broke images in quiz questions has been fixed."),(0,i.kt)("li",{parentName:"ul"},"Starting in October 2008, authorize.net codes need true 10cc integers. (",(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-16715"},"MDL-16715"),")")),(0,i.kt)("h2",{id:"security-issues"},"Security issues"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=108587"},"MSA-08-0019"),": customised PhpMyAdmin package upgraded to 2.11.9.2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=108588"},"MSA-08-0020"),": quiz/questions capabilities lack some risk flags in access.php files"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=108589"},"MSA-08-0021"),": design deficiency combined with incorrect use of format_string() allowing XSS"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=108590"},"MSA-08-0022"),": XSS through Wiki page titles"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=108591"},"MSA-08-0023"),": CSRF in messaging setting"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=108592"},"MSA-08-0024"),": Overriding of frozen values in Moodle forms"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=108593"},"MSA-08-0025"),": SQL injection in tags code"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=108594"},"MSA-08-0026"),": customised HTML Purifier upgraded to 2.1.5")),(0,i.kt)("h2",{id:"new-language-pack"},"New language pack"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bangla - Razib Mustafiz")),(0,i.kt)("p",null,"(See ",(0,i.kt)("a",{parentName:"p",href:"https://docs.moodle.org/en/Translation_credits"},"Translation credits")," for additional details.)"),(0,i.kt)("h2",{id:"translations"},"Translations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/19/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_1.9.3"},"French version of this page"))))}h.isMDXComponent=!0}}]);