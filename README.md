# Cake-Shop

This project showcases a gallery of cake images with seamless integration for ordering via WhatsApp. Built using Next.js, Tailwind CSS, and Cloudinary, and deployed on Vercel.

## Features

- Over 150 custom cake images
- Popup view for each cake with detailed description.
- Responsive design for both desktop and mobile
- Location and phone link for easy contact

## Tech Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Image Hosting**: Cloudinary
- **Deployment**: Vercel

## Installation

To get a local copy up and running, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/cake-shop.git
    ```
2. Navigate to the project directory:
    ```bash
    cd cake-shop
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Set up environment variables:
    - Create a `.env.local` file in the root directory
    - Add your Cloudinary credentials and other necessary environment variables
    ```env
    CLOUDINARY_CLOUD_NAME=your-cloud-name
    CLOUDINARY_API_KEY=your-api-key
    CLOUDINARY_API_SECRET=your-api-secret
    ```
5. Run the development server:
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The project is deployed on Vercel. Any changes pushed to the `main` branch will automatically deploy to the production site.

## How to Use

1. **Browse the Gallery**: Scroll through the collection of cake designs.
2. **View Cake Details**: Click on any cake image to see a popup with more details, including a description, date, and a button for WhatsApp ordering.
3. **Order via WhatsApp**: Use the WhatsApp button to directly message with the cake image, required quantity, and price.
4. **Contact Us**: Easily find the location and contact number with the provided links for personalized service.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.
