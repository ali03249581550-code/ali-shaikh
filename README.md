# HomeWare Ceramic - Luxury Tile Brand Website

This project is a website theme for **HomeWare Ceramic**, a luxury tile brand. The design is inspired by the Casa Milano Italy catalogue, featuring a dark orange, black, and gold color scheme. It aims for a cinematic and premium feel, with elegant typography and smooth animations.

## Features

- **Visual Theme:** Dark orange background with black and gold accents.
- **Branding:** Includes a placeholder for a stylized farmhouse silhouette.
- **Typography:** Uses elegant serif fonts for a premium look.
- **Product Catalog:**
    - Organized into collections (Italian, Chinese, Outdoor).
    - Searchable and filterable.
    - WhatsApp integration for direct inquiries on each tile.
- **Content Sections:**
    - **Features:** Highlights tile properties like scratch-resistance and heat-proofing.
    - **Applications:** Showcases use cases in hotels, homes, and malls.
- **Contact Form:**
    - A functional contact form that submits data to a Firebase Firestore database.
- **Animations:** Smooth scrolling and hover effects for a dynamic user experience.

## Getting Started

To run this project locally, you can simply open the `index.html` file in your web browser. For the full functionality, including the contact form, you will need to set up a Firebase project.

### Prerequisites

- A modern web browser.
- A Firebase account (for contact form functionality).

### Setup and Configuration

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/homeware-ceramic.git
   cd homeware-ceramic
   ```

2. **Replace Placeholder Images:**
   The `images/` directory contains placeholder references in the code. You will need to add your own images for:
   - `logo.png`: The brand logo.
   - `farmhouse_silhouette.png`: The hero section background image.
   - `whatsapp-logo.png`: The WhatsApp icon.
   - Tile images (`italian1.jpg`, `chinese1.jpg`, etc.): The images for the product catalog.

3. **Configure Firebase:**
   - Create a new project in your [Firebase console](https://console.firebase.google.com/).
   - In your project settings, find your Firebase configuration object.
   - Open `script.js` and replace the placeholder `firebaseConfig` with your actual Firebase project configuration:
     ```javascript
     const firebaseConfig = {
         apiKey: "YOUR_API_KEY",
         authDomain: "YOUR_AUTH_DOMAIN",
         projectId: "YOUR_PROJECT_ID",
         storageBucket: "YOUR_STORAGE_BUCKET",
         messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
         appId: "YOUR_APP_ID"
     };
     ```
   - In your Firebase project, enable **Firestore** to store contact form submissions. You will need to create a `contacts` collection.

4. **Customize WhatsApp Number:**
   - In `index.html` and `script.js`, replace `"your-whatsapp-number"` with your actual WhatsApp business phone number (including the country code).

## Project Structure

- `index.html`: The main HTML file containing the structure of the website.
- `style.css`: The CSS file for styling the website.
- `script.js`: The JavaScript file for animations, Firebase integration, and the search functionality.
- `images/`: Directory for all image assets.
- `README.md`: This file.

## Contributing

Contributions are welcome! If you have suggestions for improvements, please feel free to create an issue or submit a pull request.

---

*This project was created by an AI software engineer.*