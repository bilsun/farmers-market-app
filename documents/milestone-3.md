# Milestone 3: Design

## Persuasive Design
- The target behavior that we are trying to influence is how people both create and cherish their memories. 

- Currently, people get very invested in what things they are buying and navigating the sometimes very crowded farmers market, that they forget to take notice of how special a place it is, and they forget to stop and take a second to enjoy where they are. 
- Our design focuses on the value of community and memories. Many of our initial interviews suggested that people have very fond memories of the farmers market, and their memories of the scenery, vendors, and people there is what motivates them to return. So, our PWA focuses on just that. It encourages people to document their memories as well as making new ones. We took various "activities" that our users mentioned enjoying at the farmers market and ones that were memorable to them, and turned them into a list of "tasks" for our users to complete, while taking a picture of them doing so. This method of suggestion will help users be able to capture and collect memories, while giving them opportunities to become more immersed in the special community that is formed within the farmers market. The images captured are stored in a garden collection so that users will be easily reminded of the memories that they cherish.
- Our design is persuasive because according to the Fogg Behavioral Model, people are persuaded on a measure of ability and motivation. In terms of ability, in our app it is easy to take a snapshot of an event. And in terms of motivation, people are drawn to collecting things and it is a way to store their cherished memories.

## Brainstorming Session in Studio 10/29/2019 – OLD DESIGN
- Vendor "busy" tracker
- Track how busy a vendor is
- Check in queue list
- Says that you are in line to show how long the line is
    - i.e. 40 people are at the gyro line
- Length of line in real time
- Location tracker API?
- Favorite your vendors
- Tells you what days your vendor will be at the market
- Following your favorite vendors
- Wait time in lines
- Giving them information to let them know they are is progressing through the line
    - i.e. At this point, you are 10 minutes away from the vendor
- Inspiration from amusement parks
- GPS to tell you where people are
- How crowded certain lines are or sections of the market
- Different colors to indicate if they are wandering about or on a line
- Vibration API?
    - To notify people
    - Maybe to notify them if their favorited/starred vendor has a short line
- Discounts at an off-peak time
- Peak-time prices higher
- Vendors get more money
- Patreons should come at off-peak times to "save"
- Tree idea:
    - Tree that has apples that grow on it to represent every time the user explores and goes to a less popular vendor

## Brainstorming Session in Studio 11/07/2019 - CURRENT DESIGN
- Focus on FAVORITE ACTIVITIES
    - is there a space that we can do this with memories?
    - encourage users to add to those memories
    - encourage users to find new activities that they enjoy
    - rich space in that area and straightforward
    - focus on activities - API combining people wanting to create memories and enjoyable activities with photographs
    - tie in with the tree that were growing 
        - add photos onto the tree
        - can also do this with a flower garden
    - problem: memories dont last forever and users want to remember them
        - problem is focusing on users own things that they enjoy
        - it's a good problem - they have a lot of memories and like them
- Persuasiveness
    - people didnt try to socialize with other people - encourage users to enjoy a meal with a picnic table with another group of people
    - tree or garden documenting process
    - something thats empty and starts to fill up is a gratifying feeling
        - "neat and motivating idea"
        - phenomenon that humans like to collect stuff
    - In our brainstorming process we took our persona, Mary, into consideration. Mary values her community and loves looking back at her memories. Her memories remind her of community, friends, and exploration.

## Sketches of preliminary designs

### CURRENT DESIGN

Brainstorm of Potential Memory Garden and Tasks:
- ![Brainstorm of Memory Garden](images/memory_garden_sketch.jpg)
    - A potential user flow of having the user complete tasks with a picture to store as a memory in a memory garden.

- ![Brainstorm of Memory Garden](images/memory_tree_sketch.jpg)
    - A potential user flow of having the user complete tasks with a picture to store as a memory in a tree. The more images the user takes (ie the more tasks the user completes) the more populated the tree gets.

### OLD DESIGN

