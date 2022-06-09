"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[23728],{25799:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var o=a(83117),r=a(80102),l=(a(67294),a(3905)),i=a(13904),n=["components"],s={title:"Moodle 2.0",tags:["Release notes","Moodle 2.0"],sidebar_position:-200,moodleVersion:"2.0"},d=void 0,u={unversionedId:"releases/2.0",id:"releases/2.0",title:"Moodle 2.0",description:"Moodle 2.0",source:"@site/general/releases/2.0.md",sourceDirName:"releases",slug:"/releases/2.0",permalink:"/devdocs/general/releases/2.0",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.0.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.0",permalink:"/devdocs/general/tags/moodle-2-0"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1654768990,formattedLastUpdatedAt:"09/06/2022",sidebarPosition:-200,frontMatter:{title:"Moodle 2.0",tags:["Release notes","Moodle 2.0"],sidebar_position:-200,moodleVersion:"2.0"},sidebar:"releaseNotes",previous:{title:"Moodle 2.1.10",permalink:"/devdocs/general/releases/2.1/2.1.10"},next:{title:"Moodle 2.0.1",permalink:"/devdocs/general/releases/2.0/2.0.1"}},m={},p=[{value:"Moodle 2.0",id:"moodle-20",level:2},{value:"Major new features",id:"major-new-features",level:3},{value:"Community hubs",id:"community-hubs",level:4},{value:"Repository support",id:"repository-support",level:4},{value:"Portfolio support",id:"portfolio-support",level:4},{value:"Course completion and prerequisites",id:"course-completion-and-prerequisites",level:4},{value:"Conditional activities",id:"conditional-activities",level:4},{value:"Cohorts",id:"cohorts",level:4},{value:"Web services support",id:"web-services-support",level:4},{value:"New blocks",id:"new-blocks",level:4},{value:"Plagiarism prevention",id:"plagiarism-prevention",level:4},{value:"Major improvements to existing core features",id:"major-improvements-to-existing-core-features",level:3},{value:"Backup and restore",id:"backup-and-restore",level:4},{value:"Blocks",id:"blocks",level:4},{value:"Blogs",id:"blogs",level:4},{value:"Comments",id:"comments",level:4},{value:"Enrolment plugins",id:"enrolment-plugins",level:4},{value:"File handling",id:"file-handling",level:4},{value:"Filters 2.0",id:"filters-20",level:4},{value:"HTML editor",id:"html-editor",level:4},{value:"Messaging",id:"messaging",level:4},{value:"My Moodle page",id:"my-moodle-page",level:4},{value:"Navigation",id:"navigation",level:4},{value:"Ratings",id:"ratings",level:4},{value:"Roles and permissions",id:"roles-and-permissions",level:4},{value:"RSS feeds",id:"rss-feeds",level:4},{value:"Themes",id:"themes",level:4},{value:"Translation system",id:"translation-system",level:4},{value:"User profile pages",id:"user-profile-pages",level:4},{value:"Major improvements to activity modules",id:"major-improvements-to-activity-modules",level:3},{value:"Lesson",id:"lesson",level:4},{value:"Quiz module and question bank",id:"quiz-module-and-question-bank",level:4},{value:"Resource",id:"resource",level:4},{value:"SCORM",id:"scorm",level:4},{value:"Wiki",id:"wiki",level:4},{value:"Workshop",id:"workshop",level:4},{value:"System requirements",id:"system-requirements",level:3},{value:"Upgrading",id:"upgrading",level:3},{value:"For developers: API changes",id:"for-developers-api-changes",level:3},{value:"Credits",id:"credits",level:3},{value:"Translations",id:"translations",level:2}],c={toc:p};function h(e){var t=e.components,a=(0,r.Z)(e,n);return(0,l.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(i.Z,(0,o.Z)({frontMatter:s},void 0!==u?{metadata:u}:{},{mdxType:"MoodlePageBanner"})),(0,l.kt)("h2",{id:"moodle-20"},"Moodle 2.0"),(0,l.kt)("p",null,"Release date: 24th November 2010"),(0,l.kt)("p",null,"Moodle 2.0 contains a lot of large new features, some completely rewritten features, and hundreds of bug fixes.  For full details (more than you probably want!), see ",(0,l.kt)("a",{parentName:"p",href:"http://tracker.moodle.org/browse/MDL/fixforversion/10122"},"the full list of fixed issues in 2.0"),"."),(0,l.kt)("h3",{id:"major-new-features"},"Major new features"),(0,l.kt)("h4",{id:"community-hubs"},(0,l.kt)("a",{parentName:"h4",href:"https://docs.moodle.org/dev/Community_hub"},"Community hubs")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Anybody can set up a Community hub, which is a directory of courses for public use or for private communities.  The code is implemented as separate GPL plugin for Moodle."),(0,l.kt)("li",{parentName:"ul"},"Sites can register to any Community hub (instead of just moodle.org)"),(0,l.kt)("li",{parentName:"ul"},"Teachers on registered sites can publish their full courses to Community hubs, for download"),(0,l.kt)("li",{parentName:"ul"},"Teachers on registered sites can also advertise their courses on Community hubs, for people to join"),(0,l.kt)("li",{parentName:"ul"},"Teachers on any site can search all public Community hubs and download courses as templates for their own courses"),(0,l.kt)("li",{parentName:"ul"},"Users on any Moodle site can also search Community hubs for courses (and communities of practice) to participate in.  Initially we are encouraging ",(0,l.kt)("strong",{parentName:"li"},"'communities of teaching practice"),"' but any sort of course can be listed.")),(0,l.kt)("h4",{id:"repository-support"},(0,l.kt)("a",{parentName:"h4",href:"https://docs.moodle.org/en/Repositories"},"Repository support")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"File management has undergone a major change in both the interface and function."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/File_picker"},"File picker")," presents a standard way to access the new ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/File_bank"},"File bank")," repository system."),(0,l.kt)("li",{parentName:"ul"},"This allows Moodle to integrate with external repositories of content, making it really simple to bring documents and media into Moodle via an AJAX interface that looks like a standard ",(0,l.kt)("strong",{parentName:"li"},"Open")," dialogue in desktop applications."),(0,l.kt)("li",{parentName:"ul"},"Initial plugins in 2.0 include: Alfresco, Amazon S3, Box.net, File system on Server, Flickr, Google Docs, MERLOT, Picasa, Recent Files, WebDAV servers, Wikimedia, Youtube.  These are simple to develop, so many more are expected."),(0,l.kt)("li",{parentName:"ul"},"You can also import files from your desktop or by specifying a URL."),(0,l.kt)("li",{parentName:"ul"},"There are more attributes that can be added to a file, such as license and author.")),(0,l.kt)("h4",{id:"portfolio-support"},(0,l.kt)("a",{parentName:"h4",href:"https://docs.moodle.org/en/Portfolios"},"Portfolio support")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Modules can now export their data to external systems, particularly useful for portfolios where snapshots of forums, assignments and other things in Moodle are useful to record in a journal or a portfolio of evidence"),(0,l.kt)("li",{parentName:"ul"},"Different formats are supported (currently LEAP2A, HTML, Images and Text, but others like PDF can be added)"),(0,l.kt)("li",{parentName:"ul"},"Initial plugins in 2.0 include: Box.net, Flickr, Google Docs, ",(0,l.kt)("strong",{parentName:"li"},"Mahara")," and Picasa.")),(0,l.kt)("h4",{id:"course-completion-and-prerequisites"},(0,l.kt)("a",{parentName:"h4",href:"https://docs.moodle.org/dev/Course_completion"},"Course completion")," and prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Teachers can now specify a ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Course_completion"},"Course completion")," condition standard for all students.  Conditions include activity completion, but could also be by grade, date or a number of other criteria."),(0,l.kt)("li",{parentName:"ul"},"Teachers can use the above standard as a ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Course_completion_tracking"},"prerequisite")," to other courses that allows ordered progression and scaffolding."),(0,l.kt)("li",{parentName:"ul"},"Teachers and students can see reports that show the progress within a course, or through a series of courses.")),(0,l.kt)("h4",{id:"conditional-activities"},(0,l.kt)("a",{parentName:"h4",href:"https://docs.moodle.org/dev/Conditional_activities"},"Conditional activities")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Access to activities can be restricted based on certain criteria, such as dates, grade obtained, or the completion of another activity."),(0,l.kt)("li",{parentName:"ul"},"These can be chained together to enable progressive disclosure of the course content, if that is desired."),(0,l.kt)("li",{parentName:"ul"},"Teachers can now specify conditions that define when any ",(0,l.kt)("strong",{parentName:"li"},"activity")," is seen as ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Activity_completion"},"completed")," by a student.  For example, when a certain number of posts have been made, or a grade has been reached, or a choice has been made.")),(0,l.kt)("h4",{id:"cohorts"},(0,l.kt)("a",{parentName:"h4",href:"https://docs.moodle.org/dev/Cohorts"},"Cohorts")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Also known as "Site-wide groups", these are site-wide collections of users that can be enrolled into courses in one action, either manually or synchronised automatically')),(0,l.kt)("h4",{id:"web-services-support"},(0,l.kt)("a",{parentName:"h4",href:"https://docs.moodle.org/dev/Web_Services"},"Web services support")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Support for standards-based web services across the entire Moodle code base, allowing the admin to expose particular functions of Moodle for use by:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Administrative systems such as HR or SIS applications"),(0,l.kt)("li",{parentName:"ul"},"Mobile clients"))),(0,l.kt)("li",{parentName:"ul"},"Framework contains a very high-level of security with a detailed token system and complete control over the range of functions exposed"),(0,l.kt)("li",{parentName:"ul"},"All defined functions are automatically available via:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"XML-RPC"),(0,l.kt)("li",{parentName:"ul"},"AMF (Flash)"),(0,l.kt)("li",{parentName:"ul"},"REST"),(0,l.kt)("li",{parentName:"ul"},"SOAP (PHP)")))),(0,l.kt)("h4",{id:"new-blocks"},"New blocks"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Comments_block"},"Comments block")," - like a shoutbox, allows comments to be added to any page. Great for student feedback."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/My_private_files_block"},"My private files block")," - allows access to a user's private files, which can then be accessed by them anywhere with the ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/File_picker"},"File picker"),". There is quota management available."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Community_block"},"Community block")," - keeps track of external courses one is interested in"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Course_completion_status_block"},"Course completion status block")," - reports on the completion status of your courses")),(0,l.kt)("h4",{id:"plagiarism-prevention"},(0,l.kt)("a",{parentName:"h4",href:"https://docs.moodle.org/en/Plagiarism_Prevention"},"Plagiarism prevention")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Moodle supports integration with plagiarism prevention tools such as Turnitin")),(0,l.kt)("h3",{id:"major-improvements-to-existing-core-features"},"Major improvements to existing core features"),(0,l.kt)("h4",{id:"backup-and-restore"},(0,l.kt)("a",{parentName:"h4",href:"https://docs.moodle.org/dev/Backup_2.0"},"Backup and restore")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Completely rewritten Backup/Restore framework, no longer bound by memory (can work with ",(0,l.kt)("strong",{parentName:"li"},"any size course"),")."),(0,l.kt)("li",{parentName:"ul"},"Completely new backup format."),(0,l.kt)("li",{parentName:"ul"},"Improved interface."),(0,l.kt)("li",{parentName:"ul"},"Backup can be made of whole courses, but also specific sections or activities.")),(0,l.kt)("h4",{id:"blocks"},(0,l.kt)("a",{parentName:"h4",href:"https://docs.moodle.org/en/Blocks_2.0"},"Blocks")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Blocks are now consistently implemented on every page in Moodle"),(0,l.kt)("li",{parentName:"ul"},"No longer any limit to placing blocks in only the left and right column regions but also at the top, center or bottom of areas of pages)"),(0,l.kt)("li",{parentName:"ul"},"Any block can be ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Sticky_blocks"},"forced to appear")," in all the page ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Context"},"contexts")," below it (for example, in every course or throughout a course)."),(0,l.kt)("li",{parentName:"ul"},"Blocks can  placed in the ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Dock"},"Dock")," area on the side of the screen (if the theme supports it)")),(0,l.kt)("h4",{id:"blogs"},(0,l.kt)("a",{parentName:"h4",href:"https://docs.moodle.org/en/Blogs_2.0"},"Blogs")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Support for comments on each blog entry"),(0,l.kt)("li",{parentName:"ul"},"Removal of group-level and course-level blogs (these are converted into forums on upgrade)"),(0,l.kt)("li",{parentName:"ul"},"Support for external blog feeds (synchronised to Moodle blog)")),(0,l.kt)("h4",{id:"comments"},(0,l.kt)("a",{parentName:"h4",href:"https://docs.moodle.org/dev/Comments_2.0"},"Comments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"User comments (Glossaries, Databases, Blogs, etc) are now all consistently handled  and displayed throughout Moodle, using AJAX if available")),(0,l.kt)("h4",{id:"enrolment-plugins"},(0,l.kt)("a",{parentName:"h4",href:"https://docs.moodle.org/en/Enrolments_2.0"},"Enrolment plugins")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Major improvements in the handling of guests and guest accounts"),(0,l.kt)("li",{parentName:"ul"},"Support for multiple forms of enrolment at the same time"),(0,l.kt)("li",{parentName:"ul"},"More detailed control over enrolment in courses")),(0,l.kt)("h4",{id:"file-handling"},(0,l.kt)("a",{parentName:"h4",href:"https://docs.moodle.org/en/File_handling_2.0"},"File handling")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"There is a new ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/File_picker"},"File picker")," interface that manages files for resources and when they are used in an activity, such as including an image in a content page."),(0,l.kt)("li",{parentName:"ul"},"Full support for Unicode file names on all operating systems."),(0,l.kt)("li",{parentName:"ul"},"Metadata about each file (author, date, license, etc) and what the file is used for are stored in the database."),(0,l.kt)("li",{parentName:"ul"},"Duplicate files (for example, a large video file use in two different courses) are only stored once, saving disk space."),(0,l.kt)("li",{parentName:"ul"},'Security has been improved because files have the same contexual permissions as the activity that uses them. (For example, a file may belong to a file resource, a forum post or a wiki page ). Files are no longer just "uploaded to the course".')),(0,l.kt)("h4",{id:"filters-20"},(0,l.kt)("a",{parentName:"h4",href:"https://docs.moodle.org/dev/Filters_2.0"},"Filters 2.0")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In the past, you had to use the same filters everywhere in your Moodle site, and this could only be changed by admins."),(0,l.kt)("li",{parentName:"ul"},"Now, you can have different filters in different courses, activities or categories."),(0,l.kt)("li",{parentName:"ul"},"For example, you could turn on the LaTeX filter just for courses in the Maths and Physics categories."),(0,l.kt)("li",{parentName:"ul"},"Or you could turn off glossary linking in the end of course exam.")),(0,l.kt)("h4",{id:"html-editor"},(0,l.kt)("a",{parentName:"h4",href:"https://docs.moodle.org/dev/HTML_editor_2.0"},"HTML editor")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"New editor based on TinyMCE"),(0,l.kt)("li",{parentName:"ul"},"Works on more browsers"),(0,l.kt)("li",{parentName:"ul"},"Resizable editing area"),(0,l.kt)("li",{parentName:"ul"},"Cleaner XHTML output"),(0,l.kt)("li",{parentName:"ul"},"Full integration with configured external repositories to import and embed media into text")),(0,l.kt)("h4",{id:"messaging"},(0,l.kt)("a",{parentName:"h4",href:"https://docs.moodle.org/dev/Messaging_2.0"},"Messaging")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"All email sent by Moodle is now treated as a message"),(0,l.kt)("li",{parentName:"ul"},"A message overview panel allows users to control how messages are sent to them"),(0,l.kt)("li",{parentName:"ul"},"Initial message output plugins in Moodle 2.0 include: Email, Jabber and Popups")),(0,l.kt)("h4",{id:"my-moodle-page"},(0,l.kt)("a",{parentName:"h4",href:"https://docs.moodle.org/dev/My_Moodle_2.0"},"My Moodle page")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"More customisable My Moodle page with new blocks for showing relevant information"),(0,l.kt)("li",{parentName:"ul"},"Admin can design (and optionally force) site-wide layouts for My Moodle"),(0,l.kt)("li",{parentName:"ul"},'My Moodle page given more prominence as the main "home page" for users')),(0,l.kt)("h4",{id:"navigation"},(0,l.kt)("a",{parentName:"h4",href:"https://docs.moodle.org/dev/Navigation_2.0"},"Navigation")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Standard "Navigation" block on every page showing contextual links, while allowing you to jump elsewhere quickly'),(0,l.kt)("li",{parentName:"ul"},'Standard "Settings" blocks on every page shows contextual settings as well as settings for anything else you have permissions for')),(0,l.kt)("h4",{id:"ratings"},(0,l.kt)("a",{parentName:"h4",href:"https://docs.moodle.org/dev/Ratings_2.0"},"Ratings")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"User ratings (Glossaries, Databases, Forums, etc) are now all consistently handled and displayed throughout Moodle, using AJAX if available"),(0,l.kt)("li",{parentName:"ul"},"Aggregation of using ratings into activity grades is now standardised in all activities")),(0,l.kt)("h4",{id:"roles-and-permissions"},(0,l.kt)("a",{parentName:"h4",href:"https://docs.moodle.org/en/Roles_2.0"},"Roles and permissions")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Simplified permission evaluation logic"),(0,l.kt)("li",{parentName:"ul"},"Improved and simplified AJAX interfaces for defining and assigning roles"),(0,l.kt)("li",{parentName:"ul"},"Improved and simplified interfaces for tweaking permissions in any given context"),(0,l.kt)("li",{parentName:"ul"},'New "Archetypes" concept replacing the "Legacy roles" concept.'),(0,l.kt)("li",{parentName:"ul"},'New archetype "manager" to define the role of most people with system-wide editing rights, separate from "admin" role.'),(0,l.kt)("li",{parentName:"ul"},'Permission of "Administrator" superusers can not be modified')),(0,l.kt)("h4",{id:"rss-feeds"},(0,l.kt)("a",{parentName:"h4",href:"https://docs.moodle.org/en/RSS_feeds_2.0"},"RSS feeds")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"All RSS feeds are now secured using a random per-user token in the URL"),(0,l.kt)("li",{parentName:"ul"},"Tokens can be updated by the user at any time (if they suspect a feed URL has been compromised)"),(0,l.kt)("li",{parentName:"ul"},"RSS feeds are now more accurate (eg they support forums with separate groups), and are generated efficiently whenever required")),(0,l.kt)("h4",{id:"themes"},(0,l.kt)("a",{parentName:"h4",href:"https://docs.moodle.org/dev/Themes_2.0"},"Themes")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Many new themes in the core distribution - see ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Theme_credits"},"Theme credits")," for a list"),(0,l.kt)("li",{parentName:"ul"},"All HTML and JS ouput is now far more efficient (server-side caching) and consistent (tableless layout, new CSS, YUI Framework)"),(0,l.kt)("li",{parentName:"ul"},"Themes can change the HTML of the page if they wish"),(0,l.kt)("li",{parentName:"ul"},"Core support for custom menus in all themes (for example at the top of the page)")),(0,l.kt)("h4",{id:"translation-system"},(0,l.kt)("a",{parentName:"h4",href:"https://docs.moodle.org/dev/Translation_2.0"},"Translation system")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://lang.moodle.org/"},"New web portal")," to make it easer for groups to collaborate on translating Moodle, and to keep their translations up-to-date."),(0,l.kt)("li",{parentName:"ul"},"More efficient ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Languages/AMOS"},"storage format for language strings")," should slightly improve performance.")),(0,l.kt)("h4",{id:"user-profile-pages"},"User profile pages"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Site-wide user profile page can be customised by users with blocks, news, feeds and so on"),(0,l.kt)("li",{parentName:"ul"},"Course-specific user profile pages show course blocks and standard profile information, plus information for teachers of that course")),(0,l.kt)("h3",{id:"major-improvements-to-activity-modules"},"Major improvements to activity modules"),(0,l.kt)("h4",{id:"lesson"},"Lesson"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Refactored internal code"),(0,l.kt)("li",{parentName:"ul"},"Forms are now standard Moodle forms")),(0,l.kt)("h4",{id:"quiz-module-and-question-bank"},"Quiz module and question bank"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/quiz_navigation"},"Quiz navigation improvements for students")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Flagging_questions_during_a_quiz_attempt"},"Flagging questions during a quiz attempt")," Student can mark a question that stays with their quiz."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Quiz_report_enhancements"},"Quiz report enhancements")," - Major improvements to the quiz reports, especially regrading and item analysis"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Quiz_report_statistics"},"Quiz report statistics")," - A brief guide"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Quiz_UI_redesign"},"Quiz editing interface improvements")),(0,l.kt)("li",{parentName:"ul"},"Different settings (open/close date, number of attempts, password, time limit) for each group or student (",(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-16478"},"MDL-16478"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Administration_page_for_question_types"},"Administration page for question types")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Moodle_2.0_question_bank_improvements"},"Question tagging and improved searching in the question bank")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-8648"},"MDL-8648")," Essay questions can now be randomised by random questions")),(0,l.kt)("h4",{id:"resource"},"Resource"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"All the resource types have been refactored into real modules, and cleaned up",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"File - for displaying a file, possibly with supporting files (like a HTML mini-site)"),(0,l.kt)("li",{parentName:"ul"},"Folder - for displaying a collection of documents"),(0,l.kt)("li",{parentName:"ul"},"URL - for displaying a page with a given URL"),(0,l.kt)("li",{parentName:"ul"},"Page - for a single page, edited online using the HTML editor"),(0,l.kt)("li",{parentName:"ul"},"IMS - for showing a regular IMS content package"))),(0,l.kt)("li",{parentName:"ul"},"Better XHTML-compliant support for frames, iframes and embedding in all these modules")),(0,l.kt)("h4",{id:"scorm"},"SCORM"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"New ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/SCORM_module"},"SCORM module")," settings - display attempt status, display course structure, force completed, force new attempt, lock after final attempt - allowing the behaviour dictated to the SCORM object by the authoring package to be changed ",(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-11501"},"MDL-11501")),(0,l.kt)("li",{parentName:"ul"},"New reporting interface including sortable/collapsible table with group select box and ability to download in Excel, ODS and text format ",(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-21555"},"MDL-21555")),(0,l.kt)("li",{parentName:"ul"},"New SCORM player UI with better navigation, improved performance and better handling of stage size ",(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-22951"},"MDL-22951"))),(0,l.kt)("h4",{id:"wiki"},(0,l.kt)("a",{parentName:"h4",href:"https://docs.moodle.org/en/Wiki_module_2.0"},"Wiki")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Completely re-written from scratch, based on NWIki from UPC"),(0,l.kt)("li",{parentName:"ul"},"Support for Mediawiki-style syntax, as well as Creole"),(0,l.kt)("li",{parentName:"ul"},"Interface improvements")),(0,l.kt)("h4",{id:"workshop"},(0,l.kt)("a",{parentName:"h4",href:"https://docs.moodle.org/en/Workshop_module_2.0"},"Workshop")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Completely rewritten from scratch"),(0,l.kt)("li",{parentName:"ul"},"Vastly improved interface for managing stages and users")),(0,l.kt)("h3",{id:"system-requirements"},"System requirements"),(0,l.kt)("p",null,"Since Moodle 2.0 is such a major release, we are allowing ourselves some increases in the requirements."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PHP must be 5.2.8 or later (it was released 08-Dec-2008), PHP 5.3.3 or later is recommended"),(0,l.kt)("li",{parentName:"ul"},"Databases should be one of the following:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MySQL 5.0.25 or later  (InnoDB storage engine highly recommended)"),(0,l.kt)("li",{parentName:"ul"},"PostgreSQL 8.3 or later"),(0,l.kt)("li",{parentName:"ul"},"Oracle 10.2 or later"),(0,l.kt)("li",{parentName:"ul"},"MS SQL 2005 or later"))),(0,l.kt)("li",{parentName:"ul"},"Any standards-supporting browser from the past few years, for example:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Firefox 3 or later"),(0,l.kt)("li",{parentName:"ul"},"Safari 3 or later"),(0,l.kt)("li",{parentName:"ul"},"Google Chrome 4 or later"),(0,l.kt)("li",{parentName:"ul"},"Opera 9 or later"),(0,l.kt)("li",{parentName:"ul"},"MS Internet Explorer 7 or later (Even ",(0,l.kt)("a",{parentName:"li",href:"http://googleenterprise.blogspot.com/2010/01/modern-browsers-for-modern-applications.html"},"Google doesn't support IE6 any more"),")"),(0,l.kt)("li",{parentName:"ul"},"etc")))),(0,l.kt)("h3",{id:"upgrading"},"Upgrading"),(0,l.kt)("p",null,"When upgrading to Moodle 2.0, you must have Moodle 1.9 or later.  if you are using an earlier version of Moodle (eg 1.8.x) then you need to upgrade to Moodle 1.9.x first. We advise that you test the upgrade first on a COPY of your production site, to make sure it works as you expect."),(0,l.kt)("p",null,"For further information, see ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Upgrading_to_Moodle_2.0"},"Upgrading to Moodle 2.0"),"."),(0,l.kt)("h3",{id:"for-developers-api-changes"},"For developers: API changes"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Migrating_contrib_code_to_2.0"},"Migrating contrib code to 2.0")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Plugin_system_changes_in_Moodle_2.0"},"Plugin system changes in Moodle 2.0")," - all the different types of plugin are now handles more consistently when it comes to installation and upgrading, capabilities, events, and so on."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/DB_layer_2.0_migration_docs"},"Database layer changes")," - you will need to update your code."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Using_the_file_API"},"File handling changes")," - you will need to update your code."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Migrating_your_code_to_the_2.0_rendering_API"},"Rendering layer changes")," - should be mostly backwards compatible, but you are advised to upgrade your code."),(0,l.kt)("li",{parentName:"ul"},"Require capability used to do an automatic require_login. It no longer does so. All pages must explicitly call require_login if they need it. ",(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-19882"},"MDL-19882")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Moodle_2.0_question_type_API_changes"},"Changes to the question type API")),(0,l.kt)("li",{parentName:"ul"},"MNet has been refactored and tidied up - related third party code needs to be checked"),(0,l.kt)("li",{parentName:"ul"},"Changes and improvements to the ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Local_customisation"},"Local customisation system"),"."),(0,l.kt)("li",{parentName:"ul"},"JavaScript"),(0,l.kt)("li",{parentName:"ul"},"YUI"),(0,l.kt)("li",{parentName:"ul"},"custom profile fields values are loaded into $USER->profile array instead of directly into $USER object")),(0,l.kt)("h3",{id:"credits"},"Credits"),(0,l.kt)("p",null,"These people made check-ins to Moodle 2.0 code.  Thanks to all of them, of course.  Some of these people represent a team of people who actually worked on the code."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Robert Allerstorfer (anet.at)"),(0,l.kt)("li",{parentName:"ul"},"Aaron Barnes, Peter Bulmer, Matt Clarkson, Jonathan Harker, Piers Harding, Luke Hudson, Martin Langhoff, Dan Marsden, Francois Marier, Donal McMullan, Jonathan Newman (catalyst.net.nz)"),(0,l.kt)("li",{parentName:"ul"},"Howard Miller (e-learndesign.co.uk)"),(0,l.kt)("li",{parentName:"ul"},"I\xf1aki Arenaza (mondragon.edu)"),(0,l.kt)("li",{parentName:"ul"},"Andreas Grabs (grabs-edv.de)"),(0,l.kt)("li",{parentName:"ul"},"Jamie Pratt (jamiep.org)"),(0,l.kt)("li",{parentName:"ul"},"Anthony Borrow (jesuits.net)"),(0,l.kt)("li",{parentName:"ul"},"Gordon Bateson (kanazawa-gu.ac.jp)"),(0,l.kt)("li",{parentName:"ul"},"Samuli Karevaara (lamk.fi)"),(0,l.kt)("li",{parentName:"ul"},"Penny Leach (liip.ch)"),(0,l.kt)("li",{parentName:"ul"},"Dan Poltawski (luns.net.uk)"),(0,l.kt)("li",{parentName:"ul"},"Matt Oquist (majen.net)"),(0,l.kt)("li",{parentName:"ul"},"Roberto Pinna (mfn.unipmn.it)"),(0,l.kt)("li",{parentName:"ul"},"Michael Ketcham (microsoft.com)"),(0,l.kt)("li",{parentName:"ul"},"Mitsuhiro Yoshida (mitstek.com)"),(0,l.kt)("li",{parentName:"ul"},"Aparup Banerjee, Dongsheng Cai, Nicolas Connault, Andrew Davis, Martin Dougiamas, Helen Foster, Sam Hemelryk, Eloy Lafuente, Jerome Mouneyrac, David Mudrak, Mathieu Petit-Clair, Petr Skoda, Rossiani Wijaya, Yu Zhang (moodle.com)"),(0,l.kt)("li",{parentName:"ul"},"Mark Nielsen (moodlerooms.com)"),(0,l.kt)("li",{parentName:"ul"},"Andrea Bicciolo (mtouch.it)"),(0,l.kt)("li",{parentName:"ul"},"John Beedell, Nicholas Freear, Jenny Gray, Tim Hunt, Sam Marshall, Gareth Morgan, Derek Woolhead (open.ac.uk)"),(0,l.kt)("li",{parentName:"ul"},"Ashley Holman (netspot.com.au)"),(0,l.kt)("li",{parentName:"ul"},"Patrick Malley (newschoollearning.com)"),(0,l.kt)("li",{parentName:"ul"},"Eric Merrill (oakland.edu)"),(0,l.kt)("li",{parentName:"ul"},"Mike Churchward (oktech.ca)"),(0,l.kt)("li",{parentName:"ul"},"Shane Elliott (pukunui.com)"),(0,l.kt)("li",{parentName:"ul"},"Shamim Rezaie (rezaie.info)"),(0,l.kt)("li",{parentName:"ul"},"Joseph Rezeau (rezeau.org)"),(0,l.kt)("li",{parentName:"ul"},"Lukas Haemmerle (switch.ch)"),(0,l.kt)("li",{parentName:"ul"},"Urs Hunkler (unodo.de)"),(0,l.kt)("li",{parentName:"ul"},"Jordi Piguillem (upc.edu.es)"),(0,l.kt)("li",{parentName:"ul"},"Pierre Pichet (uqam.ca)"),(0,l.kt)("li",{parentName:"ul"},"Gustav Delius (york.ac.uk)"),(0,l.kt)("li",{parentName:"ul"},"Ethem Evlice, Valery Fremaux, Dariem Garces, Wen Hao Chuang, Luis Rodrigues, Olli Savolainen, John Stabinger")),(0,l.kt)("h2",{id:"translations"},"Translations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.0"},"Notes de mise \xe0 jour de Moodle 2.0")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_2.0"},"Notas de Moodle 2.0")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/de/Moodle_2.0_Versionsinformationen"},"Moodle 2.0 Versionsinformationen"))))}h.isMDXComponent=!0}}]);