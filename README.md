The Food Discovery Website Overview The Food Discovery Website is designed to help visitors find and enjoy authentic food that suits their personal tastes and dietary needs. The app offers a unique way to discover restaurants, markets, and businesses by creating a personal profile that includes food preferences and dietary recommendations.
Key features of the website include:
Food Experience Analysis: Evaluations by food observers and experts to verify the authenticity of food experiences. Contamination Control System: Identification of restaurants that meet high certification standards. Interactive Map: Allows users to find restaurant by rating, type, and distance. It also displays all nearby restaurants based on the user's choices. Restaurant Management: Restaurant managers can edit their listings, ensuring the information is up-to-date and accurate.
Features: User Profile: Create and manage personal profiles to receive tailored recommendations. Restaurant Listings: Browse through a variety of local restaurants, markets, and food businesses. Map Integration: Find nearby restaurants with ease using an interactive map. Review System: Users can leave reviews and ratings for restaurants, contributing to the community-driven content. Restaurant Management Portal: Allows restaurant owners to manage their listings and ensure accuracy. Technology Stack Frontend: HTML, CSS, JavaScript, React, EJS, Bootstrap Backend: Node.js, Express.js, MongoDB, MongoDB Atlas Templating Engine: EJS Database: MongoDB (with schemas for users, listings, reviews, and sessions) API Integration: Integration with external APIs to provide maps, reviews, and real-time information about restaurants. Installation To set up the project locally, follow these steps:
Clone the repository:
bash Copy code git clone https://github.com/kundansingh333/TasteTrial.git Navigate to the project directory:
bash Copy code cd TasteTrial Install dependencies:
bash Copy code npm install other dependencies files are in package.json visit there Set up environment variables:
Create a .env file in the root directory and add your MongoDB connection string and other necessary environment variables:
bash Copy code MONGODB_URI=mongodb+srv://hack-a-throne:8d5yF7OFipSdQgA5@cluster0.biyjd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 PORT=8080 Run the app:
bash Copy code node app.js Open your browser:
Visit http://localhost:8080/listings to see the app in action.
Schemas User Schema: Manages user information, preferences, and authentication. Listing Schema: Handles the data for restaurant listings, including location, type, and price. Review Schema: Stores user reviews and ratings for restaurants including with authorized user can delete their own review no other user can delete his revie. Session Schema: Manages user sessions for authentication and security. Contributing If you would like to contribute to this project, please follow these steps:
Fork the repository Create a new branch (git checkout -b feature-branch) Make your changes Commit your changes (git commit -m 'Add some feature') Push to the branch (git push origin feature-branch) Create a new Pull Request License This project is licensed under the MIT License - see the LICENSE file for details.
Contact For any inquiries, please contact Kundan Kumar Singh at kundankumarsingh2005@gmail.com.
Contributors username: 
1.Umang0210 2.kundansingh333 3.PaulThallapureddy 4.Sarthak10627