Brainstorm of potential UIs based off of HTML5 APIs:
- ![Brainstorm of UIs](images/brainstorm_ui_functions.jpg)
    - Various UI brainstorms to explore how to solve crowd distribution. Mainly exploring how users can retrieve information about line wait times.

Brainstorm of potential userflow with a gamification element:
- ![Brainstorm of userflow](images/userflow_idea.jpg)
    - A potential userflow of the app that explores how functions will work together. Some functions that are shown are the amount of people waiting in line, location of vendor relative to the location of the user, ability to favorite vendors and recommended similar vendors, a point and badge system, and check in function to generate wait time for a specific vendor.

Brainstorm sketch:
- ![Brainstorm sketch](images/M3_sketch.jpg)
    This sketch explores the possibilities of combining information that persona Beth finds important (wait time, vendors) with 
    the interactive element of making vendor visits a check list / scavenger hunt type of activity.

Brainstorm sketches based on Kyle's advice about shifting focus from 'vendors' to the items our persona wants to buy (persona may not be familiar with vendors by name):
- ![brainstorm sketch](images/ezra_m3_sketch_1.png)

Brainstorm sketches based on gamification strategies – getting points for visiting suggested vendors. Suggestions come based on what they identify they want to buy:
- ![brainstorm sketch](images/ezra_m3_sketch_2.png)

Brainstorm sketches for displaying favorite vendors, exploring faster alternatives (with persuasive "save __ minutes"), and searching for specific items:
- ![brainstorm sketch](images/billie_m3_sketch.jpg)

Brainstorm sketches for using user-generated data surrounding long lines and a generated map from this data looking like a heat map to conquer the issue we found with our users that they felt that waiting in such long lines took away from their experience at the farmers market, where they were waiting in line for one thing that had a very similar alternative at another vendor's booth. This would also use persuasive design to get people to go to the less commonly known and less visited booths. 
- ![brainstorm sketch](images/M3_user_flow_sketch.JPG)

Brainstorm sketches for a user flow based on the issue that more infrequent visitors of the farmers market do not always know which vendors are there that day. This also uses persuasive design if a vendor is not there or a vendor is very crowded, it will "suggest" a similar vendor that is not only there but has a shorter line. This design uses gammification in that for trying something new or branching out from their norm, a user will generate points that they can use for a certain badge/status level. 
- ![brainstorm sketch](images/M3_user_flow_sketch_2.JPG)

## Paper prototyping & Evaluation

### Picture of paper prototype
Current paper prototype:
- ![current paper prototype](images/paper_wireframe.jpg)

Old paper prototypes:
- ![old paper prototype](images/paper_prototype_1.png)

### Whiteboard brainstorm picture - OLD DESIGN
- ![whiteboard brainstorm](images/whiteboard_brainstorm.png)

### Scenarios and Tasks

#### CURRENT DESIGN

- Addressing Memories and Community
    - Scenario 1
        - Mary, an Ithaca native in her 30s, visits the farmers market several times a year. She has fond memories of the market and the community there. However, as time passes, her memories start to blur together and become hazy. Mary would like a way to retain these memories so she can cherish them for longer.
        - Scenario Script: Imagine you are like Mary and enjoy going to the farmers market, but are having trouble remembering who you used to go with and what you guys did. You remember very happy memories but the specific details are starting to fade.
        - Task Script: "Browse what you did during your last farmers market trip"
        - Ideal Path: Challenges --> "Your Garden" --> browse and click on most recent photo(s) of friends, food, activities, etc.

    - Scenario 2
        - Mary, an Ithaca native, visits the farmers market several times a year. She has a fairly set routine and engages in similar activities every time she visits. Mary would like to branch out and try a new activity at the farmers market.
        - Scenario Script: Imagine you are like Mary and have a set routine whenever you go to the farmers market. You always go to the Cambodian Food vendor and always get the #7 chicken, and then always go to your favorite bakery and get a s'mores bar for dessert. But, you want to branch out and try new things!
        - Task Script: Complete the task: "Take a photo at a wood work vendor stand"
        - Ideal Path: Challenges --> "Browse some of the wood work vendors" --> Camera icon --> take picture --> Your Garden --> look at your new memories populate in the garden

