# Garden Management App

This is an application to manage the stock of inventory in a garden. It would be used via a web interface, and primarily serve the garden management staff. Customers of such a business venture, also use the website to view existing stock and indicate purchase intentions.

Inbound information will take the form of inventory names. Garden managers can add and update names and quantities of garden crops. It will also be possible to reduce/ increase inventory as supply requires. Even before a search is triggered, internal pages will display types of crops with their related stock units, upon appropriate authentication being carried out.

## Main application objects

> User Objects

![User Objects](./UserObjects.png)

> Stock Objects

![Stock Objects](./StockObjects.png)

## User Stories

#### Onboarding

- User should be able to create an account and login
- If user is customer, should be able to indicate stock items of interest
- If staff, user should be able to select department and indicate whether part of management or not
- If customer, user should be able to check join newsletter box
- User should be able to update profile information

#### Shopping

- Customers should be able to add/ remove stock items from cart
- Customers should be able to pre-order items
- Customers should be able to join waitlists for stock items

#### Management

- Staff should be able to add/ update stock item names and quantities
- Staff should be able to check box indicating item sold out status
- Staff should be able to place items in appropriate categories
- Staff should be able to remove items from stock lists
