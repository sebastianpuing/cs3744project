# Water Tracker (CS 3744 Final Project)

**Description:** The Water Tracker application is designed for people who work office jobs to track their water intake for the day. Water intake throughout the day is essential as dehydration could lead to lower cognitive performance and/or headaches. Rather than utilizing a mobile, which is inconvenient for people trying to stay focused on work, this water tracker runs on your browser, keeping you focused on work.

---

## Installation and Setup Instructions 
```bash
# Clone repository
git clone https://github.com/sebastianpuing/cs3744project.git

# Navigate into project folder
cd cs3744project

# Install dependencies
npm install

# Start development server
npm run dev
```
---

**Feature List**:
* Display of the current date
* Add Water Intake amount in ounces (oz)
* Set daily goal
* Tooltips for inputs and buttons
* Progress Bar that showcases current intake vs goal, updates in real-time
* Show proportion of total intake vs goal below the progress bar
* MongoDB integration to save water intake for each day

See video demonstration for visuals.

---

**Technology Stack**
* React
* Next.js
* Tailwind CSS
* Node.js
* MongoDB
* Mongoose
* Axios
* React-Tooltips
* Recharts

--- 

**Issues and Limitations**
* If a user refreshes, the data on the browser resets, but is still saved on MongoDB
  * For example, if I input 5 oz, refresh, and input 5 oz again, 5 oz will only show on the application, but will be listed as 10 oz in MongoDB
* Users cannot edit or delete entries
* Can only input amounts in ounces
* Timnezone in UTC not EST
* Users cannot view previous days, but the data is still in MongoDB
* Progress Bar is only for the current day
* Only works on a browser, not mobile

--- 

**Future Plans**

  I plan first to incorporate the ability for users to edit as well as delete entries. I will probably have a table below the input section with edit and delete buttons next to each entry. I then plan to add the ability for users to select what unit they want to enter and display. All of the data would be converted to their desired unit, and the data will dispaly with their unit. I also plan to show a weekly chart for the water intake. Further down the line, I plan to make this a mobile app.

---

**Video Demonstration**

https://github.com/user-attachments/assets/903eafa6-ba22-4fb3-97e1-74c3290a4c6d


  