- Adressing gamification
    - The gamification aspect of this PWA is watching as your garden continues to populate. As humans we feel we have a need to continue to complete tasks and fill up "flowers" in our gardens.


### User Testing Notes

User 1: David - Cornell Professor 
* Goes to farmers market roughly 4-5 times a year
    * Goes with his wife, usually she is the one to want to go during the summer
* Task 1: Find past photos
    * Was on the Garden page, tapped a photo that contained people
    * Saw that the top contained more recent photos

* Task 2: browse woodwork vendors
    * "[Take a picture] using this app?"
    * Hesitated on the garden page, "I suppose [the task] is a 'challenge'?"
    * Clicked 'Challenges'
    * Understood the directions on the 'Challenges' page
    * Pressed the correct task
    * Camera appears, took a moment to understand that he is supposed to go take a photo as proof
        * "Where does the photo go?"

User 2: Gordon - graduate student 
* Frequents the farmers market mostly in the fall with friends
* Task 1: Find past photos
    * Immediately clicked on a photo in the garden
    * "I think this is it?"  

* Task 2: browse woodwork vendors
    * "How do I find the wood work vendors?" A bit stymied that app does not help to provide more information, map, etc.
    * Tried to initially search for a camera icon on the starting garden page
    * Then clicked 'Challenges' and understood to look for the relevant task
    * Understood to take a relevant photo, and that it would appear in the garden

User 3: Gretchen - Ithaca Resident (2.5 years)
* Goes to the farmers market during the summer; 1-2 times a month
    * Goes with her husband and/or her children
    * Usually has a set structure of browsing, buying something fresh
* Task 1: Find past photos
    * Found the correct photos in the garden fairly quickly
    * "Why is it called a garden?" Would have assumed it would be called a gallery, album, etc.  Does it have any qualities alluding to being a garden?

* Task 2: browse woodwork vendors
    * Initial question on how to take a picture within the app
        * Can photo be taken with the camera app? If I take a photo within the app will I not be able to save it with my phone's photos?
    * Sees that there is no option to take pictures in the garden page, clicks Challenges
    * Once on challenges page, proceeds to click the relevant task 
    * Once photo is taken, is unsure where to find it afterwards
        * Is it saved in challenges?  Can I take multiple photos for the same challenge?
    * After quick exploration, understands that the photo will be in garden page
        * Again, is confused that it's not called a gallery.  Had trouble understanding the garden is supposed to be photos. Doesn't really like the flowers.


### Debrief from each usability test

User 1:
 - Understood use of garden as an analogy for a photo album, but struggled with initial concept and understanding of challenges and how to view completed challenges.

User 2:
 - Found the app fairly simple in complexity, almost to a point the user wished there was more information.  For Task 2, wanted to know more, such as a map for vendor location, what vendors are at the market.

User 3:
 - Was most confused about concept of a garden to keep photos.  Would have rather used her own camera app to capture photos of the experience and not be limited by the scope of challenges.

 #### OLD DESIGN

 ### Scenarios and Tasks

- Addressing problem/value proposition 1: Crowdedness

    - Charlie, a Cornell student, enjoys frequenting the farmer's market for brunch and is arriving on an empty stomach. She is in the mood for waffles and would like to eat as soon as possible. Charlie would like to identify which cinnamon roll/pastry vendors have the shortest waits so she can make a beeline for them and have brunch immediately.
    - Scenario script: "Imagine that you are going to the Ithaca Farmers Market and you really want to eat some waffles. You're arriving on an empty stomach and you want to eat as soon as possible."
    - Task script: "Find a place to get some waffles that won't require a long wait."
    - Ideal path: T1 – Explore --> E1 – Search "waffles" --> E2 – START --> M1/M2/M3

