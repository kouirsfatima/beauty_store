# Welcome to beautystore Frontend

![Logo](./logo2.png)

Welcome to Beauty Store, your only destination for skin care products! Our mission is to offer you the best selection of skin care products, sustainably sourced and presented with care. We guarantee the highest levels of quality and authenticity in every product.

Explore our website and discover the natural goodness our store has to offer. Whether you're looking for healthy skin, beauty, or delicious food, we have products that are good for you and the planet.


## Features

- **Product Listings:** Browse through a wide range of skincare products with detailed descriptions and images.
- **Product Details:** View detailed information about each product, including ingredients, benefits, and usage instructions.
- **Shopping Cart:** Add, update, and remove items from your shopping cart with ease.
- **User Notifications:** Get notified about order status, stock updates, and special promotions.
- **API Interaction:** The frontend communicates with the backend via API endpoints, which are simulated using Mock API for development and testing purposes. This approach allows for realistic data handling and interaction without needing a fully functional backend during the development phase.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **Mock API:** For simulating backend interactions.
- **HTML:** Markup language for structuring web content.
- **CSS:** Stylesheet language for designing the interface.
- **JavaScript:** Programming language for adding interactivity.

## Setup and Installation

### Prerequisites

- Node.js and npm installed

### Steps

1. **Create a new React application:**

    ```bash
    npx create-react-app beauty_store
    cd beauty_store
    ```

2. **Clone the repository into the created React application:**

    ```bash
    git clone https://github.com/medwf/beautystore-Frontend.git .
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Set up environment variables:**

    Create a `.env` file in the root directory and set the following variables:

    ```env
    REACT_APP_API_URL=http://localhost:5000/api/v1
    ```

5. **Start the application:**

    ```bash
    npm start
    ```

    This will start the development server and open the application in your default browser.

6. **Building the application for production:**

    ```bash
    npm run build
    ```

    This will create a production-ready build of the application in the `build` directory.

## About Me

- **WAFI Mohamed:** [GitHub](https://github.com/medwf) / [X](https://twitter.com/medwf) / [LinkedIn](https://www.linkedin.com/in/medwf)
