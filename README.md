Certainly! Here’s the updated README file with the name changed to "beautystore":

---

# 🌿 Welcome to beautystore Frontend 🌿

**beautystore Logo**

Welcome to beautystore, your one-stop destination for premium organic products in Morocco! Our mission is to bring you the finest selection of bio products, sourced sustainably and delivered with care. From the rich essence of argan oil to a diverse range of organic goods, we ensure the highest quality and authenticity in every product.

Explore our website and discover the natural goodness that beautystore has to offer. Whether you're looking for health, beauty, or culinary delights, we've got you covered with products that are good for you and the planet.

Join us on this journey towards a healthier, more sustainable lifestyle. Happy shopping!

## Features

- **Product Listings:** Browse through a wide range of skincare products with detailed descriptions and images.
- **Product Details:** View detailed information about each product, including ingredients, benefits, and usage instructions.
- **Shopping Cart:** Add, update, and remove items from your shopping cart with ease.
- **User Notifications:** Get notified about order status, stock updates, and special promotions.
- **API Integration:** Real-time data fetching and synchronization with the backend.
- **Responsive Design:** Seamless browsing experience across all devices.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **Mock API:** For simulating backend interactions.
- **HTML:** Markup language for structuring web content.
- **CSS:** Stylesheet language for designing the interface.
- **JavaScript:** Programming language for adding interactivity.

## Setup and Installation

### Prerequisites

- Node.js and npm installed
- (Optional) Docker and Docker-Compose for containerized setup

### Steps

1. **Clone the repository:**

    ```bash
    git clone https://github.com/medwf/beautystore-Frontend.git
    cd beautystore-Frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and set the following variables:

    ```env
    REACT_APP_API_URL=http://localhost:5000/api/v1
    ```

4. **Start the application:**

    ```bash
    npm start
    ```

    This will start the development server and open the application in your default browser.

5. **Building the application for production:**

    ```bash
    npm run build
    ```

    This will create a production-ready build of the application in the `build` directory.

### Using Docker-Compose (Optional)

1. **Build and Start the Containers:**

    ```bash
    docker-compose up --build
    ```

    This command will:

    - Build the React frontend application.
    - Start the frontend service.

2. **Managing Containers:**

    - To stop the containers, run:

        ```bash
        docker-compose stop
        ```

    - To delete all containers, run:

        ```bash
        docker-compose down
        ```

    - To rebuild and start the containers, run:

        ```bash
        docker-compose up --build
        ```

    - To start containers after stopping, run:

        ```bash
        docker-compose start -d
        ```

## About Me

- fatima zahra kouirese:** [GitHub](https://github.com/medwf) / [X](https://twitter.com/medwf) / [LinkedIn](https://www.linkedin.com/in/medwf)

---

Is there anything else you would like to modify or add?