- Addressing problem/value proposition 2: Vendors changing unexpectedly
    - Mary, an Ithaca native, visits the farmer's market several times a year. During her past few visits, she purchased waffles with berries, and would like to purchase them again. Mary would like to know whether her favorite waffle vendor is present this week.
    - Scenario script: "Imagine that you've visited the farmer's market several times and you've found a certain waffle place to be your favorite. You would like to know if they will be at the farmer's market this week."
    - Task script: "Find out if your favorite place will be at the farmer's market this week."
    - Ideal path: M3 (from previous task) – Close --> E1 – Favorites --> E3 – See that it's closed
Adressing gamification

Scenario script: "You want go to a booth that is very popular, but you hate lines and want to avoid waiting in one at all costs. You know that there are places that sell similar items."
Task script: "Find an alternative booth to go to."


- User 1: 
    - Search function / search bar is not immediately obvious to user. User clicked on closest approximation to "waffles" he could find in the list of vendors, we had to tell him that he couldn't do that.
    - User completely disregarded the tree – either they did not understand it, or they did not think it was important to what they were trying to do.
    - Did not go to Favorites immediately because was confused by the M3 screen's popup. Also, was not sure if vendor was in his Favorites already or not, but that could have been because of the wording of our scenario/task.
- User 2:
    - Wanted to know why distance to the booth was not displayed along with the other stats, but that's likely because she has not been to the Farmers Market before and does not realize that its only a few hundred feet in size.
    - Did not understand the "Apple Earned" metaphor – looked at it with confusion. Disregarded the tree at the home screen, did not think it meant anything.
    - Did task 2 perfectly – this reflects well on our Favorites functionality.
- User 3:
    - We should change the wording on the tree page to indicate the gamification aspect – it was not clear to Grace.
    - Need to explain the function of the trees and apples overall in more detail
    - Task 2 was completely smoothly, so the Favorites functionality works well

## Wireframes (MPS only)

[Figma wireframe PDF](images/figma_wireframe.pdf) (may not be directly renderable within VS Code)

[Wireframe flow PDF](images/wireframe_flow.pdf) (may not be directly renderable within VS Code)

[Old Figma wireframe PDF](images/old_figma_wireframe.pdf) (may not be directly renderable within VS Code)

## **Rationale**

### At this point in our user testing, we streamlined into concerning ourselves only with the current design.

### Overview

Our app focuses on individuals cherished memories and their valuing their community. A trend in our user interviews were that many people had very fond memories of the farmers market, and those memories were drivers to get people to go back and visit. We also found that as time went on, the intensity of those memories were beginning to fade. 

Our app persuades users to accomplish various tasks that either are things they reported enjoying, or are designed for them to experience something entirely new. Our app provides this list of tasks, completed only by taking a picture of you completing the task. The picture gets stored in a Garden having the image populate over a flower. The more tasks the user completes, the more populated the garden becomes. The user is able to click on and view the image and is reminded which task was connected to the image taken. This is so users can look back and reminisce about some of thier favorite memories from the farmers market.

### Key problem: Memories, Community, and Exploration
Scenario: Mary, an Ithaca native, visits the farmers market several times a year. She has fond memories of the market and the community there. However, as time passes, her memories start to blur together and become hazy. Mary would like a way to retain these memories so she can cherish them for longer.

Our app helps Mary retain these memories. Our garden, which contains a gallery of images, will help Mary jog her memory of the fond memories that she is beginning to forget. Having the pictures stored will be beneficial to Mary as she can go back through her Garden and look at all the memories she had created. Visualizing this with a garden will urge the user to complete more tasks and make more memories as the user would like to see their garden full rather than empty.

To go more in depth, the Your Garden page is a visual collection of memories. Mary can see them all laid out and they are retrievable whenever she wants to go back and look at them. The Challenges page is geared towards getting Mary out of her comfort zone and encouraging her to record new memories by exploring new things.